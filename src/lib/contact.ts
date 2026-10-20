import { hotel } from "@/data/hotel";

export const telHref = `tel:${hotel.contact.phone}`;
export const mailHref = `mailto:${hotel.contact.reservationsEmail}`;

export function whatsappHref(message = `Hi ${hotel.shortName}, I'd like to make an enquiry.`) {
  return `https://wa.me/${hotel.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

// Prefilled WhatsApp text based on the page the guest is on.
export function whatsappMessageFor(pathname: string) {
  const room = pathname.match(/^\/rooms\/([^/]+)/)?.[1];
  if (room) {
    const name = room.charAt(0).toUpperCase() + room.slice(1);
    return `Hi ${hotel.shortName}, I'd like to book a ${name} Room for [dates].`;
  }
  if (pathname.startsWith("/events")) {
    return `Hi ${hotel.shortName}, I'd like a quote for a conference/event on [date] for [number] people.`;
  }
  if (pathname.startsWith("/dining")) {
    return `Hi ${hotel.shortName}, I'd like to reserve a table for [number] people on [date].`;
  }
  return `Hi ${hotel.shortName}, I'd like to book a room for [dates].`;
}
