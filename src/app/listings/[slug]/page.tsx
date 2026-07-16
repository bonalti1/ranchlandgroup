import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import SceneArt from "@/components/SceneArt";
import VideoBlock from "@/components/VideoBlock";
import InquiryForm from "@/components/InquiryForm";
import ListingCard from "@/components/ListingCard";
import {
  listings,
  getListing,
  formatAcres,
  formatPrice,
} from "@/data/listings";
import { site } from "@/data/site";

export function generateStaticParams() {
  return listings.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const listing = getListing((await params).slug);
  if (!listing) return {};
  return {
    title: `${listing.name} — ${listing.county}, ${listing.state}`,
    description: listing.headline,
  };
}

export default async function ListingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const listing = getListing((await params).slug);
  if (!listing) notFound();

  const others = listings.filter((l) => l.slug !== listing.slug).slice(0, 3);

  return (
    <>
      {/* ── Property hero ────────────────────────────────── */}
      <section className="relative flex min-h-[78svh] items-end overflow-hidden bg-ink text-cream">
        <div className="absolute inset-0" aria-hidden="true">
          {listing.photos?.[0] ? (
            <Image
              src={listing.photos[0]}
              alt={listing.name}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          ) : (
            <SceneArt scene={listing.scene} animated className="absolute inset-0" />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/10 to-ink/85" />
          <div className="grain absolute inset-0" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-44 pb-16 md:px-8">
          <Reveal>
            <p className="eyebrow text-brass">
              {listing.county}, {listing.state} · {listing.region}
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-4xl leading-tight md:text-6xl">
              {listing.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-cream/85">
              {listing.headline}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-cream/25 pt-6">
              <div>
                <p className="eyebrow !text-[0.58rem] text-cream/60">Price</p>
                <p className="mt-1 font-display text-2xl md:text-3xl">
                  {formatPrice(listing.price)}
                </p>
              </div>
              <div>
                <p className="eyebrow !text-[0.58rem] text-cream/60">Acreage</p>
                <p className="mt-1 font-display text-2xl md:text-3xl">
                  {formatAcres(listing.acres)}
                </p>
              </div>
              <div>
                <p className="eyebrow !text-[0.58rem] text-cream/60">Type</p>
                <p className="mt-1 font-display text-2xl md:text-3xl">
                  {listing.type}
                </p>
              </div>
              <div>
                <p className="eyebrow !text-[0.58rem] text-cream/60">Status</p>
                <p className="mt-1 font-display text-2xl md:text-3xl">
                  {listing.status}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Film ─────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <Reveal className="mb-10 text-center">
          <p className="eyebrow text-saddle">The Film</p>
          <h2 className="mt-4 font-display text-3xl md:text-4xl">
            See the Ranch in Motion
          </h2>
        </Reveal>
        <Reveal>
          <VideoBlock
            src={listing.video}
            scene={listing.scene}
            title={listing.name}
          />
        </Reveal>
      </section>

      {/* ── Description + facts ──────────────────────────── */}
      <section className="mx-auto grid max-w-7xl gap-16 px-5 py-16 md:px-8 lg:grid-cols-[1.5fr_1fr]">
        <Reveal>
          <p className="eyebrow text-saddle">The Property</p>
          <div className="mt-6 space-y-6 text-lg leading-relaxed text-ink/80">
            {listing.description.map((para) => (
              <p key={para.slice(0, 32)}>{para}</p>
            ))}
          </div>

          <div className="mt-12">
            <p className="eyebrow text-saddle">Highlights</p>
            <ul className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {listing.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <span className="mt-2.5 block h-1.5 w-1.5 shrink-0 rotate-45 bg-brass" />
                  <span className="text-ink/80">{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <dl className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
            {(
              [
                ["Water", listing.water],
                ["Wildlife", listing.wildlife],
                ["Improvements", listing.improvements],
              ] as const
            ).map(([label, value]) => (
              <div key={label} className="grid gap-2 py-5 sm:grid-cols-[160px_1fr]">
                <dt className="eyebrow pt-1 text-saddle">{label}</dt>
                <dd className="text-ink/80">{value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* inquiry sidebar */}
        <Reveal delay={150}>
          <div className="sticky top-28 bg-cream p-8 shadow-[0_2px_24px_rgba(36,27,18,0.1)]">
            <h2 className="font-display text-2xl">Inquire About This Ranch</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/65">
              Private showings are by appointment with proof of funds. Reach
              out and we&apos;ll walk you through the ranch — on the phone or
              on the ground.
            </p>
            <div className="my-6">
              <InquiryForm subject={`Inquiry — ${listing.name}`} />
            </div>
            <div className="border-t border-ink/10 pt-5 text-center text-sm text-ink/70">
              Prefer to talk?{" "}
              <a
                href={site.phoneHref}
                className="font-semibold text-saddle underline underline-offset-2"
              >
                {site.phone}
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── More ranches ─────────────────────────────────── */}
      <section className="bg-sand/60 py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal className="mb-12 flex items-end justify-between">
            <h2 className="font-display text-3xl">More Ranches</h2>
            <Link
              href="/listings"
              className="group eyebrow flex items-center gap-2 border-b border-brass pb-1 transition-colors hover:text-saddle"
            >
              View All
              <span className="transition-transform group-hover:translate-x-1.5">→</span>
            </Link>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-3">
            {others.map((l, i) => (
              <Reveal key={l.slug} delay={i * 120}>
                <ListingCard listing={l} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
