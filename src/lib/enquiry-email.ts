import { hotel } from "@/data/hotel";
import { enquiryFields, enquiryTitles, type EnquiryType } from "@/lib/enquiry";

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

function rows(type: EnquiryType, values: Record<string, string>) {
  return enquiryFields[type].filter((f) => values[f.key]).map((f) => [f.label, values[f.key]] as const);
}

function layout(heading: string, body: string) {
  return `<!doctype html><html><body style="margin:0;background:#faf6f1;font-family:Arial,sans-serif;color:#231a19">
<div style="max-width:560px;margin:0 auto;padding:24px">
<p style="margin:0 0 16px;font-size:18px;font-weight:bold;color:#922c26">${escape(hotel.name)}</p>
<div style="background:#fff;border-radius:12px;padding:24px">
<h1 style="margin:0 0 16px;font-size:20px;color:#2a1715">${escape(heading)}</h1>${body}</div>
<p style="margin:16px 0 0;font-size:12px;color:#6b5f5d">${escape(hotel.address.street)}, ${escape(hotel.address.locality)} · ${escape(hotel.contact.phoneDisplay)} · WhatsApp ${escape(hotel.contact.whatsappDisplay)}</p>
</div></body></html>`;
}

function table(list: (readonly [string, string])[]) {
  return `<table style="width:100%;border-collapse:collapse;font-size:14px">${list
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px 6px 0;color:#6b5f5d;vertical-align:top;white-space:nowrap">${escape(k)}</td><td style="padding:6px 0;white-space:pre-wrap">${escape(v)}</td></tr>`,
    )
    .join("")}</table>`;
}

// Email to the hotel inbox. Reply-to is the guest, so staff can just hit reply.
export function hotelEmail(type: EnquiryType, values: Record<string, string>, reference: string) {
  const list = rows(type, values);
  const waNumber = values.phone.replace(/[^\d]/g, "").replace(/^0/, "254");
  return {
    subject: `${enquiryTitles[type]} ${reference} from ${values.name}`,
    html: layout(
      `${enquiryTitles[type]} · ${reference}`,
      `${table(list)}<p style="margin:20px 0 0;font-size:14px">Reply to this email, call ${escape(values.phone)}, or <a href="https://wa.me/${waNumber}" style="color:#922c26">message on WhatsApp</a>.</p>`,
    ),
    text: `${enquiryTitles[type]} ${reference}\n\n${list.map(([k, v]) => `${k}: ${v}`).join("\n")}`,
  };
}

// Confirmation to the guest, sent only once the hotel email has gone out.
export function guestEmail(type: EnquiryType, values: Record<string, string>, reference: string) {
  const list = rows(type, values).filter(([k]) => !["Name", "Email"].includes(k));
  const first = values.name.split(/\s+/)[0];
  return {
    subject: `We've received your enquiry (${reference}) · ${hotel.name}`,
    html: layout(
      `Thank you, ${first}`,
      `<p style="margin:0 0 16px;font-size:14px;line-height:1.5">We've received your ${escape(enquiryTitles[type].toLowerCase())} and our team will get back to you shortly. Your reference is <strong>${reference}</strong>.</p>${table(list)}<p style="margin:20px 0 0;font-size:14px;line-height:1.5">Need an answer sooner? Call ${escape(hotel.contact.phoneDisplay)} or <a href="https://wa.me/${hotel.contact.whatsapp}" style="color:#922c26">WhatsApp us</a> and quote your reference.</p>`,
    ),
    text: `Thank you, ${first}.\n\nWe've received your ${enquiryTitles[type].toLowerCase()} and will get back to you shortly. Your reference is ${reference}.\n\n${list.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\nNeed an answer sooner? Call ${hotel.contact.phoneDisplay} or WhatsApp ${hotel.contact.whatsappDisplay}.`,
  };
}
