import type { Metadata } from "next";
import { LeafMark } from "@/components/icons";
import { PageHeader } from "@/components/PageHeader";
import { listPhotos, photosConfigured, type Photo } from "@/lib/notion";
import { photos } from "@/content";

export const metadata: Metadata = {
  title: "Photos",
  description: photos.header.lede,
};

export const revalidate = 1800;

export default async function PhotosPage() {
  const configured = photosConfigured();
  const list = configured ? await listPhotos() : [];

  return (
    <>
      <PageHeader
        eyebrow={photos.header.eyebrow}
        title={photos.header.title}
        lede={photos.header.lede}
      />
      <section className="container-wide pb-24 md:pb-32">
        {!configured && <NotConfiguredHint />}

        {configured && list.length === 0 && (
          <p className="text-bark/70 max-w-prose">{photos.empty}</p>
        )}

        {list.length > 0 && <Gallery photos={list} />}
      </section>
    </>
  );
}

function Gallery({ photos }: { photos: Photo[] }) {
  return (
    <div className="columns-2 md:columns-3 gap-4 [column-fill:_balance]">
      {photos.map((p) => (
        <figure
          key={p.id}
          className="mb-4 break-inside-avoid rounded-xl overflow-hidden border border-moss-100 bg-moss-50"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={p.url}
            alt={p.caption ?? ""}
            className="w-full h-auto block"
            loading="lazy"
          />
          {(p.caption || p.date) && (
            <figcaption className="px-4 py-3 text-sm text-bark/70 bg-white/70">
              {p.caption && <span className="text-bark">{p.caption}</span>}
              {p.caption && p.date && (
                <span className="text-bark/40"> · </span>
              )}
              {p.date && (
                <span className="text-bark/60">{formatDate(p.date)}</span>
              )}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}

function NotConfiguredHint() {
  return (
    <div className="rounded-2xl border border-moss-200 bg-moss-50 p-8 max-w-3xl">
      <p className="text-xs uppercase tracking-[0.2em] text-moss-700/80">
        Setup needed
      </p>
      <h3 className="mt-2 font-serif text-2xl text-moss-900 flex items-center gap-3">
        <LeafMark className="h-6 w-6" />
        Connect a Notion Photos database.
      </h3>
      <p className="mt-3 text-bark/80 leading-relaxed">
        Set{" "}
        <code className="bg-white px-1.5 py-0.5 rounded">
          NOTION_PHOTOS_DATABASE_ID
        </code>{" "}
        (alongside your existing{" "}
        <code className="bg-white px-1.5 py-0.5 rounded">NOTION_TOKEN</code>) in
        your Vercel project or local{" "}
        <code className="bg-white px-1.5 py-0.5 rounded">.env.local</code>, and
        photos will populate from the database.
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
