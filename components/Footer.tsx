import { LeafMark } from "./icons";
import { site } from "@/content";

export function Footer() {
  return (
    <footer className="border-t border-moss-100 bg-cream">
      <div className="container-wide py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-bark/60">
        <div className="flex items-center gap-2">
          <LeafMark className="h-5 w-5 text-moss-600" />
          <span>
            &copy; {new Date().getFullYear()} {site.copyrightSuffix}
          </span>
        </div>
        <div>{site.partnerLine}</div>
      </div>
    </footer>
  );
}
