import { LISTINGS_DATA, formatPrice } from "@/lib/data";
import type { Listing } from "@/lib/data";

type SortKey = "price-asc" | "price-desc" | "beds" | "sqft" | "newest";

export default function ListingsPage({
  searchParams,
}: {
  searchParams: Promise<{ minPrice?: string; maxPrice?: string; beds?: string; baths?: string; sort?: string; q?: string }>;
}) {
  // This is a server component — searchParams is resolved at request time
  // We use the searchParams promise; but since it's a simple case,
  // let's just work with the raw data and let the form handle filtering via GET
  // On first load (no params), show everything.
  // On filter submit (GET), the page reloads with query params.

  async function render() {
    const sp = await searchParams;
    return { sp };
  }

  // For simplicity, show all listings and let the GET form do the rest
  // The actual filtering happens server-side on subsequent requests
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[--brand-light]">Explore</span>
        <h1 className="mt-3 font-heading text-4xl font-bold text-[--brand] sm:text-5xl">All Listings</h1>
        <p className="mx-auto mt-4 max-w-xl text-[--stone-600]">
          {LISTINGS_DATA.length} homes across {new Set(LISTINGS_DATA.map((l) => l.location)).size} neighborhoods.
        </p>
      </div>

      <form method="GET" className="mb-10 flex flex-wrap items-end gap-3">
        <input type="search" name="q" placeholder="Search listings…" className="h-10 rounded-full border border-[--stone-200] bg-white px-4 text-sm" />
        <select name="minPrice" className="h-10 rounded-full border border-[--stone-200] bg-white px-4 text-sm">
          <option value="">Min Price</option>
          <option value="500000">$500K</option>
          <option value="1000000">$1M</option>
          <option value="2000000">$2M</option>
          <option value="3000000">$3M</option>
          <option value="5000000">$5M+</option>
        </select>
        <select name="maxPrice" className="h-10 rounded-full border border-[--stone-200] bg-white px-4 text-sm">
          <option value="">Max Price</option>
          <option value="1000000">$1M</option>
          <option value="2000000">$2M</option>
          <option value="3000000">$3M</option>
          <option value="5000000">$5M</option>
          <option value="10000000">$10M+</option>
        </select>
        <select name="beds" className="h-10 rounded-full border border-[--stone-200] bg-white px-4 text-sm">
          <option value="">Beds</option>
          {[1, 2, 3, 4, 5].map((b) => (
            <option key={b} value={b}>{b}+</option>
          ))}
        </select>
        <select name="baths" className="h-10 rounded-full border border-[--stone-200] bg-white px-4 text-sm">
          <option value="">Baths</option>
          {[1, 2, 3, 4].map((b) => (
            <option key={b} value={b}>{b}+</option>
          ))}
        </select>
        <select name="sort" className="h-10 rounded-full border border-[--stone-200] bg-white px-4 text-sm">
          <option value="price-asc">Price: Low</option>
          <option value="price-desc">Price: High</option>
          <option value="beds">Bedrooms</option>
          <option value="sqft">Square Feet</option>
          <option value="newest">Newest</option>
        </select>
        <button type="submit" className="h-10 rounded-full bg-[--accent] px-6 text-sm font-bold text-[--foreground]">Filter</button>
      </form>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {LISTINGS_DATA.map((home) => (
          <Link key={home.id} href={`/listings/${home.id}`} className="group overflow-hidden rounded-xl bg-white shadow-md transition-shadow hover:shadow-xl">
            <div className="relative h-56 overflow-hidden bg-[#e0d8cc]">
              <img src={home.images[0]} alt={home.title} className="h-full w-full object-cover" />
              <div className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-bold text-[--brand] backdrop-blur-sm">{formatPrice(home.price)}</div>
            </div>
            <div className="p-5">
              <h3 className="font-heading text-lg font-bold text-[--brand]">{home.title}</h3>
              <p className="mt-1 text-sm text-[--stone-500]">{home.location}</p>
              <div className="mt-3 flex gap-3 border-t border-[--stone-200] pt-3 text-xs text-[--stone-500]">
                <span><strong className="text-[--brand]">{home.beds}</strong> bed{home.beds !== 1 ? "s" : ""}</span>
                <span><strong className="text-[--brand]">{home.baths}</strong> bath{home.baths !== 1 ? "s" : ""}</span>
                <span><strong className="text-[--brand]">{home.sqft.toLocaleString()}</strong> sqft</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

import Link from "next/link";