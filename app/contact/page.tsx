import type { Metadata } from "next";
import { contact, site } from "@/content";

export const metadata: Metadata = {
  title: "Contact",
  description: contact.body,
};

export default function ContactPage() {
  return (
    <section className="bg-moss-900 text-cream min-h-[70vh] flex items-center">
      <div className="container-wide py-20 md:py-28 text-center w-full">
        <p className="font-sans uppercase tracking-[0.22em] text-xs text-moss-200">
          {contact.eyebrow}
        </p>
        <h1 className="mt-4 font-serif text-5xl md:text-6xl leading-tight">
          {contact.title}
        </h1>
        <p className="mt-6 text-cream/85 text-lg max-w-xl mx-auto">
          {contact.body}
        </p>
        <a
          href={`mailto:${site.email}`}
          className="mt-10 inline-flex items-center rounded-full bg-cream px-7 py-3.5 text-base font-medium text-moss-900 hover:bg-moss-50 transition-colors"
        >
          {site.email}
        </a>
      </div>
    </section>
  );
}
