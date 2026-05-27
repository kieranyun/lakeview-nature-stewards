import Link from "next/link";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#place", label: "The Place" },
  { href: "#plants", label: "Native Plants" },
  { href: "#photos", label: "Photos" },
  { href: "#press", label: "Press" },
  { href: "#contact", label: "Contact" },
];

const pressLinks = [
  {
    title: "Ingleside Light — Lakeview Nature Stewards",
    blurb:
      "A profile of the hill and the volunteer effort to keep it healthy.",
    href: "https://www.inglesidelight.com/san-francisco-lakeview-ashton-mini-park-lakeview-nature-stewards/",
    source: "Ingleside Light",
  },
  {
    title: "SF Gate — A secluded SF park with some of the best views",
    blurb:
      "A look at the hilltop, with a bit of neighborhood history thrown in.",
    href: "https://www.sfgate.com/local/article/secluded-sf-park-best-views-18383341.php",
    source: "SF Gate",
  },
  {
    title: "Ingleside Light — Ingleside / OMI mini parks",
    blurb:
      "An overview of the mini parks across Ingleside, Oceanview, and Merced Heights.",
    href: "https://www.inglesidelight.com/san-francisco-ingleside-mini-parks/",
    source: "Ingleside Light",
  },
];

export default function Page() {
  return (
    <main className="overflow-x-clip">
      <Header />
      <Hero />
      <About />
      <Mission />
      <ThePlace />
      <NativePlants />
      <Photos />
      <Press />
      <Contact />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-moss-100/70 bg-cream/85 backdrop-blur">
      <div className="container-wide flex h-16 items-center justify-between">
        <Link href="#top" className="flex items-center gap-2 group">
          <LeafMark className="h-7 w-7 text-moss-600 transition-transform group-hover:rotate-[-6deg]" />
          <span className="font-serif text-lg font-semibold text-moss-800">
            Lakeview Nature Stewards
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm text-bark/80">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-moss-700 transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden sm:inline-flex items-center rounded-full bg-moss-700 px-4 py-2 text-sm font-medium text-cream shadow-sm hover:bg-moss-800 transition-colors"
        >
          Get involved
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate">
      <BackgroundField />
      <div className="container-wide pt-20 pb-24 md:pt-28 md:pb-32 relative">
        <p className="font-sans uppercase tracking-[0.22em] text-xs text-moss-700/80">
          San Francisco · Lakeview Ashton Mini Park
        </p>
        <h1 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.02] text-moss-900 max-w-4xl">
          Tending a remnant of wild San Francisco.
        </h1>
        <p className="mt-6 max-w-2xl text-lg md:text-xl text-bark/80 leading-relaxed">
          We&rsquo;re a group of neighborhood volunteers working alongside SF Rec &amp; Parks
          to restore the native coastal-bluff ecosystem of the rocky outcrop in our
          backyard &mdash; one weed-pull, one wildflower, one season at a time.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-moss-700 px-6 py-3 text-base font-medium text-cream shadow-sm hover:bg-moss-800 transition-colors"
          >
            Join a stewardship day
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center rounded-full border border-moss-700/30 px-6 py-3 text-base font-medium text-moss-800 hover:bg-moss-50 transition-colors"
          >
            Learn about the park
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="Who we are" title="Neighbors, by way of the hill.">
      <p>
        The Lakeview Nature Stewards is a group of neighborhood volunteers working
        together with San Francisco Recreation &amp; Parks to foster the ecological
        health of the area officially called the <strong>Lakeview Ashton Mini Park</strong>{" "}
        (LAMP) &mdash; also known around the block as the <em>Rocky Outcrop</em>, the{" "}
        <em>Orizaba Outcrop</em>, and a handful of other names depending on who you ask.
      </p>
      <p>
        It&rsquo;s already a wonderful place to sit and take in the view. We&rsquo;re
        trying to make it even better, for the people who live near it and for the
        wildlife that depends on it.
      </p>
    </Section>
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
            We envision a rocky hilltop full of native plants and animals &mdash;
            lots of birds and pollinators. A place where you can watch the seasons
            turn from our wet winters, to springs bursting with wildflowers and
            green native grasses.
          </p>
          <p>
            Then a foggy summer arrives, the spring flowers dry into seed heads
            that feed and shelter birds (maybe even quail, one day). It&rsquo;s a
            long road, but it begins with the small patch of hill in front of us.
          </p>
        </div>
      </div>
    </section>
  );
}

function ThePlace() {
  return (
    <Section
      id="place"
      eyebrow="The place"
      title="A designated Natural Area in the middle of the city."
      wide
    >
      <div className="grid gap-12 md:grid-cols-2 md:items-start">
        <div className="space-y-5 text-lg leading-relaxed text-bark/85 max-w-prose">
          <p>
            The hill has been specially designated a <strong>Natural Area</strong> by
            the SF Rec &amp; Park <em>Natural Resources Division</em> &mdash; meaning
            the city has flagged it as a place whose natural resources are a priority
            to protect.
          </p>
          <p>
            What makes it valuable is what survives here: remnant patches of
            coastal-bluff ecosystem that have hung on for millennia even as the
            city grew up around them.
          </p>
          <p>
            Why have these native plants held on? The answer is the thin, rocky
            soil that faces directly into the wind off the Pacific. Natives have
            been here for hundreds of thousands of years and have evolved to
            survive these gnarly conditions &mdash; deep roots that pull moisture
            and nutrients from far below long after the topsoil has dried.
          </p>
          <p>
            Where the soil has a little more give, invasive annual grasses move in
            and crowd out the originals. Native plants are tough, but not
            invincible. That&rsquo;s where we come in.
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
    </Section>
  );
}

function NativePlants() {
  return (
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
            Wildlife has evolved alongside specific plants &mdash; a complex web
            that provides pollen, insects, seeds, cover, and places to nest and
            raise young.
          </p>
          <p>
            Many invasive plants simply don&rsquo;t offer those things to the
            insects, birds, and other animals that would otherwise live here. Lose
            the plants and, eventually, you lose everything that depended on them.
          </p>
          <p className="text-bark/70 italic">
            (We&rsquo;ll add specific examples soon &mdash; like the hairstreak
            butterflies that rely on particular host plants found right here on
            the outcrop.)
          </p>
        </div>
      </div>
    </section>
  );
}

function Photos() {
  const tiles = Array.from({ length: 6 });
  return (
    <Section
      id="photos"
      eyebrow="Photos"
      title="From the hill, through the seasons."
      wide
    >
      <p className="text-bark/70 max-w-2xl mb-10">
        A growing collection of photos from stewardship days, wildflower blooms,
        and foggy summer mornings. Drop your favorite images into{" "}
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
    </Section>
  );
}

function Press() {
  return (
    <Section id="press" eyebrow="Press" title="What people are writing.">
      <ul className="divide-y divide-moss-100 border-y border-moss-100">
        {pressLinks.map((p) => (
          <li key={p.href}>
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-start justify-between gap-6 py-6 hover:bg-moss-50/60 -mx-4 px-4 rounded-md transition-colors"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-moss-700/80">
                  {p.source}
                </p>
                <p className="mt-2 font-serif text-2xl text-moss-900 group-hover:text-moss-700 transition-colors">
                  {p.title}
                </p>
                <p className="mt-2 text-bark/70 max-w-2xl">{p.blurb}</p>
              </div>
              <ArrowRight className="mt-3 h-5 w-5 shrink-0 text-moss-600 group-hover:translate-x-1 transition-transform" />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-moss-900 text-cream">
      <div className="container-wide py-20 md:py-28 text-center">
        <p className="font-sans uppercase tracking-[0.22em] text-xs text-moss-200">
          Get involved
        </p>
        <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">
          Come say hi on the hill.
        </h2>
        <p className="mt-6 text-cream/85 text-lg max-w-xl mx-auto">
          Whether you&rsquo;d like to volunteer at a workday, ask a question
          about a plant, or just learn more &mdash; we&rsquo;d love to hear
          from you.
        </p>
        <a
          href="mailto:Lakeviewnaturestewards@gmail.com"
          className="mt-10 inline-flex items-center rounded-full bg-cream px-7 py-3.5 text-base font-medium text-moss-900 hover:bg-moss-50 transition-colors"
        >
          Lakeviewnaturestewards@gmail.com
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-moss-100 bg-cream">
      <div className="container-wide py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-bark/60">
        <div className="flex items-center gap-2">
          <LeafMark className="h-5 w-5 text-moss-600" />
          <span>
            &copy; {new Date().getFullYear()} Lakeview Nature Stewards &middot;
            San Francisco
          </span>
        </div>
        <div>
          In partnership with SF Recreation &amp; Parks, Natural Resources Division.
        </div>
      </div>
    </footer>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
  wide = false,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <section id={id} className="py-20 md:py-28">
      <div className={wide ? "container-wide" : "container-prose"}>
        <p className="font-sans uppercase tracking-[0.22em] text-xs text-moss-700/80">
          {eyebrow}
        </p>
        <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight text-moss-900">
          {title}
        </h2>
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-bark/85">
          {children}
        </div>
      </div>
    </section>
  );
}

function BackgroundField() {
  return (
    <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-moss-100/70 blur-3xl" />
      <div className="absolute top-40 -left-32 h-[22rem] w-[22rem] rounded-full bg-sand/70 blur-3xl" />
      <svg
        className="absolute bottom-0 left-0 w-full text-moss-100"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60 L1200,120 L0,120 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

function LeafMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M20 4c-8 0-14 4-14 12 0 2 1 4 2 4 8 0 14-6 14-14 0-1-1-2-2-2Z" />
      <path d="M6 20c1-4 4-8 8-10" />
    </svg>
  );
}

function LeafCluster({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M60 110V40" />
      <path d="M60 70c-14 0-26-10-26-24 14 0 26 10 26 24Z" />
      <path d="M60 56c14 0 26-10 26-24-14 0-26 10-26 24Z" />
      <path d="M60 86c-12 0-22-8-22-20 12 0 22 8 22 20Z" />
    </svg>
  );
}

function SunMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <circle cx="50" cy="50" r="18" />
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * Math.PI * 2) / 12;
        const x1 = 50 + Math.cos(angle) * 26;
        const y1 = 50 + Math.sin(angle) * 26;
        const x2 = 50 + Math.cos(angle) * 36;
        const y2 = 50 + Math.sin(angle) * 36;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} strokeLinecap="round" />;
      })}
    </svg>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}
