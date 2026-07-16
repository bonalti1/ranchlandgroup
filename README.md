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
| The Outfitter | `/shop` | Apparel storefront with cart drawer (localStorage-persisted), Stripe checkout (email fallback) |
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

## Stripe checkout (the Outfitter)

Online checkout switches on automatically once two things exist:

1. **Products in Stripe** — Dashboard → Product catalog → Add product
   (one per Outfitter item, with its price). Copy each price ID
   (`price_...`) into the matching product's `stripePriceId` in
   `src/data/products.ts`.
2. **The secret key on the host** — set `STRIPE_SECRET_KEY` as an
   environment variable (see `.env.example`). Use `sk_test_...` while
   testing (Dashboard "Test mode" toggle), then swap to `sk_live_...`.

Until both are in place the cart quietly falls back to email ordering.
Amounts are always read from Stripe's catalog server-side — the browser
never controls prices. Successful payments land on `/shop/success`, and
each payment carries the size/color selections in its metadata (visible
on the payment in the Dashboard).

## Roadmap

The site is phase one of the full Ranch Land Group platform. Planned
next: real listing inventory feed, online checkout for the Outfitter,
buyer CRM integration, and back-office (commissions/finance) tooling.
