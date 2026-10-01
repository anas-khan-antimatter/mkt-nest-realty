"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { listings, neighborhoods, formatPrice, formatPriceFull, getListings } from "@/lib/data";

const PRICE_RANGES = [
  { label: "Any", min: 0, max: 999_999_999 },
  { label: "Under $1.5M", min: 0, max: 1_500_000 },
  { label: "$1.5M – $3M", min: 1_500_000, max: 3_000_000 },
  { label: "$3M – $5M", min: 3_000_000, max: 5_000_000 },
  { label: "$5M – $10M", min: 5_000_000, max: 10_000_000 },
  { label: "$10M+", min: 10_000_000, max: 999_999_999 },
];

const BED_OPTIONS = [
  { label: "Any", value: 0 },
  { label: "1+", value: 1 },
  { label: "2+", value: 2 },
  { label: "3+", value: 3 },
  { label: "4+", value: 4 },
  { label: "5+", value: 5 },
];

const SORT_OPTIONS = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low → High", value: "price-asc" },
  { label: "Price: High → Low", value: "price-desc" },
  { label: "Most Beds", value: "beds-desc" },
  { label: "Largest", value: "sqft-desc" },
  { label: "Newest", value: "newest" },
];

function cardPlaceholder(index: number) {
  const colors = ["from-sage/10-to-sage/5", "from-stone-200-to-stone-100", "from-sage/5-to-sage/10"];
  return colors[index % colors.length];
}

export default function ListingsPage() {
  const [neighborhood, setNeighborhood] = useState("all");
  const [priceRange, setPriceRange] = useState("0-999999999");
  const [minBeds, setMinBeds] = useState(0);
  const [sort, setSort] = useState("featured");
  const [savedIds, setSavedIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    const raw = localStorage.getItem("nest-saved");
    if (raw) {
      try {
        setSavedIds(new Set(JSON.parse(raw)));
      } catch {}
    }
  }, []);

  const [priceMin, priceMax] = priceRange.split("-").map(Number);
  const filtered = getListings({
    neighborhood: neighborhood === "all" ? undefined : neighborhood,
    minPrice: priceMin || 0,
    maxPrice: priceMax || 999_999_999,
    minBeds: minBeds > 0 ? minBeds : undefined,
    sort,
  });

  function toggleSave(id: string) {
    const next = new Set(savedIds);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setSavedIds(next);
    localStorage.setItem("nest-saved", JSON.stringify(Array.from(next)));
  }

  return (
    <div className="min-h-screen bg-stone-100">
      {/* ---- Nav ---- */}
      <header className="sticky top-0 z-50 w-full border-b border-stone-200/60 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="font-heading text-2xl tracking-wide text-sage">
            Nest Realty
          </Link>
          <nav className="items-center gap-6 flex">
            <Link href="/listings" className="text-sm font-medium uppercase tracking-widest text-sage">Listings</Link>
            <Link href="/neighborhoods" className="text-sm font-medium uppercase tracking-widest text-stone-600 hover:text-sage">Neighborhoods</Link>
            <Link href="/saved" className="text-sm font-medium uppercase tracking-widest text-stone-600 hover:text-sage">Saved</Link>
            <Link href="/" className="text-sm font-medium uppercase tracking-widest text-stone-600 hover:text-sage">Home</Link>
          </nav>
        </div>
      </header>

      {/* ---- Filters Bar ---- */}
      <section className="bg-white border-b border-stone-200 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end gap-3 lg:gap-4">
            {/* Neighborhood */}
            <div className="flex flex-col">
              <label className="text-xs font-medium uppercase tracking-wider text-stone-600 mb-1">Neighborhood</label>
              <select
                value={neighborhood}
                onChange={(e) => setNeighborhood(e.target.value)}
                className="w-44 rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm text-stone-800"
              >
                <option value="all">All Neighborhoods</option>
                {neighborhoods.map((n) => (
                  <option key={n.slug} value={n.slug}>{n.name}</option>
                ))}
              </select>
            </div>

            {/* Price Range */}
            <div className="flex flex-col">
              <label className="text-xs font-medium uppercase tracking-wider text-stone-600 mb-1">Price Range</label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-40 rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm text-stone-800"
              >
                {PRICE_RANGES.map((r) => (
                  <option key={r.label} value={`${r.min}-${r.max}`}>{r.label}</option>
                ))}
              </select>
            </div>

            {/* Beds */}
            <div className="flex flex-col">
              <label className="text-xs font-medium uppercase tracking-wider text-stone-600 mb-1">Bedrooms</label>
              <select
                value={minBeds}
                onChange={(e) => setMinBeds(Number(e.target.value))}
                className="w-20 rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm text-stone-800"
              >
                {BED_OPTIONS.map((b) => (
                  <option key={b.value} value={b.value}>{b.label}</option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="flex flex-col">
              <label className="text-xs font-medium uppercase tracking-wider text-stone-600 mb-1">Sort By</label>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="w-44 rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm text-stone-800"
              >
                {SORT_OPTIONS.map((s) => (
                  <option key={s.value} value={s.value}>{s.label}</option>
                ))}
              </select>
            </div>

            {/* Count */}
            <div className="text-xs text-stone-500 mt-4 ml-auto flex-shrink-0">
              <span className="font-semibold text-sage">{filtered.length}</span> listing{filtered.length !== 1 ? "s" : ""}
            </div>
          </div>
        </div>
      </section>

      {/* ---- Results ---- */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="font-heading text-3xl text-sage">No listings match your filters</div>
            <p className="mt-3 text-stone-600">Try adjusting your criteria to see more homes.</p>
          </div>
        ) : (
          <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((home, idx) => (
              <Link
                key={home.id}
                href={`/listings/${home.id}`}
                className="group block overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-lg"
              >
                {/* Image placeholder */}
                <div className={`relative h-56 overflow-hidden bg-gradient-to-br ${cardPlaceholder(idx)}`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl opacity-20 font-heading">⟐</span>
                  </div>
                  {home.featured && (
                    <span className="absolute top-3 left-3 rounded-full bg-brass px-3 py-0.5 text-[10px] font-bold text-white uppercase tracking-widest">
                      Featured
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={(e) => { e.preventDefault(); toggleSave(home.id); }}
                    className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm text-lg transition-all hover:bg-white"
                    aria-label={savedIds.has(home.id) ? "Unsave" : "Save"}
                  >
                    {savedIds.has(home.id) ? "♥" : "♡"}
                  </button>
                </div>
                <div className="p-5">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-heading text-lg font-semibold text-sage-dark truncate">
                      {home.title}
                    </h3>
                    <span className="text-base font-bold text-sage-light whitespace-nowrap">{formatPrice(home.price)}</span>
                  </div>
                  <p className="mt-1.5 text-sm text-stone-500">{home.address}</p>
                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-stone-500">
                    <span className="inline-flex items-center gap-1">
                      <span className="text-sage-dark">🛏</span> {home.beds} bed
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <span className="text-sage-dark">🛁</span> {home.baths} bath
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <span className="text-sage-dark">📐</span> {home.sqft.toLocaleString()} sqft
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* ---- Footer ---- */}
      <footer className="bg-sage-dark text-stone-50 py-12 mt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="font-heading text-2xl tracking-wide">Nest Realty</div>
          <p className="mt-3 text-sm text-stone-400">Boutique Residential Brokerage</p>
          <p className="mt-2 text-xs text-stone-500">&copy; 2026 Nest Realty. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}