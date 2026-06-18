import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowRight } from "@/components/icons";
import { getPost, isConfigured, listPosts } from "@/lib/notion";

export const revalidate = 1800;

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  if (!isConfigured()) return [];
  const posts = await listPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.excerpt ?? undefined,
    openGraph: {
      title: post.title,
      description: post.excerpt ?? undefined,
      images: post.cover ? [{ url: post.cover }] : undefined,
      type: "article",
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <article>
      {post.cover && (
        <div className="relative h-[40vh] md:h-[55vh] w-full overflow-hidden bg-moss-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.cover}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <header className="container-prose pt-16 pb-8 md:pt-20">
        <Link
          href="/blog"
          className="text-sm text-moss-700 hover:text-moss-900 font-medium inline-flex items-center"
        >
          <ArrowRight className="mr-1.5 h-4 w-4 rotate-180" />
          All posts
        </Link>
        <h1 className="mt-6 font-serif text-4xl md:text-6xl leading-tight text-moss-900">
          {post.title}
        </h1>
        {(post.date || post.author) && (
          <p className="mt-5 text-sm uppercase tracking-[0.2em] text-moss-700/80">
            {post.date && formatDate(post.date)}
            {post.date && post.author ? " · " : ""}
            {post.author}
          </p>
        )}
      </header>

      <div className="container-prose pb-24 md:pb-32">
        <div className="prose prose-lg prose-stone max-w-none prose-headings:font-serif prose-headings:text-moss-900 prose-a:text-moss-700 hover:prose-a:text-moss-900 prose-strong:text-moss-900 prose-blockquote:border-moss-300 prose-blockquote:text-bark/80">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.markdown || "*This post has no body content yet.*"}
          </ReactMarkdown>
        </div>
      </div>
    </article>
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
