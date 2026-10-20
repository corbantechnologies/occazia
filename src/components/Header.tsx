"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { hotel, nav } from "@/data/hotel";
import { telHref } from "@/lib/contact";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-lake-900/10 bg-sand-50/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex flex-col leading-none" aria-label={`${hotel.name}, home`}>
          <span className="font-display text-xl font-semibold text-lake-900">Hotel Occazia</span>
          <span className="text-[11px] uppercase tracking-[0.2em] text-gold-600">Homa Bay</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname.startsWith(item.href) ? "page" : undefined}
              className="text-sm font-medium text-ink/80 hover:text-lake-700 aria-[current=page]:text-lake-700"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/booking"
            className="rounded-full bg-gold-500 px-5 py-2 text-sm font-semibold text-lake-900 hover:bg-gold-600 hover:text-white"
          >
            Book now
          </Link>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <a href={telHref} className="rounded-full px-3 py-2 text-sm font-medium text-lake-700" data-track="call">
            Call
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="flex h-11 w-11 items-center justify-center rounded-full text-lake-900"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Main" className="border-t border-lake-900/10 bg-sand-50 lg:hidden">
          <ul className="mx-auto max-w-6xl px-4 py-2">
            {[...nav, { href: "/booking", label: "Book now" }].map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setOpen(false)} className="block py-3 text-base font-medium text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
