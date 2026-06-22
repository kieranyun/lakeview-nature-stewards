import type { Metadata } from "next";
import { ArrowRight, LeafCluster } from "@/components/icons";
import { PageHeader } from "@/components/PageHeader";
import { Prose } from "@/components/Prose";
import { ctas, site, thePark } from "@/content";

export const metadata: Metadata = {
  title: "The Park",
  description: thePark.header.lede,
};

export default function TheParkPage() {
  return (
    <>
      <PageHeader
        eyebrow={thePark.header.eyebrow}
        title={thePark.header.title}
        lede={thePark.header.lede}
      />

      <section className="container-wide pb-20 md:pb-28">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div className="max-w-prose">
            <Prose paragraphs={thePark.paragraphs} />
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-moss-700 hover:text-moss-900 font-medium pt-5"
            >
              {ctas.openInGoogleMaps}
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </a>
          </div>
          <div className="rounded-2xl overflow-hidden border border-moss-200 shadow-sm aspect-[4/3] bg-moss-50">
            <iframe
              title="Map of Lakeview Ashton Mini Park"
              src="https://www.google.com/maps?q=Lakeview+Ashton+Mini+Park,+San+Francisco,+CA&output=embed"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="bg-sand/60 border-y border-moss-100">
        <div className="container-wide py-20 md:py-28 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-sans uppercase tracking-[0.22em] text-xs text-moss-700/80">
              {thePark.nativePlants.eyebrow}
            </p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight text-moss-900">
              {thePark.nativePlants.heading}
            </h2>
            <LeafCluster className="mt-8 h-28 w-28 text-moss-500" />
          </div>
          <div className="md:col-span-7 max-w-prose">
            <Prose paragraphs={thePark.nativePlants.paragraphs} />
          </div>
        </div>
      </section>
    </>
  );
}
