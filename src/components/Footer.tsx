import Link from "next/link";
import { LogoLockup, BuckMark } from "./Logo";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-cream">
      <div className="grain absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 pt-20 pb-10 md:px-8">
        <div className="grid gap-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <LogoLockup tone="cream" className="h-20 w-auto" />
            <p className="mt-6 max-w-sm leading-relaxed text-cream/70">
              {site.tagline} We market and sell South Texas hunting ranches,
              recreational land, and legacy properties — Golden Triangle to the Rio Grande.
            </p>
          </div>

          <nav aria-label="Footer">
            <h3 className="eyebrow mb-6 text-brass">Explore</h3>
            <ul className="space-y-4">
              {[
                ["Ranches for Sale", "/listings"],
                ["Our Story", "/about"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-cream/80 transition-colors hover:text-brass"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="eyebrow mb-6 text-brass">Headquarters</h3>
            <ul className="space-y-4 text-cream/80">
              <li>{site.address}</li>
              <li>
                <a href={site.phoneHref} className="transition-colors hover:text-brass">
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-brass"
                >
                  {site.email}
                </a>
              </li>
            </ul>
            <div className="mt-6 flex gap-5">
              {Object.entries(site.social).map(([name, href]) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="eyebrow !text-[0.6rem] text-cream/60 transition-colors hover:text-brass"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-cream/15 pt-8">
          <div className="flex flex-col items-center gap-4 text-center text-xs text-cream/50 md:flex-row md:justify-between md:text-left">
            <p>
              © {new Date().getFullYear()} Ranch Land Group. All rights
              reserved.
            </p>
            <p className="max-w-xl">
              Texas Real Estate Commission —{" "}
              <a href="#" className="underline underline-offset-2 hover:text-brass">
                Information About Brokerage Services
              </a>{" "}
              ·{" "}
              <a href="#" className="underline underline-offset-2 hover:text-brass">
                Consumer Protection Notice
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* oversized watermark buck */}
      <BuckMark tone="cream" className="pointer-events-none absolute -right-16 -bottom-24 h-96 w-96 opacity-[0.05]" />
    </footer>
  );
}
