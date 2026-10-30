"use client";

import { EnquiryForm, field, label } from "@/components/EnquiryForm";
import { hotel } from "@/data/hotel";

const occasions = ["Just dinner", "Birthday", "Anniversary", "Group meal", "Private function", "Other"];

function compose(data: FormData) {
  const get = (key: string) => String(data.get(key) ?? "").trim();
  const lines = [
    `Hi ${hotel.shortName}, I'd like to reserve a table for ${get("people")} on ${get("date")} at ${get("time")}.`,
    `Name: ${get("name")}`,
  ];
  if (get("occasion")) lines.push(`Occasion: ${get("occasion")}`);
  if (get("message")) lines.push(`Notes: ${get("message")}`);
  return lines.join("\n");
}

export function DiningForm() {
  return (
    <EnquiryForm type="dining" id="table-form" submitLabel="Send reservation request" compose={compose}>
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
        Date
        <input name="date" type="date" required className={field} />
      </label>
      <label className={label}>
        Time
        <input name="time" type="time" required min="06:00" max="22:30" className={field} />
      </label>
      <label className={label}>
        Number of people
        <input name="people" type="number" min={1} max={200} defaultValue={2} required className={field} />
      </label>
      <label className={label}>
        Occasion
        <select name="occasion" defaultValue="" className={field}>
          <option value="">Choose one (optional)</option>
          {occasions.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </label>
      <label className={`${label} sm:col-span-2`}>
        Anything else? <span className="font-normal text-ink/70">(optional)</span>
        <textarea name="message" rows={3} className={`${field} py-2`} placeholder="Dietary needs, set menu, cake, decorations" />
      </label>
    </EnquiryForm>
  );
}
