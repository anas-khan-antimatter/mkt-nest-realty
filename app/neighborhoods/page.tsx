"use client";

import Link from "next/link";
import { useState } from "react";
import { neighborhoods, listings } from "@/lib/data";

// Detailed neighborhood guide data
const neighborhoodGuides: Record<string, { vibe: string; walkScore: number; transitScore: number; highlights: string[]; avgPrice: string }> = {
  "pacific-heights": {
    vibe: "Grand dame of San Francisco — stately mansions, panoramic bay views, and quiet tree-lined lanes.",
    walkScore: 92,
    transitScore: 85,
    highlights: ["Lyon Street Steps", "Wave Organ", "Palace of the Legion of Honor", "Boutique shopping on Fillmore"],
    avgPrice: "$4.2M",
  },
  "noe-valley": {
    vibe: "Village charm with a bustling main street — weekend farmers' markets and sidewalk cafés define the pace.",
    walkScore: 94,
    transitScore: 80,
    highlights: ["24th Street shops", "Noe Valley Bakery", "Dolores Park", "Twin Peaks views"],
    avgPrice: "$2.9M",
  },
  "marin-county": {
    vibe: "Expansive redwood estates and coastal trails — a nature lover's sanctuary minutes from the city.",
    walkScore: 55,
    transitScore: 40,
    highlights: ["Mount Tamalpais", "Muir Woods", "Sausalito waterfront", "Mill Valley downtown"],
    avgPrice: "$3.5M",
  },
  "russian-hill": {
    vibe: "Urban elegance meets Lombard Street curves — sweeping bay panoramas from every block.",
    walkScore: 96,
    transitScore: 90,
    highlights: ["Lombard Street", "Russian Hill Park", "Polk Street dining", "Golden Gate Bridge views"],
    avgPrice: "$4.8M",
  },
  "cow-hollow": {
    vibe: "Bustling waterfront with Victorian flats — Union Street's restaurants and boutiques are your backyard.",
    walkScore: 97,
    transitScore: 88,
    highlights: ["Union Street", "Fort Mason", "Marina Green", "Chestnut Street"],
    avgPrice: "$3.2M",
  },
  "presidio-heights": {
    vibe: "Leafy lanes lined with regal estates — quiet luxury at the edge of the Presidio national park.",
    walkScore: 78,
    transitScore: 65,
    highlights: ["Presidio National Park", "Baker Beach", "Washington Square", "Exclusive Jackson Street"],
    avgPrice: "$7.2M",
  },
};

export default function NeighborhoodsPage() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-stone-100">
      {/* Nav */}
      <header className="sticky top-0 z-50 w-full border-b border-stone-200/60 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="font-heading text-2xl tracking-wide text-sage">Nest Realty</Link>
          <nav className="items-center gap-6 flex">
            <Link href="/listings" className="text-sm font-medium uppercase tracking-widest text-stone-600 hover:text-sage">Listings</Link>
            <Link href="/neighborhoods" className="text-sm font-medium uppercase tracking-widest text-sage">Neighborhoods</Link>
            <Link href="/agents" className="text-sm font-medium uppercase tracking-widest text-stone-600 hover:text-sage">Agents</Link>
            <Link href="/schedule-tour" className="text-sm font-medium uppercase tracking-widest text-stone-600 hover:text-sage">Tour</Link>
            <Link href="/saved" className="text-sm font-medium uppercase tracking-widest text-stone-600 hover:text-sage">Saved</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sage/20 via-stone-100 to-sage/10 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block rounded-full bg-brass/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brass">Area Guides</span>
          <h1 className="mt-4 font-heading text-4xl font-bold text-sage-dark sm:text-5xl">Neighborhood Guides</h1>
          <p className="mx-auto mt-4 max-w-2xl text-stone-600 text-lg">
            Every San Francisco neighborhood tells a different story. Explore our curated guides to find the one
            that feels like home.
          </p>
        </div>
      </section>

      {/* Neighborhood cards */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {neighborhoods.map((hood) => {
            const guide = neighborhoodGuides[hood.slug];
            const hoodListings = listings.filter((l) => l.neighborhood === hood.slug);
            const activeListings = hoodListings.filter((l) => l.status === "active");
            const isExpanded = expanded === hood.slug;

            return (
              <article
                key={hood.slug}
                className="group rounded-2xl bg-white border border-stone-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                {/* Card header */}
                <div className="relative h-48 bg-gradient-to-br from-sage/10 via-stone-200 to-stone-100 flex items-center justify-center overflow-hidden">
                  <div className="text-center">
                    <div className="text-5xl opacity-15 font-heading">⟐</div>
                    <h2 className="mt-2 font-heading text-2xl font-bold text-sage-dark">{hood.name}</h2>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-stone-600 text-sm leading-relaxed">{hood.description}</p>

                  {/* Quick stats */}
                  <div className="flex gap-4 text-xs text-stone-500">
                    <span className="font-semibold text-sage">{activeListings.length} active listing{activeListings.length !== 1 ? "s" : ""}</span>
                    {guide && (
                      <>
                        <span>🚶 Walk Score {guide.walkScore}</span>
                        <span>🚌 Transit {guide.transitScore}</span>
                      </>
                    )}
                  </div>

                  {/* Expandable guide content */}
                  {guide && (
                    <div>
                      <button
                        type="button"
                        onClick={() => setExpanded(isExpanded ? null : hood.slug)}
                        className="text-xs font-medium uppercase tracking-widest text-brass hover:text-brass-light transition-colors"
                      >
                        {isExpanded ? "▲ Show Less" : "▼ Guide Details"}
                      </button>
                      {isExpanded && (
                        <div className="mt-3 space-y-3 text-sm text-stone-600">
                          <p className="italic leading-relaxed">&ldquo;{guide.vibe}&rdquo;</p>
                          <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-1">Average Price</span>
                            <span className="text-lg font-bold text-sage-dark">{guide.avgPrice}</span>
                          </div>
                          <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-1">Highlights</span>
                            <ul className="list-disc list-inside space-y-1">
                              {guide.highlights.map((h) => (
                                <li key={h}>{h}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  <hr className="border-stone-100" />

                  {/* Action */}
                  <div className="flex gap-3">
                    <Link
                      href={`/listings?neighborhood=${hood.slug}`}
                      className="flex-1 text-center rounded-full bg-sage px-4 py-2 text-xs font-bold uppercase tracking-widest text-white hover:bg-sage-light transition-colors"
                    >
                      View Listings
                    </Link>
                    <button
                      type="button"
                      onClick={() => setExpanded(isExpanded ? null : hood.slug)}
                      className="rounded-full border border-stone-300 px-4 py-2 text-xs font-bold uppercase tracking-widest text-stone-600 hover:border-sage hover:text-sage transition-colors"
                    >
                      Guide
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-xs text-stone-500">
          <span className="font-heading text-lg text-sage">Nest Realty</span>
          <p className="mt-2">Boutique Residential Brokerage &middot; San Francisco Bay Area</p>
        </div>
      </footer>
    </div>
  );
}