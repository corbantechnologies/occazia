"use client";

import { useSearchParams } from "next/navigation";
import { EnquiryForm, field, label } from "@/components/EnquiryForm";
import { hotel } from "@/data/hotel";
import { mealPlans, rooms, type MealPlan } from "@/data/rooms";

const isDate = (v: string | null) => (v && /^\d{4}-\d{2}-\d{2}$/.test(v) ? v : undefined);

function compose(data: FormData) {
  const get = (key: string) => String(data.get(key) ?? "").trim();
  const room = rooms.find((r) => r.slug === get("room"));
  const lines = [
    `Hi ${hotel.shortName}, I'd like to book a room.`,
    `Name: ${get("name")}`,
    `Room: ${room?.name ?? get("room")}`,
    `Meal plan: ${mealPlans[get("plan") as MealPlan] ?? get("plan")}`,
    `Check-in: ${get("checkIn")}`,
    `Check-out: ${get("checkOut")}`,
    `Guests: ${get("guests")}`,
  ];
  if (get("message")) lines.push(`Notes: ${get("message")}`);
  return lines.join("\n");
}

function check(data: FormData) {
  if (String(data.get("checkOut")) <= String(data.get("checkIn"))) return "Check-out must be after check-in.";
}

export function BookingForm() {
  const params = useSearchParams();
  const requested = params.get("room");
  const initialRoom = rooms.some((r) => r.slug === requested) ? requested! : rooms[0].slug;
  // Dates and guests arrive from the home page availability bar.
  const checkIn = isDate(params.get("checkIn"));
  const checkOut = isDate(params.get("checkOut"));
  const guests = Math.min(Math.max(Number(params.get("guests")) || 1, 1), 60);
  const today = new Date().toISOString().slice(0, 10);

  return (
    <EnquiryForm type="room" id="booking-form" submitLabel="Send booking request" compose={compose} check={check}>
      <label className={label}>
        Full name
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <label className={label}>
        Phone number
        <input name="phone" type="tel" required autoComplete="tel" inputMode="tel" placeholder="07XX XXX XXX" className={field} />
      </label>
      <label className={`${label} sm:col-span-2`}>
        Email
        <input name="email" type="email" required autoComplete="email" className={field} />
      </label>
      <label className={label}>
        Check-in
        <input name="checkIn" type="date" required min={today} defaultValue={checkIn} className={field} />
      </label>
      <label className={label}>
        Check-out
        <input name="checkOut" type="date" required min={today} defaultValue={checkOut} className={field} />
      </label>
      <label className={label}>
        Room
        <select name="room" defaultValue={initialRoom} className={field}>
          {rooms.map((r) => (
            <option key={r.slug} value={r.slug}>{r.name}</option>
          ))}
        </select>
      </label>
      <label className={label}>
        Meal plan
        <select name="plan" defaultValue="BB" className={field}>
          {(Object.keys(mealPlans) as MealPlan[]).map((plan) => (
            <option key={plan} value={plan}>{mealPlans[plan]}</option>
          ))}
        </select>
      </label>
      <label className={label}>
        Guests
        <input name="guests" type="number" min={1} max={60} defaultValue={guests} required className={field} />
      </label>
      <label className={`${label} sm:col-span-2`}>
        Anything else? <span className="font-normal text-ink/70">(optional)</span>
        <textarea name="message" rows={3} className={`${field} py-2`} placeholder="Arrival time, number of rooms, special requests" />
      </label>
    </EnquiryForm>
  );
}
