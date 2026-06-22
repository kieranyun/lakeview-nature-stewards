import Link from "next/link";
import { ArrowRight, SunMark } from "@/components/icons";
import { BackgroundField } from "@/components/Section";
import { ctas, home } from "@/content";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Mission />
      <Teasers />
    </>
  );
}

function Hero() {
  return (
    <section className="relative isolate">
      <BackgroundField />
      <div className="container-wide pt-20 pb-24 md:pt-28 md:pb-32 relative">
        <p className="font-sans uppercase tracking-[0.22em] text-xs text-moss-700/80">
          {home.hero.eyebrow}
        </p>
        <h1 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.02] text-moss-900 max-w-4xl">
          {home.hero.heading}
        </h1>
        <p className="mt-6 max-w-2xl text-lg md:text-xl text-bark/80 leading-relaxed">
          {home.hero.lede}
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-moss-700 px-6 py-3 text-base font-medium text-cream shadow-sm hover:bg-moss-800 transition-colors"
          >
            {ctas.joinStewardshipDay}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/the-park"
            className="inline-flex items-center rounded-full border border-moss-700/30 px-6 py-3 text-base font-medium text-moss-800 hover:bg-moss-50 transition-colors"
          >
            {ctas.learnAboutThePark}
          </Link>
        </div>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section className="bg-moss-800 text-cream">
      <div className="container-wide py-20 md:py-28 relative">
        <SunMark className="absolute right-6 top-10 h-24 w-24 text-moss-400/30 hidden md:block" />
        <p className="font-sans uppercase tracking-[0.22em] text-xs text-moss-200">
          {home.mission.eyebrow}
        </p>
        <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight max-w-3xl">
          {home.mission.heading}
        </h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2 max-w-4xl text-cream/90 text-lg leading-relaxed">
          {home.mission.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <Link
          href="/about"
          className="mt-10 inline-flex items-center text-cream/90 hover:text-cream font-medium"
        >
          {ctas.moreAboutWhoWeAre}
          <ArrowRight className="ml-1.5 h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

function Teasers() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-wide">
        <div className="grid gap-6 md:grid-cols-2">
          {home.teasers.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group block rounded-2xl border border-moss-100 bg-white/60 p-8 hover:border-moss-300 hover:bg-white transition-colors"
            >
              <p className="font-sans uppercase tracking-[0.22em] text-xs text-moss-700/80">
                {c.eyebrow}
              </p>
              <h3 className="mt-3 font-serif text-2xl md:text-3xl text-moss-900 group-hover:text-moss-700 transition-colors">
                {c.title}
              </h3>
              <p className="mt-3 text-bark/75 leading-relaxed">{c.body}</p>
              <span className="mt-5 inline-flex items-center text-moss-700 font-medium">
                {ctas.readMore}
                <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
