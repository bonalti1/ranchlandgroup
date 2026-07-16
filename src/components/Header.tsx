"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LogoLockup } from "./Logo";
import { useCart } from "./CartProvider";

const nav = [
  { href: "/listings", label: "Ranches" },
  { href: "/about", label: "Our Story" },
  { href: "/shop", label: "Outfitter" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { count, setDrawerOpen } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-cream/95 text-ink shadow-[0_1px_0_rgba(58,45,32,0.12)] backdrop-blur"
          : "bg-transparent text-cream"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
        <Link href="/" aria-label="Ranch Land Group — home">
          <LogoLockup />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`eyebrow relative pb-1 transition-opacity hover:opacity-100 ${
                pathname.startsWith(item.href) ? "opacity-100" : "opacity-75"
              }`}
            >
              {item.label}
              <span
                className={`absolute inset-x-0 -bottom-0.5 h-px bg-brass transition-transform duration-300 ${
                  pathname.startsWith(item.href) ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </Link>
          ))}
          <button
            onClick={() => setDrawerOpen(true)}
            className="eyebrow relative cursor-pointer opacity-75 transition-opacity hover:opacity-100"
            aria-label="Open cart"
          >
            Cart
            {count > 0 && (
              <span className="absolute -top-2 -right-4 flex h-4 w-4 items-center justify-center rounded-full bg-saddle font-body text-[0.6rem] text-cream">
                {count}
              </span>
            )}
          </button>
        </nav>

        <div className="flex items-center gap-5 md:hidden">
          <button
            onClick={() => setDrawerOpen(true)}
            className="eyebrow relative cursor-pointer"
            aria-label="Open cart"
          >
            Cart
            {count > 0 && (
              <span className="absolute -top-2 -right-3 flex h-4 w-4 items-center justify-center rounded-full bg-saddle font-body text-[0.6rem] text-cream">
                {count}
              </span>
            )}
          </button>
          <button
            className="flex h-9 w-9 cursor-pointer flex-col items-center justify-center gap-1.5"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span
              className={`h-px w-6 bg-current transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-6 bg-current transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <div
        className={`overflow-hidden transition-[max-height] duration-500 md:hidden ${
          open ? "max-h-80" : "max-h-0"
        } bg-cream/95 backdrop-blur`}
      >
        <nav className="flex flex-col gap-1 px-6 pt-2 pb-6 text-ink">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="eyebrow border-b border-ink/10 py-4"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
