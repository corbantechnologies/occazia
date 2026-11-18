"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Photo } from "@/data/photos";

export type HeroSlide = {
  photo: Photo;
  label: string;
  href: string;
};

type Props = {
  slides: HeroSlide[];
  // Time each slide stays on screen, in milliseconds.
  interval?: number;
};

// Cross-fading background photos with a slow zoom (Ken Burns). The first photo
// is preloaded as the LCP image; each later photo is only added to the page
// shortly before its turn, so the carousel doesn't download every slide up
// front. Pauses on hover and focus, and stays on the first photo (no zoom) for
// visitors who prefer reduced motion.
export function HeroCarousel({ slides, interval = 5000 }: Props) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  // Highest slide index allowed to load: the current one plus the next.
  const [loadedUpTo, setLoadedUpTo] = useState(1);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setActive((i) => (i + 1) % slides.length), interval);
    return () => window.clearInterval(id);
  }, [paused, interval, slides.length]);

  const current = slides[active];

  function show(i: number) {
    setActive(i);
    setLoadedUpTo((n) => Math.max(n, i + 1));
  }

  // Keep the next slide one step ahead of the one on screen.
  if (active + 1 > loadedUpTo) setLoadedUpTo(active + 1);

  return (
    <div
      className="absolute inset-0 -z-10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {slides.map((slide, i) => (
        <div
          key={slide.photo.src.src}
          aria-hidden={i !== active}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === active ? "opacity-100" : "opacity-0"}`}
        >
          {i <= loadedUpTo && (
            <Image
              src={slide.photo.src}
              alt={slide.photo.alt}
              fill
              sizes="100vw"
              placeholder="blur"
              preload={i === 0}
              loading={i === 0 ? undefined : "lazy"}
              className={`object-cover motion-safe:transition-transform motion-safe:duration-[6000ms] motion-safe:ease-linear ${
                i === active ? "motion-safe:scale-110" : "scale-100"
              }`}
            />
          )}
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-wine-900/90 via-wine-900/55 to-wine-900/25" />

      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 pb-5">
          <Link href={current.href} className="hidden text-sm font-semibold text-sand-100 underline-offset-4 hover:underline sm:block">
            {current.label} →
          </Link>
          <div className="ml-auto flex" role="group" aria-label="Choose photo">
            {slides.map((slide, i) => (
              <button
                key={slide.photo.src.src}
                type="button"
                onClick={() => show(i)}
                aria-label={`Show photo ${i + 1}: ${slide.label}`}
                aria-current={i === active}
                className="flex h-11 w-7 items-center justify-center"
              >
                <span className={`h-1.5 rounded-full transition-all ${i === active ? "w-6 bg-gold-500" : "w-2.5 bg-white/60"}`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
