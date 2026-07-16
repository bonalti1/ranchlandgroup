/**
 * Ranch Land Group brand marks, recreated as SVG from the brand package.
 * Replace `BuckMark` paths with the production vector when the final
 * logo files are delivered — every usage site pulls from here.
 */

/** Raw buck-emblem paths in a 100×100 user space, for embedding inside other SVGs. */
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

export function BuckMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <BuckPaths />
    </svg>
  );
}

export function LogoLockup({
  className = "",
  stacked = false,
}: {
  className?: string;
  stacked?: boolean;
}) {
  if (stacked) {
    return (
      <span className={`flex flex-col items-center gap-2 ${className}`}>
        <BuckMark className="h-14 w-14" />
        <span className="font-display text-2xl tracking-[0.18em]">
          Ranch Land
        </span>
        <span className="eyebrow flex items-center gap-3 opacity-80">
          <span className="inline-block h-px w-6 bg-current" />
          Group
          <span className="inline-block h-px w-6 bg-current" />
        </span>
      </span>
    );
  }
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <BuckMark className="h-10 w-10 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg tracking-[0.18em] whitespace-nowrap">
          Ranch Land
        </span>
        <span className="eyebrow mt-1 !text-[0.55rem] opacity-80">Group</span>
      </span>
    </span>
  );
}
