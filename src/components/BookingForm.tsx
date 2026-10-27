"use client";

import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { hotel } from "@/data/hotel";
import { mealPlans, rooms, type MealPlan } from "@/data/rooms";
import { whatsappHref } from "@/lib/contact";

const field = "mt-1 block min-h-11 w-full rounded-lg border border-wine-900/20 bg-white px-3 text-base text-ink";
const label = "block text-sm font-semibold text-wine-900";

// The enquiry goes out as a prefilled WhatsApp message (or email), so no
// server or API key is needed. A server-side email handler can replace this later.
export function BookingForm() {
  const params = useSearchParams();
  const requested = params.get("room");
  const initialRoom = rooms.some((r) => r.slug === requested) ? requested! : rooms[0].slug;
  const [error, setError] = useState("");
  // Dates and guests arrive from the home page availability bar.
  const isDate = (v: string | null) => (v && /^\d{4}-\d{2}-\d{2}$/.test(v) ? v : undefined);
  const checkIn = isDate(params.get("checkIn"));
  const checkOut = isDate(params.get("checkOut"));
  const guests = Number(params.get("guests")) || 1;

  function compose(form: HTMLFormElement) {
    const data = new FormData(form);
    const get = (key: string) => String(data.get(key) ?? "").trim();
    const room = rooms.find((r) => r.slug === get("room"));
    const lines = [
      `Hi ${hotel.shortName}, I'd like to book a room.`,
      `Name: ${get("name")}`,
      `Phone: ${get("phone")}`,
      `Room: ${room?.name ?? get("room")}`,
      `Meal plan: ${mealPlans[get("plan") as MealPlan] ?? get("plan")}`,
      `Check-in: ${get("checkIn")}`,
      `Check-out: ${get("checkOut")}`,
      `Guests: ${get("guests")}`,
    ];
    if (get("message")) lines.push(`Notes: ${get("message")}`);
    return lines.join("\n");
  }

  function validate(form: HTMLFormElement) {
    if (!form.reportValidity()) return false;
    const data = new FormData(form);
    if (String(data.get("checkOut")) <= String(data.get("checkIn"))) {
      setError("Check-out must be after check-in.");
      return false;
    }
    setError("");
    return true;
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate(e.currentTarget)) return;
    window.open(whatsappHref(compose(e.currentTarget)), "_blank", "noopener");
  }

  function sendEmail(form: HTMLFormElement | null) {
    if (!form || !validate(form)) return;
    const subject = encodeURIComponent("Room booking enquiry");
    window.location.href = `mailto:${hotel.contact.reservationsEmail}?subject=${subject}&body=${encodeURIComponent(compose(form))}`;
  }

  const today = new Date().toISOString().slice(0, 10);

  return (
    <form id="booking-form" onSubmit={onSubmit} className="scroll-mt-24 grid gap-5 sm:grid-cols-2" data-track="booking-form">
      <label className={label}>
        Full name
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <label className={label}>
        Phone number
        <input name="phone" type="tel" required autoComplete="tel" inputMode="tel" placeholder="07XX XXX XXX" className={field} />
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
        <input name="guests" type="number" min={1} max={60} defaultValue={Math.min(Math.max(guests, 1), 60)} required className={field} />
      </label>
      <label className={`${label} sm:col-span-2`}>
        Anything else? <span className="font-normal text-ink/70">(optional)</span>
        <textarea name="message" rows={3} className={`${field} py-2`} placeholder="Arrival time, number of rooms, special requests" />
      </label>

      {error && (
        <p role="alert" className="text-sm font-semibold text-red-700 sm:col-span-2">{error}</p>
      )}

      <div className="flex flex-wrap gap-3 sm:col-span-2">
        <button type="submit" data-track="whatsapp" className="min-h-12 rounded-full bg-whatsapp px-6 font-semibold text-white hover:brightness-110">
          Send on WhatsApp
        </button>
        <button
          type="button"
          onClick={(e) => sendEmail(e.currentTarget.form)}
          className="min-h-12 rounded-full border border-wine-700 px-6 font-semibold text-wine-700 hover:bg-wine-50"
        >
          Send by email instead
        </button>
      </div>
    </form>
  );
}
