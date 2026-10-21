import { ContactButtons } from "@/components/ContactButtons";
import { JsonLd } from "@/components/JsonLd";
import { MapFacade } from "@/components/MapFacade";
import { PageHero } from "@/components/PageHero";
import { hotel } from "@/data/hotel";
import { photoSlots } from "@/data/photos";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Location and Directions in Homa Bay",
  description: `${hotel.name} is at Got Rabuor, off the Kisumu–Homa Bay Highway, about 2 hours from Kisumu International Airport and 10 minutes from Kabunde Airstrip.`,
  path: "/location",
  photo: photoSlots.location,
});

export default function LocationPage() {
  const { address, geo } = hotel;
  const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${geo.latitude},${geo.longitude}`;

  return (
    <>
      <JsonLd data={breadcrumbSchema([["Location", "/location"]])} />
      <PageHero eyebrow="Location" title="Getting to Hotel Occazia Homa Bay" photo={photoSlots.location}>
        At Got Rabuor, just off the Kisumu–Homa Bay Highway, a few minutes from Homa Bay town and the shores of Lake Victoria.
      </PageHero>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-[1fr_20rem]">
        <div>
          <MapFacade latitude={geo.latitude} longitude={geo.longitude} title={`Map showing ${hotel.name}`} />
          <a
            href={directionsHref}
            target="_blank"
            rel="noopener"
            data-track="directions"
            className="mt-4 inline-block rounded-full bg-lake-700 px-6 py-3 font-semibold text-white hover:bg-lake-800"
          >
            Get directions in Google Maps
          </a>
        </div>
        <div>
          <h2 className="font-display text-2xl font-semibold text-lake-900">Address</h2>
          <address className="mt-3 not-italic leading-relaxed">
            {hotel.name}
            <br />
            {address.street}
            <br />
            {address.poBox}
            <br />
            {address.locality}, {address.region}, Kenya
          </address>
          <p className="mt-4 text-sm text-ink/70">Secure parking on site. Airport shuttle available: ask when you book.</p>
        </div>
      </section>

      <section className="bg-white" aria-labelledby="directions-heading">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 id="directions-heading" className="font-display text-3xl font-semibold text-lake-900">How far is it?</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {hotel.directions.map((d) => (
              <li key={d.from} className="rounded-2xl bg-sand-50 p-5 ring-1 ring-lake-900/5">
                <p className="font-semibold text-lake-800">From {d.from}</p>
                <p className="mt-1 text-ink/80">{d.detail}</p>
              </li>
            ))}
          </ul>

          <h2 className="mt-14 font-display text-3xl font-semibold text-lake-900">Nearby</h2>
          <p className="mt-2 text-ink/80">Places to visit during your stay. The front desk is happy to help you plan trips.</p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {hotel.nearby.map((place) => (
              <li key={place} className="rounded-full bg-lake-50 px-4 py-2 text-lake-800">{place}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 text-center">
        <h2 className="font-display text-3xl font-semibold text-lake-900">Need help finding us?</h2>
        <p className="mt-2 text-ink/80">Call or WhatsApp the front desk, open 24 hours.</p>
        <div className="mt-6 flex justify-center">
          <ContactButtons whatsappMessage={`Hi ${hotel.shortName}, could you send me directions to the hotel?`} />
        </div>
      </section>
    </>
  );
}
