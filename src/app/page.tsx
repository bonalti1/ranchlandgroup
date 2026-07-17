import Link from "next/link";
import Image from "next/image";
import HeroMedia from "@/components/HeroMedia";
import Reveal from "@/components/Reveal";
import ListingCard from "@/components/ListingCard";
import StatCounter from "@/components/StatCounter";
import TypedQuote from "@/components/TypedQuote";
import { BuckMark } from "@/components/Logo";
import { featuredListings } from "@/data/listings";
import { site } from "@/data/site";

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative flex min-h-svh items-center justify-center overflow-hidden bg-ink text-cream">
        <HeroMedia />
        <div className="relative z-10 mx-auto max-w-5xl px-6 pt-24 pb-32 text-center">
          <Reveal>
            <BuckMark tone="cream" className="mx-auto h-20 w-20 md:h-24 md:w-24" />
          </Reveal>
          <Reveal delay={150}>
            <p className="eyebrow mt-8 text-brass">Ranch Land Group</p>
          </Reveal>
          <Reveal delay={300}>
            <h1 className="mt-6 font-display text-4xl leading-tight tracking-wide text-balance sm:text-5xl md:text-6xl lg:text-7xl">
              Legacy Land.
              <br />
              Expertly Sold.
            </h1>
          </Reveal>
          <Reveal delay={450}>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-cream/80 md:text-xl">
              Premier hunting ranches and recreational land across South Texas
              — from the Golden Triangle to the Rio Grande — marketed with
              cinema-grade film and sold by people who live this life.
            </p>
          </Reveal>
          <Reveal delay={600}>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/listings"
                className="group bg-cream px-10 py-4 font-display text-sm tracking-[0.25em] text-ink uppercase transition-colors hover:bg-brass hover:text-cream"
              >
                Explore Ranches
                <span className="ml-3 inline-block transition-transform duration-300 group-hover:translate-x-1.5">
                  →
                </span>
              </Link>
              <Link
                href="/about"
                className="border border-cream/60 px-10 py-4 font-display text-sm tracking-[0.25em] text-cream uppercase backdrop-blur-sm transition-colors hover:border-cream hover:bg-cream/10"
              >
                Our Story
              </Link>
            </div>
          </Reveal>
        </div>

        {/* scroll cue */}
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-sway">
          <div className="flex flex-col items-center gap-3 text-cream/70">
            <span className="eyebrow !text-[0.55rem]">Scroll</span>
            <span className="block h-10 w-px bg-gradient-to-b from-cream/70 to-transparent" />
          </div>
        </div>
      </section>

      {/* ── Featured Ranches ─────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <Reveal className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-saddle">Current Offerings</p>
            <h2 className="mt-4 font-display text-3xl md:text-5xl">
              Featured Ranches
            </h2>
          </div>
          <Link
            href="/listings"
            className="group eyebrow flex items-center gap-2 border-b border-brass pb-1 text-ink transition-colors hover:text-saddle"
          >
            View All Properties
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">
              →
            </span>
          </Link>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredListings.map((l, i) => (
            <Reveal key={l.slug} delay={i * 120}>
              <ListingCard listing={l} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Numbers band ─────────────────────────────────── */}
      <section className="relative overflow-hidden bg-ink py-24 text-cream">
        <div className="grain absolute inset-0" aria-hidden="true" />
        <BuckMark tone="cream" className="pointer-events-none absolute -top-20 -left-16 h-80 w-80 opacity-[0.05]" />
        <div className="relative mx-auto max-w-6xl px-6">
          <TypedQuote
            text="“Land is the one thing they aren’t making any more of.”"
            className="mx-auto mb-16 max-w-3xl text-center font-display text-2xl text-cream italic md:text-3xl"
          />
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-14 px-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatCounter value={9300} suffix="+" label="South Texas Acres" />
          <StatCounter value={22} prefix="$" suffix="M+" label="Active Inventory" />
          <StatCounter value={5} label="Ranches Offered" />
          <StatCounter value={3} label="Generations of Land Know-How" />
        </div>
      </section>

      {/* ── Story teaser ─────────────────────────────────── */}
      <section className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 md:grid-cols-2 md:px-8 md:py-32">
        <Reveal>
          <div className="relative aspect-[4/3] overflow-hidden shadow-[0_24px_60px_rgba(36,27,18,0.25)]">
            <Image
              src="/media/team.jpg"
              alt="The Ranch Land Group team in the field"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </Reveal>
        <Reveal delay={150}>
          <p className="eyebrow text-saddle">Our Story</p>
          <h2 className="mt-4 font-display text-3xl leading-snug md:text-5xl">
            Born on the Land,
            <br />
            Built for Its People
          </h2>
          <div className="rule my-8 max-w-xs" />
          <p className="text-lg leading-relaxed text-ink/75">
            Ranch Land Group was founded on a simple belief: selling a ranch
            is not a transaction — it&apos;s the transfer of a legacy. We pair
            deep South Texas roots with modern marketing — cinematic film,
            aerial mapping, and a national buyer network — so the land that
            shaped your family finds the family it will shape next.
          </p>
          <Link
            href="/about"
            className="group mt-10 inline-flex items-center gap-3 border border-ink px-8 py-4 font-display text-sm tracking-[0.25em] uppercase transition-colors hover:bg-ink hover:text-cream"
          >
            Read the Full Story
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">
              →
            </span>
          </Link>
        </Reveal>
      </section>

      {/* ── Closing CTA ──────────────────────────────────── */}
      <section className="relative overflow-hidden bg-bark py-28 text-cream">
        <div className="grain absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <BuckMark tone="brass" className="mx-auto h-16 w-16" />
            <h2 className="mt-8 font-display text-3xl leading-snug md:text-5xl">
              Thinking About Buying
              <br />
              or Selling a Ranch?
            </h2>
            <p className="mt-6 text-lg text-cream/75">
              Start with a conversation. No pressure, no obligation — just
              straight talk about your land and the market.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={site.phoneHref}
                className="bg-cream px-10 py-4 font-display text-sm tracking-[0.25em] text-ink uppercase transition-colors hover:bg-brass hover:text-cream"
              >
                Call {site.phone}
              </a>
              <Link
                href="/contact"
                className="border border-cream/60 px-10 py-4 font-display text-sm tracking-[0.25em] uppercase transition-colors hover:border-cream hover:bg-cream/10"
              >
                Send a Message
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
