import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import InquiryForm from "@/components/InquiryForm";
import { BuckMark } from "@/components/Logo";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk ranches with Ranch Land Group — buying, selling, or just kicking tires. Call, email, or send us a message.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink pt-36 pb-20 text-cream">
        <div className="grain absolute inset-0" aria-hidden="true" />
        <BuckMark tone="cream" className="pointer-events-none absolute -right-10 -bottom-16 h-72 w-72 opacity-[0.05]" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="eyebrow text-brass">Contact</p>
            <h1 className="mt-4 font-display text-4xl md:text-6xl">
              Let&apos;s Talk Land
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-cream/75">
              Buying, selling, or just kicking tires on an idea — the
              conversation costs nothing and stays between us.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-16 px-5 py-20 md:px-8 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <p className="eyebrow text-saddle">Headquarters</p>
          <h2 className="mt-4 font-display text-3xl">Ranch Land Group</h2>
          <div className="rule my-8 max-w-xs" />
          <dl className="space-y-8">
            <div>
              <dt className="eyebrow !text-[0.6rem] text-ink/50">Phone</dt>
              <dd className="mt-2 text-2xl">
                <a href={site.phoneHref} className="font-display text-saddle hover:text-bark">
                  {site.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow !text-[0.6rem] text-ink/50">Email</dt>
              <dd className="mt-2 text-xl">
                <a href={`mailto:${site.email}`} className="text-saddle underline underline-offset-4 hover:text-bark">
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow !text-[0.6rem] text-ink/50">Based In</dt>
              <dd className="mt-2 text-xl text-ink/80">{site.address}</dd>
            </div>
            <div>
              <dt className="eyebrow !text-[0.6rem] text-ink/50">Follow the Brand</dt>
              <dd className="mt-3 flex gap-5">
                {Object.entries(site.social).map(([name, href]) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="eyebrow text-ink/60 transition-colors hover:text-saddle"
                  >
                    {name}
                  </a>
                ))}
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={150}>
          <div className="bg-cream p-8 shadow-[0_2px_24px_rgba(36,27,18,0.1)] md:p-10">
            <h2 className="font-display text-2xl">Send a Message</h2>
            <p className="mt-3 text-sm text-ink/65">
              Tell us what you&apos;re looking for — or what you&apos;re thinking of
              letting go. We answer every message personally.
            </p>
            <div className="mt-8">
              <InquiryForm subject="Website Inquiry — Ranch Land Group" />
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
