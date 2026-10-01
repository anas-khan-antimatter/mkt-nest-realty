import Image from "next/image";
import Link from "next/link";

const featuredHomes = [
  {
    title: "Modern Cliffside Retreat",
    price: "$4,250,000",
    beds: 4,
    baths: 3,
    sqft: "3,200",
    image: "/home-01.jpg",
    location: "Pacific Heights",
  },
  {
    title: "Victorian Townhouse",
    price: "$2,895,000",
    beds: 3,
    baths: 2.5,
    sqft: "2,400",
    image: "/home-02.jpg",
    location: "Noe Valley",
  },
  {
    title: "Mid-Century Ranch",
    price: "$1,975,000",
    beds: 4,
    baths: 2,
    sqft: "2,800",
    image: "/home-03.jpg",
    location: "Marin County",
  },
];

const neighborhoods = [
  {
    name: "Pacific Heights",
    description: "Iconic views, grand architecture, and tree-lined avenues.",
    homes: 12,
  },
  {
    name: "Noe Valley",
    description: "Vibrant village charm with boutiques and cafés.",
    homes: 8,
  },
  {
    name: "Marin County",
    description: "Expansive estates surrounded by redwoods and coastline.",
    homes: 15,
  },
  {
    name: "Russian Hill",
    description: "Urban elegance with sweeping bay panoramas.",
    homes: 6,
  },
];

export default function Home() {
  return (
    <>
      {/* ── Navigation ── */}
      <header className="sticky top-0 z-50 w-full border-b border-stone-200/60 bg-stone-100/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="font-heading text-2xl tracking-wide text-sage"
          >
            Nest Realty
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/listings"
              className="text-sm font-medium uppercase tracking-widest text-stone-600 transition-colors hover:text-sage"
            >
              Listings
            </Link>
            <Link
              href="/neighborhoods"
              className="text-sm font-medium uppercase tracking-widest text-stone-600 transition-colors hover:text-sage"
            >
              Neighborhoods
            </Link>
            <Link
              href="/saved"
              className="text-sm font-medium uppercase tracking-widest text-stone-600 transition-colors hover:text-sage"
            >
              Saved
            </Link>
            <Link
              href="/schedule-tour"
              className="text-sm font-medium uppercase tracking-widest text-stone-600 transition-colors hover:text-sage"
            >
              Tour
            </Link>
            <Link
              href="/schedule-tour"
              className="rounded-full bg-sage px-6 py-2 text-sm font-medium uppercase tracking-widest text-stone-50 transition-colors hover:bg-sage-light"
            >
              Inquire
            </Link>
          </nav>
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
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-sage/20 via-transparent to-stone-100/90" />
          <div className="h-full w-full bg-[url('/hero-bg.jpg')] bg-cover bg-center" />
        </div>
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block rounded-full bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-sage backdrop-blur-sm">
            Boutique Residential Brokerage
          </span>
          <h1 className="mt-6 font-heading text-5xl font-bold leading-tight text-white drop-shadow-lg sm:text-6xl lg:text-7xl">
            Find Your Place
            <br />
            <span className="text-brass-light">To Call Home</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90 drop-shadow-md">
            Nest Realty connects you with exceptional properties in the most
            coveted neighborhoods. Every home tells a story — let us help you
            write yours.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/listings"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-brass px-8 text-sm font-bold uppercase tracking-widest text-stone-900 transition-colors hover:bg-brass-light"
            >
              Browse Listings
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/schedule-tour"
              className="inline-flex h-12 items-center gap-2 rounded-full border-2 border-white/70 px-8 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Schedule a Tour
            </Link>
          </div>
        </div>
      </section>

      {/* ── Featured Listings ── */}
      <section
        id="listings"
        className="bg-stone-100 py-24 md:py-32"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-light">
              Curated Selection
            </span>
            <h2 className="mt-3 font-heading text-4xl font-bold text-sage sm:text-5xl">
              Featured Homes
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-stone-600">
              Exceptional properties handpicked by our team for their character,
              location, and potential.
            </p>
          </div>

          {/* Browse all CTA */}
          <div className="mb-10 flex justify-end">
            <Link
              href="/listings"
              className="inline-flex h-10 items-center gap-2 rounded-full border border-sage px-6 text-xs font-bold uppercase tracking-widest text-sage transition-colors hover:bg-sage hover:text-white"
            >
              View All Listings
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredHomes.map((home) => (
              <article
                key={home.title}
                className="group overflow-hidden rounded-xl bg-white shadow-md transition-shadow hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden bg-stone-200">
                  <div className="absolute inset-0 flex items-center justify-center text-stone-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z" />
                      <path d="M9 21V12h6v9" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading text-xl font-bold text-sage">
                      {home.title}
                    </h3>
                    <span className="text-lg font-semibold text-sage-light">
                      {home.price}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-stone-500">{home.location}</p>
                  <div className="mt-4 flex gap-4 border-t border-stone-100 pt-4 text-sm text-stone-500">
                    <span>{home.beds} beds</span>
                    <span>{home.baths} baths</span>
                    <span>{home.sqft} sqft</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Neighborhoods ── */}
      <section
        id="neighborhoods"
        className="bg-white py-24 md:py-32"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-light">
              Explore
            </span>
            <h2 className="mt-3 font-heading text-4xl font-bold text-sage sm:text-5xl">
              Our Neighborhoods
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-stone-600">
              From the iconic skyline of Pacific Heights to the redwood
              sanctuary of Marin — find your community.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {neighborhoods.map((n) => (
              <Link
                key={n.name}
                href="/neighborhoods"
                className="group block rounded-xl border border-stone-200 bg-stone-100 p-6 transition-all hover:border-brass hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sage/10 text-sage transition-colors group-hover:bg-sage group-hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z" />
                    <path d="M9 21V12h6v9" />
                  </svg>
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold text-sage">
                  {n.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  {n.description}
                </p>
                <p className="mt-3 text-xs font-medium uppercase tracking-wider text-sage-light">
                  {n.homes} active listings
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── About / Brand Story ── */}
      <section
        id="about"
        className="bg-sage py-24 md:py-32"
      >
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brass-light">
            Our Story
          </span>
          <h2 className="mt-3 font-heading text-4xl font-bold text-white sm:text-5xl">
            Rooted in Craft, Guided by Trust
          </h2>
          <div className="mx-auto mt-8 max-w-2xl space-y-4 text-left text-stone-200 leading-relaxed">
            <p>
              Nest Realty was founded on a simple belief: that finding a home should feel
              like a discovery, not a transaction. We pair deep local knowledge with
              thoughtful design — every listing we represent is selected for its
              character, craftsmanship, and sense of place.
            </p>
            <p>
              Our team brings decades of experience across San Francisco and Marin County.
              Whether you are searching for a Victorian with original moldings or a
              modern cliffside retreat, we are here to guide you with discretion,
              candor, and care.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-brass">$2.4B+</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-stone-400">Closed Volume</div>
            </div>
            <div className="w-px bg-sage-light/40" />
            <div>
              <div className="text-3xl font-bold text-brass">500+</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-stone-400">Homes Sold</div>
            </div>
            <div className="w-px bg-sage-light/40" />
            <div>
              <div className="text-3xl font-bold text-brass">15</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-stone-400">Years Serving</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section
        id="contact"
        className="bg-stone-100 py-24 md:py-32"
      >
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-light">
            Get in Touch
          </span>
          <h2 className="mt-3 font-heading text-4xl font-bold text-sage sm:text-5xl">
            Ready to Find Your Nest?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-stone-600">
            Whether you are buying, selling, or simply curious, our team is
            here to help. Reach out for a no-obligation conversation.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/schedule-tour"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-sage px-8 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-sage-light"
            >
              Schedule a Tour
            </Link>
            <Link
              href="/listings"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-sage px-8 text-sm font-bold uppercase tracking-widest text-sage transition-colors hover:bg-sage hover:text-white"
            >
              Browse Listings
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-sage-dark py-12 text-stone-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="font-heading text-2xl tracking-wide">Nest Realty</div>
            <div className="flex gap-6 text-xs uppercase tracking-widest text-stone-400">
              <Link href="/listings" className="hover:text-white transition-colors">Listings</Link>
              <Link href="/neighborhoods" className="hover:text-white transition-colors">Neighborhoods</Link>
              <Link href="/schedule-tour" className="hover:text-white transition-colors">Tour</Link>
              <Link href="/saved" className="hover:text-white transition-colors">Saved</Link>
            </div>
          </div>
          <hr className="brass-divider my-6" />
          <div className="flex flex-col items-center justify-between gap-2 text-xs text-stone-500 sm:flex-row">
            <p>&copy; 2026 Nest Realty. All rights reserved.</p>
            <p>Boutique Residential Brokerage · CA DRE #02245678</p>
          </div>
        </div>
      </footer>
    </>
  );
}