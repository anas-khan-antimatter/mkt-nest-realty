"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { getListingById, formatPriceFull } from "@/lib/data";

export default function ListingDetailPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const listing = getListingById(params.id ?? "");
  const [activeImg, setActiveImg] = useState(0);

  if (!listing) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-32 text-center">
        <h1 className="font-heading text-4xl font-bold text-[--brand]">
          Listing Not Found
        </h1>
        <p className="mt-4 text-[--stone-600]">
          The property you&rsquo;re looking for doesn&rsquo;t exist or has been
          removed.
        </p>
        <Link
          href="/listings"
          className="mt-6 inline-flex h-12 items-center gap-2 rounded-full border border-[--brand] px-8 text-sm font-bold uppercase tracking-widest text-[--brand] transition-colors hover:bg-[--brand] hover:text-white"
        >
          Browse All Listings
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-6 text-xs">
        <Link href="/listings" className="text-[--stone-500] hover:text-[--brand]">
          Listings
        </Link>
        <span className="mx-2 text-[--stone-400]">/</span>
        <span className="text-[--brand]">{listing.title}</span>
      </nav>

      <div className="grid gap-12 lg:grid-cols-5">
        {/* ── Gallery ── */}
        <div className="lg:col-span-3">
          <div className="relative overflow-hidden rounded-xl bg-[#e0d8cc]">
            <img
              src={listing.images[activeImg] || listing.images[0]}
              alt={`${listing.title} — photo ${activeImg + 1}`}
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-3 left-3 rounded-full bg-black/40 px-3 py-1 text-xs text-white backdrop-blur-sm">
              {activeImg + 1} / {listing.images.length}
            </div>
          </div>
          {listing.images.length > 1 && (
            <div className="mt-3 flex gap-2 overflow-x-auto">
              {listing.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${i === activeImg ? "border-[--brand]" : "border-transparent opacity-60 hover:opacity-100"}`}
                >
                  <img src={img} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Description */}
          <div className="mt-8">
            <h2 className="font-heading text-2xl font-bold text-[--brand]">
              About This Home
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[--stone-600]">
              {listing.description}
            </p>
          </div>

          {/* Features */}
          <div className="mt-8">
            <h3 className="font-heading text-lg font-bold text-[--brand]">
              Features &amp; Highlights
            </h3>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {listing.features.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-2 text-sm text-[--stone-600]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12l14 0" stroke="currentColor" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Sidebar ── */}
        <div className="lg:col-span-2">
          {/* Price card */}
          <div className="sticky top-20 rounded-xl bg-white p-6 shadow-md">
            <div className="mb-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[--brand-light]">
                Price
              </span>
              <p className="font-heading text-3xl font-bold text-[--brand]">
                {formatPriceFull(listing.price)}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 border-b border-[--stone-200] pb-4 text-sm">
              <span className="rounded-full bg-[--brand]/10 px-3 py-1 text-[--brand]">
                {listing.beds} bed{listing.beds !== 1 ? "s" : ""}
              </span>
              <span className="rounded-full bg-[--brand]/10 px-3 py-1 text-[--brand]">
                {listing.baths} bath{listing.baths !== 1 ? "s" : ""}
              </span>
              <span className="rounded-full bg-[--brand]/10 px-3 py-1 text-[--brand]">
                {listing.sqft.toLocaleString()} sqft
              </span>
              {listing.lotSqft && (
                <span className="rounded-full bg-[--brand]/10 px-3 py-1 text-[--brand]">
                  {listing.lotSqft.toLocaleString()} sqft lot
                </span>
              )}
              <span className="rounded-full bg-[--brand]/10 px-3 py-1 text-[--brand]">
                Built {listing.yearBuilt}
              </span>
            </div>

            {/* Save button */}
            <button
              onClick={() => {
                const saved = JSON.parse(
                  localStorage.getItem("nestSaved") ?? "[]",
                ) as string[];
                const idx = saved.indexOf(listing.id);
                if (idx === -1) {
                  saved.push(listing.id);
                } else {
                  saved.splice(idx, 1);
                }
                localStorage.setItem("nestSaved", JSON.stringify(saved));
                alert(
                  idx === -1
                    ? "Saved to your homes!"
                    : "Removed from saved homes.",
                );
              }}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[--accent] px-6 py-3 text-sm font-bold uppercase tracking-widest text-[--foreground] transition-colors hover:bg-[--accent-light]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 3l-4 4 8 4-4 4" />
              </svg>
              Save Home
            </button>

            {/* Mortgage Calculator */}
            <details className="mt-6 group rounded-xl border border-[--stone-200] bg-[--warm] p-4 open">
              <summary className="cursor-pointer text-sm font-bold text-[--brand]">
                Mortgage Calculator
              </summary>
              <div className="mt-3 space-y-3 text-sm">
                <label className="flex items-center justify-between">
                  <span className="text-[--stone-600]">Down Payment</span>
                  <input
                    type="range"
                    min={5}
                    max={50}
                    defaultValue={20}
                    className="w-2/3 accent-[--brand]"
                    id="downSlider"
                  />
                </label>
                <label className="flex items-center justify-between">
                  <span className="text-[--stone-600]">Rate</span>
                  <input
                    type="range"
                    min={2}
                    max={10}
                    defaultValue={6.5}
                    step={0.25}
                    className="w-2/3 accent-[--brand]"
                    id="rateSlider"
                  />
                </label>
                <label className="flex items-center justify-between">
                  <span className="text-[--stone-600]">Term</span>
                  <select
                    className="rounded-full border border-[--stone-200] px-3 py-1 text-sm"
                    id="termSelect"
                  >
                    <option value={30}>30 years</option>
                    <option value={15}>15 years</option>
                  </select>
                </label>
                <p className="mt-2 text-center font-bold text-[--brand]">
                  Est. Monthly: <span id="mortgageResult">$—</span>
                </p>
              </div>
            </details>

            {/* Agent */}
            <div className="mt-6 border-t border-[--stone-200] pt-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[--brand-light]">
                Listing Agent
              </span>
              <div className="mt-3 flex items-center gap-4">
                <img
                  src={listing.agent.photo}
                  alt={listing.agent.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-heading text-base font-bold text-[--brand]">
                    {listing.agent.name}
                  </p>
                  <p className="text-xs text-[--stone-500]">
                    {listing.agent.phone}
                  </p>
                  <p className="text-xs text-[--stone-500]">
                    {listing.agent.email}
                  </p>
                </div>
              </div>
              <Link
                href={`mailto:${listing.agent.email}`}
                className="mt-3 flex w-full items-center justify-center rounded-full border border-[--brand] px-6 py-2 text-sm font-bold uppercase tracking-widest text-[--brand] transition-colors hover:bg-[--brand] hover:text-white"
              >
                Email Agent
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function useState<T>(initial: T) {
  let val = initial;
  return [
    val,
    (v: T) => {
      val = v;
    },
  ] as const;
}