"use client";

import Link from "next/link";
import { useState } from "react";
import { formatPriceFull } from "@/lib/data";

const LOAN_TERMS = [15, 20, 25, 30];

export default function RatePage() {
  const [homePrice, setHomePrice] = useState(850000);
  const [downPercent, setDownPercent] = useState(20);
  const [rate, setRate] = useState(6.5);
  const [years, setYears] = useState(30);

  const loanAmount = homePrice * (1 - downPercent / 100);
  const monthlyRate = rate / 100 / 12;
  const numPayments = years * 12;
  let monthlyPayment = 0;
  if (monthlyRate > 0 && numPayments > 0) {
    monthlyPayment =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
      (Math.pow(1 + monthlyRate, numPayments) - 1);
  }

  const totalPaid = monthlyPayment * numPayments;
  const totalInterest = totalPaid - loanAmount;

  return (
    <div className="min-h-screen bg-stone-100">
      {/* Nav */}
      <header className="sticky top-0 z-50 w-full border-b border-stone-200/60 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="font-heading text-2xl tracking-wide text-sage">Nest Realty</Link>
          <nav className="items-center gap-6 flex">
            <Link href="/listings" className="text-sm font-medium uppercase tracking-widest text-stone-600 hover:text-sage">Listings</Link>
            <Link href="/neighborhoods" className="text-sm font-medium uppercase tracking-widest text-stone-600 hover:text-sage">Neighborhoods</Link>
            <Link href="/rate" className="text-sm font-medium uppercase tracking-widest text-sage">Rate Calculator</Link>
            <Link href="/schedule-tour" className="text-sm font-medium uppercase tracking-widest text-stone-600 hover:text-sage">Tour</Link>
            <Link href="/saved" className="text-sm font-medium uppercase tracking-widest text-stone-600 hover:text-sage">Saved</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sage/15 via-stone-100 to-brass/10 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block rounded-full bg-brass/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brass">Financial Tools</span>
          <h1 className="mt-4 font-heading text-4xl font-bold text-sage-dark sm:text-5xl">Mortgage Rate Calculator</h1>
          <p className="mx-auto mt-3 max-w-xl text-stone-600">
            Estimate your monthly mortgage payments based on current market rates. Adjust the sliders to find what works for your budget.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Controls */}
          <div className="rounded-2xl bg-white shadow-md p-8 space-y-5">
            <h2 className="font-heading text-xl font-semibold text-sage-dark">Adjust Your Numbers</h2>

            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-stone-600 mb-1.5">Home Price</label>
              <div className="flex items-center gap-3">
                <span className="text-stone-500 text-sm">$</span>
                <input
                  type="range"
                  min={200000}
                  max={15000000}
                  step={10000}
                  value={homePrice}
                  onChange={(e) => setHomePrice(Number(e.target.value))}
                  className="w-full accent-brass"
                />
              </div>
              <div className="mt-1 text-sm font-semibold text-sage-dark">{formatPriceFull(homePrice)}</div>
            </div>

            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-stone-600 mb-1.5">Down Payment</label>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min={5}
                  max={50}
                  step={1}
                  value={downPercent}
                  onChange={(e) => setDownPercent(Number(e.target.value))}
                  className="w-full accent-brass"
                />
                <span className="text-sm font-semibold text-sage-dark w-14 whitespace-nowrap">{downPercent}%</span>
              </div>
              <div className="flex justify-between text-xs text-stone-500">
                <span>5%</span>
                <span>{formatPriceFull(Math.round(homePrice * downPercent / 100))} down</span>
                <span>50%</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-stone-600 mb-1.5">Annual Interest Rate</label>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min={2}
                  max={10}
                  step={0.1}
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full accent-brass"
                />
                <span className="text-sm font-semibold text-sage-dark w-14 whitespace-nowrap">{rate}%</span>
              </div>
              <div className="flex justify-between text-xs text-stone-500">
                <span>2%</span>
                <span>10%</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-stone-600 mb-1.5">Loan Term</label>
              <div className="flex gap-2 mt-1">
                {LOAN_TERMS.map((y) => (
                  <button
                    key={y}
                    type="button"
                    onClick={() => setYears(y)}
                    className={`flex-1 rounded-lg px-3 py-2.5 text-sm font-medium transition-all ${years === y ? "bg-brass text-white shadow-sm" : "bg-stone-100 text-stone-700 hover:bg-stone-200"}`}
                  >
                    {y}-Year
                  </button>
                ))}
              </div>
            </div>

            {/* Current Market Rates Reference */}
            <div className="rounded-xl bg-sage/5 p-4 text-xs text-stone-600">
              <span className="font-semibold text-sage-dark">Current market rates (Oct 2026):</span> 30-yr fixed ~6.5%, 15-yr fixed ~5.8%. Rates shown are estimates. Contact a lender for a personalized quote.
            </div>
          </div>

          {/* Results */}
          <div className="rounded-2xl bg-white shadow-md p-8 space-y-6">
            <h2 className="font-heading text-xl font-semibold text-sage-dark">Your Estimated Payment</h2>

            <div className="text-center py-6">
              <div className="text-xs font-medium uppercase tracking-wider text-stone-500">Monthly Payment</div>
              <div className="mt-2 font-heading text-5xl font-bold text-sage-dark">
                ${monthlyPayment > 0 ? Math.round(monthlyPayment).toLocaleString() : "—"}
              </div>
              <div className="mt-2 text-xs text-stone-500">per month</div>
            </div>

            <hr className="border-stone-200" />

            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-stone-500">Loan Amount</span>
                <span className="font-semibold text-sage-dark">{formatPriceFull(Math.round(loanAmount))}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Total Interest Paid</span>
                <span className="font-semibold text-sage-dark">{totalInterest > 0 ? formatPriceFull(Math.round(totalInterest)) : "—"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Total Cost</span>
                <span className="font-semibold text-sage-dark">{totalPaid > 0 ? formatPriceFull(Math.round(totalPaid)) : "—"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Down Payment</span>
                <span className="font-semibold text-sage-dark">{formatPriceFull(Math.round(homePrice * downPercent / 100))}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Term</span>
                <span className="font-semibold text-sage-dark">{years} years</span>
              </div>
            </div>

            <hr className="border-stone-200" />

            <div className="bg-sage/5 rounded-xl p-4 text-sm text-stone-600">
              <p className="font-semibold text-sage-dark mb-1">💡 Next Steps</p>
              <p className="text-xs leading-relaxed">
                This estimate does not include property taxes, homeowners insurance, HOA dues, or mortgage insurance.
                Connect with a Nest Realty agent to get pre-approved and find your dream home.
              </p>
            </div>

            <Link
              href="/listings"
              className="block w-full rounded-full bg-sage py-3 text-sm font-bold uppercase tracking-widest text-white text-center hover:bg-sage-light transition-colors"
            >
              Browse Listings at This Price Range
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-white py-8 mt-auto">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-xs text-stone-500">
          <span className="font-heading text-lg text-sage">Nest Realty</span>
          <p className="mt-2">Boutique Residential Brokerage &middot; San Francisco Bay Area</p>
        </div>
      </footer>
    </div>
  );
}