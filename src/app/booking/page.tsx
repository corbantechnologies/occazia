import Link from "next/link";
import { Suspense } from "react";
import { BookingForm } from "@/components/BookingForm";
import { formatKsh, hotel } from "@/data/hotel";
import { photoSlots } from "@/data/photos";
import { rooms } from "@/data/rooms";
import { mailHref, telHref } from "@/lib/contact";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Book a Room",
  description: `Book a room at ${hotel.name} directly by WhatsApp, phone or email. Rooms from ${formatKsh(hotel.priceFrom)} a night with breakfast.`,
  path: "/booking",
  photo: photoSlots.booking,
});

export default function BookingPage() {
  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-[1fr_20rem]">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold-600">Book direct</p>
        <h1 className="mt-2 font-display text-4xl font-semibold text-lake-900 sm:text-5xl">Book your stay</h1>
        <p className="mt-3 max-w-2xl text-ink/80">
          Fill in your dates and we&apos;ll confirm availability and the best rate. Your enquiry opens in WhatsApp, ready to send.
        </p>
        <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-lake-900/5">
          {/* The form reads ?room= from the URL, so it renders on the client inside Suspense. */}
          <Suspense fallback={<div className="h-96" aria-hidden />}>
            <BookingForm />
          </Suspense>
        </div>
        <p className="mt-6 text-sm text-ink/70">
          Booking for a conference or group? See <Link href="/events" className="font-semibold text-lake-700 underline underline-offset-4">conference packages</Link>.
        </p>
      </div>

      <aside className="space-y-6">
        <div className="rounded-2xl bg-lake-800 p-6 text-white">
          <h2 className="font-display text-2xl font-semibold">Prefer to talk?</h2>
          <p className="mt-2 text-sand-100">Our front desk is open 24 hours.</p>
          <ul className="mt-4 space-y-2">
            <li>
              Call <a href={telHref} data-track="call" className="font-semibold underline underline-offset-4">{hotel.contact.phoneDisplay}</a>
            </li>
            <li>
              Email <a href={mailHref} className="font-semibold underline underline-offset-4 break-all">{hotel.contact.reservationsEmail}</a>
            </li>
          </ul>
        </div>
        <div className="rounded-2xl bg-white p-6 ring-1 ring-lake-900/5">
          <h2 className="font-display text-xl font-semibold text-lake-900">Rates with breakfast</h2>
          <ul className="mt-3 space-y-2">
            {rooms.map((room) => (
              <li key={room.slug} className="flex justify-between gap-3">
                <Link href={`/rooms/${room.slug}`} className="underline-offset-4 hover:underline">{room.name}</Link>
                <span className="font-semibold text-lake-800">{formatKsh(room.rates.BB)}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-ink/70">Per room per night. Check-in from {hotel.checkIn}, check-out by {hotel.checkOut}.</p>
        </div>
      </aside>
    </section>
  );
}
