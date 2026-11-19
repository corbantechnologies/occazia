import type { Photo } from "@/data/photos";

// Portrait photos (e.g. the en-suite shots) lose most of the picture when
// cropped to a landscape or square frame, so they are shown whole instead.
export function isPortrait(photo: Photo) {
  return photo.src.height > photo.src.width * 1.15;
}

// Fills the empty space around a photo shown with object-contain: the tiny
// blur placeholder stretched, blurred and darkened. Costs no extra download.
export function PhotoBackdrop({ photo }: { photo: Photo }) {
  return (
    <div
      aria-hidden
      className="absolute inset-0 scale-110 bg-cover bg-center blur-2xl brightness-[0.55]"
      style={{ backgroundImage: photo.src.blurDataURL ? `url(${photo.src.blurDataURL})` : undefined }}
    />
  );
}
