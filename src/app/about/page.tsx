import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { BuckMark } from "@/components/Logo";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Ranch Land Group pairs deep South Texas roots with modern marketing to sell hunting ranches and legacy land from the Golden Triangle to the Rio Grande.",
};

const values = [
  {
    title: "Walk Every Acre",
    body: "We don't list land we haven't walked. Fences, water, feed, access — we know the property before the first buyer ever calls.",
  },
  {
    title: "Show It Like It Deserves",
    body: "Every ranch gets professional photography, aerial mapping, and a full marketing package. Great land deserves better than six phone photos and a plat.",
  },
  {
    title: "Straight Talk",
    body: "Honest numbers, honest condition, honest timelines — the handshake still means something out here, and so does ours.",
  },
  {
    title: "Legacy Over Transaction",
    body: "A ranch sale moves generations of work from one family to the next. We treat that transfer with the weight it carries.",
  },
];

/**
 * Team roster — add each member's name and title as they're confirmed;
 * cards render the name/title line only when provided.
 */
const team: { photo: string; name?: string; title?: string }[] = [
  { photo: "/media/team/member-2.jpg" },
  { photo: "/media/team/member-4.jpg" },
  { photo: "/media/team/member-3.jpg" },
  { photo: "/media/team/member-1.jpg" },
];

const milestones = [
  {
    year: "The Roots",
    text: "Our roots are in construction and real estate — years of building, developing, and closing deals — paired with a lifelong love of hunting the South Texas brush. Two worlds of know-how, one company.",
  },
  {
    year: "The Brokerage",
    text: "Ranch Land Group is founded in South Texas to give the region's legacy properties the marketing sophistication of a national brand with the boots-on-the-ground feel of a neighbor.",
  },
  {
    year: "The Brand",
    text: "The buck emblem debuts — on signs, on gates, and on the gear in our Outfitter. A mark that stands for land done right.",
  },
  {
    year: "What's Next",
    text: "A growing team, a national buyer network, and a platform that will carry every part of the ranch business — from first showing to closing table.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative flex min-h-[70svh] items-end overflow-hidden bg-ink text-cream">
        <div className="absolute inset-0" aria-hidden="true">
          <video
            src="/media/about.mp4"
            poster="/media/about-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/45 via-ink/0 to-ink/85" />
          <div className="grain absolute inset-0" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-44 pb-16 md:px-8">
          <Reveal>
            <p className="eyebrow text-brass">Our Story</p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight md:text-6xl">
              Born on the Land, Built for Its People
            </h1>
          </Reveal>
        </div>
      </section>

      {/* narrative */}
      <section className="mx-auto max-w-3xl px-5 py-24 md:px-8">
        <Reveal>
          <p className="text-xl leading-relaxed text-ink/80 md:text-2xl md:leading-relaxed">
            When you buy a ranch through us, you buy land we know.
          </p>
          <div className="rule my-10" />
          <div className="space-y-6 text-lg leading-relaxed text-ink/75">
            <p>
              We&apos;ve walked every acre we list — checked the water, the
              soil, the access, the fences — before you ever see it. We hunt
              this brush ourselves, so we know what makes a property worth
              owning. Straight answers, honest numbers, and a handshake that
              still means something.
            </p>
          </div>
        </Reveal>
      </section>

      {/* values */}
      <section className="bg-sand/60 py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal className="mb-14 text-center">
            <p className="eyebrow text-saddle">How We Work</p>
            <h2 className="mt-4 font-display text-3xl md:text-5xl">
              The Ranch Land Way
            </h2>
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <div className="h-full bg-cream p-8 shadow-[0_2px_20px_rgba(36,27,18,0.08)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_18px_44px_rgba(36,27,18,0.14)]">
                  <BuckMark tone="saddle" className="h-10 w-10" />
                  <h3 className="mt-6 font-display text-xl">{v.title}</h3>
                  <p className="mt-4 leading-relaxed text-ink/70">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* timeline */}
      <section className="mx-auto max-w-4xl px-5 py-24 md:px-8">
        <Reveal className="mb-16 text-center">
          <p className="eyebrow text-saddle">The Trail So Far</p>
          <h2 className="mt-4 font-display text-3xl md:text-5xl">Our Trail</h2>
        </Reveal>
        <ol className="relative space-y-14 border-l border-brass/50 pl-10 md:pl-14">
          {milestones.map((m, i) => (
            <Reveal key={m.year} as="li" delay={i * 100} className="relative">
              <span className="absolute -left-[45px] top-1 h-4 w-4 rotate-45 border border-brass bg-paper md:-left-[61px]" />
              <h3 className="font-display text-2xl text-saddle">{m.year}</h3>
              <p className="mt-3 text-lg leading-relaxed text-ink/75">{m.text}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* team */}
      <section className="relative overflow-hidden bg-ink py-24 text-cream">
        <div className="grain absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <h2 className="font-display text-3xl md:text-5xl">
              The Team
            </h2>
            <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {team.map((member, i) => (
                <div
                  key={member.photo}
                  className="group overflow-hidden bg-bark/60 backdrop-blur"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={member.photo}
                      alt={member.name ?? `Ranch Land Group team member ${i + 1}`}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.05]"
                      sizes="(min-width: 768px) 25vw, 50vw"
                    />
                  </div>
                  {(member.name || member.title) && (
                    <div className="p-4 text-center">
                      {member.name && (
                        <h3 className="font-display text-lg tracking-wide">
                          {member.name}
                        </h3>
                      )}
                      {member.title && (
                        <p className="eyebrow mt-1 !text-[0.58rem] text-cream/60">
                          {member.title}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <p className="mx-auto mt-10 max-w-xl leading-relaxed text-cream/75">
              Builders, dealmakers, and lifelong hunters — the crew behind
              every showing, every deal, and every closing.
            </p>
            <div className="mt-8 space-y-2 text-sm text-cream/70">
              <p>
                <a href={site.phoneHref} className="hover:text-brass">
                  {site.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${site.email}`} className="hover:text-brass">
                  {site.email}
                </a>
              </p>
            </div>
            <p className="mt-10 text-cream/60 italic">
              The team is growing — agent profiles land here as the brand
              expands.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-block border border-cream/60 px-10 py-4 font-display text-sm tracking-[0.25em] uppercase transition-colors hover:border-cream hover:bg-cream/10"
            >
              Ride With Us
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
