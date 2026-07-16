import Image from "next/image";

/**
 * Ranch Land Group brand marks — the official logo artwork, processed
 * into transparent PNGs in /public/brand (original brown for light
 * backgrounds, plus cream/brass/saddle/bark tints for dark surfaces
 * and watermarks). Regenerate the tints from the master logo file if
 * the brand artwork ever changes.
 */

export type BuckTone = "brown" | "cream" | "brass" | "saddle" | "bark";

export function BuckMark({
  tone = "brown",
  className = "",
}: {
  tone?: BuckTone;
  className?: string;
}) {
  return (
    <Image
      src={`/brand/buck-${tone}.png`}
      alt=""
      width={361}
      height={361}
      className={className}
      aria-hidden="true"
    />
  );
}

export function LogoLockup({
  tone = "brown",
  className = "",
}: {
  tone?: Extract<BuckTone, "brown" | "cream">;
  className?: string;
}) {
  return (
    <Image
      src={`/brand/lockup-${tone}.png`}
      alt="Ranch Land Group"
      width={1206}
      height={360}
      priority
      className={className}
    />
  );
}

/**
 * Simplified buck paths in a 100×100 user space — used only inside the
 * illustrated product artwork, where a tintable vector emblem is needed.
 */
export function BuckPaths() {
  return (
    <>
      <g stroke="currentColor" strokeWidth="3.6" strokeLinecap="round" fill="none">
        {/* right antler */}
        <path d="M55 50 C 62 45, 67 38, 68.5 28 C 69.5 21, 67 13, 61 8" />
        <path d="M58.5 46.5 C 62 41, 62.5 34, 60 28" />
        <path d="M66 33 C 71 29, 73.5 22, 72.5 14" />
        {/* left antler */}
        <path d="M45 50 C 38 45, 33 38, 31.5 28 C 30.5 21, 33 13, 39 8" />
        <path d="M41.5 46.5 C 38 41, 37.5 34, 40 28" />
        <path d="M34 33 C 29 29, 26.5 22, 27.5 14" />
      </g>
      {/* ears */}
      <path
        d="M39 56 C 32 52, 25 50, 19 51 C 24 58, 30 63, 38 65 Z"
        fill="currentColor"
      />
      <path
        d="M61 56 C 68 52, 75 50, 81 51 C 76 58, 70 63, 62 65 Z"
        fill="currentColor"
      />
      {/* head */}
      <path
        d="M50 49 C 55 51, 60 55, 61.5 61 C 63 68, 57 78, 53.5 87 C 52 91, 51 94, 50 96 C 49 94, 48 91, 46.5 87 C 43 78, 37 68, 38.5 61 C 40 55, 45 51, 50 49 Z"
        fill="currentColor"
      />
    </>
  );
}
