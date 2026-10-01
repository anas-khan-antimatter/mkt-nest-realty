import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, listingId, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    if (!email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    const response = {
      success: true,
      inquiry: {
        id: `inq-${Date.now()}`,
        name,
        email,
        phone: phone || null,
        listingId: listingId || null,
        message: message || null,
        createdAt: new Date().toISOString(),
      },
      message: `Thank you, ${name}. A Nest Realty agent will respond to ${email} within 24 hours.`,
    };

    await new Promise((resolve) => setTimeout(resolve, 300));

    return NextResponse.json(response, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: "Invalid request body. Expected JSON with name and email." },
      { status: 400 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    service: "Nest Realty Inquiry API",
    version: "1.0",
    endpoints: {
      POST: {
        description: "Submit a real estate inquiry",
        body: {
          name: "string (required)",
          email: "string (required)",
          phone: "string (optional)",
          listingId: "string (optional)",
          message: "string (optional)",
        },
      },
    },
  });
}