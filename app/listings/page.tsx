"use client";

import Link from "next/link";
import { LISTINGS_DATA, formatPriceFull, formatPrice } from "@/lib/data";

type SortKey = "price-asc" | "price-desc" | "beds" | "sqft" | "newest";

function filterListings(opts: {
  minPrice?: number;
  maxPrice?: number;
  beds?: number;
  baths?: number;
  sort: SortKey;
  q: string;
}) {
  let list = [...LISTINGS_DATA];

  if (opts.q) {
    const q = opts.q.toLowerCase();
    list = list.filter(
      (l) =>
        l.title.toLowerCase().includes(q) ||
        l.location.toLowerCase().includes(q) ||
        l.description.toLowerCase().includes(q),
    );
  }
  if (opts.minPrice) list = list.filter((l) => l.price >= opts.minPrice!);
  if (opts.maxPrice) list = list.filter((l) => l.price <= opts.maxPrice!);
  if (opts.beds) list = list.filter((l) => l.beds >= opts.beds!);
  if (opts.baths) list = list.filter((l) => l.baths >= opts.baths!);

  switch (opts.sort) {
    case "price-asc":
      list.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      list.sort((a, b) => b.price - a.price);
      break;
    case "beds":
      list.sort((a, b) => b.beds - a.beds);
      break;
    case "sqft":
      list.sort((a, b) => b.sqft - a.sqft);
      break;
    case "newest":
      list.sort((a, b) => b.yearBuilt - a.yearBuilt);
      break;
  }
  return list;
}

export default function ListingsPage({
  minPrice,
  maxPrice,
  beds,
  baths,
  sort,
  q,
}: {
  minPrice?: number;
  maxPrice?: number;
  beds?: number;
  baths?: number;
  sort?: SortKey;
  q?: string;
}) {
  const filtered = filterListings({
    minPrice,
    maxPrice,
    beds,
    baths,
    sort: sort ?? "price-asc",
    q: q ?? "",
  });

  const bedOpts = [0, 1, 2, 3, 4, 5];
  const bathOpts = [0, 1, 2, 3, 4];

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-12 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[--brand-light]">
          Explore
        </span>
        <h1 className="mt-3 font-heading text-4xl font-bold text-[--brand] sm:text-5xl">
          All Listings
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-[--stone-600]">
          {filtered.length} home{filtered.length !== 1 ? "s" : ""} across {Object.keys(new Set(filtered.map((l) => l.location))).length} neighborhoods.
        </p>
      </div>

      {/* Filters */}
      <div className="mb-10 flex flex-wrap items-end gap-4">
        <div className="flex-1" />

        {/* Search */}
        <label className="sr-only">Search</label>
        <input
          type="search"
          placeholder="Search listings…"
          defaultValue={q ?? ""}
          className="h-10 rounded-full border border-[--stone-200] bg-white px-4 text-sm text-[--foreground]"
          onChange={(e) => {
            const params = new URLSearchParams(window.location.search);
            if (e.target.value) params.set("q", e.target.value);
            else params.delete("q");
            window.location.search = params.toString();
          }}
        />

        {/* Min Price */}
        <select
          className="h-10 rounded-full border border-[--stone-200] bg-white px-4 text-sm text-[--stone-600]"
          onChange={(e) => {
            const params = new URLSearchParams(window.location.search);
            if (e.target.value) params.set("minPrice", e.target.value);
            else params.delete("minPrice");
            window.location.search = params.toString();
          }}
        >
          <option value="">Min Price</option>
          <option value="500000">$500K</option>
          <option value="1000000">$1M</option>
          <option value="2000000">$2M</option>
          <option value="3000000">$3M</option>
          <option value="5000000">$5M+</option>
        </select>

        {/* Max Price */}
        <select
          className="h-10 rounded-full border border-[--stone-200] bg-white px-4 text-sm text-[--stone-600]"
          onChange={(e) => {
            const params = new URLSearchParams(window.location.search);
            if (e.target.value) params.set("maxPrice", e.target.value);
            else params.delete("maxPrice");
            window.location.search = params.toString();
          }}
        >
          <option value="">Max Price</option>
          <option value="1000000">$1M</option>
          <option value="2000000">$2M</option>
          <option value="3000000">$3M</option>
          <option value="5000000">$5M</option>
          <option value="10000000">$10M+</option>
        </select>

        {/* Beds */}
        <select
          className="h-10 rounded-full border border-[--stone-200] bg-white px-4 text-sm text-[--stone-600]"
          onChange={(e) => {
            const params = new URLSearchParams(window.location.search);
            if (e.target.value && e.target.value !== "0")
              params.set("beds", e.target.value);
            else params.delete("beds");
            window.location.search = params.toString();
          }}
        >
          <option value="">Beds</option>
          {bedOpts.slice(1).map((b) => (
            <option key={b} value={b}>
              {b}+
            </option>
          ))}
        </select>

        {/* Baths */}
        <select
          className="h-10 rounded-full border border-[--stone-200] bg-white px-4 text-sm text-[--stone-600]"
          onChange={(e) => {
            const params = new URLSearchParams(window.location.search);
            if (e.target.value && e.target.value !== "0")
              params.set("baths", e.target.value);
            else params.delete("baths");
            window.location.search = params.toString();
          }}
        >
          <option value="">Baths</option>
          {bathOpts.slice(1).map((b) => (
            <option key={b} value={b}>
              {b}+
            </option>
          ))}
        </select>

        {/* Sort */}
        <select
          className="h-10 rounded-full border border-[--stone-200] bg-white px-4 text-sm text-[--stone-600]"
          onChange={(e) => {
            const params = new URLSearchParams(window.location.search);
            if (e.target.value) params.set("sort", e.target.value);
            else params.delete("sort");
            window.location.search = params.toString();
          }}
        >
          <option value="price-asc">Price: Low</option>
          <option value="price-desc">Price: High</option>
          <option value="beds">Bedrooms</option>
          <option value="sqft">Square Feet</option>
          <option value="newest">Newest</option>
        </select>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="py-20 text-center">
          <p className="text-lg text-[--stone-600]">
            No listings match your filters.
          </p>
          <Link
            href="/listings"
            className="mt-4 inline-flex h-12 items-center gap-2 rounded-full border border-[--brand] px-8 text-sm font-bold uppercase tracking-widest text-[--brand] transition-colors hover:bg-[--brand] hover:text-white"
          >
            Clear Filters
          </Link>
        </div>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((home) => (
            <Link
              key={home.id}
              href={`/listings/${home.id}`}
              className="group overflow-hidden rounded-xl bg-white shadow-md transition-shadow hover:shadow-xl"
            >
              <div className="relative h-56 overflow-hidden bg-[#e0d8cc]">
                <img
                  src={home.images[0]}
                  alt={home.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-bold text-[--brand] backdrop-blur-sm">
                  {formatPrice(home.price)}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg font-bold text-[--brand]">
                  {home.title}
                </h3>
                <p className="mt-1 text-sm text-[--stone-500]">
                  {home.location}
                </p>
                <div className="mt-3 flex gap-3 border-t border-[--stone-200] pt-3 text-xs text-[--stone-500]">
                  <span>
                    <strong className="text-[--brand]">{home.beds}</strong>{" "}
                    bed{home.beds !== 1 ? "s" : ""}
                  </span>
                  <span>
                    <strong className="text-[--brand]">{home.baths}</strong>{" "}
                    bath{home.baths !== 1 ? "s" : ""}
                  </span>
                  <span>
                    <strong className="text-[--brand]">
                      {home.sqft.toLocaleString()}
                    </strong>{" "}
                    sqft
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}