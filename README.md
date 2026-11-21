# Hotel Occazia Homa Bay website

Marketing site for Hotel Occazia Homa Bay (rooms, conferences and dining), built with Next.js 16 (App Router), TypeScript and Tailwind CSS. Production domain: https://occaziakenya.com (previews on Vercel until the domain is connected).

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

## Where things live

| What | File |
|---|---|
| Hotel facts: phone, WhatsApp, email, address, hours, amenities | `src/data/hotel.ts` |
| Rooms and BB/HB/FB rates | `src/data/rooms.ts` |
| Conference halls and packages | `src/data/events.ts` |
| Photos used on the site | `src/data/photos.ts` + `public/images/` |
| Redirects from the old site | `next.config.ts` |

Change a price or phone number in the data file and every page picks it up.

## Changing photos

See **[IMAGES.md](IMAGES.md)** for how to add, replace, reorder or remove photos, how to size them, and which list in `src/data/photos.ts` controls each part of the site. In short: photo files go in `public/images/<section>/`, and `src/data/photos.ts` decides where each one appears. To shrink a photo before adding it:

```bash
node scripts/optimize-image.mjs "<original>" public/images/<folder>/<name>.jpg [width]
```

Until a slot has a photo, the site shows a branded placeholder.
