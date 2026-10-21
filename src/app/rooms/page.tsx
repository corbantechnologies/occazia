import Link from "next/link";
import { ContactButtons } from "@/components/ContactButtons";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { formatKsh, hotel } from "@/data/hotel";
import { photoSlots } from "@/data/photos";
import { mealPlans, roomPolicies, rooms } from "@/data/rooms";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Rooms in Homa Bay",
  description: `${hotel.rooms} smoke-free balcony rooms in Homa Bay: Standard, Deluxe and Executive. Free Wi-Fi and buffet breakfast, from ${formatKsh(hotel.priceFrom)} a night.`,
  path: "/rooms",
  photo: photoSlots["rooms-executive"],
});

export default function RoomsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([["Rooms", "/rooms"]])} />
      <PageHero eyebrow="Accommodation" title="Rooms in Homa Bay" photo={photoSlots["rooms-deluxe"]}>
        {hotel.rooms} smoke-free rooms, each with a private balcony, free Wi-Fi and buffet breakfast included. Check-in from{" "}
        {hotel.checkIn}, check-out by {hotel.checkOut}.
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 py-14" aria-label="Room types">
        <ul className="grid gap-8 md:grid-cols-3">
          {rooms.map((room) => (
            <li key={room.slug} className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-lake-900/5">
              <Link href={`/rooms/${room.slug}`} className="relative block aspect-[4/3]">
                <Photo photo={photoSlots[`rooms-${room.slug}`]} label={room.name} sizes="(min-width: 768px) 33vw, 100vw" />
              </Link>
              <div className="flex flex-1 flex-col p-5">
                <h2 className="font-display text-2xl font-semibold text-lake-900">
                  <Link href={`/rooms/${room.slug}`}>{room.name}</Link>
                </h2>
                <p className="mt-1 text-sm text-ink/70">
                  {room.bed} · {room.view} · {room.units} rooms
                </p>
                <p className="mt-3 text-ink/80">{room.summary}</p>
                <p className="mt-4">
                  From <strong className="text-lg text-lake-800">{formatKsh(room.rates.BB)}</strong> / night with breakfast
                </p>
                <Link
                  href={`/rooms/${room.slug}`}
                  className="mt-5 self-start rounded-full bg-lake-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-lake-800"
                >
                  View {room.name}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-white" aria-labelledby="rates-heading">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 id="rates-heading" className="font-display text-3xl font-semibold text-lake-900">
            Room rates
          </h2>
          <p className="mt-2 text-ink/80">Per room per night, in Kenya shillings.</p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[32rem] text-left">
              <thead>
                <tr className="border-b border-lake-900/15 text-sm text-ink/70">
                  <th scope="col" className="py-3 pr-4 font-semibold">Room</th>
                  {Object.values(mealPlans).map((plan) => (
                    <th key={plan} scope="col" className="py-3 pr-4 font-semibold">{plan}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rooms.map((room) => (
                  <tr key={room.slug} className="border-b border-lake-900/10">
                    <th scope="row" className="py-3 pr-4 font-semibold text-lake-900">{room.name}</th>
                    <td className="py-3 pr-4">{formatKsh(room.rates.BB)}</td>
                    <td className="py-3 pr-4">{formatKsh(room.rates.HB)}</td>
                    <td className="py-3 pr-4">{formatKsh(room.rates.FB)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="mt-6 list-disc space-y-1 pl-5 text-sm text-ink/80">
            {roomPolicies.map((policy) => (
              <li key={policy}>{policy}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14" aria-labelledby="amenities-heading">
        <h2 id="amenities-heading" className="font-display text-3xl font-semibold text-lake-900">
          Included with every stay
        </h2>
        <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
          {hotel.amenities.map((amenity) => (
            <li key={amenity} className="flex items-start gap-2">
              <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
              {amenity}
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <ContactButtons whatsappLabel="Book on WhatsApp" showBooking />
        </div>
      </section>
    </>
  );
}
