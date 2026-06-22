import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, SunMark } from "@/components/icons";
import { Section } from "@/components/Section";
import { PageHeader } from "@/components/PageHeader";
import { Prose } from "@/components/Prose";
import { about, ctas } from "@/content";

export const metadata: Metadata = {
  title: "About",
  description: about.header.lede,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow={about.header.eyebrow}
        title={about.header.title}
        lede={about.header.lede}
      />

      <Section>
        <Prose paragraphs={about.paragraphs} />
      </Section>

      <section className="bg-moss-800 text-cream">
        <div className="container-wide py-20 md:py-28 relative">
          <SunMark className="absolute right-6 top-10 h-24 w-24 text-moss-400/30 hidden md:block" />
          <p className="font-sans uppercase tracking-[0.22em] text-xs text-moss-200">
            {about.mission.eyebrow}
          </p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight max-w-3xl">
            {about.mission.heading}
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2 max-w-4xl text-cream/90 text-lg leading-relaxed">
            {about.mission.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <Link
            href="/the-park"
            className="mt-10 inline-flex items-center text-cream/90 hover:text-cream font-medium"
          >
            {ctas.moreAboutThePark}
            <ArrowRight className="ml-1.5 h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
