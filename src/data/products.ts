/**
 * Ranch Land Group — Outfitter (apparel) products.
 *
 * ⚠️  SAMPLE products modeled on the brand package apparel. Replace
 * with live inventory when production runs are ready. Product photos
 * drop into /public/media/shop/ — set `photo` to the path and it will
 * replace the branded art card.
 */

export interface Product {
  id: string;
  name: string;
  category: "Shirts" | "Headwear" | "Outerwear" | "Goods";
  price: number;
  colors: string[];
  sizes: string[];
  description: string;
  /** Visual style for the branded product card art */
  art: "polo-brown" | "field-khaki" | "cap" | "jacket" | "leather" | "tee";
  photo?: string;
  badge?: string;
}

export const products: Product[] = [
  {
    id: "rlg-polo-bark",
    name: "Ranch Polo — Bark Brown",
    category: "Shirts",
    price: 58,
    colors: ["Bark Brown", "Cream"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "Heavyweight piqué polo in our signature bark brown with the embroidered buck over the heart. Office to pasture.",
    art: "polo-brown",
    badge: "Signature",
  },
  {
    id: "rlg-field-shirt",
    name: "Field Shirt — Khaki",
    category: "Shirts",
    price: 88,
    colors: ["Khaki", "Stone"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "Brushed-twill two-pocket field shirt, cut for the truck and the blind. Tonal Ranch Land Group embroidery.",
    art: "field-khaki",
    badge: "Signature",
  },
  {
    id: "rlg-ranch-cap",
    name: "Ranch Cap — Buck Emblem",
    category: "Headwear",
    price: 34,
    colors: ["Bark Brown", "Khaki", "Cream"],
    sizes: ["One Size"],
    description:
      "Six-panel unstructured cap with the buck emblem in raised embroidery and an antique-brass closure.",
    art: "cap",
  },
  {
    id: "rlg-ranch-jacket",
    name: "Ranch Jacket — Waxed Canvas",
    category: "Outerwear",
    price: 168,
    colors: ["Saddle", "Bark Brown"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "10 oz waxed-canvas ranch jacket with a corduroy collar and blanket lining. Breaks in like a good saddle.",
    art: "jacket",
  },
  {
    id: "rlg-leather-journal",
    name: "Ranch Journal — Full Grain",
    category: "Goods",
    price: 64,
    colors: ["Saddle"],
    sizes: ["One Size"],
    description:
      "Full-grain leather journal, buck emblem debossed, wrapped closure. For notes taken on tailgates.",
    art: "leather",
  },
  {
    id: "rlg-heritage-tee",
    name: "Heritage Tee — Legacy Land",
    category: "Shirts",
    price: 32,
    colors: ["Cream", "Bark Brown"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "Ring-spun cotton tee with the Legacy Land. Expertly Sold. lockup across the back and the buck up front.",
    art: "tee",
  },
];

export const formatUsd = (n: number) =>
  n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
