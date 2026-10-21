import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileActionBar } from "@/components/MobileActionBar";
import { JsonLd } from "@/components/JsonLd";
import { hotel } from "@/data/hotel";
import { photoSlots } from "@/data/photos";
import { hotelSchema } from "@/lib/schema";
import "./globals.css";

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const heading = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(hotel.url),
  title: {
    default: `${hotel.name} | Hotel near Lake Victoria, Kenya`,
    template: `%s | ${hotel.name}`,
  },
  description: hotel.description,
  applicationName: hotel.name,
  openGraph: {
    type: "website",
    siteName: hotel.name,
    locale: hotel.locale,
    images: photoSlots.hero && [{ url: photoSlots.hero.src.src, alt: photoSlots.hero.alt }],
  },
  twitter: { card: "summary_large_image" },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#2a1715",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-KE" className={`${body.variable} ${heading.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col font-sans">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:p-3">
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileActionBar />
        <JsonLd data={hotelSchema()} />
      </body>
    </html>
  );
}
