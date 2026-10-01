"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { getListing, formatPriceFull, neighborhoods } from "@/lib/data";

export default function ListingDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = typeof params.id === "string" ? params.id : "";
  const listing = getListing(id);

  // Mortgage calc state
  const [downPercent, setDownPercent] = useState(20);
  const [rate, setRate] = useState(6.5);
  const [years, setYears] = useState(30);

  if (!listing) {
    return (
      <div className="min-h-screen bg-stone-100 flex items-center justify-center">
        <div className="text-center py-20">
          <div className="font-heading text-3xl text-sage">Listing not found</div>
          <p className="mt-3 text-stone-600">The listing you're looking for doesn't exist.</p>
          <Link href="/listings" className="mt-4 inline-block rounded-full bg-brass px-6 py-3 text-white text-sm font-bold uppercase tracking-widest hover:bg-brass-light">
            Back to Listings
          </Link>
        </div>
      </div>
    );
  }

  const loanAmount = listing.price * (1 - downPercent / 100);
  const monthlyRate = rate / 100 / 12;
  const numPayments = years * 12;
  let monthlyPayment = 0;
  if (monthlyRate > 0 && numPayments > 0) {
    monthlyPayment =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
      (Math.pow(1 + monthlyRate, numPayments) - 1);
  }

  const nhood = neighborhoods.find((n) => n.slug === listing.neighborhood);

  // Saved state
  const listingId = listing.id;
  const [saved, setSaved] = useState(() => {
    try {
      const raw = localStorage.getItem("nest-saved");
      if (raw) return JSON.parse(raw).includes(listingId);
    } catch {}
    return false;
  });

  function toggleSave() {
    try {
      const raw = localStorage.getItem("nest-saved") || "[]";
      const arr = JSON.parse(raw);
      if (arr.includes(listingId)) {
        const next = arr.filter((x: string) => x !== listingId);
        localStorage.setItem("nest-saved", JSON.stringify(next));
        setSaved(false);
      } else {
        arr.push(listingId);
        localStorage.setItem("nest-saved", JSON.stringify(arr));
        setSaved(true);
      }
    } catch {
      localStorage.setItem("nest-saved", JSON.stringify([listingId]));
      setSaved(true);
    }
  }

  return (
    <div className="bg-stone-100 min-h-screen">
      {/* Nav */}
      <header className="sticky top-0 z-50 w-full border-b border-stone-200/60 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="font-heading text-2xl tracking-wide text-sage">Nest Realty</Link>
          <nav className="items-center gap-6 flex">
            <Link href="/listings" className="text-sm font-medium uppercase tracking-widest text-sage">Listings</Link>
            <Link href="/neighborhoods" className="text-sm font-medium uppercase tracking-widest text-stone-600 hover:text-sage">Neighborhoods</Link>
            <Link href="/saved" className="text-sm font-medium uppercase tracking-widest text-stone-600 hover:text-sage">Saved</Link>
            <Link href="/" className="text-sm font-medium uppercase tracking-widest text-stone-600 hover:text-sage">Home</Link>
          </nav>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 text-sm">
        <Link href="/listings" className="text-stone-500 hover:text-sage">← All Listings</Link>
      </div>

      {/* ---- Hero Image Placeholder ---- */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-sage/10 via-stone-200 to-sage/5 h-96">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-8xl opacity-10 font-heading">⟐</span>
          </div>
          <div className="absolute bottom-4 right-4 flex gap-2">
            <span className="rounded-lg bg-white/90 px-3 py-1 text-xs text-stone-700 backdrop-blur-sm">📷 1 of {listing.images.length}</span>
          </div>
          <button
            type="button"
            onClick={toggleSave}
            className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-2xl shadow-lg hover:bg-white transition-all"
            aria-label={saved ? "Unsave" : "Save"}
          >
            {saved ? "♥" : "♡"}
          </button>
        </div>
      </div>

      {/* ---- Main Content ---- */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Left: Details */}
          <div className="lg:col-span-3 space-y-8">
            <div>
              <h1 className="font-heading text-3xl font-bold text-sage-dark">{listing.title}</h1>
              <p className="mt-2 text-lg text-stone-600">{listing.address}</p>
              <div className="mt-2">
                {nhood && <span className="inline-block rounded-full bg-sage/10 px-4 py-1 text-xs font-medium text-sage">{nhood.name}</span>}
                <span className="inline-block rounded-full bg-brass/10 px-4 py-1 text-xs font-medium text-brass ml-2">{listing.status === "active" ? "Active" : listing.status === "pending" ? "Pending" : "Sold"}</span>
              </div>
              <div className="mt-6">
                <span className="font-heading text-4xl font-bold text-sage-dark">{formatPriceFull(listing.price)}</span>
              </div>
            </div>

            <hr className="border-stone-200" />

            <div>
              <h2 className="font-heading text-xl font-semibold text-sage-dark">Description</h2>
              <p className="mt-3 text-stone-600 leading-relaxed whitespace-pre-line">{listing.description}</p>
            </div>

            <hr className="border-stone-200" />

            <div>
              <h2 className="font-heading text-xl font-semibold text-sage-dark">Property Details</h2>
              <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-4 text-sm">
                <div className="text-stone-500">Bedrooms</div>
                <div className="font-semibold text-sage-dark">{listing.beds}</div>
                <div className="text-stone-500">Bathrooms</div>
                <div className="font-semibold text-sage-dark">{listing.baths}</div>
                <div className="text-stone-500">Square Footage</div>
                <div className="font-semibold text-sage-dark">{listing.sqft.toLocaleString()} sqft</div>
                <div className="text-stone-500">Lot Size</div>
                <div className="font-semibold text-sage-dark">{listing.lotSize}</div>
                <div className="text-stone-500">Year Built</div>
                <div className="font-semibold text-sage-dark">{listing.yearBuilt}</div>
                <div className="text-stone-500">Agent</div>
                <div className="font-semibold text-sage-dark">{listing.agent}</div>
              </div>
            </div>
          </div>

          {/* Right: Mortgage Calculator */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl bg-white shadow-md p-6">
              <h3 className="font-heading text-xl font-semibold text-sage-dark">Mortgage Estimator</h3>
              <p className="mt-1 text-xs text-stone-500">Estimate your monthly payment</p>

              <div className="mt-5 space-y-4">
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-stone-600">Price</label>
                  <div className="mt-1 text-xl font-bold text-sage-dark">{formatPriceFull(listing.price)}</div>
                </div>

                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-stone-600">Down Payment</label>
                  <div className="flex items-center gap-2 mt-1">
                    <input
                      type="range"
                      min={5}
                      max={50}
                      step={1}
                      value={downPercent}
                      onChange={(e) => setDownPercent(Number(e.target.value))}
                      className="w-full accent-brass"
                    />
                    <span className="text-sm font-semibold text-sage-dark w-12">{downPercent}%</span>
                  </div>
                  <div className="text-xs text-stone-500">
                    {formatPriceFull(Math.round(listing.price * downPercent / 100))} down
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-stone-600">Annual Interest Rate</label>
                  <div className="flex items-center gap-2 mt-1">
                    <input
                      type="range"
                      min={2}
                      max={10}
                      step={0.1}
                      value={rate}
                      onChange={(e) => setRate(Number(e.target.value))}
                      className="w-full accent-brass"
                    />
                    <span className="text-sm font-semibold text-sage-dark w-14">{rate}%</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-stone-600">Loan Term</label>
                  <div className="flex mt-1 gap-2">
                    {[15, 20, 25, 30].map((y) => (
                      <button
                        key={y}
                        type="button"
                        onClick={() => setYears(y)}
                        className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${years === y ? "bg-brass text-white" : "bg-stone-100 text-stone-700 hover:bg-stone-200"}`}
                      >
                        {y}y
                      </button>
                    ))}
                  </div>
                </div>

                <hr className="border-stone-200" />

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-stone-600">Monthly Payment</span>
                  <span className="text-2xl font-bold font-heading text-sage-dark">
                    ${monthlyPayment > 0 ? Math.round(monthlyPayment).toLocaleString() : "—"}
                  </span>
                </div>
                {monthlyPayment > 0 && (
                  <div className="text-xs text-stone-500">
                    Loan amount: {formatPriceFull(Math.round(loanAmount))} · {years} year term
                  </div>
                )}
              </div>
            </div>

            {/* Inquiry CTA */}
            <div className="rounded-2xl bg-white shadow-md p-6 text-center">
              <h3 className="font-heading text-lg font-semibold text-sage-dark">Interested?</h3>
              <p className="mt-2 text-sm text-stone-600">Speak with {listing.agent} about this property.</p>
              <button
                type="button"
                className="mt-4 w-full rounded-full bg-brass px-6 py-3 text-white text-sm font-bold uppercase tracking-widest transition-all hover:bg-brass-light"
                onClick={() => alert("Inquiry sent to " + listing.agent + "! We'll be in touch shortly.")}
              >
                Inquire About This Home
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-sage-dark text-stone-50 py-12 mt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="font-heading text-2xl tracking-wide">Nest Realty</div>
          <p className="mt-3 text-sm text-stone-400">Boutique Residential Brokerage</p>
          <p className="mt-2 text-xs text-stone-500">&copy; 2026 Nest Realty.</p>
        </div>
      </footer>
    </div>
  );
}