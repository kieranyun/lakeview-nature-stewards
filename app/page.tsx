import Link from "next/link";
import { ArrowRight, SunMark } from "@/components/icons";
import { BackgroundField } from "@/components/Section";

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
          San Francisco · Lakeview Ashton Mini Park
        </p>
        <h1 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.02] text-moss-900 max-w-4xl">
          Tending a remnant of wild San Francisco.
        </h1>
        <p className="mt-6 max-w-2xl text-lg md:text-xl text-bark/80 leading-relaxed">
          We&rsquo;re a group of neighborhood volunteers working alongside SF Rec
          &amp; Parks to restore the native coastal-bluff ecosystem of the rocky
          outcrop in our backyard &mdash; one weed-pull, one wildflower, one
          season at a time.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-moss-700 px-6 py-3 text-base font-medium text-cream shadow-sm hover:bg-moss-800 transition-colors"
          >
            Join a stewardship day
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/the-park"
            className="inline-flex items-center rounded-full border border-moss-700/30 px-6 py-3 text-base font-medium text-moss-800 hover:bg-moss-50 transition-colors"
          >
            Learn about the park
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
          Our aspiration
        </p>
        <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight max-w-3xl">
          To bring back the ecosystem that lived here 250 years ago.
        </h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2 max-w-4xl text-cream/90 text-lg leading-relaxed">
          <p>
            We envision a rocky hilltop full of native plants and animals
            &mdash; lots of birds and pollinators. A place where you can watch
            the seasons turn from our wet winters, to springs bursting with
            wildflowers and green native grasses.
          </p>
          <p>
            Then a foggy summer arrives, the spring flowers dry into seed heads
            that feed and shelter birds (maybe even quail, one day). It&rsquo;s
            a long road, but it begins with the small patch of hill in front of
            us.
          </p>
        </div>
        <Link
          href="/about"
          className="mt-10 inline-flex items-center text-cream/90 hover:text-cream font-medium"
        >
          More about who we are
          <ArrowRight className="ml-1.5 h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

function Teasers() {
  const cards = [
    {
      href: "/the-park",
      eyebrow: "The Park",
      title: "A Natural Area in the middle of the city.",
      body: "Why the coastal-bluff ecosystem still survives on this rocky hilltop — and what makes its native plants so tough.",
    },
    {
      href: "/blog",
      eyebrow: "Blog",
      title: "Notes from the hill.",
      body: "Workday recaps, plant-of-the-month, and observations through the seasons.",
    },
    {
      href: "/photos",
      eyebrow: "Photos",
      title: "From the hill, through the seasons.",
      body: "Wildflowers, foggy summer mornings, and stewardship days.",
    },
    {
      href: "/press",
      eyebrow: "Press",
      title: "What people are writing.",
      body: "Articles in the Ingleside Light and SF Gate.",
    },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="container-wide">
        <div className="grid gap-6 md:grid-cols-2">
          {cards.map((c) => (
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
                Read more
                <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
