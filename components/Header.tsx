"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LeafMark } from "./icons";
import { ctas, site } from "@/content";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/the-park", label: "The Park" },
  { href: "/photos", label: "Photos" },
  { href: "/blog", label: "Blog" },
  { href: "/press", label: "Press" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-moss-100/70 bg-cream/85 backdrop-blur">
      <div className="container-wide flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <LeafMark className="h-7 w-7 text-moss-600 transition-transform group-hover:rotate-[-6deg]" />
          <span className="font-serif text-lg font-semibold text-moss-800 hidden sm:inline">
            {site.name}
          </span>
          <span className="font-serif text-lg font-semibold text-moss-800 sm:hidden">
            {site.shortName}
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm text-bark/80">
          {navLinks.map((l) => {
            const active =
              l.href === "/"
                ? pathname === "/"
                : pathname === l.href || pathname.startsWith(l.href + "/");
            return (
              <Link
                key={l.href}
                href={l.href}
                className={
                  "transition-colors " +
                  (active
                    ? "text-moss-800 font-medium"
                    : "hover:text-moss-700")
                }
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
        <Link
          href="/contact"
          className="hidden sm:inline-flex items-center rounded-full bg-moss-700 px-4 py-2 text-sm font-medium text-cream shadow-sm hover:bg-moss-800 transition-colors"
        >
          {ctas.getInvolved}
        </Link>
      </div>
      <MobileNav pathname={pathname} />
    </header>
  );
}

function MobileNav({ pathname }: { pathname: string }) {
  return (
    <nav className="md:hidden border-t border-moss-100/70 bg-cream/85">
      <ul className="container-wide flex gap-5 overflow-x-auto py-2 text-sm text-bark/80">
        {navLinks.map((l) => {
          const active =
            l.href === "/"
              ? pathname === "/"
              : pathname === l.href || pathname.startsWith(l.href + "/");
          return (
            <li key={l.href} className="shrink-0">
              <Link
                href={l.href}
                className={
                  "transition-colors " +
                  (active ? "text-moss-800 font-medium" : "hover:text-moss-700")
                }
              >
                {l.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
