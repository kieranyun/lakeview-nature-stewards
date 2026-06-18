import type { Metadata } from "next";
import { ArrowRight, LeafCluster } from "@/components/icons";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "The Park",
  description:
    "The Lakeview Ashton Mini Park is a designated Natural Area — a remnant of San Francisco's coastal-bluff ecosystem.",
};

export default function ThePark() {
  return (
    <>
      <PageHeader
        eyebrow="The Park"
        title="A designated Natural Area in the middle of the city."
        lede="The hill is a rare remnant of San Francisco's coastal-bluff ecosystem — and the city has flagged it as a place worth protecting."
      />

      <section className="container-wide pb-20 md:pb-28">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div className="space-y-5 text-lg leading-relaxed text-bark/85 max-w-prose">
            <p>
              The hill has been specially designated a{" "}
              <strong>Natural Area</strong> by the SF Rec &amp; Park{" "}
              <em>Natural Resources Division</em> &mdash; meaning the city has
              flagged it as a place whose natural resources are a priority to
              protect.
            </p>
            <p>
              What makes it valuable is what survives here: remnant patches of
              coastal-bluff ecosystem that have hung on for millennia even as
              the city grew up around them.
            </p>
            <p>
              Why have these native plants held on? The answer is the thin,
              rocky soil that faces directly into the wind off the Pacific.
              Natives have been here for hundreds of thousands of years and
              have evolved to survive these gnarly conditions &mdash; deep
              roots that pull moisture and nutrients from far below long after
              the topsoil has dried.
            </p>
            <p>
              Where the soil has a little more give, invasive annual grasses
              move in and crowd out the originals. Native plants are tough, but
              not invincible. That&rsquo;s where we come in.
            </p>
            <a
              href="https://maps.app.goo.gl/zTKvzbacGd2Gm9wz8"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-moss-700 hover:text-moss-900 font-medium pt-2"
            >
              Open in Google Maps
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
              Why native plants
            </p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight text-moss-900">
              A web of life, built over thousands of years.
            </h2>
            <LeafCluster className="mt-8 h-28 w-28 text-moss-500" />
          </div>
          <div className="md:col-span-7 space-y-5 text-lg leading-relaxed text-bark/85 max-w-prose">
            <p>
              Wildlife has evolved alongside specific plants &mdash; a complex
              web that provides pollen, insects, seeds, cover, and places to
              nest and raise young.
            </p>
            <p>
              Many invasive plants simply don&rsquo;t offer those things to the
              insects, birds, and other animals that would otherwise live here.
              Lose the plants and, eventually, you lose everything that
              depended on them.
            </p>
            <p className="text-bark/70 italic">
              (We&rsquo;ll add specific examples soon &mdash; like the
              hairstreak butterflies that rely on particular host plants found
              right here on the outcrop.)
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
