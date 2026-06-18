import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  date: string | null;
  author: string | null;
  excerpt: string | null;
  cover: string | null;
};

export type BlogPostWithBody = BlogPost & {
  markdown: string;
};

const NOTION_TOKEN = process.env.NOTION_TOKEN;
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;
const NOTION_PHOTOS_DATABASE_ID = process.env.NOTION_PHOTOS_DATABASE_ID;

export function isConfigured(): boolean {
  return Boolean(NOTION_TOKEN && NOTION_DATABASE_ID);
}

export function photosConfigured(): boolean {
  return Boolean(NOTION_TOKEN && NOTION_PHOTOS_DATABASE_ID);
}

function getClient(): { notion: Client; n2m: NotionToMarkdown } | null {
  if (!isConfigured()) return null;
  const notion = new Client({ auth: NOTION_TOKEN });
  const n2m = new NotionToMarkdown({ notionClient: notion });
  return { notion, n2m };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getPlainText(prop: any): string | null {
  if (!prop) return null;
  if (prop.type === "title" && Array.isArray(prop.title)) {
    return prop.title.map((t: { plain_text: string }) => t.plain_text).join("").trim() || null;
  }
  if (prop.type === "rich_text" && Array.isArray(prop.rich_text)) {
    return (
      prop.rich_text
        .map((t: { plain_text: string }) => t.plain_text)
        .join("")
        .trim() || null
    );
  }
  return null;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getDate(prop: any): string | null {
  if (!prop || prop.type !== "date" || !prop.date) return null;
  return prop.date.start ?? null;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getCheckbox(prop: any): boolean {
  if (!prop || prop.type !== "checkbox") return false;
  return Boolean(prop.checkbox);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getCoverUrl(page: any): string | null {
  const cover = page?.cover;
  if (!cover) return null;
  if (cover.type === "external") return cover.external?.url ?? null;
  if (cover.type === "file") return cover.file?.url ?? null;
  return null;
}

function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function pageToPost(page: any): BlogPost {
  const props = page.properties ?? {};
  const title =
    getPlainText(props.Name) ?? getPlainText(props.Title) ?? "Untitled";
  const rawSlug = getPlainText(props.Slug);
  const slug = rawSlug && rawSlug.length > 0 ? rawSlug : slugify(title);
  return {
    id: page.id,
    slug,
    title,
    date: getDate(props.Date) ?? getDate(props["Published Date"]),
    author: getPlainText(props.Author),
    excerpt: getPlainText(props.Excerpt),
    cover: getCoverUrl(page),
  };
}

export async function listPosts(): Promise<BlogPost[]> {
  const ctx = getClient();
  if (!ctx) return [];

  try {
    const res = await ctx.notion.databases.query({
      database_id: NOTION_DATABASE_ID!,
      filter: {
        property: "Published",
        checkbox: { equals: true },
      },
      sorts: [{ property: "Date", direction: "descending" }],
      page_size: 100,
    });
    return res.results
      .filter((r): r is typeof r & { properties: unknown } => "properties" in r)
      .map(pageToPost);
  } catch (err) {
    // Filter failed (e.g. no Published checkbox / Date prop). Fall back to listing everything.
    try {
      const res = await ctx.notion.databases.query({
        database_id: NOTION_DATABASE_ID!,
        page_size: 100,
      });
      // eslint-disable-next-line no-console
      console.warn(
        "[notion] Falling back to unfiltered query — make sure your database has 'Published' (checkbox) and 'Date' (date) properties.",
        err,
      );
      return res.results
        .filter((r): r is typeof r & { properties: unknown } => "properties" in r)
        .map(pageToPost);
    } catch (err2) {
      // eslint-disable-next-line no-console
      console.error("[notion] Failed to list posts:", err2);
      return [];
    }
  }
}

export async function getPost(slug: string): Promise<BlogPostWithBody | null> {
  const ctx = getClient();
  if (!ctx) return null;

  const all = await listPosts();
  const meta = all.find((p) => p.slug === slug);
  if (!meta) return null;

  try {
    const mdBlocks = await ctx.n2m.pageToMarkdown(meta.id);
    const md = ctx.n2m.toMarkdownString(mdBlocks);
    return { ...meta, markdown: md.parent ?? "" };
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("[notion] Failed to fetch post body:", err);
    return { ...meta, markdown: "" };
  }
}

export type Photo = {
  id: string;
  url: string;
  caption: string | null;
  date: string | null;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getFileUrls(prop: any): string[] {
  if (!prop || prop.type !== "files" || !Array.isArray(prop.files)) return [];
  return prop.files
    .map((f: { type?: string; external?: { url?: string }; file?: { url?: string } }) => {
      if (f.type === "external") return f.external?.url ?? null;
      if (f.type === "file") return f.file?.url ?? null;
      return null;
    })
    .filter((u: string | null): u is string => Boolean(u));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function pageToPhotos(page: any): Photo[] {
  const props = page.properties ?? {};
  const caption =
    getPlainText(props.Name) ??
    getPlainText(props.Title) ??
    getPlainText(props.Caption);
  const date = getDate(props.Date);
  const urls = [
    ...getFileUrls(props.Image),
    ...getFileUrls(props.Photo),
    ...getFileUrls(props.Photos),
  ];
  // Fall back to page cover if no Files property images are present.
  const fallback = urls.length === 0 ? getCoverUrl(page) : null;
  const final = urls.length > 0 ? urls : fallback ? [fallback] : [];
  return final.map((url, i) => ({
    id: `${page.id}-${i}`,
    url,
    caption,
    date,
  }));
}

export async function listPhotos(): Promise<Photo[]> {
  if (!photosConfigured()) return [];
  const notion = new Client({ auth: NOTION_TOKEN });

  const query = async (filtered: boolean) =>
    notion.databases.query({
      database_id: NOTION_PHOTOS_DATABASE_ID!,
      ...(filtered
        ? {
            filter: {
              property: "Published",
              checkbox: { equals: true },
            },
            sorts: [{ property: "Date", direction: "descending" }],
          }
        : {}),
      page_size: 100,
    });

  try {
    const res = await query(true);
    return res.results
      .filter((r): r is typeof r & { properties: unknown } => "properties" in r)
      .flatMap(pageToPhotos);
  } catch (err) {
    try {
      const res = await query(false);
      // eslint-disable-next-line no-console
      console.warn(
        "[notion] Photos: falling back to unfiltered query — add 'Published' (checkbox) and 'Date' (date) properties for filtering and sorting.",
        err,
      );
      return res.results
        .filter((r): r is typeof r & { properties: unknown } => "properties" in r)
        .flatMap(pageToPhotos);
    } catch (err2) {
      // eslint-disable-next-line no-console
      console.error("[notion] Failed to list photos:", err2);
      return [];
    }
  }
}
