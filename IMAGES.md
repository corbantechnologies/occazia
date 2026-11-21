# How to change the website's photos

This guide explains how to add, replace, reorder and remove photos on the Hotel Occazia Homa Bay website. It is written for a developer or a technically able staff member. You need the code on your computer, [Node.js](https://nodejs.org) 20 or newer, and a text editor such as VS Code.

**In short:** photo files live in `public/images/`, and one file, `src/data/photos.ts`, decides which photo appears where. You change photos by editing that one file.

---

## 1. Where things are

### Photo files

```
public/images/
  rooms/
    standard/      Standard Room
    deluxe/        Deluxe Room
    executive/     Executive Room
  events/
    hall-1/ hall-2/ hall-3/   conference halls
    banquet/                  banquet set-ups
  dining/          restaurant and food
  lounge/          bar and lounge (bar/ holds bar close-ups)
  rooftop/         rooftop terrace
  exterior/        building, entrance, reception
```

Use short, lowercase names with hyphens that describe the picture, for example `deluxe/balcony-chair.jpg` or `exterior/entrance-sign.jpg`. Avoid spaces and camera names like `IMG_1234.jpg`.

### The photo list: `src/data/photos.ts`

This file has three parts, from top to bottom:

1. **Imports.** One line per photo file:

   ```ts
   import entranceSignImg from "../../public/images/exterior/entrance-sign.jpg";
   ```

2. **The `photos` list.** Each photo gets a short name, its image, a description (alt text) and a category:

   ```ts
   entranceSign: { src: entranceSignImg, alt: "Main entrance of Hotel Occazia Homa Bay with its red sign, pillars and potted plants", category: "exterior" },
   ```

3. **Lists that place photos on the pages.** These are explained in the next section.

A photo only appears on the site once it is in one of those lists. Adding it to `photos` alone does nothing visible.

### What each list controls

| List in `photos.ts` | Where it shows |
|---|---|
| `heroPhotos` | Home page slideshow at the top. The slide order and captions are set in `src/app/page.tsx` (see recipe 3.4). |
| `roomPhotos.standard`, `.deluxe`, `.executive` | The photo carousel on each room page (`/rooms/standard` etc.). The first photo is shown first and is also used when the page is shared on social media. |
| `photoSlots["rooms-standard"]` (and `-deluxe`, `-executive`) | The cover photo on each room's card: home page Rooms section, `/rooms`, and the "other rooms" cards on room pages. `rooms-deluxe` is also the `/rooms` page header and `rooms-executive` its sharing image. |
| `hallPhotos["hall-1"]`, `["hall-2"]`, `["hall-3"]` | The carousel for each hall on `/events`. |
| `eventPhotos` | The photo strip lower down on `/events`. |
| `diningPhotos` | Restaurant photo strip on `/dining`. |
| `loungePhotos` | Bar and lounge photo strip on `/dining`. |
| `rooftopPhotos` | Rooftop photo strip on `/dining`. |
| `experiencePhotos` | The three photos in "The Occazia experience" on the home page. |
| `gallery` | Every photo on `/gallery`, in display order. Grouped by category, best photo first in each group. |
| `photoSlots.events` | `/events` page header, and the conferences section on the home page. |
| `photoSlots.dining` | `/dining` page header, and the dining section on the home page. |
| `photoSlots.hero` | Rooftop section on `/dining`, and the default image when any page is shared on social media. |
| `photoSlots.booking` | `/booking` and `/faq` page headers. |
| `photoSlots.location` | `/location` page header. |
| `photoSlots.explore` | `/explore` page header. |

### Photo fields

| Field | Meaning |
|---|---|
| `src` | The imported image. Width, height and a blurred preview are worked out automatically from the file. |
| `alt` | A description of what is in the picture, for blind visitors and Google. Required. See section 5. |
| `category` | Which `/gallery` tab it belongs to: `rooms`, `events`, `rooftop`, `dining`, `lounge` or `exterior`. |

Hero slides have one extra, optional field, `position` (see recipe 3.4).

---

## 2. Prepare the photo first

Camera photos are often 5–15 MB. Make them smaller before adding them, or pages will load slowly on phones.

| Use | Width | Target size |
|---|---|---|
| Home page slideshow (full width) | 1920 px | under about 450 KB |
| Rooms, halls, gallery, dining | 1600 px | under about 300 KB |
| Portrait (tall) photos, e.g. bathrooms | 1200 px wide | under about 300 KB |

### Option A: the script in this project

From the project folder, run:

```bash
node scripts/optimize-image.mjs "<path to original>" public/images/<folder>/<new-name>.jpg [width]
```

For example:

```bash
node scripts/optimize-image.mjs "C:/Photos/IMG_1234.jpg" public/images/rooms/deluxe/desk-view.jpg
node scripts/optimize-image.mjs "C:/Photos/IMG_5678.jpg" public/images/exterior/night-view.jpg 1920
```

It rotates the photo the right way up, resizes it (width defaults to 1600), saves it as a JPEG at quality 78, and removes the camera data, including GPS location. It prints the final size so you can check it.

### Option B: no code

Open [squoosh.app](https://squoosh.app) in a browser, drop the photo in, choose **Resize** with the width from the table above, set **MozJPEG** with quality about 78, then download it and save it in the right `public/images/` folder.

Next.js also converts photos to modern formats (AVIF/WebP) and sizes them for each screen when the site runs. Starting from a well-sized JPEG keeps that fast.

---

## 3. Recipes

After any change, preview it (section 6) before publishing.

### 3.1 Replace a photo, keeping its name

The quickest change. Nothing in the code needs editing.

1. Prepare the new photo (section 2).
2. Save it over the old file with **exactly the same name and folder**, e.g. `public/images/rooms/deluxe/bed-door.jpg`.
3. If the new photo shows something different, update its `alt` text in `src/data/photos.ts`.

### 3.2 Add a new photo to a room

Example: add a desk photo to the Deluxe Room.

1. Prepare it and save it as `public/images/rooms/deluxe/desk-view.jpg`.
2. In `src/data/photos.ts`, add an import next to the other Deluxe imports:

   ```ts
   import deluxeDeskViewImg from "../../public/images/rooms/deluxe/desk-view.jpg";
   ```

3. Add it to the `photos` list, next to the other Deluxe photos:

   ```ts
   deluxeDeskView: { src: deluxeDeskViewImg, alt: "Deluxe Room writing desk with a red armchair by the window", category: "rooms" },
   ```

4. Add it to the room's carousel, in the position you want it to appear:

   ```ts
   deluxe: [
     photos.deluxeBedDoor,
     photos.deluxeRoomWideWindow,
     photos.deluxeDeskView,        // new
     photos.deluxeDeskGreyWardrobe,
     ...
   ],
   ```

5. Optional: also add `photos.deluxeDeskView,` to the `gallery` list, in the Rooms group.

### 3.3 Change which photo comes first

Move the line up or down in its list. For a room carousel, put the best wide shot of the room first:

```ts
executive: [
  photos.executiveSeatingBed,   // shown first
  photos.executiveRoomWide,
  ...
],
```

To change a room's **card** photo (home page and `/rooms`), change its `photoSlots` entry instead:

```ts
"rooms-deluxe": photos.deluxeBedDoor,
```

### 3.4 Add, remove or reorder home page slides

Slides need two edits.

1. In `src/data/photos.ts`, the photo must be in `heroPhotos` under a short name:

   ```ts
   export const heroPhotos = {
     building: photos.buildingDriveway,
     rooftopLake: photos.rooftopUmbrellaLake,
     ...
     entrance: photos.entranceSign,
   };
   ```

2. In `src/app/page.tsx`, the `heroSlides` list sets the order:

   ```ts
   const heroSlides: HeroSlide[] = [
     { photo: heroPhotos.building, label: "Hotel Occazia Homa Bay", position: "50% 35%" },
     { photo: heroPhotos.rooftopLake, label: "Lake views from our rooftop terrace" },
     ...
     { photo: heroPhotos.entrance, label: "Welcome to our main entrance", position: "50% 30%" },
   ];
   ```

   - `label` is read out to screen-reader users and shown when someone hovers over a dot. Keep it short.
   - `position` is optional. The slideshow fills the whole width, so on wide screens the top and bottom of each photo are cut off. `position` decides which part stays in view: `"50% 50%"` is the centre (the default), a lower second number such as `"50% 30%"` keeps more of the top, and a higher one such as `"50% 70%"` keeps more of the bottom.
   - The **first slide** is loaded first, so use a strong, bright photo that represents the hotel.

To remove a slide, delete its line from `heroSlides` (and from `heroPhotos` if it is no longer needed).

**Slide timing** is 2 seconds per slide, set by `interval = 2000` in `src/components/HeroCarousel.tsx`.

**Fill or fit.** Near the top of `src/components/HeroCarousel.tsx`:

```ts
const HERO_FIT: "cover" | "contain" = "cover";
```

`"cover"` fills the slideshow edge to edge (the current setting). `"contain"` shows every photo whole and fills the space beside it with a blurred copy of the same photo.

### 3.5 Add a photo to the gallery

Add its line to the `gallery` list in the right group. The groups follow the tab order (Rooms, Conferences, Rooftop, Dining, Bar & lounge, Hotel). The photo's `category` decides which tab shows it.

```ts
// Hotel
photos.buildingDriveway,
photos.entranceSign,
photos.hotelFront,
...
```

### 3.6 Remove a photo safely

1. Remove the photo's lines from every list where it appears in `src/data/photos.ts` (and from `heroSlides` in `src/app/page.tsx` if it is a slide).
2. Check whether anything still uses it. Search the `src` folder for its short name and file name, for example with VS Code's search (Ctrl+Shift+F), or:

   ```bash
   git grep -n "deluxeDeskView" src
   git grep -n "desk-view.jpg" src
   ```

3. When nothing else uses it, delete its `import` line and its entry in the `photos` list, then delete the file from `public/images/`.
4. Run `npm run build` (section 6). If a photo was still in use somewhere, the build stops and names the file, so nothing broken can go live.

---

## 4. Tall (portrait) photos

Tall photos, such as bathrooms, would lose most of the picture if they were cut to fit a wide frame. The room carousels and the gallery handle this automatically: any photo noticeably taller than it is wide is shown whole, with a soft blurred copy of itself filling the space at the sides. Nothing needs setting. This is done by `src/components/PhotoBackdrop.tsx`.

Prefer wide (landscape) photos for the slideshow, room covers and page headers.

---

## 5. Writing good alt text

The `alt` text describes the photo for blind visitors using screen readers and helps Google understand the page.

- Describe what is actually in the picture: *"Deluxe Room queen bed with a red cushion beside a bright window"*, not *"Deluxe room photo"*.
- Name the room or place, and mention Homa Bay or the lake where it fits naturally.
- Keep it to one sentence, under about 125 characters.
- Don't start with "Image of" or "Photo of", and don't stuff in keywords.

---

## 6. Preview, check and publish

1. Install once, after receiving the code:

   ```bash
   npm install
   ```

2. Preview while you work:

   ```bash
   npm run dev
   ```

   Open http://localhost:3000. Changes appear when you save a file.

3. Before publishing, check that everything builds:

   ```bash
   npm run lint
   npm run build
   ```

   Both must finish without errors. A missing or misspelled photo file makes the build stop and names the file.

4. Publish: the site is hosted on Vercel. Pushing to the production branch of the repository (`master`; you can confirm this under the project's Git settings in Vercel) deploys the site automatically, normally within a few minutes. Every other branch gets its own preview link on Vercel, which is a safe way to check a change before it goes live.
