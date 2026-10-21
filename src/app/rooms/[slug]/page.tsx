import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactButtons } from "@/components/ContactButtons";
import { JsonLd } from "@/components/JsonLd";
import { PhotoStrip } from "@/components/PhotoStrip";
import { formatKsh, hotel } from "@/data/hotel";
import { roomPhotos } from "@/data/photos";
import { getRoom, mealPlans, roomPolicies, rooms, type MealPlan } from "@/data/rooms";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, roomSchema } from "@/lib/schema";

export function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}

export async function generateMetadata(props: PageProps<"/rooms/[slug]">) {
  const { slug } = await props.params;
  const room = getRoom(slug);
  if (!room) return {};
  return pageMetadata({
    title: `${room.name} in Homa Bay`,
    description: `${room.name} at ${hotel.name}: ${room.bed.toLowerCase()}, ${room.view.toLowerCase()}, free Wi-Fi and breakfast. From ${formatKsh(room.rates.BB)} a night.`,
    path: `/rooms/${room.slug}`,
    photo: roomPhotos[room.slug]?.[0],
  });
}

export default async function RoomPage(props: PageProps<"/rooms/[slug]">) {
  const { slug } = await props.params;
  const room = getRoom(slug);
  if (!room) notFound();

  const photos = roomPhotos[room.slug] ?? [];
  const otherRooms = rooms.filter((r) => r.slug !== room.slug);
  const bookMessage = `Hi ${hotel.shortName}, I'd like to book a ${room.name} for [dates], [number] guests.`;

  return (
    <>
      <JsonLd
        data={[breadcrumbSchema([["Rooms", "/rooms"], [room.name, `/rooms/${room.slug}`]]), roomSchema(room)]}
      />
      <section className="mx-auto max-w-6xl px-4 pb-6 pt-8">
        <nav aria-label="Breadcrumb" className="text-sm text-ink/70">
          <Link href="/rooms" className="underline-offset-4 hover:underline">Rooms</Link>
          <span aria-hidden> / </span>
          <span aria-current="page">{room.name}</span>
        </nav>
        <h1 className="mt-3 font-display text-4xl font-semibold text-lake-900 sm:text-5xl">{room.name}</h1>
        <p className="mt-2 text-lg text-ink/80">{room.summary}</p>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <PhotoStrip photos={photos} label={`${room.name} photos`} />
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-[1fr_22rem]">
        <div>
          <dl className="grid gap-4 sm:grid-cols-3">
            {[
              ["Bed", room.bed],
              ["Outlook", room.view],
              ["Ideal for", room.idealFor],
            ].map(([term, detail]) => (
              <div key={term} className="rounded-xl bg-white p-4 ring-1 ring-lake-900/5">
                <dt className="text-xs font-semibold uppercase tracking-widest text-gold-600">{term}</dt>
                <dd className="mt-1 text-ink">{detail}</dd>
              </div>
            ))}
          </dl>

          <h2 className="mt-10 font-display text-2xl font-semibold text-lake-900">In the room</h2>
          <ul className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2">
            {room.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                {feature}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-ink/70">
            All rooms are smoke-free. Check-in from {hotel.checkIn}, check-out by {hotel.checkOut}. Front desk and room
            service run 24 hours.
          </p>
        </div>

        <aside className="h-fit rounded-2xl bg-white p-6 shadow-sm ring-1 ring-lake-900/5" aria-labelledby="price-heading">
          <h2 id="price-heading" className="font-display text-2xl font-semibold text-lake-900">Rates per night</h2>
          <table className="mt-4 w-full text-left">
            <tbody>
              {(Object.keys(mealPlans) as MealPlan[]).map((plan) => (
                <tr key={plan} className="border-b border-lake-900/10 last:border-0">
                  <th scope="row" className="py-2.5 pr-3 font-normal text-ink/80">{mealPlans[plan]}</th>
                  <td className="py-2.5 text-right font-semibold text-lake-800">{formatKsh(room.rates[plan])}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <ul className="mt-4 space-y-1 text-xs text-ink/70">
            {roomPolicies.slice(1).map((policy) => (
              <li key={policy}>{policy}</li>
            ))}
          </ul>
          <div className="mt-6 [&_a]:w-full [&_a]:text-center">
            <ContactButtons whatsappMessage={bookMessage} whatsappLabel={`Book ${room.name} on WhatsApp`} />
          </div>
          <Link
            href={`/booking?room=${room.slug}`}
            className="mt-3 block text-center text-sm font-semibold text-lake-700 underline underline-offset-4"
          >
            Or send a booking enquiry
          </Link>
        </aside>
      </section>

      <section className="bg-white" aria-labelledby="other-rooms-heading">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 id="other-rooms-heading" className="font-display text-2xl font-semibold text-lake-900">Other rooms</h2>
          <ul className="mt-4 flex flex-wrap gap-3">
            {otherRooms.map((other) => (
              <li key={other.slug}>
                <Link href={`/rooms/${other.slug}`} className="block rounded-full border border-lake-700 px-5 py-2 font-semibold text-lake-700 hover:bg-lake-50">
                  {other.name} · from {formatKsh(other.rates.BB)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
