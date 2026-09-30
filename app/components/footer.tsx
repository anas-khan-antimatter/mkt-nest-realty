import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-[--brand] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              href="/"
              className="font-heading text-2xl tracking-wide text-[--accent-light]"
            >
              Nest Realty
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-[--accent-light]/70">
              Boutique residential brokerage connecting people with homes in
              the most coveted neighborhoods.
            </p>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[--accent-light]">
              Browse
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="/listings"
                  className="text-[--accent-light]/80 transition-colors hover:text-white"
                >
                  All Listings
                </Link>
              </li>
              <li>
                <Link
                  href="/neighborhoods"
                  className="text-[--accent-light]/80 transition-colors hover:text-white"
                >
                  Neighborhoods
                </Link>
              </li>
              <li>
                <Link
                  href="/saved-homes"
                  className="text-[--accent-light]/80 transition-colors hover:text-white"
                >
                  Saved Homes
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[--accent-light]">
              Services
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="/schedule-tour"
                  className="text-[--accent-light]/80 transition-colors hover:text-white"
                >
                  Schedule a Tour
                </Link>
              </li>
              <li>
                <span className="text-[--accent-light]/60">
                  Mortgage Calculator
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[--accent-light]">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-[--accent-light]/80">
              <li>415-555-0100</li>
              <li>hello@nestrealty.com</li>
              <li>San Francisco, CA</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/20 pt-6 text-center text-xs text-[--accent-light]/60">
          &copy; {new Date().getFullYear()} Nest Realty. All rights reserved.
        </div>
      </div>
    </footer>
  );
}