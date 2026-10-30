"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { track } from "@/lib/analytics";

const field =
  "mt-1 block min-h-11 w-full min-w-0 rounded-lg border border-wine-900/20 bg-white px-2.5 text-base text-ink focus:border-wine-700 focus:outline-none";
const label = "block text-xs font-semibold uppercase tracking-wider text-wine-900";

// Dates and guests carry over to the booking form, which sends the request.
// There is no live availability yet: the hotel confirms each request.
export function AvailabilityBar() {
  const router = useRouter();
  const [error, setError] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const checkIn = String(data.get("checkIn"));
    const checkOut = String(data.get("checkOut"));
    if (checkIn < new Date().toISOString().slice(0, 10)) {
      setError("Check-in can't be in the past.");
      return;
    }
    if (checkOut <= checkIn) {
      setError("Check-out must be after check-in.");
      return;
    }
    setError("");
    track("check_availability", { guests: Number(data.get("guests")) });
    const query = new URLSearchParams({ checkIn, checkOut, guests: String(data.get("guests")) });
    router.push(`/booking?${query}#booking-form`);
  }

  return (
    <form
      onSubmit={onSubmit}
      aria-label="Check availability"
      data-track="availability"
      className="grid grid-cols-2 gap-3 rounded-2xl bg-sand-50 p-4 text-ink shadow-xl sm:grid-cols-[1fr_1fr_7rem_auto] sm:items-end"
    >
      <label className={label}>
        Check-in
        <input name="checkIn" type="date" required className={field} />
      </label>
      <label className={label}>
        Check-out
        <input name="checkOut" type="date" required className={field} />
      </label>
      <label className={label}>
        Guests
        <input name="guests" type="number" min={1} max={60} defaultValue={2} required className={field} />
      </label>
      <button
        type="submit"
        className="min-h-11 self-end rounded-full bg-gold-500 px-4 font-semibold text-wine-900 hover:bg-wine-700 hover:text-white"
      >
        Check availability
      </button>
      {error && (
        <p role="alert" className="col-span-2 text-sm font-semibold text-red-700 sm:col-span-4">
          {error}
        </p>
      )}
    </form>
  );
}
