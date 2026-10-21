import Link from "next/link";
import { ContactButtons } from "@/components/ContactButtons";
import { PageHero } from "@/components/PageHero";
import { PhotoStrip } from "@/components/PhotoStrip";
import { loungeHighlights, restaurantHighlights } from "@/data/dining";
import { hotel } from "@/data/hotel";
import { diningPhotos, loungePhotos, photoSlots } from "@/data/photos";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Restaurant and Bar in Homa Bay",
  description: `Restaurant at ${hotel.name}, open daily 6:00 AM to 11:00 PM: Lake Victoria tilapia, local and international dishes, bar and lounge, 24/7 room service.`,
  path: "/dining",
  photo: photoSlots.dining,
});

const tableMessage = `Hi ${hotel.shortName}, I'd like to reserve a table for [number] people on [date] at [time].`;

export default function DiningPage() {
  return (
    <>
      <PageHero eyebrow="Dining" title="Restaurant and bar in Homa Bay" photo={photoSlots.dining}>
        Local and international food, fresh tilapia from the lake, and a bar and lounge to unwind in. {hotel.hours.restaurant.label}.
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 py-14" aria-labelledby="restaurant-heading">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 id="restaurant-heading" className="font-display text-3xl font-semibold text-lake-900">The restaurant</h2>
            <p className="mt-3 text-ink/80">
              Breakfast, lunch and dinner every day, from the morning buffet to dinner with fish fresh from Lake Victoria.
            </p>
            <ul className="mt-6 space-y-3">
              {restaurantHighlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <dl className="h-fit rounded-2xl bg-white p-6 ring-1 ring-lake-900/5">
            <dt className="text-xs font-semibold uppercase tracking-widest text-gold-600">Restaurant hours</dt>
            <dd className="mt-1 text-lg">{hotel.hours.restaurant.label}</dd>
            <dt className="mt-5 text-xs font-semibold uppercase tracking-widest text-gold-600">Room service</dt>
            <dd className="mt-1 text-lg">{hotel.hours.roomService}</dd>
            <dt className="mt-5 text-xs font-semibold uppercase tracking-widest text-gold-600">Groups and functions</dt>
            <dd className="mt-1">
              Luncheon and dinner meetings from KSh 1,500 per person.{" "}
              <Link href="/events" className="font-semibold text-lake-700 underline underline-offset-4">Conferences and events</Link>
            </dd>
          </dl>
        </div>
        <div className="mt-10">
          <PhotoStrip photos={diningPhotos} label="Restaurant photos" />
        </div>
      </section>

      <section className="bg-lake-800 text-white" aria-labelledby="lounge-heading">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 id="lounge-heading" className="font-display text-3xl font-semibold">Bar and lounge</h2>
          <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-2 text-sand-100">
            {loungeHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="mt-8">
            <PhotoStrip photos={loungePhotos} label="Bar and lounge photos" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 text-center" aria-labelledby="reserve-heading">
        <h2 id="reserve-heading" className="font-display text-3xl font-semibold text-lake-900">Reserve a table</h2>
        <p className="mt-2 text-ink/80">Message us with the date, time and number of guests.</p>
        <div className="mt-6 flex justify-center">
          <ContactButtons whatsappMessage={tableMessage} whatsappLabel="Reserve on WhatsApp" />
        </div>
      </section>
    </>
  );
}
