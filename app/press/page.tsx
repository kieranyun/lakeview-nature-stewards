import type { Metadata } from "next";
import { ArrowRight } from "@/components/icons";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Press",
  description:
    "Articles about the Lakeview Ashton Mini Park and the Lakeview Nature Stewards.",
};

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

export default function PressPage() {
  return (
    <>
      <PageHeader eyebrow="Press" title="What people are writing." />
      <section className="container-wide pb-24 md:pb-32">
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
      </section>
    </>
  );
}
