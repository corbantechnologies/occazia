"use client";

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { hotel } from "@/data/hotel";
import { track } from "@/lib/analytics";
import { whatsappHref } from "@/lib/contact";
import { honeypotField, type EnquiryResult, type EnquiryType } from "@/lib/enquiry";

export const field = "mt-1 block min-h-11 w-full rounded-lg border border-wine-900/20 bg-white px-3 text-base text-ink";
export const label = "block text-sm font-semibold text-wine-900";

type Props = {
  type: EnquiryType;
  id?: string;
  submitLabel: string;
  // Turns the filled form into a WhatsApp message, the fallback channel.
  compose: (data: FormData) => string;
  // Extra checks beyond the browser's own, returning an error message.
  check?: (data: FormData) => string | undefined;
  children: ReactNode;
};

// Sends the enquiry to /api/enquiry (Resend emails the hotel and the guest).
// If sending fails, the guest is offered the same message on WhatsApp.
export function EnquiryForm({ type, id, submitLabel, compose, check, children }: Props) {
  const startedAt = useRef(0);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "failed">("idle");
  const [error, setError] = useState("");
  const [reference, setReference] = useState("");
  const [fallback, setFallback] = useState("");

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  function validate(form: HTMLFormElement) {
    if (!form.reportValidity()) return undefined;
    const data = new FormData(form);
    const problem = check?.(data);
    setError(problem ?? "");
    return problem ? undefined : data;
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = validate(e.currentTarget);
    if (!data) return;
    setStatus("sending");
    setFallback(compose(data));
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...Object.fromEntries(data), type, startedAt: startedAt.current }),
      });
      const result = (await res.json()) as EnquiryResult;
      if (!result.ok) throw new Error(result.error);
      setReference(result.reference);
      setStatus("sent");
      track("generate_lead", { enquiry_type: type });
    } catch (err) {
      setError(err instanceof Error && err.message !== "Failed to fetch" ? err.message : "We couldn't send your enquiry. Please try WhatsApp instead.");
      setStatus("failed");
    }
  }

  function sendOnWhatsApp(form: HTMLFormElement | null) {
    const data = form && validate(form);
    if (data) window.open(whatsappHref(compose(data)), "_blank", "noopener");
  }

  if (status === "sent") {
    return (
      <div id={id} role="status" className="scroll-mt-24 rounded-2xl bg-wine-50 p-6">
        <p className="font-display text-2xl font-semibold text-wine-900">Thank you, we&apos;ve received it</p>
        <p className="mt-2 text-ink/80">
          Your reference is <strong className="text-wine-800">{reference}</strong>. We&apos;ve emailed you a copy, and our team
          will get back to you shortly by email or phone.
        </p>
        <p className="mt-4 text-sm text-ink/80">Need an answer sooner?</p>
        <a
          href={whatsappHref(`${fallback}\nReference: ${reference}`)}
          target="_blank"
          rel="noopener"
          data-track="whatsapp"
          className="mt-2 inline-flex min-h-11 items-center rounded-full bg-whatsapp px-5 font-semibold text-white"
        >
          Continue on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form id={id} onSubmit={onSubmit} className="scroll-mt-24 grid gap-5 sm:grid-cols-2">
      {children}

      {/* Hidden from people; bots that fill it are ignored. */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Leave this empty
          <input name={honeypotField} tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {error && (
        <p role="alert" className="text-sm font-semibold text-red-700 sm:col-span-2">
          {error}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-3 sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="min-h-12 rounded-full bg-wine-700 px-6 font-semibold text-white hover:bg-wine-800 disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : submitLabel}
        </button>
        <button
          type="button"
          data-track="whatsapp"
          onClick={(e) => sendOnWhatsApp(e.currentTarget.form)}
          className={`min-h-12 rounded-full px-6 font-semibold ${status === "failed" ? "bg-whatsapp text-white" : "border border-whatsapp text-whatsapp hover:bg-whatsapp/5"}`}
        >
          Send on WhatsApp instead
        </button>
      </div>
      <p className="text-xs text-ink/70 sm:col-span-2">
        We use your details only to reply to this enquiry. Questions? Email{" "}
        <a href={`mailto:${hotel.contact.email}`} className="underline underline-offset-2">{hotel.contact.email}</a>.
      </p>
    </form>
  );
}
