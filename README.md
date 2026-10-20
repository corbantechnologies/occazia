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

## Adding photos

1. Put the original JPGs in the matching folder: `public/images/rooms`, `events`, `dining`, `lounge` or `exterior`. Use simple lowercase names, for example `deluxe-balcony.jpg`. Full-size originals are fine; Next.js resizes and converts them to AVIF/WebP.
2. Import the file in `src/data/photos.ts` and assign it to a slot (hero, a room, events, dining, lounge) or add it to `gallery`, with descriptive alt text such as "Deluxe room with lake-view balcony at Hotel Occazia Homa Bay".

Until a slot has a photo, the site shows a branded placeholder.
