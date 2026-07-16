"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import ProductArt from "./ProductArt";
import Reveal from "./Reveal";
import { useCart } from "./CartProvider";
import { products, formatUsd, type Product } from "@/data/products";

const categories = ["All", "Shirts", "Headwear", "Outerwear", "Goods"] as const;

export default function ShopClient() {
  const [category, setCategory] =
    useState<(typeof categories)[number]>("All");

  const visible = useMemo(
    () =>
      category === "All"
        ? products
        : products.filter((p) => p.category === category),
    [category],
  );

  return (
    <div>
      <div
        className="mb-12 flex flex-wrap justify-center gap-2"
        role="group"
        aria-label="Filter products"
      >
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`eyebrow cursor-pointer px-5 py-2.5 transition-colors ${
              category === c
                ? "bg-ink text-cream"
                : "text-ink/60 hover:text-ink"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p, i) => (
          <Reveal key={p.id} delay={i * 60}>
            <ProductCard product={p} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const [size, setSize] = useState(product.sizes[0]);
  const [color, setColor] = useState(product.colors[0]);

  return (
    <div className="group flex h-full flex-col bg-cream shadow-[0_2px_20px_rgba(36,27,18,0.08)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_18px_44px_rgba(36,27,18,0.16)]">
      <div className="relative aspect-square overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.05]">
          {product.photo ? (
            <Image
              src={product.photo}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          ) : (
            <ProductArt art={product.art} />
          )}
        </div>
        {product.badge && (
          <span className="eyebrow absolute top-4 left-4 bg-saddle px-3 py-1.5 !text-[0.6rem] text-cream">
            {product.badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-lg leading-snug">{product.name}</h3>
          <span className="font-display text-lg text-saddle">
            {formatUsd(product.price)}
          </span>
        </div>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/65">
          {product.description}
        </p>

        <div className="mt-5 flex gap-3">
          <select
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="min-w-0 flex-1 cursor-pointer border border-ink/20 bg-transparent px-3 py-2.5 text-xs tracking-wider"
            aria-label={`${product.name} color`}
          >
            {product.colors.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
          <select
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="cursor-pointer border border-ink/20 bg-transparent px-3 py-2.5 text-xs tracking-wider"
            aria-label={`${product.name} size`}
          >
            {product.sizes.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>

        <button
          onClick={() => add({ productId: product.id, size, color })}
          className="mt-4 w-full cursor-pointer border border-ink bg-transparent px-6 py-3.5 font-display text-xs tracking-[0.25em] text-ink uppercase transition-colors hover:bg-ink hover:text-cream"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
