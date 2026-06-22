import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, LeafMark } from "@/components/icons";
import { PageHeader } from "@/components/PageHeader";
import { isConfigured, listPosts, type BlogPost } from "@/lib/notion";
import { blog, ctas } from "@/content";

export const metadata: Metadata = {
  title: "Blog",
  description: blog.header.lede,
};

export const revalidate = 1800;

export default async function BlogIndex() {
  const configured = isConfigured();
  const posts = configured ? await listPosts() : [];

  return (
    <>
      <PageHeader
        eyebrow={blog.header.eyebrow}
        title={blog.header.title}
        lede={blog.header.lede}
      />

      <section className="container-wide pb-24 md:pb-32">
        {!configured && <NotConfiguredHint />}

        {configured && posts.length === 0 && (
          <p className="text-bark/70 max-w-prose">{blog.empty}</p>
        )}

        {posts.length > 0 && (
          <ul className="grid gap-8 sm:grid-cols-2">
            {posts.map((p) => (
              <li key={p.id}>
                <PostCard post={p} />
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}

function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-2xl overflow-hidden border border-moss-100 bg-white/60 hover:border-moss-300 hover:bg-white transition-colors"
    >
      <div className="aspect-[16/10] bg-gradient-to-br from-moss-100 to-moss-200 flex items-center justify-center text-moss-700/50">
        {post.cover ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={post.cover}
            alt=""
            className="w-full h-full object-cover"
          />
        ) : (
          <LeafMark className="h-12 w-12" />
        )}
      </div>
      <div className="p-6">
        {post.date && (
          <p className="text-xs uppercase tracking-[0.2em] text-moss-700/80">
            {formatDate(post.date)}
            {post.author ? ` · ${post.author}` : ""}
          </p>
        )}
        <h3 className="mt-2 font-serif text-2xl text-moss-900 group-hover:text-moss-700 transition-colors">
          {post.title}
        </h3>
        {post.excerpt && (
          <p className="mt-3 text-bark/75 leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
        )}
        <span className="mt-4 inline-flex items-center text-moss-700 font-medium text-sm">
          {ctas.readPost}
          <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </Link>
  );
}

function NotConfiguredHint() {
  return (
    <div className="rounded-2xl border border-moss-200 bg-moss-50 p-8 max-w-3xl">
      <p className="text-xs uppercase tracking-[0.2em] text-moss-700/80">
        Setup needed
      </p>
      <h3 className="mt-2 font-serif text-2xl text-moss-900">
        Connect Notion to start publishing.
      </h3>
      <p className="mt-3 text-bark/80 leading-relaxed">
        Set <code className="bg-white px-1.5 py-0.5 rounded">NOTION_TOKEN</code>{" "}
        and{" "}
        <code className="bg-white px-1.5 py-0.5 rounded">
          NOTION_DATABASE_ID
        </code>{" "}
        in your Vercel project (or a local <code>.env.local</code>) and the
        blog will populate from the database.
      </p>
    </div>
  );
}

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return iso;
  }
}
