export function PageHeader({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <section className="container-wide pt-16 pb-8 md:pt-24 md:pb-12">
      <p className="font-sans uppercase tracking-[0.22em] text-xs text-moss-700/80">
        {eyebrow}
      </p>
      <h1 className="mt-3 font-serif text-5xl md:text-6xl leading-tight text-moss-900 max-w-4xl">
        {title}
      </h1>
      {lede && (
        <p className="mt-6 max-w-2xl text-lg md:text-xl text-bark/80 leading-relaxed">
          {lede}
        </p>
      )}
    </section>
  );
}
