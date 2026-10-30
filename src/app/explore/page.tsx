import Link from "next/link";
import { ContactButtons } from "@/components/ContactButtons";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { attractions, businessInfo, itineraries } from "@/data/explore";
import { hotel } from "@/data/hotel";
import { photoSlots } from "@/data/photos";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Things to Do in Homa Bay",
  description: `Explore Homa Bay from ${hotel.name}: Lake Victoria boat rides, Ruma National Park, Simbi Nyaima crater lake, Homa Hill, and Rusinga and Mfangano islands.`,
  path: "/explore",
  photo: photoSlots.hero,
});

export default function ExplorePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([["Explore Homa Bay", "/explore"]])} />
      <PageHero eyebrow="Explore Homa Bay" title="Things to do in Homa Bay" photo={photoSlots.hero}>
        Lake Victoria, a national park with Kenya&apos;s rarest antelope, crater lakes and island trips, all within easy
        reach of the hotel.
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 py-14" aria-labelledby="see-heading">
        <h2 id="see-heading" className="font-display text-3xl font-semibold text-wine-900">Places to visit</h2>
        <p className="mt-2 max-w-2xl text-ink/80">
          Approximate travel times from the hotel. Our front desk can arrange a driver, boat or guide.
        </p>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {attractions.map((place) => (
            <li key={place.name} className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-wine-900/5">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold-600">{place.kind}</p>
              <h3 className="mt-2 font-display text-xl font-semibold text-wine-900">{place.name}</h3>
              <p className="mt-2 flex-1 text-ink/80">{place.detail}</p>
              <p className="mt-4 border-t border-wine-900/10 pt-3 text-sm font-semibold text-wine-700">{place.time}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-wine-800 text-white" aria-labelledby="plan-heading">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 id="plan-heading" className="font-display text-3xl font-semibold">Plan your time</h2>
          <ol className="mt-8 grid gap-6 md:grid-cols-3">
            {itineraries.map((item, i) => (
              <li key={item.title} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                <p className="font-display text-4xl font-semibold text-gold-500">{i + 1}</p>
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sand-100">{item.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2" aria-label="Travel information">
        <div>
          <h2 className="font-display text-3xl font-semibold text-wine-900">In town on business?</h2>
          <ul className="mt-6 space-y-3">
            {businessInfo.map((item) => (
              <li key={item} className="flex items-start gap-2 text-ink/80">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6">
            <Link href="/events" className="font-semibold text-wine-700 underline underline-offset-4">Conference halls and packages</Link>
          </p>
        </div>
        <div>
          <h2 className="font-display text-3xl font-semibold text-wine-900">Getting here</h2>
          <ul className="mt-6 space-y-3">
            {hotel.directions.map((d) => (
              <li key={d.from} className="text-ink/80">
                <strong className="text-wine-900">From {d.from}:</strong> {d.detail}
              </li>
            ))}
          </ul>
          <p className="mt-6">
            <Link href="/location" className="font-semibold text-wine-700 underline underline-offset-4">Map and directions</Link>
          </p>
        </div>
      </section>

      <section className="bg-white" aria-labelledby="stay-heading">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center">
          <h2 id="stay-heading" className="font-display text-3xl font-semibold text-wine-900">Make Hotel Occazia your base</h2>
          <p className="mx-auto mt-2 max-w-xl text-ink/80">Balcony rooms with breakfast, and help planning your trips from our front desk.</p>
          <div className="mt-6 flex justify-center">
            <ContactButtons whatsappMessage={`Hi ${hotel.shortName}, I'd like help planning a trip around Homa Bay.`} showBooking />
          </div>
        </div>
      </section>
    </>
  );
}
