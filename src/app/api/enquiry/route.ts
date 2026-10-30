import { randomBytes } from "node:crypto";
import { Resend } from "resend";
import { hotel } from "@/data/hotel";
import { enquiryFields, honeypotField, minFillMs, validateEnquiry, type EnquiryResult, type EnquiryType } from "@/lib/enquiry";
import { guestEmail, hotelEmail } from "@/lib/enquiry-email";

// Best-effort limit per server instance: 5 enquiries per IP every 10 minutes.
const recent = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now();
  const hits = (recent.get(ip) ?? []).filter((t) => now - t < 10 * 60_000);
  hits.push(now);
  recent.set(ip, hits);
  return hits.length > 5;
}

function reference() {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  return "OCC-" + Array.from(randomBytes(5), (b) => alphabet[b % alphabet.length]).join("");
}

const reply = (body: EnquiryResult, status = 200) => Response.json(body, { status });

export async function POST(request: Request) {
  let input: Record<string, unknown>;
  try {
    input = await request.json();
  } catch {
    return reply({ ok: false, error: "Something went wrong. Please try again." }, 400);
  }

  const type = input.type as EnquiryType;
  if (!(type in enquiryFields)) return reply({ ok: false, error: "Unknown enquiry type." }, 400);

  // Bots fill the hidden field or submit instantly. Pretend it worked.
  const startedAt = Number(input.startedAt);
  if (input[honeypotField] || !startedAt || Date.now() - startedAt < minFillMs) {
    return reply({ ok: true, reference: reference() });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  if (limited(ip)) {
    return reply({ ok: false, error: "Too many enquiries from this connection. Please call or WhatsApp us instead." }, 429);
  }

  const { values, errors } = validateEnquiry(type, input);
  if (errors.length) return reply({ ok: false, error: errors.join(" ") }, 422);

  const ref = reference();
  const to = process.env.ENQUIRY_TO ?? hotel.contact.email;
  const from = process.env.ENQUIRY_FROM ?? `${hotel.name} <enquiries@occaziakenya.com>`;

  // Local testing without a Resend key: log the emails instead of sending.
  if (process.env.ENQUIRY_DRY_RUN === "1") {
    console.log("[enquiry dry run]", { to, from, hotel: hotelEmail(type, values, ref).text, guest: guestEmail(type, values, ref).subject });
    return reply({ ok: true, reference: ref });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[enquiry] RESEND_API_KEY is not set");
    return reply({ ok: false, error: "We couldn't send your enquiry right now. Please WhatsApp or call us instead." }, 503);
  }

  const resend = new Resend(apiKey);
  const toHotel = await resend.emails.send({ from, to, replyTo: values.email, ...hotelEmail(type, values, ref) });
  if (toHotel.error) {
    console.error("[enquiry] hotel email failed", toHotel.error);
    return reply({ ok: false, error: "We couldn't send your enquiry right now. Please WhatsApp or call us instead." }, 502);
  }

  // The guest copy is a courtesy: the hotel already has the enquiry, so a failure here isn't shown.
  const toGuest = await resend.emails.send({ from, to: values.email, replyTo: to, ...guestEmail(type, values, ref) });
  if (toGuest.error) console.error("[enquiry] guest email failed", toGuest.error);

  return reply({ ok: true, reference: ref });
}
