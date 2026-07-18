import type { Metadata } from "next";
import Link from "next/link";
import ListingsExplorer from "@/components/ListingsExplorer";
import Reveal from "@/components/Reveal";
import { BuckMark } from "@/components/Logo";
import { counties } from "@/data/counties";

export const metadata: Metadata = {
  title: "Ranches for Sale",
  description:
    "Browse premier South Texas hunting ranches and recreational land for sale — Golden Triangle brush country to the Rio Grande — with Ranch Land Group.",
};

export default function ListingsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink pt-36 pb-20 text-cream">
        <div className="grain absolute inset-0" aria-hidden="true" />
        <BuckMark tone="cream" className="pointer-events-none absolute -right-10 -bottom-16 h-72 w-72 opacity-[0.05]" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="eyebrow text-brass">Current Inventory</p>
            <h1 className="mt-4 font-display text-4xl md:text-6xl">
              Ranches for Sale
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-cream/75">
              Every ranch we represent is walked and studied before it&apos;s
              listed. Click any property for the full story — water,
              wildlife, and improvements.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <ListingsExplorer />
      </section>

      {/* ── county guides ────────────────────────────────── */}
      <section className="bg-sand/60 py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal className="mb-8 text-center">
            <p className="eyebrow text-saddle">Know the Country</p>
            <h2 className="mt-4 font-display text-2xl md:text-3xl">
              Browse Ranches by County
            </h2>
          </Reveal>
          <Reveal>
            <div className="flex flex-wrap justify-center gap-3">
              {counties.map((c) => (
                <Link
                  key={c.slug}
                  href={`/ranches-for-sale/${c.slug}`}
                  className="eyebrow border border-ink/20 bg-cream px-5 py-3 transition-colors hover:border-saddle hover:text-saddle"
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
