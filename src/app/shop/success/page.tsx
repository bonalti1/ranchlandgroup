import type { Metadata } from "next";
import Link from "next/link";
import { BuckMark } from "@/components/Logo";
import ClearCart from "./ClearCart";

export const metadata: Metadata = {
  title: "Order Confirmed",
  robots: { index: false },
};

export default function OrderSuccessPage() {
  return (
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden bg-ink text-cream">
      <div className="grain absolute inset-0" aria-hidden="true" />
      <div className="relative z-10 px-6 text-center">
        <ClearCart />
        <BuckMark className="mx-auto h-20 w-20 text-brass" />
        <p className="eyebrow mt-8 text-brass">The Outfitter</p>
        <h1 className="mt-4 font-display text-4xl md:text-6xl">
          Order Confirmed
        </h1>
        <p className="mx-auto mt-6 max-w-md text-lg text-cream/75">
          Much obliged. Your gear is headed for the tailgate — a receipt from
          Stripe is on its way to your inbox.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/shop"
            className="bg-cream px-10 py-4 font-display text-sm tracking-[0.25em] text-ink uppercase transition-colors hover:bg-brass hover:text-cream"
          >
            Keep Shopping
          </Link>
          <Link
            href="/listings"
            className="border border-cream/60 px-10 py-4 font-display text-sm tracking-[0.25em] uppercase transition-colors hover:border-cream hover:bg-cream/10"
          >
            Browse Ranches
          </Link>
        </div>
      </div>
    </section>
  );
}
