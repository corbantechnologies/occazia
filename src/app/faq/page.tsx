import Link from "next/link";
import { ContactButtons } from "@/components/ContactButtons";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { faqs } from "@/data/faq";
import { hotel } from "@/data/hotel";
import { photoSlots } from "@/data/photos";
import { policies } from "@/data/policies";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "FAQ and Booking Policies",
  description: `Answers about check-in times, breakfast, booking, payment, conferences and getting to ${hotel.name}, plus our booking policies.`,
  path: "/faq",
  photo: photoSlots.booking,
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.flatMap((g) =>
    g.items.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
  ),
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema([["FAQ", "/faq"]]), faqSchema]} />
      <PageHero eyebrow="Help" title="Questions and booking policies" photo={photoSlots.booking}>
        Everything you need to know before you stay, meet or dine with us.
      </PageHero>

      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 lg:grid-cols-[14rem_1fr]">
        <nav aria-label="On this page" className="hidden lg:block">
          <ul className="sticky top-24 space-y-2 text-sm">
            {faqs.map((g) => (
              <li key={g.group}>
                <a href={`#${g.group.toLowerCase().replace(/\W+/g, "-")}`} className="text-ink/80 hover:text-wine-700">{g.group}</a>
              </li>
            ))}
            <li>
              <a href="#policies" className="text-ink/80 hover:text-wine-700">Booking policies</a>
            </li>
          </ul>
        </nav>

        <div className="space-y-12">
          {faqs.map((g) => (
            <section key={g.group} id={g.group.toLowerCase().replace(/\W+/g, "-")} className="scroll-mt-24">
              <h2 className="font-display text-3xl font-semibold text-wine-900">{g.group}</h2>
              <div className="mt-4 divide-y divide-wine-900/10 rounded-2xl bg-white ring-1 ring-wine-900/5">
                {g.items.map((item) => (
                  <details key={item.q} className="group px-5 py-4">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-wine-900">
                      {item.q}
                      <span aria-hidden className="text-xl text-wine-700 transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-2 text-ink/80">{item.a}</p>
                  </details>
                ))}
              </div>
            </section>
          ))}

          <section id="policies" className="scroll-mt-24">
            <h2 className="font-display text-3xl font-semibold text-wine-900">Booking policies</h2>
            <dl className="mt-4 grid gap-4 sm:grid-cols-2">
              {policies.map((policy) => (
                <div key={policy.title} className="rounded-2xl bg-white p-5 ring-1 ring-wine-900/5">
                  <dt className="font-semibold text-wine-900">{policy.title}</dt>
                  <dd className="mt-1 text-sm text-ink/80">{policy.detail}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="rounded-2xl bg-wine-50 p-6">
            <h2 className="font-display text-2xl font-semibold text-wine-900">Still have a question?</h2>
            <p className="mt-2 text-ink/80">
              Our front desk is open {hotel.hours.frontDesk}. You can also{" "}
              <Link href="/booking" className="font-semibold text-wine-700 underline underline-offset-4">send a booking request</Link>.
            </p>
            <div className="mt-4">
              <ContactButtons />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
