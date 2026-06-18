import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, SunMark } from "@/components/icons";
import { Section } from "@/components/Section";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "About",
  description:
    "Who we are: neighborhood volunteers working with SF Rec & Parks on the Lakeview Ashton Mini Park.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Neighbors, by way of the hill."
        lede="The Lakeview Nature Stewards is a group of neighborhood volunteers working together with San Francisco Recreation & Parks to foster the ecological health of the area officially called the Lakeview Ashton Mini Park."
      />

      <Section>
        <p>
          You might also know it as the <em>Rocky Outcrop</em>, the{" "}
          <em>Orizaba Outcrop</em>, or one of a handful of other names depending
          on who you ask. Whatever you call it, it&rsquo;s already a wonderful
          place to sit and take in the view. We&rsquo;re trying to make it even
          better, for the people who live near it and for the wildlife that
          depends on it.
        </p>
      </Section>

      <section className="bg-moss-800 text-cream">
        <div className="container-wide py-20 md:py-28 relative">
          <SunMark className="absolute right-6 top-10 h-24 w-24 text-moss-400/30 hidden md:block" />
          <p className="font-sans uppercase tracking-[0.22em] text-xs text-moss-200">
            Our aspiration
          </p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight max-w-3xl">
            To bring back the ecosystem that lived here 250 years ago.
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2 max-w-4xl text-cream/90 text-lg leading-relaxed">
            <p>
              We envision a rocky hilltop full of native plants and animals
              &mdash; lots of birds and pollinators. A place where you can
              watch the seasons turn from our wet winters, to springs bursting
              with wildflowers and green native grasses.
            </p>
            <p>
              Then a foggy summer arrives, the spring flowers dry into seed
              heads that feed and shelter birds (maybe even quail, one day).
              It&rsquo;s a long road, but it begins with the small patch of
              hill in front of us.
            </p>
          </div>
          <Link
            href="/the-park"
            className="mt-10 inline-flex items-center text-cream/90 hover:text-cream font-medium"
          >
            More about the park
            <ArrowRight className="ml-1.5 h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

