"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Types out a line character-by-character when it scrolls into view,
 * with a blinking cursor. Reserves the full text's space up front so
 * the layout never shifts, and prints instantly for users who prefer
 * reduced motion.
 */
export default function TypedQuote({
  text,
  className = "",
  speed = 45,
}: {
  text: string;
  className?: string;
  speed?: number;
}) {
  const [chars, setChars] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStarted(true);
      setChars(text.length);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [text.length]);

  useEffect(() => {
    if (!started || chars >= text.length) return;
    const t = setTimeout(() => setChars((c) => c + 1), speed);
    return () => clearTimeout(t);
  }, [started, chars, text.length, speed]);

  return (
    <p ref={ref} className={`relative ${className}`} aria-label={text}>
      {/* invisible full text locks in the final layout */}
      <span className="invisible">{text}</span>
      <span className="absolute inset-0" aria-hidden="true">
        {text.slice(0, chars)}
        <span className="typed-cursor ml-1 inline-block h-[0.95em] w-[2px] translate-y-[0.12em] bg-brass" />
      </span>
    </p>
  );
}
