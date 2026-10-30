// Shared by the enquiry forms (client) and /api/enquiry (server), so both
// agree on which fields each kind of enquiry sends.

export type EnquiryType = "room" | "conference" | "dining";

type Field = {
  key: string;
  label: string;
  required?: boolean;
  kind?: "text" | "email" | "phone" | "date" | "number";
  max?: number;
};

const contactFields: Field[] = [
  { key: "name", label: "Name", required: true, max: 100 },
  { key: "email", label: "Email", required: true, kind: "email", max: 200 },
  { key: "phone", label: "Phone", required: true, kind: "phone", max: 30 },
];

export const enquiryFields: Record<EnquiryType, Field[]> = {
  room: [
    ...contactFields,
    { key: "checkIn", label: "Check-in", required: true, kind: "date" },
    { key: "checkOut", label: "Check-out", required: true, kind: "date" },
    { key: "room", label: "Room", required: true, max: 60 },
    { key: "plan", label: "Meal plan", max: 60 },
    { key: "guests", label: "Guests", required: true, kind: "number", max: 60 },
    { key: "message", label: "Notes", max: 2000 },
  ],
  conference: [
    ...contactFields,
    { key: "organisation", label: "Organisation", max: 150 },
    { key: "date", label: "Event date", required: true, kind: "date" },
    { key: "days", label: "Number of days", kind: "number", max: 30 },
    { key: "delegates", label: "Delegates", required: true, kind: "number", max: 500 },
    { key: "package", label: "Package", max: 80 },
    { key: "rooms", label: "Delegate rooms needed", max: 20 },
    { key: "message", label: "Details", max: 2000 },
  ],
  dining: [
    ...contactFields,
    { key: "date", label: "Date", required: true, kind: "date" },
    { key: "time", label: "Time", required: true, max: 10 },
    { key: "people", label: "People", required: true, kind: "number", max: 200 },
    { key: "occasion", label: "Occasion", max: 80 },
    { key: "message", label: "Notes", max: 2000 },
  ],
};

export const enquiryTitles: Record<EnquiryType, string> = {
  room: "Room booking enquiry",
  conference: "Conference quote request",
  dining: "Table and group dining enquiry",
};

// Honeypot field name and the minimum time a person takes to fill a form.
export const honeypotField = "website";
export const minFillMs = 3000;

export type EnquiryResult = { ok: true; reference: string } | { ok: false; error: string };

export function validateEnquiry(type: EnquiryType, input: Record<string, unknown>) {
  const values: Record<string, string> = {};
  const errors: string[] = [];

  for (const field of enquiryFields[type]) {
    const value = String(input[field.key] ?? "").trim();
    if (!value) {
      if (field.required) errors.push(`${field.label} is required.`);
      continue;
    }
    const ok =
      field.kind === "email" ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= (field.max ?? 200)
      : field.kind === "phone" ? /^\+?[\d\s()-]{7,20}$/.test(value)
      : field.kind === "date" ? /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(value))
      : field.kind === "number" ? /^\d+$/.test(value) && Number(value) >= 1 && Number(value) <= (field.max ?? 1000)
      : value.length <= (field.max ?? 200);
    if (!ok) errors.push(`Please check ${field.label.toLowerCase()}.`);
    else values[field.key] = value;
  }

  if (type === "room" && values.checkIn && values.checkOut && values.checkOut <= values.checkIn) {
    errors.push("Check-out must be after check-in.");
  }
  return { values, errors };
}
