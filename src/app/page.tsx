import type { Metadata } from "next";
import Link from "next/link";
import { AvailabilityBar } from "@/components/AvailabilityBar";
import { HeroCarousel, type HeroSlide } from "@/components/HeroCarousel";
import { MapFacade } from "@/components/MapFacade";
import { Photo } from "@/components/Photo";
import { PhotoStrip } from "@/components/PhotoStrip";
import { VideoFacade } from "@/components/VideoFacade";
import { halls } from "@/data/events";
import { formatKsh, hotel } from "@/data/hotel";
import { experiencePhotos, heroPhotos, photoSlots } from "@/data/photos";
import { rooms } from "@/data/rooms";
import { telHref, whatsappHref } from "@/lib/contact";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const maxHall = Math.max(...halls.map((h) => h.capacity));

const heroSlides: HeroSlide[] = [
  { photo: heroPhotos.hotel, label: "Find us in Homa Bay", href: "/location" },
  { photo: heroPhotos.room, label: `Rooms from ${formatKsh(hotel.priceFrom)} with breakfast`, href: "/rooms" },
  { photo: heroPhotos.conference, label: `Conference halls for up to ${maxHall}`, href: "/events" },
  { photo: heroPhotos.dining, label: "Restaurant, bar and lounge", href: "/dining" },
];

const trustSignals = [
  "Breakfast included",
  "Free Wi-Fi",
  "Balcony in every room",
  `Halls for up to ${maxHall}`,
  "24-hour front desk",
  "Secure parking",
];

const videoId = new URL(hotel.social.youtube).pathname.slice(1);

export default function Home() {
  return (
    <>
      <section className="relative isolate flex min-h-[82svh] items-end overflow-hidden">
        <HeroCarousel slides={heroSlides} />
        <div className="mx-auto w-full max-w-6xl px-4 pb-20 pt-32 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold-500">Homa Bay · Lake Victoria</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-6xl">
            Stay, meet and unwind at Hotel Occazia Homa Bay
          </h1>
          <p className="mt-4 max-w-xl text-lg text-sand-100">
            Comfortable balcony rooms with breakfast from{" "}
            <strong className="text-white">{formatKsh(hotel.priceFrom)}</strong>, conference halls for up to {maxHall}, and
            warm hospitality near Lake Victoria.
          </p>
          <div className="mt-8 max-w-4xl">
            <AvailabilityBar />
          </div>
          <p className="mt-4 text-sm text-sand-100">
            Planning a conference or event?{" "}
            <Link href="/events" className="font-semibold text-white underline underline-offset-4">
              Request a quote
            </Link>
          </p>
        </div>
      </section>

      <section aria-label="Why guests choose us" className="border-b border-wine-900/10 bg-white">
        <ul className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-8 gap-y-3 px-4 py-5 text-sm font-semibold text-wine-900">
          {trustSignals.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gold-500" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16" aria-labelledby="rooms-heading">
        <h2 id="rooms-heading" className="font-display text-3xl font-semibold text-wine-900">
          Rooms
        </h2>
        <p className="mt-2 max-w-2xl text-ink/80">
          Every room has a private balcony, free Wi-Fi and buffet breakfast included.
        </p>
        <ul className="mt-8 grid gap-6 md:grid-cols-3">
          {rooms.map((room) => (
            <li key={room.slug} className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-wine-900/5">
              <div className="relative aspect-[4/3]">
                <Photo photo={photoSlots[`rooms-${room.slug}`]} label={room.name} sizes="(min-width: 768px) 33vw, 100vw" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-xl font-semibold text-wine-900">{room.name}</h3>
                <p className="mt-1 text-sm text-ink/70">
                  {room.bed} · {room.view}
                </p>
                <p className="mt-auto pt-3 text-sm">
                  From <strong className="text-wine-800">{formatKsh(room.rates.BB)}</strong> / night, B&amp;B
                </p>
                <Link href={`/rooms/${room.slug}`} className="mt-4 inline-block text-sm font-semibold text-wine-700 underline underline-offset-4">
                  View room
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-wine-800 text-white" aria-labelledby="events-heading">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-2 md:items-center">
          <div>
            <h2 id="events-heading" className="font-display text-3xl font-semibold">
              Conferences and events
            </h2>
            <p className="mt-3 text-sand-100">
              Three halls for {halls.map((h) => h.capacity).join(", ")} guests, with A/V, Wi-Fi, catering and delegate
              rooms on site. Full-day packages from {formatKsh(2500)} per person.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/events" className="rounded-full bg-gold-500 px-6 py-3 font-semibold text-wine-900 hover:bg-white">
                See packages
              </Link>
              <a
                href={whatsappHref(`Hi ${hotel.shortName}, I'd like a conference quote for [number] people on [date].`)}
                target="_blank"
                rel="noopener"
                data-track="whatsapp"
                className="rounded-full border border-white/70 px-6 py-3 font-semibold hover:bg-white/10"
              >
                Get a quote on WhatsApp
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Photo photo={photoSlots.events} label="Conference hall" sizes="(min-width: 768px) 50vw, 100vw" />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-2 md:items-center" aria-labelledby="dining-heading">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl md:order-2">
          <Photo photo={photoSlots.dining} label="Restaurant" sizes="(min-width: 768px) 50vw, 100vw" />
        </div>
        <div>
          <h2 id="dining-heading" className="font-display text-3xl font-semibold text-wine-900">
            Eat, drink and unwind
          </h2>
          <p className="mt-3 text-ink/80">
            Our restaurant serves local and international dishes, including fresh Lake Victoria tilapia, from 6:00 AM to
            11:00 PM. Finish the day at the bar and lounge.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/dining" className="rounded-full bg-wine-700 px-6 py-3 font-semibold text-white hover:bg-wine-800">
              Dining
            </Link>
            <Link href="/gallery" className="rounded-full border border-wine-700 px-6 py-3 font-semibold text-wine-700 hover:bg-wine-50">
              Photo gallery
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-sand-100" aria-labelledby="experience-heading">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 id="experience-heading" className="font-display text-3xl font-semibold text-wine-900">
                The Occazia experience
              </h2>
              <p className="mt-2 max-w-2xl text-ink/80">See the hotel, meet the team, and read what guests say.</p>
            </div>
            <a
              href={hotel.googleReviews}
              target="_blank"
              rel="noopener"
              className="rounded-full border border-wine-700 px-5 py-2.5 text-sm font-semibold text-wine-700 hover:bg-wine-50"
            >
              Read our Google reviews
            </a>
          </div>
          <div className="mt-8">
            <VideoFacade videoId={videoId} title={`${hotel.name} video tour`} />
          </div>
          <div className="mt-6">
            <PhotoStrip photos={experiencePhotos} label="Life at the hotel" />
          </div>
          <p className="mt-6 text-center">
            <Link href="/gallery" className="font-semibold text-wine-700 underline underline-offset-4">
              See the full photo gallery
            </Link>
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-2 md:items-center" aria-labelledby="location-heading">
        <div>
          <h2 id="location-heading" className="font-display text-3xl font-semibold text-wine-900">
            Find us in Homa Bay
          </h2>
          <p className="mt-3 text-ink/80">
            {hotel.address.street}, {hotel.address.locality}. Our front desk is open {hotel.hours.frontDesk}.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-ink/80">
            {hotel.directions.map((d) => (
              <li key={d.from}>
                <strong className="text-wine-900">{d.from}:</strong> {d.detail}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/booking" className="rounded-full bg-gold-500 px-6 py-3 font-semibold text-wine-900 hover:bg-wine-700 hover:text-white">
              Book your stay
            </Link>
            <a href={telHref} data-track="call" className="rounded-full bg-wine-700 px-6 py-3 font-semibold text-white hover:bg-wine-800">
              Call {hotel.contact.phoneDisplay}
            </a>
            <a href={whatsappHref()} target="_blank" rel="noopener" data-track="whatsapp" className="rounded-full bg-whatsapp px-6 py-3 font-semibold text-white">
              WhatsApp us
            </a>
          </div>
          <p className="mt-4 text-sm">
            <Link href="/location" className="font-semibold text-wine-700 underline underline-offset-4">
              Directions and things to do nearby
            </Link>
          </p>
        </div>
        <MapFacade latitude={hotel.geo.latitude} longitude={hotel.geo.longitude} title={`Map showing ${hotel.name}`} />
      </section>
    </>
  );
}
