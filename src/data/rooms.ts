export type MealPlan = "BB" | "HB" | "FB";

export type Room = {
  slug: string;
  name: string;
  units: number;
  bed: string;
  view: string;
  idealFor: string;
  // One line on who the room suits, and what it adds over the room below it.
  bestFor: string;
  upgrade?: string;
  // TODO: hotel to confirm. Sizes are from the Hotels.com listing.
  size: string;
  guests: string;
  summary: string;
  features: string[];
  // Nightly rates in KSh, per room.
  rates: Record<MealPlan, number>;
};

export const mealPlans: Record<MealPlan, string> = {
  BB: "Bed & Breakfast",
  HB: "Half Board",
  FB: "Full Board",
};

export const rooms: Room[] = [
  {
    slug: "standard",
    name: "Standard Room",
    units: 15,
    bed: "Double bed",
    view: "Private balcony",
    idealFor: "Budget travellers, transit guests and event delegates",
    bestFor: "The comfortable, practical choice for solo travellers, couples and conference delegates.",
    size: "About 20 m²",
    guests: "2 adults",
    summary: "A cosy, practical room with everything you need for a good night's rest.",
    features: [
      "Private balcony",
      "Private bathroom with shower",
      "Complimentary toiletries",
      "Flat-screen TV",
      "High-speed Wi-Fi",
      "Daily housekeeping",
    ],
    rates: { BB: 4500, HB: 6000, FB: 7500 },
  },
  {
    slug: "deluxe",
    name: "Deluxe Room",
    units: 9,
    bed: "Double or queen bed",
    view: "Balcony with lake view",
    idealFor: "Business travellers, couples and solo professionals",
    bestFor: "More space and a lake view, with a proper desk for working travellers.",
    upgrade: "Over the Standard Room you gain a lake-view balcony, more space, a writing desk, a smart TV and a hot drinks station.",
    size: "About 25 m²",
    guests: "2 adults",
    summary: "A spacious modern double room with a lake-view balcony and a proper desk to work at.",
    features: [
      "Private balcony with lake view",
      "Flat-screen smart TV",
      "Writing desk",
      "Hot drinks station",
      "High-speed Wi-Fi",
      "Closet and en-suite shower",
    ],
    rates: { BB: 5000, HB: 6500, FB: 8000 },
  },
  {
    slug: "executive",
    name: "Executive Room",
    units: 3,
    bed: "King-size bed",
    view: "Balcony with lake view",
    idealFor: "VIPs, executives and long-stay guests",
    bestFor: "Our premium room, for guests who want a king-size bed and room to relax.",
    upgrade: "Over the Deluxe Room you gain a king-size bed, a separate seating lounge, an executive desk and a bathrobe with premium amenities.",
    size: "About 30 m²",
    guests: "2 adults",
    summary: "Our most spacious room, with a seating lounge, executive desk and a lake-view balcony.",
    features: [
      "Private balcony with lake view",
      "King-size bed",
      "Seating lounge",
      "Executive work desk",
      "Hot drinks station",
      "Bathrobe and premium bathroom amenities",
    ],
    rates: { BB: 6000, HB: 7500, FB: 9000 },
  },
];

// Side-by-side comparison shown on /rooms and each room page.
type Cell = string | boolean;
export const roomComparison: { label: string; values: Record<string, Cell> }[] = [
  { label: "Bed", values: { standard: "Double", deluxe: "Double or queen", executive: "King-size" } },
  { label: "Size", values: { standard: "About 20 m²", deluxe: "About 25 m²", executive: "About 30 m²" } },
  { label: "Guests", values: { standard: "2 adults", deluxe: "2 adults", executive: "2 adults" } },
  { label: "Private balcony", values: { standard: true, deluxe: "With lake view", executive: "With lake view" } },
  { label: "Breakfast and Wi-Fi", values: { standard: true, deluxe: true, executive: true } },
  { label: "Writing desk", values: { standard: false, deluxe: true, executive: "Executive desk" } },
  { label: "Hot drinks station", values: { standard: false, deluxe: true, executive: true } },
  { label: "Seating lounge", values: { standard: false, deluxe: false, executive: true } },
  { label: "Bathrobe and premium amenities", values: { standard: false, deluxe: false, executive: true } },
];

// Included in every room rate.
export const rateIncludes = [
  "Buffet breakfast (Bed & Breakfast rate)",
  "Free high-speed Wi-Fi",
  "Private balcony",
  "Secure on-site parking",
  "Daily housekeeping",
  "Complimentary toiletries",
];

export const roomPolicies = [
  "Rates are per room per night and include buffet breakfast.",
  "Extra adult sharing a room: KSh 1,000 per night on Bed & Breakfast.",
  "Children above 12 years are charged as adults. Family arrangements on request.",
];

export function getRoom(slug: string) {
  return rooms.find((room) => room.slug === slug);
}
