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
      <header className="sticky top-0 z-50 w-full border-b border-stone-200/60 bg-warm/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="font-heading text-2xl tracking-wide text-brand"
          >
            Nest Realty
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="#listings"
              className="text-sm font-medium uppercase tracking-widest text-stone-600 transition-colors hover:text-brand"
            >
              Listings
            </Link>
            <Link
              href="#neighborhoods"
              className="text-sm font-medium uppercase tracking-widest text-stone-600 transition-colors hover:text-brand"
            >
              Neighborhoods
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium uppercase tracking-widest text-stone-600 transition-colors hover:text-brand"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium uppercase tracking-widest text-stone-600 transition-colors hover:text-brand"
            >
              Contact
            </Link>
            <Link
              href="#contact"
              className="rounded-full bg-brand px-6 py-2 text-sm font-medium uppercase tracking-widest text-stone-50 transition-colors hover:bg-brand-light"
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
          <div className="absolute inset-0 bg-gradient-to-b from-brand/20 via-transparent to-warm/90" />
          <div className="h-full w-full bg-[url('/hero-bg.jpg')] bg-cover bg-center" />
        </div>
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block rounded-full bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand backdrop-blur-sm">
            Boutique Residential Brokerage
          </span>
          <h1 className="mt-6 font-heading text-5xl font-bold leading-tight text-white drop-shadow-lg sm:text-6xl lg:text-7xl">
            Find Your Place
            <br />
            <span className="text-accent-light">To Call Home</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90 drop-shadow-md">
            Nest Realty connects you with exceptional properties in the most
            coveted neighborhoods. Every home tells a story — let us help you
            write yours.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="#listings"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-accent px-8 text-sm font-bold uppercase tracking-widest text-stone-900 transition-colors hover:bg-accent-light"
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
              href="#contact"
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
        className="bg-warm py-24 md:py-32"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-light">
              Curated Selection
            </span>
            <h2 className="mt-3 font-heading text-4xl font-bold text-brand sm:text-5xl">
              Featured Homes
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-stone-600">
              Exceptional properties handpicked by our team for their character,
              location, and potential.
            </p>
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
                    <h3 className="font-heading text-xl font-bold text-brand">
                      {home.title}
                    </h3>
                    <span className="text-lg font-semibold text-brand-light">
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
          <div className="mt-12 text-center">
            <Link
              href="#contact"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-brand px-8 text-sm font-bold uppercase tracking-widest text-brand transition-colors hover:bg-brand hover:text-white"
            >
              View All Listings
            </Link>
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
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-light">
              Explore
            </span>
            <h2 className="mt-3 font-heading text-4xl font-bold text-brand sm:text-5xl">
              Our Neighborhoods
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-stone-600">
              From the iconic skyline of Pacific Heights to the redwood
              sanctuary of Marin — find your community.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {neighborhoods.map((n) => (
              <div
                key={n.name}
                className="group cursor-pointer rounded-xl border border-stone-200 bg-warm p-6 transition-all hover:border-accent hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
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
                <h3 className="mt-4 font-heading text-lg font-bold text-brand">
                  {n.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  {n.description}
                </p>
                <p className="mt-3 text-xs font-medium uppercase tracking-wider text-brand-light">
                  {n.homes} active listings
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About / Brand Story ── */}
      <section
        id="about"
        className="bg-brand py-24 md:py-32"
      >
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-light">
            Our Story
          </span>
          <h2 className="mt-3 font-heading text-4xl font-bold text-white sm:text-5xl">
            More Than a Transaction
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-stone-300">
            Nest Realty was founded on the belief that finding a home should be
            as meaningful as the life you build within it. We combine deep local
            expertise with a personal, hands-on approach — treating every client
            like family and every property like our own.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 p-6">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/20 text-accent-light">
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
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="mt-4 font-heading text-lg font-bold text-white">
                Local Experts
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-400">
                Decades of experience across every neighborhood we serve.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 p-6">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/20 text-accent-light">
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
                  <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="mt-4 font-heading text-lg font-bold text-white">
              Prime Locations
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-400">
                Exclusive access to the Bay Area&apos;s most desirable addresses.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 p-6">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/20 text-accent-light">
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
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
              <h3 className="mt-4 font-heading text-lg font-bold text-white">
                Personalized Care
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-400">
                Dedicated support from first tour to closing day and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section
        id="contact"
        className="bg-warm py-24 md:py-32"
      >
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-light">
            Get in Touch
          </span>
          <h2 className="mt-3 font-heading text-4xl font-bold text-brand sm:text-5xl">
            Let&apos;s Find Your Nest
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-stone-600">
            Whether you&apos;re buying, selling, or simply exploring, our team is
            ready to guide you every step of the way.
          </p>
          <div className="mx-auto mt-12 grid max-w-2xl gap-6 sm:grid-cols-2">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
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
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.574 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <p className="mt-3 text-sm font-medium text-stone-700">Phone</p>
              <p className="mt-1 text-stone-500">(415) 555-0199</p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
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
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <p className="mt-3 text-sm font-medium text-stone-700">Email</p>
              <p className="mt-1 text-stone-500">hello@nestrealty.com</p>
            </div>
          </div>
          <div className="mt-8">
            <Link
              href="#contact"
              className="inline-flex h-14 items-center gap-2 rounded-full bg-brand px-10 text-base font-bold uppercase tracking-widest text-white transition-colors hover:bg-brand-light"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-brand py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <Link
              href="/"
              className="font-heading text-xl tracking-wide text-white"
            >
              Nest Realty
            </Link>
            <p className="text-sm text-stone-400">
              &copy; {new Date().getFullYear()} Nest Realty. All rights
              reserved.
            </p>
          </div>
          <div className="mt-8 border-t border-white/10 pt-8 text-center text-xs text-stone-500">
            <p>
              The data relating to real estate for sale on this website comes in
              part from the Internet Data Exchange program. All information
              deemed reliable but not guaranteed.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}