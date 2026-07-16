import type { Metadata } from "next";
import ListingsExplorer from "@/components/ListingsExplorer";
import Reveal from "@/components/Reveal";
import { BuckMark } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Ranches for Sale",
  description:
    "Browse premier ranches, hunting land, and recreational properties for sale across Texas and the American West with Ranch Land Group.",
};

export default function ListingsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink pt-36 pb-20 text-cream">
        <div className="grain absolute inset-0" aria-hidden="true" />
        <BuckMark className="pointer-events-none absolute -right-10 -bottom-16 h-72 w-72 text-cream/[0.05]" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="eyebrow text-brass">Current Inventory</p>
            <h1 className="mt-4 font-display text-4xl md:text-6xl">
              Ranches for Sale
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-cream/75">
              Every ranch we represent is walked, studied, and filmed before
              it&apos;s listed. Click any property for the full story — film,
              water, wildlife, and improvements.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <ListingsExplorer />
      </section>
    </>
  );
}
