// Things to do around Homa Bay, for the /explore page.
// Travel times are rough road estimates from the hotel; the front desk can
// arrange transport and guides. TODO: hotel to confirm times and add photos.

export type Attraction = {
  name: string;
  time: string;
  kind: "Nature" | "Culture" | "Lake";
  detail: string;
};

export const attractions: Attraction[] = [
  {
    name: "Lake Victoria shore",
    time: "A few minutes",
    kind: "Lake",
    detail: "Africa's largest lake is on Homa Bay's doorstep. Take a boat ride, watch the fishermen bring in the catch, and stay for the sunset over the water.",
  },
  {
    name: "Homa Hill",
    time: "About 20 minutes",
    kind: "Nature",
    detail: "The extinct volcano that gives the town its skyline. Hike for wide views over the bay, and visit the hot springs at its foot.",
  },
  {
    name: "Ruma National Park",
    time: "About 1 hour",
    kind: "Nature",
    detail: "Kenya's only home of the rare roan antelope, along with Rothschild's giraffe, zebra and over 400 bird species, in the quiet Lambwe Valley.",
  },
  {
    name: "Simbi Nyaima crater lake",
    time: "About 45 minutes",
    kind: "Culture",
    detail: "A small crater lake near Kendu Bay, known for its flamingos and the Luo legend of a village that sank beneath its waters.",
  },
  {
    name: "Rusinga Island and Tom Mboya Mausoleum",
    time: "About 1 hour 15 minutes",
    kind: "Culture",
    detail: "Reached by causeway from Mbita. Visit the mausoleum of independence leader Tom Mboya, and the island's famous fossil sites.",
  },
  {
    name: "Mfangano Island",
    time: "About 1 hour 15 minutes, then a boat",
    kind: "Lake",
    detail: "A short boat ride from Mbita, with ancient rock art, quiet fishing villages and some of the lake's best views.",
  },
];

export const itineraries = [
  {
    title: "A free afternoon",
    detail: "Walk or take a boat out on Lake Victoria, then come back for fresh tilapia in our restaurant.",
  },
  {
    title: "A day out",
    detail: "Leave early for a game drive at Ruma National Park, with a stop at Simbi Nyaima on the way back.",
  },
  {
    title: "A long weekend",
    detail: "Add Rusinga and Mfangano islands, the Tom Mboya Mausoleum and a sunrise hike up Homa Hill.",
  },
];

export const businessInfo = [
  "Homa Bay is the county headquarters, so county offices, banks and NGOs are a short drive away.",
  "Kabunde Airstrip is about 10 minutes from the hotel, and Kisumu International Airport about 2 hours by road.",
  "Secure parking, fast Wi-Fi, 24-hour room service and conference halls on site make longer work trips easier.",
];
