import { hotel } from "@/data/hotel";
import { roomPolicies } from "@/data/rooms";

// Booking policies shown on room pages and /faq#policies.
// TODO: hotel to confirm payment methods, deposit and cancellation terms;
// until then these say the terms are confirmed with each booking.
export const policies = [
  {
    title: "Check-in and check-out",
    detail: `Check-in is from ${hotel.checkIn} and check-out is by ${hotel.checkOut}. Early check-in and late check-out are available on request, subject to availability.`,
  },
  {
    title: "What the rate includes",
    detail: "Rates are per room per night in Kenya shillings and include buffet breakfast on Bed & Breakfast, free Wi-Fi and secure parking. Half Board adds one main meal and Full Board adds lunch and dinner.",
  },
  {
    title: "Extra guests and children",
    detail: roomPolicies.slice(1).join(" "),
  },
  {
    title: "Confirming your booking",
    detail: "Send a booking request online, on WhatsApp or by phone. We confirm availability and your rate by email or phone, and your room is reserved once you have our confirmation.",
  },
  {
    title: "Payment",
    detail: "Accepted payment methods and any deposit are confirmed with your booking. Payment is made directly to the hotel.",
  },
  {
    title: "Cancellation and changes",
    detail: "Cancellation terms are confirmed with your booking. If your plans change, let us know as early as possible and we'll help you rebook.",
  },
  {
    title: "Smoking",
    detail: "All rooms are smoke-free.",
  },
];
