import { eventFacilities, eventPackages, halls } from "@/data/events";
import { restaurantHighlights } from "@/data/dining";
import { hotel } from "@/data/hotel";
import { photoSlots, roomPhotos, type Photo } from "@/data/photos";
import { mealPlans, rooms, type MealPlan, type Room } from "@/data/rooms";

// schema.org JSON-LD built from the data files. Entities link to each other
// by @id so search engines see one hotel with a restaurant and event venue.

const ids = {
  hotel: `${hotel.url}/#hotel`,
  restaurant: `${hotel.url}/dining#restaurant`,
  venue: `${hotel.url}/events#venue`,
};

const absolute = (path: string) => new URL(path, hotel.url).toString();
const imageUrl = (photo?: Photo) => (photo ? absolute(photo.src.src) : undefined);

const address = {
  "@type": "PostalAddress",
  streetAddress: hotel.address.street,
  postOfficeBoxNumber: hotel.address.poBox,
  addressLocality: hotel.address.locality,
  addressRegion: hotel.address.region,
  postalCode: hotel.address.postalCode,
  addressCountry: hotel.address.country,
};

const rates = rooms.flatMap((r) => Object.values(r.rates));

export function hotelSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "@id": ids.hotel,
    name: hotel.name,
    alternateName: hotel.shortName,
    description: hotel.description,
    url: hotel.url,
    telephone: hotel.contact.phone,
    email: hotel.contact.email,
    image: [photoSlots.hero, photoSlots["rooms-executive"], photoSlots.events, photoSlots.dining].map(imageUrl).filter(Boolean),
    address,
    geo: { "@type": "GeoCoordinates", latitude: hotel.geo.latitude, longitude: hotel.geo.longitude },
    hasMap: `https://www.google.com/maps?q=${hotel.geo.latitude},${hotel.geo.longitude}`,
    priceRange: `KSh ${Math.min(...rates).toLocaleString("en-KE")} - ${Math.max(...rates).toLocaleString("en-KE")}`,
    currenciesAccepted: hotel.currency,
    checkinTime: hotel.checkIn,
    checkoutTime: hotel.checkOut,
    numberOfRooms: hotel.rooms,
    smokingAllowed: false,
    amenityFeature: hotel.amenities.map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
    containsPlace: [{ "@id": ids.restaurant }, { "@id": ids.venue }],
    sameAs: [hotel.social.youtube],
  };
}

export function roomSchema(room: Room) {
  const url = absolute(`/rooms/${room.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "HotelRoom",
    "@id": `${url}#room`,
    name: room.name,
    description: room.summary,
    url,
    image: (roomPhotos[room.slug] ?? []).map(imageUrl),
    bed: room.bed,
    amenityFeature: room.features.map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
    smokingAllowed: false,
    containedInPlace: { "@id": ids.hotel },
    offers: (Object.keys(mealPlans) as MealPlan[]).map((plan) => ({
      "@type": "Offer",
      name: `${room.name}, ${mealPlans[plan]}`,
      url,
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: room.rates[plan],
        priceCurrency: hotel.currency,
        unitCode: "DAY",
        unitText: "per room per night",
      },
    })),
  };
}

export function venueSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EventVenue",
    "@id": ids.venue,
    name: `${hotel.name} conference halls`,
    description: `Three conference and event halls for ${halls.map((h) => h.capacity).join(", ")} guests.`,
    url: absolute("/events"),
    image: imageUrl(photoSlots.events),
    telephone: hotel.contact.phone,
    address,
    maximumAttendeeCapacity: Math.max(...halls.map((h) => h.capacity)),
    amenityFeature: eventFacilities.map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
    containedInPlace: { "@id": ids.hotel },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Conference and event packages",
      itemListElement: eventPackages.map((pkg) => ({
        "@type": "Offer",
        name: pkg.name,
        price: pkg.price,
        priceCurrency: hotel.currency,
        description: pkg.unit,
      })),
    },
  };
}

export function restaurantSchema() {
  const { opens, closes } = hotel.hours.restaurant;
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": ids.restaurant,
    name: `${hotel.name} Restaurant`,
    description: restaurantHighlights.join(". "),
    url: absolute("/dining"),
    image: imageUrl(photoSlots.dining),
    telephone: hotel.contact.phone,
    address,
    servesCuisine: ["Kenyan", "International"],
    acceptsReservations: true,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens,
      closes,
    },
    containedInPlace: { "@id": ids.hotel },
  };
}

// Crumbs after Home, e.g. [["Rooms", "/rooms"], ["Deluxe Room", "/rooms/deluxe"]].
export function breadcrumbSchema(crumbs: [name: string, path: string][]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [["Home", "/"], ...crumbs].map(([name, path], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item: absolute(path),
    })),
  };
}
