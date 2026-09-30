export interface Listing {
  id: string;
  title: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  lotSize: string;
  yearBuilt: number;
  address: string;
  neighborhood: string;
  description: string;
  image: string; // placeholder index
  images: string[];
  agent: string;
  status: "active" | "pending" | "sold";
  featured: boolean;
  latitude: number;
  longitude: number;
}

export const neighborhoods = [
  { slug: "pacific-heights", name: "Pacific Heights", description: "Iconic views, grand architecture, and tree-lined avenues." },
  { slug: "noe-valley", name: "Noe Valley", description: "Vibrant village charm with boutiques and cafés." },
  { slug: "marin-county", name: "Marin County", description: "Expansive estates surrounded by redwoods and coastline." },
  { slug: "russian-hill", name: "Russian Hill", description: "Urban elegance with sweeping bay panoramas." },
  { slug: "cow-hollow", name: "Cow Hollow", description: "Bustling waterfront with Victorian charm." },
  { slug: "presidio-heights", name: "Presidio Heights", description: "Leafy lanes and stately manor homes." },
];

export const listings: Listing[] = [
  {
    id: "nest-001",
    title: "Modern Cliffside Retreat",
    price: 4250000,
    beds: 4,
    baths: 3,
    sqft: 3200,
    lotSize: "0.25 ac",
    yearBuilt: 2022,
    address: "88 Sea Cliff Ave, San Francisco",
    neighborhood: "pacific-heights",
    description: "Perched above the Pacific, this architectural masterpiece offers floor-to-ceiling glass walls, a chef's kitchen with marble islands, and a private rooftop terrace with panoramic ocean views. The primary suite spans the entire upper floor with a spa-inspired bath.",
    image: "/home-01.jpg",
    images: ["/home-01.jpg", "/home-02.jpg", "/home-03.jpg"],
    agent: "Sarah Mitchell",
    status: "active",
    featured: true,
    latitude: 37.797,
    longitude: -122.438,
  },
  {
    id: "nest-002",
    title: "Victorian Townhouse",
    price: 2895000,
    beds: 3,
    baths: 2.5,
    sqft: 2400,
    lotSize: "0.12 ac",
    yearBuilt: 1895,
    address: "245 Liberty St, San Francisco",
    neighborhood: "noe-valley",
    description: "Meticulously restored Queen Anne Victorian with original crown moldings, a grand staircase, and a modern rear extension. The garden level opens to a private patio with mature wisteria. Walking distance to Noe Valley's cafés and boutiques.",
    image: "/home-02.jpg",
    images: ["/home-02.jpg", "/home-03.jpg", "/home-01.jpg"],
    agent: "James Rivera",
    status: "active",
    featured: true,
    latitude: 37.751,
    longitude: -122.432,
  },
  {
    id: "nest-003",
    title: "Mid-Century Ranch",
    price: 1975000,
    beds: 4,
    baths: 2,
    sqft: 2800,
    lotSize: "1.2 ac",
    yearBuilt: 1964,
    address: "42 Summit Dr, Mill Valley",
    neighborhood: "marin-county",
    description: "A rare Eichler-inspired ranch tucked into the Mill Valley hills. Open-beam ceilings, clerestory windows, and a sunken living room frame views of Mount Tam. The property includes a detached studio and mature redwood garden.",
    image: "/home-03.jpg",
    images: ["/home-03.jpg", "/home-01.jpg", "/home-02.jpg"],
    agent: "Elena Chen",
    status: "active",
    featured: true,
    latitude: 37.905,
    longitude: -122.546,
  },
  {
    id: "nest-004",
    title: "Russian Hill Penthouse",
    price: 5890000,
    beds: 3,
    baths: 3.5,
    sqft: 3600,
    lotSize: "N/A",
    yearBuilt: 2019,
    address: "1200 Green St, #PH, San Francisco",
    neighborhood: "russian-hill",
    description: "The full-floor penthouse spans the top of a boutique condominium with 360-degree views from every room. Features include a private elevator foyer, a wine cellar, and a 500sqft wraparound terrace with outdoor kitchen.",
    image: "/home-01.jpg",
    images: ["/home-01.jpg", "/home-02.jpg", "/home-03.jpg"],
    agent: "Sarah Mitchell",
    status: "active",
    featured: false,
    latitude: 37.797,
    longitude: -122.418,
  },
  {
    id: "nest-005",
    title: "Cow Hollow Edwardian",
    price: 3450000,
    beds: 4,
    baths: 3,
    sqft: 3100,
    lotSize: "0.15 ac",
    yearBuilt: 1907,
    address: "2100 Union St, San Francisco",
    neighborhood: "cow-hollow",
    description: "Grand Edwardian with a full-floor primary retreat, renovated kitchen with La Cornue range, and a south-facing garden. The lower level offers a separate in-law suite with private entrance. Steps from Union Street dining.",
    image: "/home-02.jpg",
    images: ["/home-02.jpg", "/home-03.jpg", "/home-01.jpg"],
    agent: "James Rivera",
    status: "active",
    featured: false,
    latitude: 37.798,
    longitude: -122.428,
  },
  {
    id: "nest-006",
    title: "Presidio Heights Estate",
    price: 8750000,
    beds: 6,
    baths: 5,
    sqft: 5800,
    lotSize: "0.5 ac",
    yearBuilt: 1925,
    address: "3500 Jackson St, San Francisco",
    neighborhood: "presidio-heights",
    description: "A palatial Georgian-revival estate set behind wrought-iron gates. Six bedrooms, a grand salon with marble fireplace, library, formal dining room, and a landscaped garden with century-old oaks. The lower level includes a wine grotto and gym.",
    image: "/home-03.jpg",
    images: ["/home-03.jpg", "/home-01.jpg", "/home-02.jpg"],
    agent: "Elena Chen",
    status: "active",
    featured: false,
    latitude: 37.79,
    longitude: -122.442,
  },
  {
    id: "nest-007",
    title: "Pacific Heights Condo",
    price: 1495000,
    beds: 2,
    baths: 2,
    sqft: 1450,
    lotSize: "N/A",
    yearBuilt: 2008,
    address: "2800 Pacific Ave, #3, San Francisco",
    neighborhood: "pacific-heights",
    description: "Light-filled corner unit on the top floor of a boutique building. Open living-dining with a gas fireplace, chef's kitchen with Viking appliances, and a large private deck. Two-car parking included.",
    image: "/home-01.jpg",
    images: ["/home-01.jpg", "/home-02.jpg", "/home-03.jpg"],
    agent: "Sarah Mitchell",
    status: "active",
    featured: false,
    latitude: 37.793,
    longitude: -122.44,
  },
  {
    id: "nest-008",
    title: "Marin Country Estate",
    price: 6950000,
    beds: 5,
    baths: 4.5,
    sqft: 5200,
    lotSize: "3.5 ac",
    yearBuilt: 2015,
    address: "1 Redwood Ln, Ross",
    neighborhood: "marin-county",
    description: "A contemporary compound blending into its redwood surroundings. The main house features walls of glass, a floating staircase, and a media room. Separate guest house, pool pavilion, and hiking trails on the property.",
    image: "/home-02.jpg",
    images: ["/home-02.jpg", "/home-03.jpg", "/home-01.jpg"],
    agent: "Elena Chen",
    status: "active",
    featured: false,
    latitude: 37.941,
    longitude: -122.559,
  },
  {
    id: "nest-009",
    title: "Noe Valley Cottage",
    price: 1650000,
    beds: 2,
    baths: 1,
    sqft: 1200,
    lotSize: "0.08 ac",
    yearBuilt: 1920,
    address: "378 Church St, San Francisco",
    neighborhood: "noe-valley",
    description: "Charming storybook cottage with a white picket fence and blooming garden. Updated kitchen and bath, original hardwood floors, and a sunroom perfect for a home office. A short stroll to Dolores Park.",
    image: "/home-03.jpg",
    images: ["/home-03.jpg", "/home-01.jpg", "/home-02.jpg"],
    agent: "James Rivera",
    status: "pending",
    featured: false,
    latitude: 37.755,
    longitude: -122.428,
  },
  {
    id: "nest-010",
    title: "Russian Hill Studio",
    price: 895000,
    beds: 1,
    baths: 1,
    sqft: 750,
    lotSize: "N/A",
    yearBuilt: 1960,
    address: "1050 Lombard St, #204, San Francisco",
    neighborhood: "russian-hill",
    description: "Cozy studio with bay views from every window. Updated kitchen with quartz counters, in-unit washer/dryer, and ample closet space. HOA includes water, trash, and building insurance.",
    image: "/home-01.jpg",
    images: ["/home-01.jpg", "/home-02.jpg", "/home-03.jpg"],
    agent: "James Rivera",
    status: "active",
    featured: false,
    latitude: 37.8,
    longitude: -122.417,
  },
];

export function formatPrice(price: number): string {
  if (price >= 1_000_000) {
    return `$${(price / 1_000_000).toFixed(price % 1_000_000 === 0 ? 0 : 1)}M`;
  }
  return `$${(price / 1000).toFixed(0)}K`;
}

export function formatPriceFull(price: number): string {
  return `$${price.toLocaleString()}`;
}

export function getListing(id: string): Listing | undefined {
  return listings.find((l) => l.id === id);
}

export function getListings(filters?: {
  neighborhood?: string;
  minPrice?: number;
  maxPrice?: number;
  minBeds?: number;
  maxBeds?: number;
  sort?: string;
}): Listing[] {
  let filtered = [...listings];

  if (filters?.neighborhood && filters.neighborhood !== "all") {
    filtered = filtered.filter((l) => l.neighborhood === filters.neighborhood);
  }
  if (filters?.minPrice) {
    filtered = filtered.filter((l) => l.price >= filters.minPrice!);
  }
  if (filters?.maxPrice) {
    filtered = filtered.filter((l) => l.price <= filters.maxPrice!);
  }
  if (filters?.minBeds) {
    filtered = filtered.filter((l) => l.beds >= filters.minBeds!);
  }
  if (filters?.maxBeds) {
    filtered = filtered.filter((l) => l.beds <= filters.maxBeds!);
  }

  if (filters?.sort) {
    switch (filters.sort) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "beds-desc":
        filtered.sort((a, b) => b.beds - a.beds);
        break;
      case "sqft-desc":
        filtered.sort((a, b) => b.sqft - a.sqft);
        break;
      case "newest":
        filtered.sort((a, b) => b.yearBuilt - a.yearBuilt);
        break;
      default:
        // featured first, then by price desc
        filtered.sort((a, b) => {
          if (a.featured !== b.featured) return a.featured ? -1 : 1;
          return b.price - a.price;
        });
    }
  } else {
    filtered.sort((a, b) => {
      if (a.featured !== b.featured) return a.featured ? -1 : 1;
      return b.price - a.price;
    });
  }

  return filtered;
}