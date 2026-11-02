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
  interval?: number;
  // Optional muted background video for larger screens. It loads only after the
  // page is up, and never with reduced motion or data saver, so the first photo
  // stays the LCP.
  // Pass the path without extension; .webm and .mp4 versions must both exist.
  video?: string;
};

// Cross-fading background photos with a slow zoom. Pauses on hover and focus,
// and stays on the first photo for visitors who prefer reduced motion.
export function HeroCarousel({ slides, interval = 6000, video }: Props) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [withVideo, setWithVideo] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    // Desktop only: on phones the photo carousel is lighter on data and battery.
    const wanted = window.matchMedia("(min-width: 768px) and (prefers-reduced-motion: no-preference)").matches;
    if (!video || !wanted || connection?.saveData) return;
    // Wait for the page to finish loading so the video never competes with the hero photo.
    const start = () => setWithVideo(true);
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
    return () => window.removeEventListener("load", start);
  }, [video]);

  useEffect(() => {
    if (paused || playing || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setActive((i) => (i + 1) % slides.length), interval);
    return () => window.clearInterval(id);
  }, [paused, playing, interval, slides.length]);

  const current = slides[active];

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
          <Image
            src={slide.photo.src}
            alt={slide.photo.alt}
            fill
            sizes="100vw"
            placeholder="blur"
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : undefined}
            className={`object-cover motion-safe:transition-transform motion-safe:duration-[7000ms] motion-safe:ease-linear ${i === active ? "scale-105" : "scale-100"}`}
          />
        </div>
      ))}
      {video && withVideo && (
        <video
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
          onPlaying={() => setPlaying(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${playing ? "opacity-100" : "opacity-0"}`}
        >
          <source src={`${video}.webm`} type="video/webm" />
          <source src={`${video}.mp4`} type="video/mp4" />
        </video>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-wine-900/90 via-wine-900/55 to-wine-900/25" />

      <div className={`absolute inset-x-0 bottom-0 z-10 ${playing ? "hidden" : ""}`}>
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 pb-5">
          <Link href={current.href} className="hidden text-sm font-semibold text-sand-100 underline-offset-4 hover:underline sm:block">
            {current.label} →
          </Link>
          <div className="ml-auto flex gap-1" role="group" aria-label="Choose photo">
            {slides.map((slide, i) => (
              <button
                key={slide.photo.src.src}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show photo ${i + 1}: ${slide.label}`}
                aria-current={i === active}
                className="flex h-11 w-8 items-center justify-center"
              >
                <span className={`h-1.5 rounded-full transition-all ${i === active ? "w-7 bg-gold-500" : "w-3 bg-white/60"}`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
