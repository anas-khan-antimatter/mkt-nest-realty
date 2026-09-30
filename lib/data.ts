/* ── Shared Types & Mock Data ── */

export type Listing = {
  id: string;
  title: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  lotSqft?: number;
  yearBuilt: number;
  images: string[];
  location: string;
  neighborhood: string;
  description: string;
  features: string[];
  agent: { name: string; phone: string; email: string; photo: string };
};

export const NEIGHBORHOOD_DATA: Record<string, { name: string; slug: string; description: string; highlights: string[]; listings: string[]; image: string }> = {
  "pacific-heights": {
    name: "Pacific Heights",
    slug: "pacific-heights",
    description: "Iconic views, grand architecture, and tree-lined avenues perched above the bay. Home to some of the city's most prestigious addresses.",
    highlights: ["Panoramic bay views", "Victorian & Edwardian architecture", "Top-rated schools", "Boutique shopping on Fillmore"],
    listings: ["ph1", "ph2", "ph3"],
    image: "/images/nbhd-pac-heights.svg",
  },
  "noe-valley": {
    name: "Noe Valley",
    slug: "noe-valley",
    description: "A sunny, village-like neighborhood with a lively main street, friendly cafés, and a strong sense of community.",
    highlights: ["Village charm & walkability", "Farmer's market Saturdays", "Family-friendly parks", "Independent bookstores & cafés"],
    listings: ["nv1", "nv2"],
    image: "/images/nbhd-noe-valley.svg",
  },
  "marin-county": {
    name: "Marin County",
    slug: "marin-county",
    description: "Expansive estates surrounded by ancient redwoods, coastal bluffs, and some of the most beautiful open space in California.",
    highlights: ["Redwood & coastal preserves", "Equestrian estates", "Artisan food scene", "Muir Beach & Stinson Beach"],
    listings: ["mc1", "mc2", "mc3"],
    image: "/images/nbhd-marin.svg",
  },
  "russian-hill": {
    name: "Russian Hill",
    slug: "russian-hill",
    description: "Urban elegance with sweeping bay panoramas, quiet leafy lanes, and a coveted central location.",
    highlights: ["Sweeping bay panoramas", "Hydrangea-covered lanes", "Walkable to downtown", "Historic cable car lines"],
    listings: ["rh1"],
    image: "/images/nbhd-russian-hill.svg",
  },
};

export const LISTINGS_DATA: Listing[] = [
  {
    id: "ph1",
    title: "Modern Cliffside Retreat",
    price: 4250000,
    beds: 4,
    baths: 3,
    sqft: 3200,
    lotSqft: 5400,
    yearBuilt: 2018,
    images: ["/images/home-01.jpg", "/images/home-01b.jpg", "/images/home-01c.jpg"],
    location: "Pacific Heights",
    neighborhood: "pacific-heights",
    description: "Perched on the edge of the Presidio with unobstructed Golden Gate views, this contemporary masterpiece was rebuilt in 2018 with no expense spared. Floor-to-ceiling windows flood every room with natural light, while the rooftop terrace offers a private oasis above the fog line.",
    features: ["Rooftop terrace with built-in BBQ", "Chef's kitchen with marble island", "Primary suite with spa bath", "Two-car garage with EV charging", "Smart home automation", "Wine cellar (400+ bottles)"],
    agent: { name: "Elena Marchetti", phone: "+1 (415) 555-0189", email: "elena@nestrealty.com", photo: "/images/agent-elena.svg" },
  },
  {
    id: "ph2",
    title: "Victorian Townhouse",
    price: 2895000,
    beds: 3,
    baths: 2.5,
    sqft: 2400,
    yearBuilt: 1896,
    images: ["/images/home-02.jpg", "/images/home-02b.jpg"],
    location: "Noe Valley",
    neighborhood: "noe-valley",
    description: "Meticulously restored Queen Anne Victorian blending original craftsmanship with modern comforts. Soaring ceilings, pocket doors, and a wraparound front porch invite you into a home that has been lovingly updated for today's lifestyle.",
    features: ["Original hardwood throughout", "Marble fireplace (parlor)", "Updated eat-in kitchen", "Landscaped garden with patio", "Detached home office/studio", "Walking distance to 24th St shops"],
    agent: { name: "James Korey", phone: "+1 (415) 555-0234", email: "james@nestrealty.com", photo: "/images/agent-james.svg" },
  },
  {
    id: "ph3",
    title: "Mid-Century Ranch",
    price: 1975000,
    beds: 4,
    baths: 2,
    sqft: 2800,
    lotSqft: 12000,
    yearBuilt: 1962,
    images: ["/images/home-03.jpg", "/images/home-03b.jpg"],
    location: "Marin County",
    neighborhood: "marin-county",
    description: "A stunning mid-century ranch nestled on 0.28 acres surrounded by redwoods. Walls of glass blur the line between indoors and out. The open floor plan flows effortlessly to a patio overlooking a seasonal creek.",
    features: ["Floor-to-ceiling fireplace", "Saltwater pool & spa", "Terraced gardens with native plants", "Attached two-car garage", "New HVAC (2023)", "Sonoma hiking trail access"],
    agent: { name: "Elena Marchetti", phone: "+1 (415) 555-0189", email: "elena@nestrealty.com", photo: "/images/agent-elena.svg" },
  },
  {
    id: "nv1",
    title: "Craftsman Bungalow",
    price: 1625000,
    beds: 3,
    baths: 2,
    sqft: 1850,
    yearBuilt: 1925,
    images: ["/images/home-04.jpg", "/images/home-04b.jpg"],
    location: "Noe Valley",
    neighborhood: "noe-valley",
    description: "Charming Craftsman bungalow on one of Noe Valley's prettiest blocks. Renewed kitchen and bath, original built-in cabinetry, and a sun-drenched south-facing deck. Steps from Noe Valley Bakery and the Saturday farmer's market.",
    features: ["Original built-ins & wainscoting", "Renovated kitchen (2021)", "Tiled bathroom with claw-foot tub", "South-facing deck", "One-car garage + driveway", "Low-maintenance native garden"],
    agent: { name: "James Korey", phone: "+1 (415) 555-0234", email: "james@nestrealty.com", photo: "/images/agent-james.svg" },
  },
  {
    id: "nv2",
    title: "Sunrise Terrace Condo",
    price: 875000,
    beds: 2,
    baths: 1,
    sqft: 1050,
    yearBuilt: 1975,
    images: ["/images/home-05.jpg"],
    location: "Noe Valley",
    neighborhood: "noe-valley",
    description: "Light-filled top-floor condo with private rooftop access and panoramic views from downtown to the bay. Updated kitchen, in-unit washer/dryer, and a walk score of 96. Perfect for first-time buyers or downsizers.",
    features: ["Private rooftop deck", "In-unit laundry", "Walk score 96", "Assigned parking included", "Pet-friendly building", "Low HOA dues"],
    agent: { name: "Priya Nair", phone: "+1 (415) 555-0456", email: "priya@nestrealty.com", photo: "/images/agent-priya.svg" },
  },
  {
    id: "mc1",
    title: "Redwood Ridge Estate",
    price: 5950000,
    beds: 5,
    baths: 4,
    sqft: 5200,
    lotSqft: 43560,
    yearBuilt: 2002,
    images: ["/images/home-06.jpg", "/images/home-06b.jpg", "/images/home-06c.jpg"],
    location: "Marin County",
    neighborhood: "marin-county",
    description: "A private gated estate on one full acre, surrounded by towering redwoods and designed by renowned architect Barbara Chambers. Every room frames a forest view. The great room features a dual-sided fireplace and walls of glass opening to a bluestone patio.",
    features: ["Gated entry with intercom", "Dual-sided stone fireplace", "Wine room (600-bottle capacity)", "Heated pool & spa", "Pool house with full bath", "Four-car garage", "Generator backup"],
    agent: { name: "Elena Marchetti", phone: "+1 (415) 555-0189", email: "elena@nestrealty.com", photo: "/images/agent-elena.svg" },
  },
  {
    id: "mc2",
    title: "Coastal Cottage",
    price: 1495000,
    beds: 2,
    baths: 1,
    sqft: 1200,
    yearBuilt: 1955,
    images: ["/images/home-07.jpg"],
    location: "Marin County",
    neighborhood: "marin-county",
    description: "Quaint beach cottage a five-minute walk to Muir Beach. Freshly painted, new roof (2023), and a charming sleeping porch that catches the coastal breeze. The perfect weekend getaway or year-round creative retreat.",
    features: ["Sleeping porch with hammock", "Outdoor shower", "New roof & gutters (2023)", "Gravel driveway for 3 cars", "Organic vegetable beds", "Trail access to Muir Woods"],
    agent: { name: "Priya Nair", phone: "+1 (415) 555-0456", email: "priya@nestrealty.com", photo: "/images/agent-priya.svg" },
  },
  {
    id: "mc3",
    title: "Hillside Contemporary",
    price: 2325000,
    beds: 3,
    baths: 2.5,
    sqft: 2600,
    yearBuilt: 2015,
    images: ["/images/home-08.jpg", "/images/home-08b.jpg"],
    location: "Marin County",
    neighborhood: "marin-county",
    description: "Sleek hillside contemporary with clean lines, warm cedar siding, and a light-filled open plan. Soaring ceilings, polished concrete floors with radiant heat, and walls of glass that open to a terrace with sweeping ridgetop views.",
    features: ["Radiant heated floors", "European kitchen with Miele appliances", "Cedar-clad ceilings", "Terrace with fire pit", "EV ready garage", "Solar panels (owned)"],
    agent: { name: "James Korey", phone: "+1 (415) 555-0234", email: "james@nestrealty.com", photo: "/images/agent-james.svg" },
  },
  {
    id: "rh1",
    title: "Russian Hill Penthouse",
    price: 3750000,
    beds: 2,
    baths: 2,
    sqft: 1800,
    yearBuilt: 2008,
    images: ["/images/home-09.jpg", "/images/home-09b.jpg", "/images/home-09c.jpg"],
    location: "Russian Hill",
    neighborhood: "russian-hill",
    description: "Breathtaking top-floor penthouse with a private 600 sqft wraparound terrace overlooking the Bay Bridge and downtown skyline. Soaring 14-foot ceilings, a floating fireplace, and walls of glass make this one of the most iconic homes on the hill.",
    features: ["600 sqft private terrace", "Floating gas fireplace", "Chef's kitchen + wine fridge", "In-unit laundry + storage", "Two deeded parking spaces", "24-hour doorman", "Pet friendly"],
    agent: { name: "Priya Nair", phone: "+1 (415) 555-0456", email: "priya@nestrealty.com", photo: "/images/agent-priya.svg" },
  },
];

export function getAllListings(): Listing[] {
  return LISTINGS_DATA;
}

export function getListingById(id: string): Listing | undefined {
  return LISTINGS_DATA.find((l) => l.id === id);
}

export function getListingsByNeighborhood(slug: string): Listing[] {
  return LISTINGS_DATA.filter((l) => l.neighborhood === slug);
}

export function getNeighborhoods() {
  return Object.values(NEIGHBORHOOD_DATA);
}

export function getNeighborhood(slug: string) {
  return NEIGHBORHOOD_DATA[slug];
}

export function formatPrice(price: number): string {
  if (price >= 1_000_000) {
    const m = (price / 1_000_000).toFixed(1).replace(/\.0$/, "");
    return `$${m}M`;
  }
  return `$${(price / 1_000).toFixed(0).replace(/\.0$/, "")}K`;
}

export function formatPriceFull(price: number): string {
  return `$${price.toLocaleString()}`;
}