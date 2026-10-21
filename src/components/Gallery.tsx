"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Photo, PhotoCategory } from "@/data/photos";

type Props = {
  photos: (Photo & { category: PhotoCategory })[];
  categories: { id: PhotoCategory; label: string }[];
};

// Category tabs, a lazy-loaded grid, and a full-screen viewer with
// swipe, arrow-key and button navigation.
export function Gallery({ photos, categories }: Props) {
  const [filter, setFilter] = useState<PhotoCategory | "all">("all");
  const [open, setOpen] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const touchX = useRef<number | null>(null);

  const shown = filter === "all" ? photos : photos.filter((p) => p.category === filter);
  const current = open === null ? null : shown[open];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open !== null && !dialog.open) dialog.showModal();
    if (open === null && dialog.open) dialog.close();
  }, [open]);

  function step(delta: number) {
    setOpen((i) => (i === null ? i : (i + delta + shown.length) % shown.length));
  }

  return (
    <>
      <div role="group" aria-label="Filter photos" className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2">
        {[{ id: "all" as const, label: "All" }, ...categories].map((c) => (
          <button
            key={c.id}
            type="button"
            aria-pressed={filter === c.id}
            onClick={() => setFilter(c.id)}
            className="min-h-11 shrink-0 rounded-full border border-lake-700 px-5 text-sm font-semibold text-lake-700 aria-pressed:bg-lake-700 aria-pressed:text-white"
          >
            {c.label}
          </button>
        ))}
      </div>

      <ul className="mt-6 grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3 lg:grid-cols-4">
        {shown.map((photo, i) => (
          <li key={photo.src.src}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="relative block aspect-square w-full overflow-hidden rounded-xl"
            >
              <span className="sr-only">Open photo: {photo.alt}</span>
              <Image
                src={photo.src}
                alt=""
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                placeholder="blur"
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        onClose={() => setOpen(null)}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
          touchX.current = null;
        }}
        aria-label="Photo viewer"
        className="m-0 h-dvh max-h-none w-screen max-w-none bg-black/95 p-0 text-white backdrop:bg-black/80"
      >
        {current && (
          <figure className="flex h-full flex-col">
            <div className="relative flex-1">
              <Image src={current.src} alt={current.alt} fill sizes="100vw" className="object-contain" />
            </div>
            <figcaption className="px-4 py-3 text-center text-sm text-sand-100">
              {current.alt} <span className="text-sand-200/60">({(open ?? 0) + 1} of {shown.length})</span>
            </figcaption>
          </figure>
        )}
        <button type="button" onClick={() => setOpen(null)} className="absolute right-3 top-3 h-11 w-11 rounded-full bg-white/10 text-2xl">
          <span aria-hidden>×</span>
          <span className="sr-only">Close</span>
        </button>
        <button type="button" onClick={() => step(-1)} className="absolute left-2 top-1/2 h-12 w-12 -translate-y-1/2 rounded-full bg-white/10 text-2xl">
          <span aria-hidden>‹</span>
          <span className="sr-only">Previous photo</span>
        </button>
        <button type="button" onClick={() => step(1)} className="absolute right-2 top-1/2 h-12 w-12 -translate-y-1/2 rounded-full bg-white/10 text-2xl">
          <span aria-hidden>›</span>
          <span className="sr-only">Next photo</span>
        </button>
      </dialog>
    </>
  );
}
