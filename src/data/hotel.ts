// Single source of truth for hotel facts. Pages, metadata, sitemap and
// JSON-LD all read from here, so update details in this file only.
// Sources: hotel brochure and hotel profile (Oct 2026).

export const hotel = {
  name: "Hotel Occazia Homa Bay",
  shortName: "Hotel Occazia",
  tagline: "Your Home Away From Home in Homa Bay",
  description:
    "Hotel in Homa Bay near Lake Victoria with 27 balcony rooms, three conference halls, a restaurant, and a bar and lounge. Rooms from KSh 4,500 with breakfast.",
  url: "https://occaziakenya.com",
  locale: "en_KE",

  contact: {
    // TODO: hotel to confirm. The profile footer shows 0798 622588.
    phone: "+254793622588",
    phoneDisplay: "+254 793 622 588",
    whatsapp: "254110287734",
    whatsappDisplay: "+254 110 287 734",
    email: "info@occaziakenya.com",
    reservationsEmail: "reservations@occaziakenya.com",
  },

  address: {
    street: "Got Rabuor, off Kisumu–Homa Bay Highway",
    poBox: "P.O. Box 565-40300",
    locality: "Homa Bay",
    region: "Homa Bay County",
    postalCode: "40300",
    country: "KE",
  },

  // From Hotels.com; confirm against the hotel's Google Maps pin.
  geo: { latitude: -0.5287, longitude: 34.4594 },

  rooms: 27,
  checkIn: "13:00",
  checkOut: "10:00",
  priceFrom: 4500,
  currency: "KES",

  hours: {
    restaurant: { opens: "06:00", closes: "23:00", label: "Open daily, 6:00 AM to 11:00 PM" },
    frontDesk: "24 hours",
    roomService: "24 hours",
  },

  directions: [
    { from: "Kisumu International Airport", detail: "About 2 hours by road (114 km)" },
    { from: "Kabunde Airstrip", detail: "About 10 minutes by road" },
    { from: "Homa Bay town centre", detail: "A few minutes' drive, off the Kisumu–Homa Bay Highway" },
  ],

  nearby: ["Lake Victoria", "Ruma National Park", "Simbi Nyaima", "Tom Mboya Mausoleum", "Homa Hills"],

  amenities: [
    "Free high-speed Wi-Fi",
    "Daily buffet breakfast",
    "Restaurant",
    "Bar and lounge",
    "24/7 front desk",
    "24/7 room service",
    "Secure on-site parking",
    "Airport shuttle",
    "Baggage storage",
    "Express check-in and check-out",
    "Conference halls",
    "Smoke-free rooms",
  ],

  // TODO: swap for the hotel's Google Business Profile review link once shared.
  googleReviews: "https://www.google.com/maps/search/?api=1&query=Hotel+Occazia+Homa+Bay",

  social: {
    youtube: "https://youtu.be/hjyKD7eAzHw",
  },
} as const;

export const nav = [
  { href: "/rooms", label: "Rooms" },
  { href: "/events", label: "Conferences & Events" },
  { href: "/dining", label: "Dining" },
  { href: "/gallery", label: "Gallery" },
  { href: "/location", label: "Location" },
] as const;

export function formatKsh(amount: number) {
  return `KSh ${amount.toLocaleString("en-KE")}`;
}
