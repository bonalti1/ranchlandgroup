/**
 * Ranch Land Group — Outfitter products.
 *
 * These are the launch products with real photography. Adjust names,
 * prices, colors, and sizes here — the shop, cart, and homepage teaser
 * all read from this file. To enable online card checkout, create each
 * product in Stripe and set its `stripePriceId` (see README).
 */

export interface Product {
  id: string;
  name: string;
  category: "Shirts" | "Headwear" | "Outerwear" | "Goods";
  price: number;
  colors: string[];
  sizes: string[];
  description: string;
  /** Fallback illustration style if no photo is set */
  art: "polo-brown" | "field-khaki" | "cap" | "jacket" | "leather" | "tee";
  photo?: string;
  badge?: string;
  /**
   * Stripe price ID (price_...) from the Dashboard's Product catalog.
   * When every cart item has one (and STRIPE_SECRET_KEY is set on the
   * host), the cart offers secure Stripe checkout; otherwise it falls
   * back to email ordering.
   */
  stripePriceId?: string;
}

export const products: Product[] = [
  {
    id: "rlg-performance-shirt",
    name: "Performance Field Shirt — Khaki",
    category: "Shirts",
    price: 68,
    colors: ["Khaki"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "Lightweight vented performance shirt built for South Texas heat — two chest pockets, quick-dry weave, and the buck embroidered over the heart.",
    art: "field-khaki",
    photo: "/media/shop/performance-shirt.jpg",
    badge: "Signature",
  },
  {
    id: "rlg-camo-cap",
    name: "Ranch Cap — Brush Camo",
    category: "Headwear",
    price: 34,
    colors: ["Brush Camo"],
    sizes: ["One Size"],
    description:
      "Low-profile cap in brush-country camo with the full Ranch Land Group lockup stitched front and center.",
    art: "cap",
    photo: "/media/shop/cap.jpg",
  },
  {
    id: "rlg-leather-journal",
    name: "Ranch Journal — Full Grain Leather",
    category: "Goods",
    price: 64,
    colors: ["Saddle Brown"],
    sizes: ["One Size"],
    description:
      "Full-grain leather journal with the buck debossed deep and a wrap strap that keeps your notes where you left them. For deals done on tailgates.",
    art: "leather",
    photo: "/media/shop/leather-journal.jpg",
  },
];

export const productCategories = [
  "All",
  ...new Set(products.map((p) => p.category)),
];

export const formatUsd = (n: number) =>
  n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
