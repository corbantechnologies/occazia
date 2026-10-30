import Link from "next/link";
import { ConferenceForm } from "@/components/ConferenceForm";
import { ContactButtons } from "@/components/ContactButtons";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { PhotoStrip } from "@/components/PhotoStrip";
import { eventFacilities, eventPackages, halls } from "@/data/events";
import { formatKsh, hotel } from "@/data/hotel";
import { eventPhotos, photoSlots } from "@/data/photos";
import { rooms } from "@/data/rooms";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, venueSchema } from "@/lib/schema";

const largest = Math.max(...halls.map((h) => h.capacity));

export const metadata = pageMetadata({
  title: "Conference Venue in Homa Bay",
  description: `Conference and event halls in Homa Bay for up to ${largest} guests, with A/V, Wi-Fi, catering and delegate rooms on site. Full-day packages from ${formatKsh(2500)} per person.`,
  path: "/events",
  photo: photoSlots.events,
});

const audiences = [
  { title: "NGOs and development partners", detail: "Trainings, workshops and stakeholder forums with delegate rooms and meals in one place." },
  { title: "County and government", detail: "Planning meetings, validation workshops and public sessions close to Homa Bay town." },
  { title: "Corporate teams", detail: "Board meetings, sales conferences, product launches and team retreats by Lake Victoria." },
  { title: "Celebrations", detail: "Luncheons, dinners, graduations and private functions with our own catering." },
];

const quoteMessage = `Hello ${hotel.shortName}, I would like a quotation for a conference for [number] delegates on [date]. Please share your available packages, catering options and accommodation rates.`;

export default function EventsPage() {
  const delegateRate = Math.min(...rooms.map((r) => r.rates.BB));

  return (
    <>
      <JsonLd data={[breadcrumbSchema([["Conferences & events", "/events"]]), venueSchema()]} />
      <PageHero eyebrow="Conferences & events" title="Conference venue in Homa Bay" photo={photoSlots.events}>
        Three halls for {halls.map((h) => h.capacity).join(", ")} guests, with projector, Wi-Fi, catering and{" "}
        {hotel.rooms} delegate rooms under one roof.
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 py-14" aria-labelledby="halls-heading">
        <h2 id="halls-heading" className="font-display text-3xl font-semibold text-wine-900">Our halls</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-3">
          {halls.map((hall) => (
            <li key={hall.id} className="rounded-2xl bg-white p-6 ring-1 ring-wine-900/5">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold-600">{hall.name}</p>
              <p className="mt-2 font-display text-4xl font-semibold text-wine-900">{hall.capacity}</p>
              <p className="text-sm text-ink/70">guests</p>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-ink/70">
          Halls can be set up classroom, U-shape or banquet style. Tell us your numbers and we&apos;ll suggest the right hall.
        </p>
        <div className="mt-8">
          <PhotoStrip photos={eventPhotos} label="Conference and event photos" />
        </div>
      </section>

      <section className="bg-wine-800 text-white" aria-labelledby="packages-heading">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 id="packages-heading" className="font-display text-3xl font-semibold">Packages and prices</h2>
          <p className="mt-2 text-sand-100">Prices in Kenya shillings. Ask us what each package includes.</p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {eventPackages.map((pkg) => (
              <li key={pkg.name} className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                <p className="font-semibold">{pkg.name}</p>
                <p className="mt-2">
                  <span className="font-display text-3xl font-semibold text-gold-500">{formatKsh(pkg.price)}</span>{" "}
                  <span className="text-sm text-sand-200">{pkg.unit}</span>
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sand-100">
            Delegate accommodation on site from {formatKsh(delegateRate)} per room per night with breakfast.{" "}
            <Link href="/rooms" className="font-semibold text-white underline underline-offset-4">See rooms</Link>
          </p>
          <div className="mt-8">
            <div className="flex flex-wrap gap-3">
              <a href="#quote-form" className="rounded-full bg-gold-500 px-6 py-3 font-semibold text-wine-900 hover:bg-white">
                Request a quote
              </a>
              <ContactButtons tone="dark" whatsappMessage={quoteMessage} whatsappLabel="Get a quote on WhatsApp" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-14 md:grid-cols-2" aria-label="Facilities and who we host">
        <div>
          <h2 className="font-display text-3xl font-semibold text-wine-900">Included facilities</h2>
          <ul className="mt-6 space-y-3">
            {eventFacilities.map((facility) => (
              <li key={facility} className="flex items-start gap-2">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                {facility}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-3xl font-semibold text-wine-900">Who we host</h2>
          <ul className="mt-6 space-y-5">
            {audiences.map((a) => (
              <li key={a.title}>
                <p className="font-semibold text-wine-800">{a.title}</p>
                <p className="text-ink/80">{a.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white" aria-labelledby="quote-heading">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-[20rem_1fr]">
          <div>
            <h2 id="quote-heading" className="font-display text-3xl font-semibold text-wine-900">Request a quote</h2>
            <p className="mt-3 text-ink/80">
              Tell us the date, number of delegates and what you need. We&apos;ll reply with a quotation covering the hall,
              meals and delegate rooms.
            </p>
            <p className="mt-4 text-sm text-ink/70">Prefer to talk it through?</p>
            <div className="mt-3">
              <ContactButtons whatsappMessage={quoteMessage} whatsappLabel="WhatsApp us" />
            </div>
          </div>
          <div className="rounded-2xl bg-sand-50 p-6 ring-1 ring-wine-900/5">
            <ConferenceForm />
          </div>
        </div>
      </section>
    </>
  );
}
