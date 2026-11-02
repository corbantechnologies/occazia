export type Hall = {
  id: string;
  name: string;
  capacity: number;
  // Layouts seen in the hotel's own photos of each hall.
  layouts: string[];
  bestFor: string;
};

// The hotel's halls have no names; capacities confirmed by the hotel (27 Oct 2026: 120, 80, 30).
// TODO: confirm whether these are theatre-style maximums, and per-hall equipment.
export const halls: Hall[] = [
  { id: "hall-1", name: "Hall 1", capacity: 120, layouts: ["Classroom"], bestFor: "Conferences, trainings and large workshops" },
  { id: "hall-2", name: "Hall 2", capacity: 80, layouts: ["Classroom", "Banquet"], bestFor: "Workshops by day, lunches and dinners by night" },
  { id: "hall-3", name: "Hall 3", capacity: 30, layouts: ["Boardroom", "U-shape", "Banquet"], bestFor: "Board meetings, small groups and private dinners" },
];

export const eventPackages = [
  { name: "Full-day conference package", price: 2500, unit: "per person" },
  { name: "Half-day conference package", price: 2000, unit: "per person" },
  { name: "Luncheon package", price: 1500, unit: "per person" },
  { name: "Dinner meeting package", price: 1500, unit: "per person" },
  { name: "Breakfast meeting package", price: 1250, unit: "per person" },
  { name: "Hall hire", price: 5000, unit: "per day" },
];

export const eventFacilities = [
  "Audio-visual equipment",
  "High-speed Wi-Fi",
  "Tables and chairs",
  "Registration desk",
  "Catering",
  "Event planning support",
  "Free secure parking",
];
