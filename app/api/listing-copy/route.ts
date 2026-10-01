import { NextRequest, NextResponse } from "next/server";
import { listings } from "@/lib/data";

// ── Deterministic fallback templates ──
const fallbackTemplates: Record<string, string> = {
  "nest-001":
    "Perched above the Pacific with floor-to-ceiling glass walls and a chef's kitchen with marble islands, this architectural masterpiece offers a private rooftop terrace with panoramic ocean views. The primary suite spans the entire upper floor with a spa-inspired bath. 4 bedrooms, 3 baths, 3,200 sqft.",
  "nest-002":
    "Meticulously restored Queen Anne Victorian with original crown moldings, a grand staircase, and a modern rear extension. The garden level opens to a private patio with mature wisteria. Walking distance to Noe Valley's cafés and boutiques. 3 bedrooms, 2.5 baths, 2,400 sqft.",
  "nest-003":
    "A rare Eichler-inspired ranch tucked into the Mill Valley hills. Open-beam ceilings, clerestory windows, and a sunken living room frame views of Mount Tam. The property includes a detached studio and mature redwood garden. 4 bedrooms, 2 baths, 2,800 sqft.",
  "nest-004":
    "Full-floor penthouse spanning the top of a boutique condominium with 360-degree views from every room. Features include a private elevator foyer, a wine cellar, and a 500sqft wraparound terrace with outdoor kitchen. 3 bedrooms, 3.5 baths, 3,600 sqft.",
  "nest-005":
    "Grand Edwardian with a full-floor primary retreat, renovated kitchen with La Cornue range, and a south-facing garden. The lower level offers a separate in-law suite with private entrance. Steps from Union Street dining. 4 bedrooms, 3 baths, 3,100 sqft.",
  "nest-006":
    "A palatial Georgian-revival estate set behind wrought-iron gates in Presidio Heights. Six bedrooms, a grand salon with marble fireplace, a library, and a formal dining room seating 14. The landscaped garden features a reflecting pool. 6 bedrooms, 5 baths, 5,800 sqft.",
  "nest-007":
    "Light-filled corner unit on the top floor of a Pacific Heights boutique building. Open living-dining with a gas fireplace, chef's kitchen with Viking appliances, and a large private deck. Two-car parking included. 2 bedrooms, 2 baths, 1,600 sqft.",
  "nest-008":
    "A contemporary compound blending into its redwood surroundings in Ross. The main house features walls of glass, a floating staircase, and a media room. Separate guest house, pool pavilion, and hiking trails on the property. 5 bedrooms, 4.5 baths, 5,200 sqft.",
  "nest-009":
    "Rare penthouse loft in a converted Cow Hollow warehouse with 14-foot ceilings, exposed brick, and a chef's kitchen. The rooftop deck includes a built-in BBQ and views of the Golden Gate Bridge. 2 bedrooms, 2 baths, 2,000 sqft.",
  "nest-010":
    "Cozy studio with bay views from every window. Updated kitchen with quartz counters, in-unit washer/dryer, and ample closet space. HOA includes water, trash, and building insurance. 1 bedroom, 1 bath, 750 sqft.",
};

function getDefaultFallback(listingId: string, tone: string): string {
  const listing = listings.find((l) => l.id === listingId);
  if (!listing) {
    return JSON.stringify({
      copy: "Discover this exceptional property in one of San Francisco's most sought-after neighborhoods. Schedule a private tour today.",
      tone,
    });
  }

  let copy = "";
  if (tone === "luxury") {
    copy = `Experience the pinnacle of refined living at ${listing.title}. This extraordinary ${listing.beds}-bedroom residence at ${listing.address} offers ${listing.sqft.toLocaleString()} square feet of meticulously designed space, bathed in natural light and finished with premium materials throughout. From the moment you step inside, you'll appreciate the thoughtful craftsmanship and timeless elegance. Priced at $${listing.price.toLocaleString()}, this is a rare opportunity to own a true masterpiece in one of the Bay Area's most coveted neighborhoods.`;
  } else if (tone === "concise") {
    copy = `${listing.title} — ${listing.beds} bed, ${listing.baths} bath home in ${listing.neighborhood.replace("-", " ")}. ${listing.sqft.toLocaleString()} sqft. $${listing.price.toLocaleString()}. Schedule a tour with Nest Realty.`;
  } else {
    // default "warm"
    copy = `Welcome to ${listing.title}, a beautiful ${listing.beds}-bedroom home nestled in ${listing.neighborhood.replace("-", " ")}. With ${listing.sqft.toLocaleString()} square feet of inviting living space, this home blends comfort and character seamlessly. Located at ${listing.address}, it's priced at $${listing.price.toLocaleString()}. Let Nest Realty help you make it yours.`;
  }

  return JSON.stringify({ copy, tone, listingId });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { listingId, tone = "warm" } = body;

    if (!listingId || typeof listingId !== "string") {
      return NextResponse.json({ error: "listingId is required" }, { status: 400 });
    }

    // Check for API key — if available, use AI; otherwise fallback
    const apiKey = process.env.OPENAI_API_KEY || process.env.ANTHROPIC_API_KEY;

    if (apiKey) {
      const listing = listings.find((l) => l.id === listingId);
      const prompt = `Rewrite this real estate listing in a ${tone} tone for a luxury residential brokerage website. Keep it 2-3 sentences:\n\n${listing?.description || "Beautiful home in a great neighborhood."}`;

      try {
        let aiCopy = "";
        if (process.env.OPENAI_API_KEY) {
          const res = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
              model: "gpt-4o-mini",
              messages: [
                { role: "system", content: `You are a luxury real estate copywriter. Write in a ${tone}, warm, sophisticated style. Use full sentences.` },
                { role: "user", content: prompt },
              ],
              max_tokens: 200,
              temperature: 0.7,
            }),
          });
          const data = await res.json();
          aiCopy = data.choices?.[0]?.message?.content?.trim() || "";
        } else if (process.env.ANTHROPIC_API_KEY) {
          const res = await fetch("https://api.anthropic.com/v1/messages", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-api-key": process.env.ANTHROPIC_API_KEY,
              "anthropic-version": "2023-06-01",
            },
            body: JSON.stringify({
              model: "claude-3-haiku-20240307",
              max_tokens: 200,
              messages: [
                { role: "user", content: prompt },
              ],
            }),
          });
          const data = await res.json();
          aiCopy = data.content?.[0]?.text?.trim() || "";
        }

        if (aiCopy) {
          return NextResponse.json({ copy: aiCopy, tone, listingId, source: "ai" });
        }
      } catch {
        // AI call failed — fall through to deterministic
      }
    }

    // Deterministic fallback
    const template = fallbackTemplates[listingId];
    if (template) {
      return NextResponse.json({
        copy: template,
        tone,
        listingId,
        source: "fallback-template",
      });
    }

    // Generic fallback
    return NextResponse.json(getDefaultFallback(listingId, tone));
  } catch (e) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}