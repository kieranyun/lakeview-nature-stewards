import type { Metadata } from "next";
import { LeafMark } from "@/components/icons";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Photos",
  description:
    "Photos from stewardship days, wildflower blooms, and foggy summer mornings on the hill.",
};

export default function PhotosPage() {
  const tiles = Array.from({ length: 9 });
  return (
    <>
      <PageHeader
        eyebrow="Photos"
        title="From the hill, through the seasons."
        lede="A growing collection from stewardship days, spring wildflower blooms, and foggy summer mornings."
      />
      <section className="container-wide pb-24 md:pb-32">
        <p className="text-bark/70 max-w-2xl mb-10">
          Drop your favorite images into{" "}
          <code className="bg-moss-50 px-1.5 py-0.5 rounded text-moss-800">
            /public/photos
          </code>{" "}
          and they&rsquo;ll appear here.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {tiles.map((_, i) => (
            <div
              key={i}
              className="aspect-[4/3] rounded-xl bg-gradient-to-br from-moss-100 to-moss-200 border border-moss-200 flex items-center justify-center text-moss-700/60"
            >
              <LeafMark className="h-10 w-10" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
