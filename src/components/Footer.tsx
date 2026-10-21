import Image from "next/image";
import Link from "next/link";
import { hotel, nav } from "@/data/hotel";
import { mailHref, telHref, whatsappHref } from "@/lib/contact";
import logoWhite from "../../public/logo-white.svg";

export function Footer() {
  const { address, contact } = hotel;

  return (
    <footer className="bg-wine-900 pb-24 text-sand-100 md:pb-0">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <Image src={logoWhite} alt={hotel.name} className="h-24 w-auto" />
          <p className="mt-2 text-sm text-sand-200">{hotel.tagline}</p>
          {/* Name, address and phone in plain text for local SEO. */}
          <address className="mt-4 text-sm not-italic leading-relaxed">
            {address.street}
            <br />
            {address.poBox}, {address.locality}, Kenya
          </address>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-500">Contact</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              Phone: <a href={telHref} className="underline-offset-4 hover:underline" data-track="call">{contact.phoneDisplay}</a>
            </li>
            <li>
              WhatsApp:{" "}
              <a href={whatsappHref()} target="_blank" rel="noopener" className="underline-offset-4 hover:underline" data-track="whatsapp">
                {contact.whatsappDisplay}
              </a>
            </li>
            <li>
              Email: <a href={mailHref} className="underline-offset-4 hover:underline">{contact.reservationsEmail}</a>
            </li>
            <li>Restaurant: {hotel.hours.restaurant.label}</li>
            <li>Front desk: {hotel.hours.frontDesk}</li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-500">Explore</p>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
            {[...nav, { href: "/booking", label: "Book a room" }].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="underline-offset-4 hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-sand-200/70">
        <p>© {hotel.name}. All rights reserved.</p>
        <p className="mt-1">
          Website designed and built by{" "}
          <a
            href="https://www.corbantechnologies.org"
            target="_blank"
            rel="noopener"
            className="underline underline-offset-2 hover:text-white"
          >
            Corban Technologies LTD
          </a>
        </p>
      </div>
    </footer>
  );
}
