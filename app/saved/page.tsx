"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { listings, formatPrice } from "@/lib/data";
import type { Listing } from "@/lib/data";

export default function SavedHomesPage() {
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("nest-saved");
      if (raw) {
        const parsed = JSON.parse(raw);
        setSavedIds(Array.isArray(parsed) ? parsed : []);
      }
    } catch {
      setSavedIds([]);
    }
    setLoaded(true);
  }, []);

  const savedListings: Listing[] = savedIds
    .map((id) => listings.find((l) => l.id === id))
    .filter((l): l is Listing => l !== undefined);

  function removeSaved(id: string) {
    const next = savedIds.filter((x) => x !== id);
    setSavedIds(next);
    localStorage.setItem("nest-saved", JSON.stringify(next));
  }

  function clearAll() {
    setSavedIds([]);
    localStorage.setItem("nest-saved", JSON.stringify([]));
  }

  return (
    <div className="min-h-screen bg-stone-100">
      <header className="sticky top-0 z-50 w-full border-b border-stone-200/60 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="font-heading text-2xl tracking-wide text-sage">Nest Realty</Link>
          <nav className="items-center gap-6 flex">
            <Link href="/listings" className="text-sm font-medium uppercase tracking-widest text-stone-600 hover:text-sage">Listings</Link>
            <Link href="/neighborhoods" className="text-sm font-medium uppercase tracking-widest text-stone-600 hover:text-sage">Neighborhoods</Link>
            <Link href="/saved" className="text-sm font-medium uppercase tracking-widest text-sage">Saved</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brass/15 via-stone-100 to-sage/10 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl font-bold text-sage-dark sm:text-5xl">Saved Homes</h1>
          <p className="mx-auto mt-3 max-w-xl text-stone-600">
            Properties you&apos;ve saved for quick reference. Tap the heart again to remove.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {!loaded ? (
          <div className="text-center py-20 text-stone-500">Loading saved homes...</div>
        ) : savedListings.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4 opacity-20">♡</div>
            <h2 className="font-heading text-2xl text-sage-dark">No saved homes yet</h2>
            <p className="mt-2 text-stone-500 max-w-md mx-auto">
              Browse our listings and tap the heart icon on any property to save it here.
            </p>
            <Link
              href="/listings"
              className="mt-6 inline-block rounded-full bg-sage px-6 py-3 text-sm font-bold uppercase tracking-widest text-white hover:bg-sage-light transition-colors"
            >
              Browse Listings
            </Link>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-stone-500">
                <span className="font-semibold text-sage">{savedListings.length}</span> saved home{savedListings.length !== 1 ? "s" : ""}
              </p>
              <button
                type="button"
                onClick={clearAll}
                className="text-xs font-medium uppercase tracking-widest text-stone-500 hover:text-red-500 transition-colors"
              >
                Clear All
              </button>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {savedListings.map((listing) => (
                <article
                  key={listing.id}
                  className="group rounded-2xl bg-white border border-stone-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  {/* Image placeholder */}
                  <Link href={`/listings/${listing.id}`} className="block relative h-56 bg-gradient-to-br from-sage/10 via-stone-200 to-sage/5 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl opacity-10 font-heading">⟐</span>
                    </div>
                    <div className="absolute top-3 right-3 z-10">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          removeSaved(listing.id);
                        }}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-lg shadow-md hover:bg-white transition-all"
                        aria-label="Remove from saved"
                      >
                        ♥
                      </button>
                    </div>
                  </Link>

                  {/* Card body */}
                  <div className="p-5">
                    <Link href={`/listings/${listing.id}`}>
                      <h3 className="font-heading text-lg font-bold text-sage-dark hover:text-sage transition-colors">{listing.title}</h3>
                    </Link>
                    <p className="mt-1 text-sm text-stone-500">{listing.address}</p>
                    <div className="mt-2">
                      <span className="font-heading text-xl font-bold text-sage-dark">{formatPrice(listing.price)}</span>
                    </div>
                    <div className="mt-3 flex gap-3 text-xs text-stone-500">
                      <span>{listing.beds} bed{listing.beds !== 1 ? "s" : ""}</span>
                      <span>{listing.baths} bath{listing.baths !== 1 ? "s" : ""}</span>
                      <span>{listing.sqft.toLocaleString()} sqft</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
      </section>

      <footer className="border-t border-stone-200 bg-white py-8 mt-auto">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-xs text-stone-500">
          <span className="font-heading text-lg text-sage">Nest Realty</span>
          <p className="mt-2">Boutique Residential Brokerage &middot; San Francisco Bay Area</p>
        </div>
      </footer>
    </div>
  );
}