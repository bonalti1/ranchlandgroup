import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import ListingCard from "@/components/ListingCard";
import { BuckMark } from "@/components/Logo";
import { counties, getCounty } from "@/data/counties";
import { listings } from "@/data/listings";
import { site } from "@/data/site";

export function generateStaticParams() {
  return counties.map((c) => ({ county: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ county: string }>;
}): Promise<Metadata> {
  const county = getCounty((await params).county);
  if (!county) return {};
  return {
    title: `Ranches for Sale in ${county.name}, Texas`,
    description: `Hunting ranches and land for sale in ${county.name}, Texas — ${county.region} brush country. Local expertise, walked-and-studied listings, and off-market knowledge from Ranch Land Group.`,
    alternates: { canonical: `/ranches-for-sale/${county.slug}` },
  };
}

export default async function CountyPage({
  params,
}: {
  params: Promise<{ county: string }>;
}) {
  const county = getCounty((await params).county);
  if (!county) notFound();

  const countyListings = listings.filter((l) => l.county === county.name);
  const otherCounties = counties.filter((c) => c.slug !== county.slug);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: county.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ranches for Sale",
        item: "https://ranchlandgroup.com/listings",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: `${county.name}, Texas`,
        item: `https://ranchlandgroup.com/ranches-for-sale/${county.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── header ─────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-ink pt-36 pb-20 text-cream">
        <div className="grain absolute inset-0" aria-hidden="true" />
        <BuckMark tone="cream" className="pointer-events-none absolute -right-10 -bottom-16 h-72 w-72 opacity-[0.05]" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="eyebrow text-brass">{county.region} · South Texas</p>
            <h1 className="mt-4 font-display text-4xl md:text-6xl">
              Ranches for Sale in {county.name}, Texas
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-cream/75">
              {county.intro[0]}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── narrative + facts ──────────────────────────── */}
      <section className="mx-auto grid max-w-7xl gap-14 px-5 py-20 md:px-8 lg:grid-cols-[1.5fr_1fr]">
        <Reveal>
          <p className="eyebrow text-saddle">The Country</p>
          <div className="mt-6 space-y-6 text-lg leading-relaxed text-ink/80">
            {county.intro.slice(1).map((para) => (
              <p key={para.slice(0, 32)}>{para}</p>
            ))}
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="bg-cream p-8 shadow-[0_2px_24px_rgba(36,27,18,0.1)]">
            <h2 className="font-display text-xl">{county.name} at a Glance</h2>
            <dl className="mt-6 divide-y divide-ink/10">
              {county.facts.map(([label, value]) => (
                <div key={label} className="py-3">
                  <dt className="eyebrow !text-[0.58rem] text-saddle">{label}</dt>
                  <dd className="mt-1 text-ink/80">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </section>

      {/* ── listings in this county ─────────────────────── */}
      <section className="bg-sand/60 py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal className="mb-12">
            <p className="eyebrow text-saddle">Current Inventory</p>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">
              {county.name} Listings
            </h2>
          </Reveal>
          {countyListings.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {countyListings.map((l, i) => (
                <Reveal key={l.slug} delay={i * 120}>
                  <ListingCard listing={l} />
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal>
              <div className="border-2 border-dashed border-ink/20 bg-cream/50 p-10 text-center">
                <BuckMark tone="saddle" className="mx-auto h-12 w-12 opacity-60" />
                <p className="mx-auto mt-6 max-w-xl text-lg text-ink/70">
                  Inventory in {county.name} moves fast, and much of the best
                  land trades off-market. Tell us what you&apos;re hunting for
                  and we&apos;ll put the county&apos;s quiet opportunities in
                  front of you first.
                </p>
                <a
                  href={site.phoneHref}
                  className="mt-8 inline-block bg-saddle px-10 py-4 font-display text-sm tracking-[0.25em] text-cream uppercase transition-colors hover:bg-bark"
                >
                  Call {site.phone}
                </a>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* ── FAQs ────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-5 py-20 md:px-8">
        <Reveal className="mb-12 text-center">
          <p className="eyebrow text-saddle">Good to Know</p>
          <h2 className="mt-4 font-display text-3xl md:text-4xl">
            {county.name} Questions, Answered
          </h2>
        </Reveal>
        <div className="space-y-10">
          {county.faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 80}>
              <h3 className="font-display text-xl text-saddle">{f.q}</h3>
              <p className="mt-3 text-lg leading-relaxed text-ink/75">{f.a}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── other counties + CTA ────────────────────────── */}
      <section className="relative overflow-hidden bg-ink py-20 text-cream">
        <div className="grain absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <h2 className="text-center font-display text-2xl md:text-3xl">
              Browse Other South Texas Counties
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {otherCounties.map((c) => (
                <Link
                  key={c.slug}
                  href={`/ranches-for-sale/${c.slug}`}
                  className="eyebrow border border-cream/30 px-5 py-3 transition-colors hover:border-brass hover:text-brass"
                >
                  {c.name}
                </Link>
              ))}
            </div>
            <p className="mx-auto mt-12 max-w-xl text-center text-cream/70">
              Looking in {county.name}? Start with a conversation — we know
              what&apos;s on the market, and what&apos;s about to be.
            </p>
            <div className="mt-8 text-center">
              <Link
                href="/contact"
                className="inline-block bg-cream px-10 py-4 font-display text-sm tracking-[0.25em] text-ink uppercase transition-colors hover:bg-brass hover:text-cream"
              >
                Talk to Ranch Land Group
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
