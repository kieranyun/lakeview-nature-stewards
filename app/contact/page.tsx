import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Lakeview Nature Stewards — volunteer at a workday, ask a question, or just say hi.",
};

export default function ContactPage() {
  return (
    <section className="bg-moss-900 text-cream min-h-[70vh] flex items-center">
      <div className="container-wide py-20 md:py-28 text-center w-full">
        <p className="font-sans uppercase tracking-[0.22em] text-xs text-moss-200">
          Get involved
        </p>
        <h1 className="mt-4 font-serif text-5xl md:text-6xl leading-tight">
          Come say hi on the hill.
        </h1>
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
