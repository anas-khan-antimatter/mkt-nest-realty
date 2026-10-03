"use client";

import Link from "next/link";
import { neighborhoods } from "@/lib/data";

const agents = [
  {
    name: "Sarah Mitchell",
    title: "Senior Broker Associate",
    photo: null,
    specialty: "Pacific Heights &amp; Russian Hill",
    neighborhoods: ["pacific-heights", "russian-hill"],
    phone: "(415) 555-0101",
    email: "sarah@nestrealty.com",
    bio: "With 15 years in San Francisco luxury real estate, Sarah combines market intelligence with a sharp eye for architectural heritage. She has closed over $200M in residential transactions.",
    listingsCount: 3,
  },
  {
    name: "James Rivera",
    title: "Broker",
    photo: null,
    specialty: "Noe Valley &amp; Cow Hollow",
    neighborhoods: ["noe-valley", "cow-hollow", "russian-hill"],
    phone: "(415) 555-0102",
    email: "james@nestrealty.com",
    bio: "James brings a decade of experience helping families find their perfect home. His deep knowledge of Noe Valley and Cow Hollow makes him a trusted guide for buyers and sellers alike.",
    listingsCount: 4,
  },
  {
    name: "Elena Chen",
    title: "Vice President, Estates",
    photo: null,
    specialty: "Marin County &amp; Presidio Heights",
    neighborhoods: ["marin-county", "presidio-heights"],
    phone: "(415) 555-0103",
    email: "elena@nestrealty.com",
    bio: "Elena leads our estates division, specializing in Marin County compounds and Presidio Heights manor homes. Her network spans the Bay Area's most discerning sellers and buyers.",
    listingsCount: 2,
  },
  {
    name: "Marcus Williams",
    title: "Associate Agent",
    photo: null,
    specialty: "First-time Buyers &amp; Condos",
    neighborhoods: ["pacific-heights", "russian-hill"],
    phone: "(415) 555-0104",
    email: "marcus@nestrealty.com",
    bio: "Marcus is passionate about helping first-time buyers navigate the San Francisco market. He brings patience, transparency, and a tech-forward approach to every search.",
    listingsCount: 1,
  },
];

export default function AgentsPage() {
  return (
    <div className="min-h-screen bg-stone-100">
      {/* Nav */}
      <header className="sticky top-0 z-50 w-full border-b border-stone-200/60 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="font-heading text-2xl tracking-wide text-sage">Nest Realty</Link>
          <nav className="items-center gap-6 flex">
            <Link href="/listings" className="text-sm font-medium uppercase tracking-widest text-stone-600 hover:text-sage">Listings</Link>
            <Link href="/neighborhoods" className="text-sm font-medium uppercase tracking-widest text-stone-600 hover:text-sage">Neighborhoods</Link>
            <Link href="/agents" className="text-sm font-medium uppercase tracking-widest text-sage">Agents</Link>
            <Link href="/rate" className="text-sm font-medium uppercase tracking-widest text-stone-600 hover:text-sage">Rate</Link>
            <Link href="/schedule-tour" className="text-sm font-medium uppercase tracking-widest text-stone-600 hover:text-sage">Tour</Link>
            <Link href="/saved" className="text-sm font-medium uppercase tracking-widest text-stone-600 hover:text-sage">Saved</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sage/20 via-stone-100 to-brass/10 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block rounded-full bg-brass/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brass">Our Team</span>
          <h1 className="mt-4 font-heading text-4xl font-bold text-sage-dark sm:text-5xl">Meet the Agents</h1>
          <p className="mx-auto mt-4 max-w-2xl text-stone-600 text-lg">
            Nest Realty&apos;s agents bring deep local knowledge, market expertise,
            and a personal commitment to every client relationship.
          </p>
        </div>
      </section>

      {/* Agent cards */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {agents.map((agent) => (
            <article
              key={agent.name}
              className="group rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {/* Photo placeholder & header */}
              <div className="flex items-stretch">
                <div className="w-48 h-full min-h-[280px] bg-gradient-to-br from-sage/10 via-stone-200 to-stone-100 flex items-center justify-center overflow-hidden">
                  <div className="flex flex-col items-center gap-1 text-stone-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-40">
                      <circle cx="12" cy="7" r="5" />
                      <ellipse cx="12" cy="17" rx="7" ry="5" />
                      <path d="M7 20 Q10 18 10 16 14 16 14 20" />
                    </svg>
                    <span className="text-[10px] font-heading">Photo</span>
                  </div>
                </div>
                <div className="flex-1 p-6 space-y-2">
                  <div className="flex items-center gap-2">
                    <h2 className="font-heading text-xl font-bold text-sage-dark">{agent.name}</h2>
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-brass">{agent.title}</p>
                  <p className="text-sm text-stone-600">{agent.specialty}</p>
                  <div className="flex items-center gap-4 text-xs text-stone-500 mt-2">
                    <span className="font-medium text-sage">{agent.listingsCount} active listing{agent.listingsCount !== 1 ? "s" : ""}</span>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="px-6 py-4">
                <p className="text-sm leading-relaxed text-stone-600">{agent.bio}</p>
              </div>

              {/* Neighborhood tags + contact */}
              <div className="px-6 py-4 space-y-3">
                <div className="flex flex-wrap gap-2">
                  {agent.neighborhoods
                    .map((slug) => neighborhoods.find((n) => n.slug === slug))
                    .filter((n) => n !== undefined)
                    .map((n) => (
                      <span
                        key={n.slug}
                        className="rounded-full bg-sage/10 px-3 py-1 text-[10px] font-medium text-sage-dark"
                      >
                        {n.name}
                      </span>
                    ))}
                </div>

                <div className="text-xs text-stone-500">
                  <span className="block">{agent.phone}</span>
                  <span className="block">{agent.email}</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="px-6 py-4 flex gap-3 border-t border-stone-100">
                <a
                  href={`mailto:${agent.email}`}
                  className="flex-1 text-center rounded-full bg-sage px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-white hover:bg-sage-light transition-colors"
                >
                  Email {agent.name.split(" ")[0]}
                </a>
                <Link
                  href="/listings"
                  className="rounded-full border border-stone-300 px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-stone-600 hover:border-sage hover:text-sage transition-colors"
                >
                  View Listings
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-gradient-to-r from-sage/10 to-brass/5 py-16 mt-4">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-sage-dark sm:text-4xl">Work With Us</h2>
          <p className="mx-auto mt-4 max-w-xl text-stone-600 text-lg">
            Whether you are buying, selling, or just exploring, our team is
            ready to help you find your place to call home.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/schedule-tour"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-accent px-8 text-sm font-bold uppercase tracking-widest text-stone-900 transition-colors hover:bg-accent-light"
            >
              Schedule a Tour
            </Link>
            <Link
              href="/listings"
              className="inline-flex h-12 items-center gap-2 rounded-full border-2 border-sage px-8 text-sm font-bold uppercase tracking-widest text-sage transition-colors hover:bg-sage hover:text-white"
            >
              Browse Listings
            </Link>
          </div>
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