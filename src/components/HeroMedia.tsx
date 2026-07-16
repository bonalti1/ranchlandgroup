"use client";

import { useEffect, useRef, useState } from "react";
import SceneArt from "./SceneArt";
import { site } from "@/data/site";

/**
 * Full-bleed hero background. Plays the brand film from
 * /public/media/hero.mp4 when present; until that file exists it
 * renders the animated Ranch Land landscape with a subtle
 * mouse-parallax drift.
 */
export default function HeroMedia() {
  const [videoOk, setVideoOk] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onMove = (e: MouseEvent) => {
      const { innerWidth: w, innerHeight: h } = window;
      const x = (e.clientX / w - 0.5) * 2;
      const y = (e.clientY / h - 0.5) * 2;
      el.style.transform = `translate3d(${x * -14}px, ${y * -8}px, 0) scale(1.04)`;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        ref={wrapRef}
        className="absolute inset-0 scale-[1.04] transition-transform duration-700 ease-out will-change-transform"
      >
        {!videoOk && <SceneArt scene="mesa" animated className="absolute inset-0" />}
        <video
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            videoOk ? "opacity-100" : "opacity-0"
          }`}
          src={site.heroVideo}
          poster={site.heroPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onCanPlay={() => setVideoOk(true)}
          onError={() => setVideoOk(false)}
        />
      </div>
      {/* cinematic vignette for headline legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/15 to-ink/70" />
      <div className="grain absolute inset-0" />
    </div>
  );
}
