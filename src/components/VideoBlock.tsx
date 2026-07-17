"use client";

import { useRef, useState } from "react";
import SceneArt from "./SceneArt";
import type { SceneKey } from "@/data/listings";

/**
 * Property film block for listing pages. Renders a cinematic player
 * when the film exists at the listing's `video` path; otherwise shows
 * a branded "film in production" frame so the layout never breaks.
 *
 * `src` also accepts a YouTube or Vimeo URL — hosted films embed at
 * full quality with no file-size constraints (recommended for films
 * over ~25 MB).
 */

function embedUrl(src: string): string | null {
  const yt = src.match(
    /(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([\w-]{6,})/,
  );
  if (yt) return `https://www.youtube-nocookie.com/embed/${yt[1]}?rel=0&modestbranding=1`;
  const vimeo = src.match(/vimeo\.com\/(\d+)/);
  if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}`;
  return null;
}

export default function VideoBlock({
  src,
  scene,
  title,
}: {
  src?: string;
  scene: SceneKey;
  title: string;
}) {
  const [available, setAvailable] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [portrait, setPortrait] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const hosted = src ? embedUrl(src) : null;
  if (hosted) {
    return (
      <div className="relative aspect-video overflow-hidden bg-ink shadow-[0_24px_60px_rgba(36,27,18,0.35)]">
        <iframe
          src={hosted}
          title={`${title} — property film`}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="group relative aspect-video overflow-hidden bg-ink shadow-[0_24px_60px_rgba(36,27,18,0.35)]">
      {!available && (
        <>
          <SceneArt scene={scene} animated className="absolute inset-0" />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-ink/35 text-cream">
            <span className="flex h-20 w-20 items-center justify-center rounded-full border border-cream/60 backdrop-blur-sm">
              <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-current">
                <path d="M6 4 L20 12 L6 20 Z" />
              </svg>
            </span>
            <p className="eyebrow mt-6">Video Tour — Coming Soon</p>
            <p className="mt-2 max-w-sm px-6 text-center text-sm text-cream/70">
              A video tour of {title} is on its way — check back soon.
            </p>
          </div>
          <div className="grain absolute inset-0" />
        </>
      )}

      {src && (
        <video
          ref={videoRef}
          src={src}
          className={`absolute inset-0 h-full w-full ${portrait ? "object-contain" : "object-cover"} ${available ? "" : "hidden"}`}
          playsInline
          preload="metadata"
          onCanPlay={(e) => {
            const v = e.currentTarget;
            // Vertical (phone-format) films pillarbox instead of cropping.
            setPortrait(v.videoHeight > v.videoWidth);
            setAvailable(true);
          }}
          onEnded={() => setPlaying(false)}
          onClick={toggle}
        />
      )}

      {available && !playing && (
        <button
          onClick={toggle}
          aria-label={`Play the ${title} film`}
          className="absolute inset-0 flex cursor-pointer items-center justify-center bg-ink/30 transition-colors hover:bg-ink/20"
        >
          <span className="flex h-20 w-20 items-center justify-center rounded-full border border-cream/70 text-cream backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
            <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-current">
              <path d="M6 4 L20 12 L6 20 Z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
