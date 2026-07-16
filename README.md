# Ranch Land Group — ranchlandgroup.com

The Ranch Land Group website: a cinematic, fully interactive brand site
for the premier ranch and land brokerage. Built with Next.js (App
Router), TypeScript, and Tailwind CSS v4.

**Legacy Land. Expertly Sold.**

## What's here

| Page | Route | Highlights |
| --- | --- | --- |
| Home | `/` | Full-screen video hero (with animated brand-art fallback), featured ranches, animated stats, story teaser, Outfitter teaser |
| Ranches | `/listings` | Live filtering by type + state, sorting by price/acreage |
| Ranch detail | `/listings/[slug]` | Cinematic property hero, property film player, highlights, water/wildlife/improvements, inquiry form |
| Our Story | `/about` | Brand narrative, values, timeline, team |
| The Outfitter | `/shop` | Apparel storefront with cart drawer (localStorage-persisted), email checkout |
| Contact | `/contact` | Contact details + inquiry form |

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build (all pages prerender statically)
npm start
```

## Where things live

- **`src/data/site.ts`** — phone, email, socials, hero video path. One-stop brand config.
- **`src/data/listings.ts`** — the ranch inventory. Add/edit listings here; pages, cards, and filters update automatically. *Currently sample data.*
- **`src/data/products.ts`** — Outfitter products. *Currently sample data.*
- **`src/components/Logo.tsx`** — the buck emblem + wordmark (SVG recreation of the brand mark).
- **`src/app/globals.css`** — the brand palette (chocolate, saddle, brass, khaki, cream) and typography tokens (Cinzel + Lora).

## Dropping in real media

The site is wired so photography and film replace the branded landscape
art automatically — see **`public/media/README.md`**. Short version:

- `public/media/hero.mp4` → homepage hero film
- `public/media/listings/<slug>.mp4` → that listing's property film
- listing `photos` / product `photo` fields → real photography

Nothing looks broken while media is missing; branded art renders in its
place.

## Roadmap

The site is phase one of the full Ranch Land Group platform. Planned
next: real listing inventory feed, online checkout for the Outfitter,
buyer CRM integration, and back-office (commissions/finance) tooling.
