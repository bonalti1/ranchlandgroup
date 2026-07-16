"use client";

import { useEffect, useRef, useState } from "react";

/** Counts up from 0 when scrolled into view. */
export default function StatCounter({
  value,
  prefix = "",
  suffix = "",
  label,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        const t0 = performance.now();
        const duration = 1800;
        const tick = (t: number) => {
          const k = Math.min((t - t0) / duration, 1);
          // ease-out-quart
          setDisplay(Math.round(value * (1 - Math.pow(1 - k, 4))));
          if (k < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-4xl text-brass md:text-5xl">
        {prefix}
        {display.toLocaleString("en-US")}
        {suffix}
      </p>
      <p className="eyebrow mt-3 opacity-70">{label}</p>
    </div>
  );
}
