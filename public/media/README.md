# Media drop-in folder

The site is wired to pick up real photography and film automatically —
no code changes needed. Drop files here using these paths:

| File | Where it appears |
| --- | --- |
| `hero.mp4` | Full-screen homepage hero film (H.264, 1080p+, 20–40s loop, no audio needed) |
| `hero-poster.jpg` | Poster frame shown while the hero film loads |
| `listings/<slug>.mp4` | Property film on that listing's page (e.g. `listings/sierra-blanca-creek-ranch.mp4`) |
| `listings/*.jpg` | Listing photos — set the `photos` array on the listing in `src/data/listings.ts` |
| `shop/*.jpg` | Product photos — set `photo` on the product in `src/data/products.ts` |

Until a file exists, the site renders branded Ranch Land landscape art
in its place, so nothing ever looks broken.
