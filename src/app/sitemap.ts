import type { MetadataRoute } from "next";
import { hotel } from "@/data/hotel";
import { rooms } from "@/data/rooms";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/rooms", ...rooms.map((r) => `/rooms/${r.slug}`), "/events", "/dining", "/gallery", "/location", "/explore", "/faq", "/booking"];
  return paths.map((path) => ({
    url: new URL(path, hotel.url).toString(),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
