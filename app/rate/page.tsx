"use client";

import Link from "next/link";
import { useState } from "react";

interface RateRow {
  product: string;
  rate: number;
  apr: number;
  points: number;
}

const todayRates: RateRow[] = [
  { product: "30-Year Fixed", rate: 6.125, apr: 6.285, points: 0.5 },
  { product: "15-Year Fixed", rate: 5.375, apr: 5.495, points: 0.25 },
  { product: "30-Year Jumbo", rate: 6.25, apr: 6.38, points: 0.75 },
  { product: "7/6 ARM", rate: 5.75, apr: 6.02, points: 0.375 },
  { product: "5/6 ARM", rate: 5.5, apr: 5.88, points: 0.5 },
  { product: "FHA 30-Year", rate: 5.875, apr: 6.15, points: 0.625 },
];

export default function RatePage() {
  const [price, setPrice] = useState("1250000");
  const [downPayment, setDownPayment] = useState("250000");
  const [rateInput, setRateInput] = useState("6.125");
  const [term, setTerm] = useState("30");

  const p = Number(price) || 0;
  const dp = Number(downPayment) || 0;
  const r = (Number(rateInput) || 6.125) / 100 / 12;
  const n = (Number(term) || 30) * 12;
  const principal = Math.max(p - dp, 0);

  const monthly =
    principal > 0 && r > 0 && n > 0
      ? (principal * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1)
      : 0;

  return (
    <div className="min-h-screen bg-stone-100">
      {/* Nav */}
      <header className="sticky top-0 z-50 w-full border-b border-stone-200/60 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="font-heading text-2xl tracking-wide text-sage">
            Nest Realty
          </Link>
          <nav className="items-center gap-6 flex">
            <Link href="/" className="text-sm font-medium uppercase tracking-widest text-stone-600 hover:text-sage">Home</Link>
            <Link href="/listings" className="text-sm font-medium uppercase tracking-widest text-stone-600 hover:text-sage">Listings</Link>
            <Link href="/rate" className="text-sm font-medium uppercase tracking-widest text-sage">Rates</Link>
            <Link href="/neighborhoods" className="text-sm font-medium uppercase tracking-widest text-stone-600 hover:text-sage">Neighborhoods</Link>
            <Link href="/schedule-tour" className="text-sm font-medium uppercase tracking-widest text-stone-600 hover:text-sage">Tour</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-sage py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brass-light">Financing</span>
          <h1 className="mt-3 font-heading text-4xl font-bold text-white sm:text-5xl">Today&apos;s Mortgage Rates</h1>
          <p className="mx-auto mt-4 max-w-xl text-stone-200">
            Current rates as of {new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}.
            Data is for informational purposes and may not reflect your actual rate.
          </p>
        </div>
      </section>

      {/* Rate Table */}
      <section className="mx-auto max-w-5xl -mt-8 px-4 sm:px-6">
        <div className="overflow-hidden rounded-xl bg-white shadow-lg">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-stone-200 bg-stone-50">
                <th className="px-6 py-4 font-heading font-semibold text-sage">Product</th>
                <th className="px-6 py-4 font-heading font-semibold text-sage">Rate</th>
                <th className="px-6 py-4 font-heading font-semibold text-sage">APR</th>
                <th className="px-6 py-4 font-heading font-semibold text-sage">Points</th>
              </tr>
            </thead>
            <tbody>
              {todayRates.map((row) => (
                <tr
                  key={row.product}
                  className="border-b border-stone-100 transition-colors hover:bg-stone-50"
                >
                  <td className="px-6 py-4 font-medium text-stone-800">{row.product}</td>
                  <td className="px-6 py-4">
                    <span className="text-lg font-bold text-sage">{row.rate.toFixed(3)}%</span>
                  </td>
                  <td className="px-6 py-4 text-stone-600">{row.apr.toFixed(3)}%</td>
                  <td className="px-6 py-4 text-stone-600">{row.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Mortgage Calculator */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <div className="rounded-xl bg-white p-8 shadow-lg md:p-12">
          <h2 className="font-heading text-3xl font-bold text-sage">Mortgage Calculator</h2>
          <p className="mt-2 text-stone-600">Estimate your monthly payment based on price, down payment, rate, and term.</p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-stone-600 mb-1">Home Price</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400">$</span>
                  <input
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full rounded-lg border border-stone-300 bg-white py-2.5 pl-8 pr-3 text-sm text-stone-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-stone-600 mb-1">Down Payment</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400">$</span>
                  <input
                    type="text"
                    value={downPayment}
                    onChange={(e) => setDownPayment(e.target.value)}
                    className="w-full rounded-lg border border-stone-300 bg-white py-2.5 pl-8 pr-3 text-sm text-stone-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-stone-600 mb-1">Annual Rate (%)</label>
                <input
                  type="text"
                  value={rateInput}
                  onChange={(e) => setRateInput(e.target.value)}
                  className="w-full rounded-lg border border-stone-300 bg-white py-2.5 px-3 text-sm text-stone-800"
                />
              </div>

              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-stone-600 mb-1">Term (years)</label>
                <select
                  value={term}
                  onChange={(e) => setTerm(e.target.value)}
                  className="w-full rounded-lg border border-stone-300 bg-white py-2.5 px-3 text-sm text-stone-800"
                >
                  <option value="30">30 years</option>
                  <option value="20">20 years</option>
                  <option value="15">15 years</option>
                  <option value="10">10 years</option>
                </select>
              </div>
            </div>

            {/* Result */}
            <div className="flex flex-col justify-center rounded-xl bg-sage/5 p-8 text-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">Monthly Payment</span>
              <div className="mt-2 font-heading text-5xl font-bold text-sage">
                {monthly > 0
                  ? `$${Math.round(monthly).toLocaleString()}`
                  : "$0"}
              </div>
              <div className="mt-4 space-y-1 text-sm text-stone-500">
                <p>Loan Amount: <span className="font-semibold text-sage">${Math.round(principal).toLocaleString()}</span></p>
                {principal > 0 && (
                  <p>Total Interest: <span className="font-semibold text-sage">${Math.round(monthly * n - principal).toLocaleString()}</span></p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="mx-auto max-w-3xl px-4 pb-16">
        <div className="text-xs leading-relaxed text-stone-500">
          <p>Rates shown are for informational purposes only and do not constitute a loan commitment or interest rate lock. Actual rates depend on credit score, loan-to-value ratio, occupancy type, and other factors. Contact a licensed mortgage advisor for a personalized quote. Nest Realty is not a lender.</p>
        </div>
      </section>

      {/* Footer */}
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