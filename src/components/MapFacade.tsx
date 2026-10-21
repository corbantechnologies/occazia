"use client";

import { useState } from "react";

type Props = {
  latitude: number;
  longitude: number;
  title: string;
};

// Google Maps loads only after a tap, keeping the page light on mobile data.
export function MapFacade({ latitude, longitude, title }: Props) {
  const [loaded, setLoaded] = useState(false);
  const query = `${latitude},${longitude}`;

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-wine-100 sm:aspect-video">
      {loaded ? (
        <iframe
          src={`https://www.google.com/maps?q=${query}&z=15&output=embed`}
          title={title}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full border-0"
        />
      ) : (
        <button
          type="button"
          onClick={() => setLoaded(true)}
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[radial-gradient(circle_at_center,var(--color-wine-100),var(--color-wine-50))] text-wine-800"
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z" />
            <circle cx="12" cy="10" r="2.5" />
          </svg>
          <span className="rounded-full bg-wine-700 px-5 py-2.5 text-sm font-semibold text-white">Tap to load the map</span>
        </button>
      )}
    </div>
  );
}
