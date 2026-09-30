import Link from "next/link";
import { headers } from "next/headers";

export default function SiteNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200/60 bg-warm/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-heading text-2xl tracking-wide text-[--brand]"
        >
          Nest Realty
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/listings"
            className="text-sm font-medium uppercase tracking-widest text-[--stone-600] transition-colors hover:text-[--brand]"
          >
            Listings
          </Link>
          <Link
            href="/neighborhoods"
            className="text-sm font-medium uppercase tracking-widest text-[--stone-600] transition-colors hover:text-[--brand]"
          >
            Neighborhoods
          </Link>
          <Link
            href="/saved-homes"
            className="text-sm font-medium uppercase tracking-widest text-[--stone-600] transition-colors hover:text-[--brand]"
          >
            Saved
          </Link>
          <Link
            href="/schedule-tour"
            className="rounded-full bg-[--brand] px-6 py-2 text-sm font-medium uppercase tracking-widest text-[--stone-50] transition-colors hover:bg-[--brand-light]"
          >
            Tour
          </Link>
        </nav>
        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          aria-label="Toggle menu"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
    </header>
  );
}