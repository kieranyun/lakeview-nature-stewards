import type { Metadata } from "next";
import { ArrowRight } from "@/components/icons";
import { PageHeader } from "@/components/PageHeader";
import { press } from "@/content";

export const metadata: Metadata = {
  title: "Press",
  description: "Articles about the Lakeview Ashton Mini Park and the Lakeview Nature Stewards.",
};

export default function PressPage() {
  return (
    <>
      <PageHeader eyebrow={press.header.eyebrow} title={press.header.title} />
      <section className="container-wide pb-24 md:pb-32">
        <ul className="divide-y divide-moss-100 border-y border-moss-100">
          {press.articles.map((p) => (
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
