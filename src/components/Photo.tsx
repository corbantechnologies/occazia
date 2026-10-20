import Image from "next/image";
import type { Photo as PhotoData } from "@/data/photos";

type Props = {
  photo?: PhotoData;
  label: string;
  sizes: string;
  className?: string;
  preload?: boolean;
};

// Fills its parent (give the parent a size and `relative`). Shows a branded
// placeholder until a real photo is assigned in src/data/photos.ts.
export function Photo({ photo, label, sizes, className = "", preload }: Props) {
  if (!photo) {
    return (
      <div
        role="img"
        aria-label={label}
        className={`absolute inset-0 flex items-end bg-gradient-to-br from-lake-700 via-lake-800 to-lake-900 p-4 ${className}`}
      >
        <span className="text-xs uppercase tracking-widest text-sand-200/70">{label}</span>
      </div>
    );
  }
  return (
    <Image
      src={photo.src}
      alt={photo.alt}
      fill
      sizes={sizes}
      placeholder="blur"
      preload={preload}
      className={`object-cover ${className}`}
    />
  );
}
