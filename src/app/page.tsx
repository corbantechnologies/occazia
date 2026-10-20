import Link from "next/link";
import { Photo } from "@/components/Photo";
import { halls } from "@/data/events";
import { formatKsh, hotel } from "@/data/hotel";
import { photoSlots } from "@/data/photos";
import { rooms } from "@/data/rooms";
import { telHref, whatsappHref } from "@/lib/contact";

export default function Home() {
  return (
    <>
      <section className="relative isolate flex min-h-[78svh] items-end overflow-hidden">
        <Photo photo={photoSlots.hero} label="Hotel Occazia Homa Bay" sizes="100vw" preload className="-z-10" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-lake-900/90 via-lake-900/40 to-transparent" />
        <div className="mx-auto w-full max-w-6xl px-4 pb-14 pt-32 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold-500">Homa Bay · Lake Victoria</p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Your home away from home in Homa Bay
          </h1>
          <p className="mt-4 max-w-xl text-lg text-sand-100">
            {hotel.rooms} balcony rooms near Lake Victoria, three conference halls, and a restaurant and lounge. Rooms
            from <strong className="text-white">{formatKsh(hotel.priceFrom)}</strong> a night with breakfast.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/rooms" className="rounded-full bg-gold-500 px-6 py-3 font-semibold text-lake-900 hover:bg-gold-600 hover:text-white">
              Book a room
            </Link>
            <Link href="/events" className="rounded-full border border-white/70 px-6 py-3 font-semibold text-white hover:bg-white/10">
              Plan a conference
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16" aria-labelledby="rooms-heading">
        <h2 id="rooms-heading" className="font-display text-3xl font-semibold text-lake-900">
          Rooms
        </h2>
        <p className="mt-2 max-w-2xl text-ink/80">
          Every room has a private balcony, free Wi-Fi and buffet breakfast included.
        </p>
        <ul className="mt-8 grid gap-6 md:grid-cols-3">
          {rooms.map((room) => (
            <li key={room.slug} className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-lake-900/5">
              <div className="relative aspect-[4/3]">
                <Photo photo={photoSlots[`rooms-${room.slug}`]} label={room.name} sizes="(min-width: 768px) 33vw, 100vw" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-semibold text-lake-900">{room.name}</h3>
                <p className="mt-1 text-sm text-ink/70">
                  {room.bed} · {room.view}
                </p>
                <p className="mt-3 text-sm">
                  From <strong className="text-lake-800">{formatKsh(room.rates.BB)}</strong> / night, B&amp;B
                </p>
                <Link href={`/rooms/${room.slug}`} className="mt-4 inline-block text-sm font-semibold text-lake-700 underline underline-offset-4">
                  View room
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-lake-800 text-white" aria-labelledby="events-heading">
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
              <Link href="/events" className="rounded-full bg-gold-500 px-6 py-3 font-semibold text-lake-900 hover:bg-white">
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

      <section className="mx-auto max-w-6xl px-4 py-16 text-center" aria-labelledby="contact-heading">
        <h2 id="contact-heading" className="font-display text-3xl font-semibold text-lake-900">
          Talk to us
        </h2>
        <p className="mt-2 text-ink/80">Our front desk is open 24 hours.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a href={telHref} data-track="call" className="rounded-full bg-lake-700 px-6 py-3 font-semibold text-white">
            Call {hotel.contact.phoneDisplay}
          </a>
          <a href={whatsappHref()} target="_blank" rel="noopener" data-track="whatsapp" className="rounded-full bg-whatsapp px-6 py-3 font-semibold text-white">
            WhatsApp us
          </a>
        </div>
      </section>
    </>
  );
}
