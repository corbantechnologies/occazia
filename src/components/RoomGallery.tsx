"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { Photo } from "@/data/photos";

type Props = {
  photos: Photo[];
  badge?: string;
};

// Large main photo with a thumbnail strip underneath. Tap a thumbnail, use
// the arrows, or swipe the main photo on a phone.
export function RoomGallery({ photos, badge }: Props) {
  const [active, setActive] = useState(0);
  const touchX = useRef<number | null>(null);
  const current = photos[active];

  if (!current) return null;

  function step(delta: number) {
    setActive((i) => (i + delta + photos.length) % photos.length);
  }

  return (
    <div>
      <div
        className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-wine-100"
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
          touchX.current = null;
        }}
      >
        {photos.map((photo, i) => (
          <Image
            key={photo.src.src}
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            placeholder="blur"
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : undefined}
            aria-hidden={i !== active}
            className={`object-cover transition-opacity duration-500 ${i === active ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        {badge && (
          <span className="absolute left-4 top-4 rounded-md bg-wine-900/85 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-500">
            {badge}
          </span>
        )}
        <span className="absolute bottom-4 right-4 rounded-full bg-wine-900/75 px-3 py-1 text-xs font-semibold text-white">
          {active + 1} / {photos.length}
        </span>
        {photos.length > 1 && (
          <>
            <button type="button" onClick={() => step(-1)} className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-2xl text-wine-900 shadow hover:bg-white">
              <span aria-hidden>‹</span>
              <span className="sr-only">Previous photo</span>
            </button>
            <button type="button" onClick={() => step(1)} className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-2xl text-wine-900 shadow hover:bg-white">
              <span aria-hidden>›</span>
              <span className="sr-only">Next photo</span>
            </button>
          </>
        )}
      </div>

      {photos.length > 1 && (
        <ul className="mt-3 flex snap-x gap-3 overflow-x-auto pb-1">
          {photos.map((photo, i) => (
            <li key={photo.src.src} className="w-28 shrink-0 snap-start sm:w-36">
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-current={i === active}
                className={`relative block aspect-[4/3] w-full overflow-hidden rounded-lg ring-2 ring-offset-2 ring-offset-sand-50 transition ${
                  i === active ? "ring-wine-700" : "ring-transparent opacity-75 hover:opacity-100"
                }`}
              >
                <span className="sr-only">Show photo {i + 1}: {photo.alt}</span>
                <Image src={photo.src} alt="" fill sizes="144px" placeholder="blur" className="object-cover" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
