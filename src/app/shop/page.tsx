import type { Metadata } from "next";
import ShopClient from "@/components/ShopClient";
import Reveal from "@/components/Reveal";
import { BuckMark } from "@/components/Logo";

export const metadata: Metadata = {
  title: "The Outfitter — Ranch Land Group Apparel",
  description:
    "Ranch-tested apparel and goods carrying the Ranch Land Group buck — polos, field shirts, caps, waxed-canvas jackets, and leather goods.",
};

export default function ShopPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink pt-36 pb-20 text-cream">
        <div className="grain absolute inset-0" aria-hidden="true" />
        <BuckMark className="pointer-events-none absolute -left-12 -bottom-20 h-80 w-80 text-cream/[0.05]" />
        <div className="relative mx-auto max-w-7xl px-5 text-center md:px-8">
          <Reveal>
            <p className="eyebrow text-brass">The Outfitter</p>
            <h1 className="mt-4 font-display text-4xl md:text-6xl">
              Wear the Brand
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-cream/75">
              The same gear our team wears from the closing table to the
              caliche — built ranch-tough and carrying the buck. Selling land
              is the business; this is the lifestyle.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <ShopClient />
      </section>
    </>
  );
}
