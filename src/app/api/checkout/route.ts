import { NextResponse } from "next/server";
import Stripe from "stripe";
import { products } from "@/data/products";

/**
 * Creates a Stripe Checkout session from the cart.
 *
 * Setup:
 *  1. Create each Outfitter product in the Stripe Dashboard
 *     (Product catalog → Add product) and copy its price ID (price_...).
 *  2. Set `stripePriceId` on the matching product in src/data/products.ts.
 *  3. Set the STRIPE_SECRET_KEY environment variable on the host
 *     (never commit it). Until it's set, the cart falls back to
 *     email ordering automatically.
 *
 * Prices always come from Stripe's catalog by price ID — the client
 * only sends product IDs and quantities, so amounts can't be tampered with.
 */

interface CheckoutLine {
  productId: string;
  size: string;
  color: string;
  qty: number;
}

export async function POST(req: Request) {
  const secret = process.env.STRIPE_SECRET_KEY;
  if (!secret) {
    return NextResponse.json(
      { error: "Online checkout is not configured yet." },
      { status: 503 },
    );
  }

  let lines: CheckoutLine[];
  try {
    const body = await req.json();
    lines = body?.lines;
    if (!Array.isArray(lines) || lines.length === 0 || lines.length > 50) {
      throw new Error("bad cart");
    }
  } catch {
    return NextResponse.json({ error: "Invalid cart." }, { status: 400 });
  }

  const lineItems: { price: string; quantity: number }[] = [];
  for (const line of lines) {
    const product = products.find((p) => p.id === line.productId);
    if (!product) {
      return NextResponse.json(
        { error: `Unknown product: ${line.productId}` },
        { status: 400 },
      );
    }
    if (!product.stripePriceId) {
      return NextResponse.json(
        { error: `${product.name} isn't available for online checkout yet.` },
        { status: 400 },
      );
    }
    const qty = Math.min(Math.max(1, Math.floor(line.qty) || 1), 99);
    lineItems.push({ price: product.stripePriceId, quantity: qty });
  }

  const origin =
    req.headers.get("origin") ??
    process.env.NEXT_PUBLIC_SITE_URL ??
    "http://localhost:3000";

  // Size/color selections ride along as metadata so they show up on the
  // payment in the Stripe Dashboard.
  const orderNotes = lines
    .map((l) => {
      const p = products.find((p) => p.id === l.productId);
      return `${p?.name ?? l.productId} — ${l.color}/${l.size} ×${l.qty}`;
    })
    .join("; ")
    .slice(0, 480);

  try {
    const stripe = new Stripe(secret);
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      success_url: `${origin}/shop/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/shop`,
      shipping_address_collection: { allowed_countries: ["US"] },
      metadata: { order: orderNotes },
    });
    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json(
      { error: "Checkout is temporarily unavailable. Please try again." },
      { status: 502 },
    );
  }
}
