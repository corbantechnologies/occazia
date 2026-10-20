import type { StaticImageData } from "next/image";

// Photos live in /public/images/<category>/ (rooms, events, dining, lounge,
// exterior). Each slot below is a spot on the site. To fill one, add the file
// and import it here, for example:
//
//   import heroImg from "../../public/images/exterior/front.jpg";
//   hero: { src: heroImg, alt: "Front of Hotel Occazia Homa Bay at dusk" },
//
// Static imports give next/image the size and a blur placeholder for free.
// An empty slot renders a branded placeholder, so pages work before photos arrive.

export type Photo = {
  src: StaticImageData;
  alt: string;
};

export type PhotoCategory = "rooms" | "events" | "dining" | "lounge" | "exterior";

export const photoSlots: Record<string, Photo | undefined> = {
  hero: undefined,
  "rooms-standard": undefined,
  "rooms-deluxe": undefined,
  "rooms-executive": undefined,
  events: undefined,
  dining: undefined,
  lounge: undefined,
};

// Gallery photos, in display order within each category.
export const gallery: (Photo & { category: PhotoCategory })[] = [];
