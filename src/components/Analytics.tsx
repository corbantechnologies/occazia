"use client";

import Script from "next/script";
import { useEffect } from "react";
import { track } from "@/lib/analytics";

// Links and buttons marked data-track="call" | "whatsapp" | "book" | "directions"
// are counted as GA4 events, e.g. click_whatsapp with the page they were on.
export function Analytics({ id }: { id: string }) {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const el = (e.target as Element).closest<HTMLElement>("a[data-track], button[data-track]");
      if (el) track(`click_${el.dataset.track}`, { page_path: location.pathname });
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" />
      <Script id="ga4" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${id}');`}
      </Script>
    </>
  );
}
