"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { listings, neighborhoods } from "@/lib/data";

type FormData = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  listingId: string;
  neighborhood: string;
  message: string;
};

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "10:00",
  listingId: "",
  neighborhood: "",
  message: "",
};

const TIME_SLOTS = [
  "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "13:00", "13:30",
  "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00",
];

export default function ScheduleTourPage() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Restore from query param ?listing= for pre-fill
  useEffect(() => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const listingParam = params.get("listing");
    if (listingParam) {
      setForm((f) => ({ ...f, listingId: listingParam }));
    }
  }, []);

  function update(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!form.name || !form.email || !form.date) {
      setError("Name, email, and a tour date are required.");
      return;
    }

    if (!form.email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    setSubmitted(true);
  }

  const selectedListing = listings.find((l) => l.id === form.listingId);

  if (submitted) {
    return (
      <div className="min-h-screen bg-stone-100 flex flex-col">
        <header className="sticky top-0 z-50 w-full border-b border-stone-200/60 bg-white/95 backdrop-blur-sm">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
            <Link href="/" className="font-heading text-2xl tracking-wide text-sage">Nest Realty</Link>
            <nav className="items-center gap-6 flex">
              <Link href="/listings" className="text-sm font-medium uppercase tracking-widest text-stone-600 hover:text-sage">Listings</Link>
              <Link href="/agents" className="text-sm font-medium uppercase tracking-widest text-stone-600 hover:text-sage">Agents</Link>
              <Link href="/schedule-tour" className="text-sm font-medium uppercase tracking-widest text-sage">Schedule Tour</Link>
            </nav>
          </div>
        </header>
        <div className="flex-1 flex items-center justify-center">
          <div className="max-w-lg mx-auto px-4 text-center py-20">
            <div className="text-6xl mb-4">✓</div>
            <h1 className="font-heading text-3xl font-bold text-sage-dark">Tour Request Submitted</h1>
            <p className="mt-4 text-stone-600">
              Thank you, {form.name}. An agent will confirm your {form.date} tour within 24 hours.
            </p>
            {selectedListing && (
              <p className="mt-2 text-stone-500 text-sm">
                Property: {selectedListing.title}
              </p>
            )}
            <div className="mt-8 flex gap-4 justify-center">
              <Link href="/listings" className="rounded-full bg-sage px-6 py-3 text-sm font-bold uppercase tracking-widest text-white hover:bg-sage-light transition-colors">
                Back to Listings
              </Link>
              <button
                type="button"
                onClick={() => { setSubmitted(false); setForm(initialForm); }}
                className="rounded-full border border-stone-300 px-6 py-3 text-sm font-bold uppercase tracking-widest text-stone-600 hover:border-sage hover:text-sage transition-colors"
              >
                Schedule Another
              </button>
            </div>
          </div>
        </div>
        <footer className="border-t border-stone-200 bg-white py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-xs text-stone-500">
            <span className="font-heading text-lg text-sage">Nest Realty</span>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-100 flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-stone-200/60 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="font-heading text-2xl tracking-wide text-sage">Nest Realty</Link>
          <nav className="items-center gap-6 flex">
            <Link href="/listings" className="text-sm font-medium uppercase tracking-widest text-stone-600 hover:text-sage">Listings</Link>
            <Link href="/neighborhoods" className="text-sm font-medium uppercase tracking-widest text-stone-600 hover:text-sage">Neighborhoods</Link>
            <Link href="/agents" className="text-sm font-medium uppercase tracking-widest text-stone-600 hover:text-sage">Agents</Link>
            <Link href="/schedule-tour" className="text-sm font-medium uppercase tracking-widest text-sage">Schedule Tour</Link>
            <Link href="/saved" className="text-sm font-medium uppercase tracking-widest text-stone-600 hover:text-sage">Saved</Link>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-sage/20 via-stone-100 to-brass/10 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block rounded-full bg-brass/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brass">Book a Visit</span>
          <h1 className="mt-4 font-heading text-4xl font-bold text-sage-dark sm:text-5xl">Schedule a Tour</h1>
          <p className="mx-auto mt-3 max-w-xl text-stone-600">
            Ready to see a property in person? Fill out the form below and an agent will confirm your appointment.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-stone-200 shadow-sm p-8 space-y-6">
          {error && (
            <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}

          {/* Name & Email */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">Full Name *</label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                className="rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm text-stone-800 placeholder:text-stone-400 focus:border-brass focus:ring-1 focus:ring-brass transition-colors"
                placeholder="Jane Doe"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">Email *</label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className="rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm text-stone-800 placeholder:text-stone-400 focus:border-brass focus:ring-1 focus:ring-brass transition-colors"
                placeholder="jane@example.com"
              />
            </div>
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">Phone</label>
            <input
              id="phone"
              type="tel"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              className="rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm text-stone-800 placeholder:text-stone-400 focus:border-brass focus:ring-1 focus:ring-brass transition-colors"
              placeholder="(415) 555-0123"
            />
          </div>

          <hr className="border-stone-200" />

          {/* Date & Time */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex flex-col">
              <label htmlFor="date" className="text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">Preferred Date *</label>
              <input
                id="date"
                type="date"
                value={form.date}
                onChange={(e) => update("date", e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                className="rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm text-stone-800 focus:border-brass focus:ring-1 focus:ring-brass transition-colors"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="time" className="text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">Preferred Time</label>
              <select
                id="time"
                value={form.time}
                onChange={(e) => update("time", e.target.value)}
                className="rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm text-stone-800 focus:border-brass focus:ring-1 focus:ring-brass transition-colors"
              >
                {TIME_SLOTS.map((slot) => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Property & Neighborhood */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex flex-col">
              <label htmlFor="listingId" className="text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">Property (optional)</label>
              <select
                id="listingId"
                value={form.listingId}
                onChange={(e) => update("listingId", e.target.value)}
                className="rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm text-stone-800 focus:border-brass focus:ring-1 focus:ring-brass transition-colors"
              >
                <option value="">Any property</option>
                {listings.filter((l) => l.status === "active").map((l) => (
                  <option key={l.id} value={l.id}>{l.title} — {l.address}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="neighborhood" className="text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">Neighborhood (optional)</label>
              <select
                id="neighborhood"
                value={form.neighborhood}
                onChange={(e) => update("neighborhood", e.target.value)}
                className="rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm text-stone-800 focus:border-brass focus:ring-1 focus:ring-brass transition-colors"
              >
                <option value="">Any neighborhood</option>
                {neighborhoods.map((n) => (
                  <option key={n.slug} value={n.slug}>{n.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">Additional Notes</label>
            <textarea
              id="message"
              rows={3}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              className="rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm text-stone-800 placeholder:text-stone-400 focus:border-brass focus:ring-1 focus:ring-brass transition-colors resize-none"
              placeholder="Any questions or special requests..."
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-full bg-sage px-6 py-3 text-sm font-bold uppercase tracking-widest text-white hover:bg-sage-light transition-colors"
          >
            Schedule Tour
          </button>

          <p className="text-xs text-stone-400 text-center">
            A Nest agent will confirm your appointment within 24 hours.
          </p>
        </form>
      </section>

      <footer className="border-t border-stone-200 bg-white py-8 mt-auto">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-xs text-stone-500">
          <span className="font-heading text-lg text-sage">Nest Realty</span>
        </div>
      </footer>
    </div>
  );
}