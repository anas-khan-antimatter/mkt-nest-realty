import Link from "next/link";
import SiteNav from "./components/nav";
import SiteFooter from "./components/footer";
import { LISTINGS_DATA, NEIGHBORHOOD_DATA, formatPrice, formatPriceFull } from "@/lib/data";

const featuredHomes = LISTINGS_DATA.slice(0, 6);
const neighborhoods = Object.values(NEIGHBORHOOD_DATA);

export default function Home() {
  return (
    <>
      <SiteNav />

      {/* ── Hero ── */}
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[--brand]/20 via-transparent to-[--warm]/90" />
          <div className="h-full w-full" style={{background: "#1a3c34"}} />
        </div>
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block rounded-full bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[--brand] backdrop-blur-sm">
            Boutique Residential Brokerage
          </span>
          <h1 className="mt-6 font-heading text-5xl font-bold leading-tight text-white drop-shadow-lg sm:text-6xl lg:text-7xl">
            Find Your Place
            <br />
            <span className="text-[--accent-light]">To Call Home</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90 drop-shadow-md">
            Nest Realty connects you with exceptional properties in the most
            coveted neighborhoods. Every home tells a story — let us help you
            write yours.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/listings"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-[--accent] px-8 text-sm font-bold uppercase tracking-widest text-[--foreground] transition-colors hover:bg-[--accent-light]"
            >
              Browse Listings
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/></svg>
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
      <section id="listings" className="bg-[--warm] py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[--brand-light]">Curated Selection</span>
            <h2 className="mt-3 font-heading text-4xl font-bold text-[--brand] sm:text-5xl">Featured Homes</h2>
            <p className="mx-auto mt-4 max-w-xl text-[--stone-600]">Exceptional properties handpicked by our team.</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredHomes.map((home) => (
              <Link key={home.id} href={`/listings/${home.id}`} className="group overflow-hidden rounded-xl bg-white shadow-md transition-shadow hover:shadow-xl">
                <div className="relative h-64 overflow-hidden bg-[#e0d8cc]">
                  <img src={home.images[0]} alt={home.title} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading text-xl font-bold text-[--brand]">{home.title}</h3>
                    <span className="text-lg font-semibold text-[--brand-light]">{formatPriceFull(home.price)}</span>
                  </div>
                  <p className="mt-2 text-sm text-[--stone-500]">{home.location}</p>
                  <div className="mt-4 flex gap-4 border-t border-[--stone-200] pt-4 text-sm text-[--stone-500]">
                    <span>{home.beds} beds</span>
                    <span>{home.baths} baths</span>
                    <span>{home.sqft.toLocaleString()} sqft</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/listings" className="inline-flex h-12 items-center gap-2 rounded-full border border-[--brand] px-8 text-sm font-bold uppercase tracking-widest text-[--brand] transition-colors hover:bg-[--brand] hover:text-white">
              View All Listings
            </Link>
          </div>
        </div>
      </section>

      {/* ── Neighborhoods ── */}
      <section id="neighborhoods" className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[--brand-light]">Explore</span>
            <h2 className="mt-3 font-heading text-4xl font-bold text-[--brand] sm:text-5xl">Our Neighborhoods</h2>
            <p className="mx-auto mt-4 max-w-xl text-[--stone-600]">From Pacific Heights to Marin — find your community.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {neighborhoods.map((n) => (
              <Link key={n.slug} href={`/neighborhoods/${n.slug}`} className="group cursor-pointer rounded-xl border border-[--stone-200] bg-[--warm] p-6 transition-all hover:border-[--accent] hover:shadow-lg">
                <h3 className="font-heading text-lg font-bold text-[--brand]">{n.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[--stone-600]">{n.description}</p>
                <p className="mt-3 text-xs font-medium uppercase tracking-wider text-[--brand-light]">{n.listings.length} active listings</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="bg-[--brand] py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[--accent-light]">Our Story</span>
          <h2 className="mt-3 font-heading text-4xl font-bold text-[--accent-light] sm:text-5xl">Thoughtful Brokerage for Extraordinary Homes</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[--accent-light]/80">
            Nest Realty was founded on a simple belief: that finding a home should be as meaningful
            as the home itself. We combine deep local expertise with a curated, boutique approach —
            matching the right person with the right place, every time.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <div className="text-center">
              <span className="font-heading text-5xl font-bold text-[--accent-light]">50+</span>
              <p className="mt-2 text-sm text-[--accent-light]/70">Years combined experience</p>
            </div>
            <div className="text-center">
              <span className="font-heading text-5xl font-bold text-[--accent-light]">200+</span>
              <p className="mt-2 text-sm text-[--accent-light]/70">Homes sold this year</p>
            </div>
            <div className="text-center">
              <span className="font-heading text-5xl font-bold text-[--accent-light]">4</span>
              <p className="mt-2 text-sm text-[--accent-light]/70">Curated neighborhoods</p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}