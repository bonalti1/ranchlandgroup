import Link from "next/link";
import { BuckMark } from "@/components/Logo";

export default function NotFound() {
  return (
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden bg-ink text-cream">
      <div className="grain absolute inset-0" aria-hidden="true" />
      <div className="relative z-10 px-6 text-center">
        <BuckMark className="mx-auto h-20 w-20 text-brass" />
        <p className="eyebrow mt-8 text-brass">Off the Beaten Path</p>
        <h1 className="mt-4 font-display text-4xl md:text-6xl">
          This Pasture&apos;s Empty
        </h1>
        <p className="mx-auto mt-6 max-w-md text-lg text-cream/70">
          The page you&apos;re after has moved on or never existed. The good
          country is back this way.
        </p>
        <Link
          href="/"
          className="mt-10 inline-block bg-cream px-10 py-4 font-display text-sm tracking-[0.25em] text-ink uppercase transition-colors hover:bg-brass hover:text-cream"
        >
          Back to the Ranch
        </Link>
      </div>
    </section>
  );
}
