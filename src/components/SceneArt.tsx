import type { SceneKey } from "@/data/listings";

/**
 * Branded landscape art — layered SVG scenes in the Ranch Land Group
 * palette. These carry the visual identity of the site until real
 * photography / film is dropped into /public/media. Each scene key
 * renders a distinct West-Texas-inspired composition.
 */

interface Palette {
  skyTop: string;
  skyBottom: string;
  sun: string;
  far: string;
  mid: string;
  near: string;
  detail: string;
}

const palettes: Record<SceneKey, Palette> = {
  mesa: {
    skyTop: "#f3e3c2",
    skyBottom: "#dcb888",
    sun: "#faedd0",
    far: "#b98d5e",
    mid: "#96683f",
    near: "#5d4227",
    detail: "#3a2d20",
  },
  river: {
    skyTop: "#eee9d6",
    skyBottom: "#cfc4a4",
    sun: "#f7f1de",
    far: "#8f8261",
    mid: "#6f5f42",
    near: "#4a3a29",
    detail: "#efe9db",
  },
  highdesert: {
    skyTop: "#f0e4cb",
    skyBottom: "#d4b083",
    sun: "#f9eed4",
    far: "#a67c4e",
    mid: "#7c5731",
    near: "#4a3524",
    detail: "#3a2d20",
  },
  hillcountry: {
    skyTop: "#f1ebd8",
    skyBottom: "#d6cba6",
    sun: "#f8f2df",
    far: "#9a9070",
    mid: "#75684a",
    near: "#4d3f2b",
    detail: "#3a2d20",
  },
  prairie: {
    skyTop: "#f4e9cf",
    skyBottom: "#dbc39a",
    sun: "#faf0d6",
    far: "#b3945f",
    mid: "#8a6a3e",
    near: "#55402a",
    detail: "#3a2d20",
  },
  canyon: {
    skyTop: "#eedab8",
    skyBottom: "#c99763",
    sun: "#f7e8c9",
    far: "#a06a3e",
    mid: "#7a4d2c",
    near: "#45301f",
    detail: "#33241a",
  },
};

/* Ridge silhouettes — three horizon styles shared across scenes */
const ridges = {
  // flat-topped buttes
  butte: {
    far: "M0 560 L120 560 L170 470 L330 470 L380 560 L620 560 L680 440 L900 440 L950 560 L1180 560 L1230 490 L1420 490 L1470 560 L1600 560 L1600 1000 L0 1000 Z",
    mid: "M0 660 L200 660 L260 570 L480 570 L540 660 L880 660 L940 590 L1160 590 L1210 660 L1600 660 L1600 1000 L0 1000 Z",
  },
  // rolling hills
  hills: {
    far: "M0 560 C 200 470, 380 470, 560 545 C 720 610, 900 480, 1100 500 C 1280 518, 1440 560, 1600 530 L1600 1000 L0 1000 Z",
    mid: "M0 680 C 240 600, 430 620, 640 665 C 860 712, 1050 585, 1280 620 C 1420 642, 1520 668, 1600 660 L1600 1000 L0 1000 Z",
  },
  // sharper peaks
  peaks: {
    far: "M0 580 L180 460 L300 540 L470 420 L620 555 L800 470 L980 560 L1140 450 L1320 555 L1470 500 L1600 570 L1600 1000 L0 1000 Z",
    mid: "M0 690 L220 600 L400 665 L560 590 L760 675 L960 605 L1180 680 L1380 615 L1600 675 L1600 1000 L0 1000 Z",
  },
};

const ridgeFor: Record<SceneKey, keyof typeof ridges> = {
  mesa: "butte",
  river: "hills",
  highdesert: "peaks",
  hillcountry: "hills",
  prairie: "hills",
  canyon: "butte",
};

function Windmill({ x, y, s, color }: { x: number; y: number; s: number; color: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} stroke={color} fill="none">
      <path d="M0 0 L-26 120 M0 0 L26 120 M-17 78 L17 78 M-9 40 L9 40" strokeWidth="5" />
      <g className="mill" style={{ transformOrigin: "0px -8px" }} strokeWidth="4">
        <path d="M0 -8 L0 -44 M0 -8 L31 10 M0 -8 L-31 10 M0 -8 L22 -33 M0 -8 L-22 -33 M0 -8 L13 27 M0 -8 L-13 27" />
        <circle cx="0" cy="-8" r="6" fill={color} stroke="none" />
      </g>
    </g>
  );
}

function Oak({ x, y, s, color }: { x: number; y: number; s: number; color: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} fill={color}>
      <path d="M-4 0 L-2 -34 L2 -34 L4 0 Z" />
      <path d="M-2 -30 C -34 -30, -52 -52, -44 -72 C -38 -88, -16 -96, 0 -94 C 16 -96, 38 -88, 44 -72 C 52 -52, 34 -30, 2 -30 Z" />
    </g>
  );
}

function Yucca({ x, y, s, color }: { x: number; y: number; s: number; color: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} stroke={color} strokeWidth="4" strokeLinecap="round">
      <path d="M0 0 L0 -34 M0 -6 L-22 -26 M0 -6 L22 -26 M0 -2 L-30 -10 M0 -2 L30 -10 M0 -10 L-13 -32 M0 -10 L13 -32" />
    </g>
  );
}

function Birds({ x, y, color }: { x: number; y: number; color: string }) {
  return (
    <g stroke={color} strokeWidth="3.4" fill="none" strokeLinecap="round">
      <path d={`M${x} ${y} q 11 -12 22 0 q 11 -12 22 0`} />
      <path d={`M${x + 70} ${y - 34} q 9 -10 18 0 q 9 -10 18 0`} />
      <path d={`M${x + 34} ${y + 30} q 7 -8 14 0 q 7 -8 14 0`} />
    </g>
  );
}

export default function SceneArt({
  scene,
  animated = false,
  className = "",
}: {
  scene: SceneKey;
  animated?: boolean;
  className?: string;
}) {
  const p = palettes[scene];
  const r = ridges[ridgeFor[scene]];
  const gid = `sky-${scene}`;
  const sid = `sun-${scene}`;

  return (
    <svg
      viewBox="0 0 1600 1000"
      preserveAspectRatio="xMidYMax slice"
      className={`h-full w-full ${animated ? "scene-animated" : ""} ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Ranch Land Group landscape artwork"
    >
      {animated && (
        <style>{`
          .scene-animated .mill { animation: mill-spin 8s linear infinite; }
          .scene-animated .cloudband { animation: cloud-drift 70s linear infinite; }
          .scene-animated .sunglow { animation: sun-breathe 9s ease-in-out infinite; transform-origin: 400px 330px; }
          @keyframes mill-spin { to { transform: rotate(360deg); } }
          @keyframes cloud-drift { to { transform: translateX(-800px); } }
          @keyframes sun-breathe { 0%,100% { transform: scale(1); opacity: .9 } 50% { transform: scale(1.06); opacity: 1 } }
        `}</style>
      )}
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={p.skyTop} />
          <stop offset="1" stopColor={p.skyBottom} />
        </linearGradient>
        <radialGradient id={sid} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor={p.sun} stopOpacity="0.95" />
          <stop offset="0.55" stopColor={p.sun} stopOpacity="0.35" />
          <stop offset="1" stopColor={p.sun} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* sky */}
      <rect width="1600" height="1000" fill={`url(#${gid})`} />

      {/* sun */}
      <g className="sunglow">
        <circle cx="400" cy="330" r="260" fill={`url(#${sid})`} />
        <circle cx="400" cy="330" r="86" fill={p.sun} />
      </g>

      {/* drifting cloud bands */}
      <g className="cloudband" fill={p.skyTop} opacity="0.55">
        <ellipse cx="900" cy="200" rx="220" ry="16" />
        <ellipse cx="1250" cy="150" rx="150" ry="12" />
        <ellipse cx="1500" cy="250" rx="190" ry="14" />
        <ellipse cx="1700" cy="180" rx="220" ry="16" />
        <ellipse cx="2050" cy="230" rx="150" ry="12" />
        <ellipse cx="2300" cy="150" rx="190" ry="14" />
      </g>

      <Birds x={1050} y={300} color={p.mid} />

      {/* horizon layers */}
      <path d={r.far} fill={p.far} />
      <path d={r.mid} fill={p.mid} />

      {/* river ribbon */}
      {scene === "river" && (
        <path
          d="M700 1000 C 760 900, 640 830, 760 760 C 860 700, 1060 720, 1180 665 L1240 665 C 1080 740, 900 720, 830 780 C 760 840, 900 910, 860 1000 Z"
          fill={p.detail}
          opacity="0.85"
        />
      )}

      {/* foreground ground */}
      <path
        d="M0 800 C 300 760, 620 790, 900 780 C 1180 770, 1420 745, 1600 765 L1600 1000 L0 1000 Z"
        fill={p.near}
      />

      {/* scene props on the foreground */}
      {(scene === "prairie" || scene === "mesa") && (
        <Windmill x={1290} y={640} s={1.05} color={p.detail} />
      )}
      {(scene === "hillcountry" || scene === "river" || scene === "prairie") && (
        <>
          <Oak x={260} y={815} s={1.15} color={p.detail} />
          <Oak x={420} y={800} s={0.7} color={p.detail} />
        </>
      )}
      {(scene === "mesa" || scene === "highdesert" || scene === "canyon") && (
        <>
          <Yucca x={230} y={820} s={1.5} color={p.detail} />
          <Yucca x={330} y={840} s={1.0} color={p.detail} />
          <Yucca x={1130} y={830} s={1.2} color={p.detail} />
        </>
      )}

      {/* fence line running the foreground */}
      <g stroke={p.detail} strokeWidth="4" opacity="0.8">
        {[80, 320, 560, 800, 1040, 1280, 1520].map((x, i) => (
          <line key={x} x1={x} y1={880 - i * 2} x2={x} y2={928 - i * 2} />
        ))}
        <path d="M80 892 C 340 880, 600 884, 860 878 C 1120 872, 1380 868, 1520 866" fill="none" strokeWidth="2.5" />
        <path d="M80 910 C 340 898, 600 902, 860 896 C 1120 890, 1380 886, 1520 884" fill="none" strokeWidth="2.5" />
      </g>
    </svg>
  );
}
