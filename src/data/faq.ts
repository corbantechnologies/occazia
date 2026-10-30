import { halls } from "@/data/events";
import { formatKsh, hotel } from "@/data/hotel";

// Questions for /faq (also published as FAQPage structured data).
// Answers must stay in line with the hotel's confirmed facts.
const largest = Math.max(...halls.map((h) => h.capacity));

export const faqs: { group: string; items: { q: string; a: string }[] }[] = [
  {
    group: "Staying with us",
    items: [
      { q: "What time is check-in and check-out?", a: `Check-in is from ${hotel.checkIn} and check-out is by ${hotel.checkOut}. Ask us about early check-in or late check-out.` },
      { q: "Is breakfast included?", a: "Yes. Every Bed & Breakfast rate includes our daily buffet breakfast. Half Board and Full Board rates add more meals." },
      { q: "How much does a room cost?", a: `Rooms start from ${formatKsh(hotel.priceFrom)} per night with breakfast for a Standard Room. Deluxe and Executive rooms cost a little more. See the rates on our rooms page.` },
      { q: "Is there Wi-Fi and parking?", a: "Yes. Free high-speed Wi-Fi is available throughout the hotel, and there is secure parking on site." },
      { q: "Do all rooms have a balcony?", a: "Yes. Every room has a private balcony, and Deluxe and Executive rooms look out towards the lake." },
      { q: "Is the hotel smoke-free?", a: "All our rooms are smoke-free." },
      { q: "Can I bring children or an extra adult?", a: "Children above 12 years are charged as adults. An extra adult sharing a room is KSh 1,000 per night on Bed & Breakfast. Tell us when you book and we'll arrange it." },
    ],
  },
  {
    group: "Booking and payment",
    items: [
      { q: "How do I book a room?", a: "Send a booking request on our website, message us on WhatsApp, or call the front desk. We'll confirm availability and your rate by email or phone." },
      { q: "When is my booking confirmed?", a: "Your room is reserved once you have our confirmation. Online requests get a reference number straight away, and our team replies to confirm." },
      { q: "How can I pay?", a: "Accepted payment methods and any deposit are confirmed with your booking. Payment is made directly to the hotel." },
      { q: "Can I cancel or change my booking?", a: "Cancellation terms are confirmed with your booking. If your plans change, let us know as early as possible and we'll help." },
      { q: "Why book directly with the hotel?", a: "You deal with our team directly, get the hotel's own rate, and can tell us about special requests before you arrive." },
    ],
  },
  {
    group: "Conferences and dining",
    items: [
      { q: "How many people can your conference halls hold?", a: `We have three halls for ${halls.map((h) => h.capacity).join(", ")} guests, so we can host anything from a small board meeting to an event for up to ${largest}.` },
      { q: "How do I get a conference quote?", a: "Use the quote form on our conferences page, or WhatsApp us the date, number of delegates and what you need. We'll reply with a quotation for the hall, meals and delegate rooms." },
      { q: "Can I eat at the restaurant without staying at the hotel?", a: `Yes, everyone is welcome. The restaurant is ${hotel.hours.restaurant.label.charAt(0).toLowerCase() + hotel.hours.restaurant.label.slice(1)}. For groups and celebrations, reserve a table on our dining page.` },
      { q: "Is there room service?", a: `Yes, room service is available ${hotel.hours.roomService}.` },
    ],
  },
  {
    group: "Getting here",
    items: [
      { q: "Where is the hotel?", a: `At ${hotel.address.street}, a few minutes from Homa Bay town and near the shores of Lake Victoria.` },
      { q: "How far is it from the airport?", a: "Kabunde Airstrip is about 10 minutes away. Kisumu International Airport is about 2 hours by road. Ask us about airport transfers when you book." },
    ],
  },
];
