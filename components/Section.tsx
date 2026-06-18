export function Section({
  id,
  eyebrow,
  title,
  children,
  wide = false,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <section id={id} className="py-20 md:py-28">
      <div className={wide ? "container-wide" : "container-prose"}>
        {eyebrow && (
          <p className="font-sans uppercase tracking-[0.22em] text-xs text-moss-700/80">
            {eyebrow}
          </p>
        )}
        {title && (
          <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight text-moss-900">
            {title}
          </h2>
        )}
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-bark/85">
          {children}
        </div>
      </div>
    </section>
  );
}

export function BackgroundField() {
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
