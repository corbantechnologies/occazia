import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactButtons } from "@/components/ContactButtons";
import { ArrowLeftIcon, ArrowRightIcon, BedIcon, CheckIcon, DoorIcon, GuestsIcon, ViewIcon } from "@/components/icons";
import { JsonLd } from "@/components/JsonLd";
import { Photo } from "@/components/Photo";
import { RoomComparison } from "@/components/RoomComparison";
import { RoomGallery } from "@/components/RoomGallery";
import { formatKsh, hotel } from "@/data/hotel";
import { photoSlots, roomPhotos } from "@/data/photos";
import { policies } from "@/data/policies";
import { getRoom, mealPlans, rateIncludes, rooms, type MealPlan } from "@/data/rooms";
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

  const specs = [
    { icon: BedIcon, term: "Bed", detail: room.bed },
    { icon: ViewIcon, term: "Outlook", detail: room.view },
    { icon: GuestsIcon, term: "Sleeps", detail: room.guests },
    { icon: DoorIcon, term: "Size", detail: room.size },
  ];

  return (
    <>
      <JsonLd
        data={[breadcrumbSchema([["Rooms", "/rooms"], [room.name, `/rooms/${room.slug}`]]), roomSchema(room)]}
      />

      <section className="mx-auto max-w-6xl px-4 pt-8">
        <nav aria-label="Breadcrumb" className="text-sm text-ink/70">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="underline-offset-4 hover:underline">Home</Link></li>
            <li aria-hidden>/</li>
            <li><Link href="/rooms" className="underline-offset-4 hover:underline">Rooms</Link></li>
            <li aria-hidden>/</li>
            <li aria-current="page" className="font-semibold text-wine-900">{room.name}</li>
          </ol>
        </nav>
        <Link href="/rooms" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-wine-900 hover:text-wine-700">
          <ArrowLeftIcon className="h-4 w-4" /> All rooms
        </Link>
        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-wine-700">
          {room.units} rooms · from {formatKsh(room.rates.BB)} with breakfast
        </p>
        <h1 className="mt-2 font-display text-4xl font-semibold text-wine-900 sm:text-5xl">{room.name}</h1>
        <p className="mt-2 text-lg text-ink/70">{room.summary}</p>
      </section>

      <section className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)] gap-10 px-4 py-10 lg:grid-cols-[minmax(0,1fr)_23rem] lg:grid-rows-[auto_1fr]">
        <div className="lg:col-start-1 lg:row-start-1">
          <RoomGallery photos={photos} badge={room.view} />
        </div>

        <aside className="lg:sticky lg:top-24 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-start" aria-labelledby="details-heading">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-wine-900/5">
            <h2 id="details-heading" className="border-b border-wine-900/10 pb-3 font-display text-2xl font-semibold text-wine-900">
              Room details
            </h2>
            <dl className="mt-4 grid grid-cols-2 gap-4">
              {specs.map(({ icon: SpecIcon, term, detail }) => (
                <div key={term} className="flex gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sand-100 text-wine-700">
                    <SpecIcon />
                  </span>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-widest text-ink/70">{term}</dt>
                    <dd className="text-sm font-semibold text-wine-900">{detail}</dd>
                  </div>
                </div>
              ))}
            </dl>

            <div className="mt-5 rounded-xl bg-wine-50 p-4 ring-1 ring-wine-700/15">
              <div className="flex items-end justify-between gap-3">
                <p className="text-xs font-semibold uppercase tracking-widest text-wine-700">
                  Rate per night
                  <span className="block font-normal normal-case tracking-normal text-ink/70">Direct hotel rate</span>
                </p>
                <p className="text-right font-display text-3xl font-semibold text-wine-900">
                  {formatKsh(room.rates.BB)}
                  <span className="block font-sans text-xs font-semibold uppercase tracking-widest text-wine-700">Bed &amp; Breakfast</span>
                </p>
              </div>
              <table className="mt-3 w-full border-t border-wine-700/15 text-left text-sm">
                <tbody>
                  {(Object.keys(mealPlans) as MealPlan[]).filter((plan) => plan !== "BB").map((plan) => (
                    <tr key={plan}>
                      <th scope="row" className="pt-2 font-normal text-ink/80">{mealPlans[plan]}</th>
                      <td className="pt-2 text-right font-semibold text-wine-900">{formatKsh(room.rates[plan])}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Link
              href={`/booking?room=${room.slug}#booking-form`}
              className="mt-5 block rounded-full bg-gold-500 px-6 py-3 text-center font-semibold text-wine-900 hover:bg-wine-700 hover:text-white"
            >
              Book this room
            </Link>
            <div className="mt-3 [&_a]:w-full [&_a]:text-center">
              <ContactButtons whatsappMessage={bookMessage} whatsappLabel="Book on WhatsApp" />
            </div>
            <p className="mt-4 border-t border-wine-900/10 pt-3 text-xs text-ink/70">
              Check-in from {hotel.checkIn}, check-out by {hotel.checkOut}.{" "}
              <a href="#policies" className="font-semibold text-wine-700 underline underline-offset-2">Booking policies</a>
            </p>
          </div>
        </aside>

        <div className="lg:col-start-1 lg:row-start-2">
          <h2 className="font-display text-2xl font-semibold text-wine-900">About the room</h2>
          <p className="mt-3 text-lg font-semibold text-wine-800">{room.bestFor}</p>
          <p className="mt-3 text-ink/80">
            {room.summary} Ideal for {room.idealFor.charAt(0).toLowerCase() + room.idealFor.slice(1)}. All rooms are
            smoke-free, with buffet breakfast, free Wi-Fi and 24-hour room service.
          </p>
          {room.upgrade && <p className="mt-3 text-ink/80">{room.upgrade}</p>}

          <h2 className="mt-10 font-display text-2xl font-semibold text-wine-900">In the room</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {room.features.map((feature) => (
              <li key={feature} className="flex items-center gap-3 rounded-xl bg-white p-3 ring-1 ring-wine-900/5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-wine-50 text-wine-700">
                  <CheckIcon />
                </span>
                {feature}
              </li>
            ))}
          </ul>

          <h2 className="mt-10 font-display text-2xl font-semibold text-wine-900">Included in your rate</h2>
          <ul className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-2">
            {rateIncludes.map((item) => (
              <li key={item} className="flex items-start gap-2 text-ink/80">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                {item}
              </li>
            ))}
          </ul>

          <h2 id="policies" className="mt-10 scroll-mt-24 font-display text-2xl font-semibold text-wine-900">Booking policies</h2>
          <div className="mt-4 divide-y divide-wine-900/10 rounded-2xl bg-white ring-1 ring-wine-900/5">
            {policies.map((policy) => (
              <details key={policy.title} className="group px-5 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-wine-900">
                  {policy.title}
                  <span aria-hidden className="text-xl text-wine-700 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-2 text-sm text-ink/80">{policy.detail}</p>
              </details>
            ))}
          </div>
        </div>

      </section>

      <section className="bg-white" aria-labelledby="compare-heading">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 id="compare-heading" className="font-display text-3xl font-semibold text-wine-900">How the rooms compare</h2>
          <div className="mt-6">
            <RoomComparison current={room.slug} />
          </div>
        </div>
      </section>

      <section className="border-t border-wine-900/10" aria-labelledby="other-rooms-heading">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 id="other-rooms-heading" className="text-center font-display text-3xl font-semibold text-wine-900">
            Other rooms
          </h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-2">
            {otherRooms.map((other) => (
              <li key={other.slug} className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-wine-900/5 sm:flex-row">
                <div className="relative aspect-[4/3] sm:aspect-auto sm:w-2/5">
                  <Photo photo={photoSlots[`rooms-${other.slug}`]} label={other.name} sizes="(min-width: 768px) 20vw, (min-width: 640px) 40vw, 100vw" className="transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-xl font-semibold text-wine-900">
                    <Link href={`/rooms/${other.slug}`} className="after:absolute after:inset-0">
                      {other.name}
                    </Link>
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-ink/70">{other.summary}</p>
                  <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs font-semibold uppercase tracking-wider text-ink/70">
                    <span className="inline-flex items-center gap-1.5"><BedIcon className="h-4 w-4 text-wine-700" /> {other.bed}</span>
                    <span className="inline-flex items-center gap-1.5"><DoorIcon className="h-4 w-4 text-wine-700" /> {other.units} rooms</span>
                  </p>
                  <div className="mt-auto flex items-end justify-between gap-3 border-t border-wine-900/10 pt-4">
                    <p>
                      <span className="block text-xs font-semibold uppercase tracking-widest text-ink/70">From</span>
                      <span className="font-display text-xl font-semibold text-wine-900">{formatKsh(other.rates.BB)}</span>
                      <span className="text-sm text-ink/70"> / night</span>
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-wine-700">
                      View details <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
