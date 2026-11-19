"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Photo } from "@/data/photos";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";
import { PhotoBackdrop } from "@/components/PhotoBackdrop";

export type HeroSlide = {
  photo: Photo;
  // Describes the slide for the dot buttons (screen readers and tooltips).
  label: string;
  // CSS object-position used when photos fill the hero ("cover"), to keep the
  // subject in frame when the top and bottom are cropped. Defaults to centre.
  position?: string;
};

// How hero photos are fitted. "cover": full-bleed, filling the hero (crops the
// top and bottom on wide screens). "contain": the whole photo, with a blurred
// copy filling the space beside it. Change this one value to switch back.
const HERO_FIT: "cover" | "contain" = "cover";

type Props = {
  slides: HeroSlide[];
  // Time each slide stays on screen, in milliseconds.
  interval?: number;
};

// How many slides after the current one to load in advance, so a short
// interval never shows a slide that is still downloading.
const LOOK_AHEAD = 2;

const arrowClass =
  "flex items-center justify-center rounded-full bg-wine-900/55 text-white ring-1 ring-white/30 backdrop-blur-sm transition hover:bg-wine-900/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500";

// Cross-fading hero photos (no zoom) with previous / next arrows, dots, swipe
// and left/right arrow keys, fitted as set by HERO_FIT above. On phones the
// carousel is a 3:2 box above the hero text; from md up it fills the hero
// behind the text.
// The first photo is preloaded as the LCP image; later photos are added to the
// page a couple of slides before their turn. Any manual change restarts the
// timer. Autoplay pauses while a control is hovered or focused, and is off for
// visitors who prefer reduced motion; the arrows and dots still work.
export function HeroCarousel({ slides, interval = 2000 }: Props) {
  const count = slides.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [loaded, setLoaded] = useState(() => slides.map((_, i) => i === 0));
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  // Keep the current slide and the next few mounted (adjusting state during
  // render, React's recommended pattern for state derived from other state).
  const wanted = Array.from({ length: LOOK_AHEAD + 1 }, (_, k) => (active + k) % count);
  if (wanted.some((i) => !loaded[i])) {
    setLoaded((prev) => prev.map((v, i) => v || wanted.includes(i)));
  }

  // A timeout keyed on `active` restarts whenever the slide changes, so a
  // click on an arrow or dot gets the full interval before the next change.
  useEffect(() => {
    if (paused || count < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setTimeout(() => setActive((i) => (i + 1) % count), interval);
    return () => window.clearTimeout(id);
  }, [active, paused, interval, count]);

  const go = (i: number) => setActive(((i % count) + count) % count);
  const pauseProps = {
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false),
    onFocus: () => setPaused(true),
    onBlur: () => setPaused(false),
  };

  return (
    <div
      className="relative aspect-[3/2] w-full overflow-hidden md:absolute md:inset-0 md:-z-10 md:aspect-auto"
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") go(active - 1);
        else if (e.key === "ArrowRight") go(active + 1);
      }}
      onTouchStart={(e) => (touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY })}
      onTouchEnd={(e) => {
        const start = touchStart.current;
        touchStart.current = null;
        if (!start) return;
        const dx = e.changedTouches[0].clientX - start.x;
        const dy = e.changedTouches[0].clientY - start.y;
        if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) go(active + (dx < 0 ? 1 : -1));
      }}
    >
      {slides.map((slide, i) => (
        <div
          key={slide.photo.src.src}
          aria-hidden={i !== active}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${i === active ? "opacity-100" : "opacity-0"}`}
        >
          {HERO_FIT === "contain" && <PhotoBackdrop photo={slide.photo} />}
          {loaded[i] && (
            <Image
              src={slide.photo.src}
              alt={slide.photo.alt}
              fill
              sizes="(min-width: 768px) 80vw, 100vw"
              placeholder="blur"
              preload={i === 0}
              loading={i === 0 ? undefined : "lazy"}
              className={HERO_FIT === "contain" ? "object-contain" : "object-cover"}
              style={HERO_FIT === "cover" && slide.position ? { objectPosition: slide.position } : undefined}
            />
          )}
        </div>
      ))}
      {/* Darken the left (where the headline sits from md up) and the bottom
          (behind the dots), leaving the rest of the photo clear. */}
      <div className="absolute inset-0 hidden bg-gradient-to-r from-wine-900/85 via-wine-900/35 to-transparent md:block" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-wine-900/70 to-transparent" />

      {count > 1 && (
        <>
          {/* Side arrows on wide screens, where the hero text leaves the edges clear. */}
          <button
            type="button"
            onClick={() => go(active - 1)}
            aria-label="Previous photo"
            className={`${arrowClass} absolute left-4 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 xl:flex`}
            {...pauseProps}
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={() => go(active + 1)}
            aria-label="Next photo"
            className={`${arrowClass} absolute right-4 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 xl:flex`}
            {...pauseProps}
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>

          <div className="absolute inset-x-0 bottom-0 z-10">
            <div className="mx-auto flex max-w-6xl justify-center px-4 pb-2 md:justify-end md:pb-5">
              <div className="flex items-center gap-1" {...pauseProps}>
                {/* Below xl the arrows sit beside the dots. */}
                <button type="button" onClick={() => go(active - 1)} aria-label="Previous photo" className={`${arrowClass} h-11 w-11 xl:hidden`}>
                  <ChevronLeftIcon className="h-5 w-5" />
                </button>
                <div className="flex" role="group" aria-label="Choose photo">
                  {slides.map((slide, i) => (
                    <button
                      key={slide.photo.src.src}
                      type="button"
                      onClick={() => go(i)}
                      aria-label={`Show photo ${i + 1}: ${slide.label}`}
                      aria-current={i === active}
                      title={slide.label}
                      className="flex h-11 w-5 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 lg:w-7"
                    >
                      <span className={`h-1.5 rounded-full transition-all ${i === active ? "w-4 bg-gold-500 lg:w-6" : "w-1.5 bg-white/70 lg:w-2.5"}`} />
                    </button>
                  ))}
                </div>
                <button type="button" onClick={() => go(active + 1)} aria-label="Next photo" className={`${arrowClass} h-11 w-11 xl:hidden`}>
                  <ChevronRightIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
