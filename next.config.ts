import type { NextConfig } from "next";

/**
 * STATIC_EXPORT=1 produces a fully static build (out/) suitable for
 * drag-and-drop hosting. The Stripe checkout API route is server-only,
 * so exclude src/app/api before running a static export build — the
 * cart falls back to email ordering in that mode.
 */
const staticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = staticExport
  ? {
      output: "export",
      trailingSlash: true,
      images: { unoptimized: true },
    }
  : {};

export default nextConfig;
