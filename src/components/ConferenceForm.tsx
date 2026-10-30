"use client";

import { EnquiryForm, field, label } from "@/components/EnquiryForm";
import { eventPackages } from "@/data/events";
import { hotel } from "@/data/hotel";

function compose(data: FormData) {
  const get = (key: string) => String(data.get(key) ?? "").trim();
  const lines = [
    `Hello ${hotel.shortName}, I would like a quotation for a conference for ${get("delegates")} delegates on ${get("date")}.`,
    `Name: ${get("name")}`,
  ];
  if (get("organisation")) lines.push(`Organisation: ${get("organisation")}`);
  if (get("days")) lines.push(`Days: ${get("days")}`);
  if (get("package")) lines.push(`Package: ${get("package")}`);
  lines.push(`Delegate rooms: ${get("rooms") || "Not sure"}`);
  if (get("message")) lines.push(`Details: ${get("message")}`);
  lines.push("Please share your available packages, catering options and accommodation rates.");
  return lines.join("\n");
}

export function ConferenceForm() {
  return (
    <EnquiryForm type="conference" id="quote-form" submitLabel="Request a quote" compose={compose}>
      <label className={label}>
        Full name
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <label className={label}>
        Organisation <span className="font-normal text-ink/70">(optional)</span>
        <input name="organisation" autoComplete="organization" className={field} />
      </label>
      <label className={label}>
        Email
        <input name="email" type="email" required autoComplete="email" className={field} />
      </label>
      <label className={label}>
        Phone number
        <input name="phone" type="tel" required autoComplete="tel" inputMode="tel" placeholder="07XX XXX XXX" className={field} />
      </label>
      <label className={label}>
        Event date
        <input name="date" type="date" required className={field} />
      </label>
      <label className={label}>
        Number of days
        <input name="days" type="number" min={1} max={30} defaultValue={1} className={field} />
      </label>
      <label className={label}>
        Number of delegates
        <input name="delegates" type="number" min={1} max={500} required className={field} />
      </label>
      <label className={label}>
        Package
        <select name="package" defaultValue="" className={field}>
          <option value="">Not sure yet</option>
          {eventPackages.map((pkg) => (
            <option key={pkg.name}>{pkg.name}</option>
          ))}
        </select>
      </label>
      <fieldset className="sm:col-span-2">
        <legend className={label}>Delegate rooms needed?</legend>
        <div className="mt-2 flex flex-wrap gap-5 text-base">
          {["Yes", "No", "Not sure"].map((v) => (
            <label key={v} className="flex min-h-11 items-center gap-2">
              <input type="radio" name="rooms" value={v} defaultChecked={v === "Not sure"} className="h-5 w-5 accent-wine-700" />
              {v}
            </label>
          ))}
        </div>
      </fieldset>
      <label className={`${label} sm:col-span-2`}>
        Anything else? <span className="font-normal text-ink/70">(optional)</span>
        <textarea name="message" rows={3} className={`${field} py-2`} placeholder="Seating layout, A/V needs, meals, special requirements" />
      </label>
    </EnquiryForm>
  );
}
