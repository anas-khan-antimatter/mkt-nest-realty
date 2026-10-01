import { NextRequest, NextResponse } from "next/server";
import { listings } from "@/lib/data";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, listingId, message } = body;

    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "A valid email is required" }, { status: 400 });
    }

    let listingTitle: string | undefined;
    if (listingId && typeof listingId === "string") {
      const listing = listings.find((l) => l.id === listingId);
      listingTitle = listing?.title;
    }

    // In production, this would send an email/CRM webhook.
    // For now we acknowledge receipt.
    const inquiry = {
      id: `inq-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      name: name.trim(),
      email: email.trim(),
      phone: typeof phone === "string" ? phone.trim() : "",
      listingId: listingId || null,
      listingTitle: listingTitle || null,
      message: typeof message === "string" ? message.trim() : "",
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json({
      ok: true,
      inquiryId: inquiry.id,
      message: `Thank you, ${inquiry.name}. Your inquiry${listingTitle ? ` about ${listingTitle}` : ""} has been received. A Nest Realty agent will reach out within 24 hours.`,
    });
  } catch (e) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
}