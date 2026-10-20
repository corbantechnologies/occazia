export type MealPlan = "BB" | "HB" | "FB";

export type Room = {
  slug: string;
  name: string;
  units: number;
  bed: string;
  view: string;
  idealFor: string;
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

export const roomPolicies = [
  "Rates are per room per night and include buffet breakfast.",
  "Extra adult sharing a room: KSh 1,000 per night on Bed & Breakfast.",
  "Children above 12 years are charged as adults. Family arrangements on request.",
];

export function getRoom(slug: string) {
  return rooms.find((room) => room.slug === slug);
}
