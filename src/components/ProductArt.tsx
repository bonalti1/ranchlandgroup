import { BuckPaths } from "./Logo";
import type { Product } from "@/data/products";

/**
 * Branded product illustrations for the Outfitter, drawn in the RLG
 * palette. Swapped out automatically per-product once real product
 * photography is added via the `photo` field in data/products.ts.
 */

const C = {
  bark: "#3a2d20",
  coffee: "#4a3a29",
  saddle: "#7a5230",
  brass: "#a97e4f",
  khaki: "#cfc3a8",
  sand: "#e2d8c3",
  cream: "#efe9db",
};

function Garment({ art }: { art: Product["art"] }) {
  switch (art) {
    case "polo-brown":
      return (
        <g>
          {/* body + sleeves */}
          <path
            d="M140 120 L110 135 L70 205 L108 228 L122 200 L122 330 L278 330 L278 200 L292 228 L330 205 L290 135 L260 120 L230 112 L170 112 Z"
            fill={C.coffee}
          />
          {/* collar */}
          <path d="M170 112 L200 150 L230 112 L214 104 L200 122 L186 104 Z" fill={C.bark} />
          <path d="M186 104 L200 122 L200 176 L192 176 Z" fill={C.sand} opacity="0.25" />
          {/* buttons */}
          <circle cx="200" cy="150" r="3" fill={C.khaki} />
          <circle cx="200" cy="166" r="3" fill={C.khaki} />
        </g>
      );
    case "field-khaki":
      return (
        <g>
          <path
            d="M140 118 L108 134 L70 208 L106 230 L120 202 L120 336 L280 336 L280 202 L294 230 L330 208 L292 134 L260 118 L232 110 L168 110 Z"
            fill={C.khaki}
          />
          <path d="M168 110 L200 142 L232 110 L216 102 L200 118 L184 102 Z" fill={C.sand} />
          <line x1="200" y1="142" x2="200" y2="336" stroke={C.coffee} strokeWidth="2" opacity="0.5" />
          {[168, 196, 224, 252, 280, 308].map((y) => (
            <circle key={y} cx="200" cy={y} r="3" fill={C.coffee} />
          ))}
          {/* chest pockets with flaps */}
          <rect x="140" y="188" width="40" height="44" fill="none" stroke={C.coffee} strokeWidth="2" opacity="0.6" />
          <path d="M140 188 L160 200 L180 188" fill="none" stroke={C.coffee} strokeWidth="2" opacity="0.6" />
          <rect x="220" y="188" width="40" height="44" fill="none" stroke={C.coffee} strokeWidth="2" opacity="0.6" />
          <path d="M220 188 L240 200 L260 188" fill="none" stroke={C.coffee} strokeWidth="2" opacity="0.6" />
        </g>
      );
    case "cap":
      return (
        <g>
          <path d="M110 220 C 110 150, 290 150, 290 220 L290 240 L110 240 Z" fill={C.coffee} />
          <path d="M200 168 L200 240" stroke={C.bark} strokeWidth="2.5" />
          <path d="M156 176 L156 240 M244 176 L244 240" stroke={C.bark} strokeWidth="2" opacity="0.7" />
          <path d="M108 240 C 160 228, 240 228, 292 240 L296 252 C 240 262, 160 262, 104 252 Z" fill={C.bark} />
          {/* brim */}
          <path d="M118 240 C 60 246, 48 268, 92 278 C 130 286, 180 280, 200 262 L200 246 C 176 242, 142 240, 118 240 Z" fill={C.coffee} />
        </g>
      );
    case "jacket":
      return (
        <g>
          <path
            d="M138 116 L104 134 L66 214 L104 238 L118 208 L118 342 L282 342 L282 208 L296 238 L334 214 L296 134 L262 116 L232 108 L168 108 Z"
            fill={C.saddle}
          />
          {/* corduroy collar */}
          <path d="M168 108 L200 138 L232 108 L246 118 L232 148 L200 152 L168 148 L154 118 Z" fill={C.bark} />
          {/* zipper */}
          <line x1="200" y1="152" x2="200" y2="342" stroke={C.bark} strokeWidth="4" />
          <line x1="200" y1="152" x2="200" y2="342" stroke={C.brass} strokeWidth="1.4" strokeDasharray="3 3" />
          {/* hand pockets */}
          <path d="M132 258 L168 246 L168 300 L132 312 Z" fill={C.bark} opacity="0.55" />
          <path d="M268 258 L232 246 L232 300 L268 312 Z" fill={C.bark} opacity="0.55" />
        </g>
      );
    case "leather":
      return (
        <g>
          <rect x="112" y="96" width="176" height="228" rx="14" fill={C.saddle} />
          <rect x="112" y="96" width="176" height="228" rx="14" fill="none" stroke={C.bark} strokeWidth="3" />
          <path d="M112 110 C 150 104, 250 104, 288 110" stroke={C.bark} strokeWidth="2" fill="none" opacity="0.5" />
          <path d="M112 310 C 150 316, 250 316, 288 310" stroke={C.bark} strokeWidth="2" fill="none" opacity="0.5" />
          {/* wrap strap */}
          <rect x="96" y="196" width="208" height="14" rx="7" fill={C.bark} />
          <circle cx="292" cy="203" r="9" fill={C.brass} />
        </g>
      );
    case "tee":
      return (
        <g>
          <path
            d="M144 122 L104 142 L76 198 L116 220 L128 198 L128 330 L272 330 L272 198 L284 220 L324 198 L296 142 L256 122 L236 114 C 224 132, 176 132, 164 114 Z"
            fill={C.cream}
          />
          <path d="M164 114 C 176 132, 224 132, 236 114" fill="none" stroke={C.coffee} strokeWidth="3" />
        </g>
      );
  }
}

const emblemColor: Record<Product["art"], string> = {
  "polo-brown": C.cream,
  "field-khaki": C.coffee,
  cap: C.cream,
  jacket: C.cream,
  leather: C.bark,
  tee: C.coffee,
};

const emblemPos: Record<Product["art"], { x: number; y: number; s: number }> = {
  "polo-brown": { x: 156, y: 196, s: 0.42 },
  "field-khaki": { x: 160, y: 166, s: 0.3 },
  cap: { x: 200, y: 196, s: 0.5 },
  jacket: { x: 158, y: 190, s: 0.4 },
  leather: { x: 200, y: 156, s: 0.55 },
  tee: { x: 200, y: 235, s: 0.72 },
};

export default function ProductArt({ art }: { art: Product["art"] }) {
  const pos = emblemPos[art];
  return (
    <svg viewBox="0 0 400 400" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="400" fill={C.sand} />
      {/* soft vignette */}
      <circle cx="200" cy="210" r="185" fill={C.cream} opacity="0.45" />
      <Garment art={art} />
      <g
        transform={`translate(${pos.x} ${pos.y}) scale(${pos.s}) translate(-50 -50)`}
        color={emblemColor[art]}
      >
        <BuckPaths />
      </g>
    </svg>
  );
}
