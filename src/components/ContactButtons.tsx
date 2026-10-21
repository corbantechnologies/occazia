import Link from "next/link";
import { hotel } from "@/data/hotel";
import { telHref, whatsappHref } from "@/lib/contact";

type Props = {
  whatsappMessage?: string;
  whatsappLabel?: string;
  showBooking?: boolean;
  tone?: "light" | "dark";
};

// WhatsApp, call and (optionally) booking-form buttons, used on every page.
export function ContactButtons({ whatsappMessage, whatsappLabel = "WhatsApp us", showBooking = false, tone = "light" }: Props) {
  const outline =
    tone === "dark" ? "border-white/70 text-white hover:bg-white/10" : "border-lake-700 text-lake-700 hover:bg-lake-50";

  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={whatsappHref(whatsappMessage)}
        target="_blank"
        rel="noopener"
        data-track="whatsapp"
        className="rounded-full bg-whatsapp px-6 py-3 font-semibold text-white hover:brightness-110"
      >
        {whatsappLabel}
      </a>
      <a href={telHref} data-track="call" className={`rounded-full border px-6 py-3 font-semibold ${outline}`}>
        Call {hotel.contact.phoneDisplay}
      </a>
      {showBooking && (
        <Link href="/booking" className={`rounded-full border px-6 py-3 font-semibold ${outline}`}>
          Send an enquiry
        </Link>
      )}
    </div>
  );
}
