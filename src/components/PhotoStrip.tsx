import Image from "next/image";
import type { Photo } from "@/data/photos";

type Props = {
  photos: Photo[];
  label: string;
};

// Swipeable row of photos on phones (CSS scroll snap, no JS); a grid from md up.
export function PhotoStrip({ photos, label }: Props) {
  return (
    <ul
      aria-label={label}
      className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0"
    >
      {photos.map((photo) => (
        <li key={photo.src.src} className="relative aspect-[4/3] w-[85%] shrink-0 snap-center overflow-hidden rounded-2xl md:w-auto">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(min-width: 768px) 33vw, 85vw"
            placeholder="blur"
            className="object-cover"
          />
        </li>
      ))}
    </ul>
  );
}
