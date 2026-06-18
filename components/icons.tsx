export function LeafMark({ className }: { className?: string }) {
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

export function LeafCluster({ className }: { className?: string }) {
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

export function SunMark({ className }: { className?: string }) {
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

export function ArrowRight({ className }: { className?: string }) {
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
