import type { MetadataRoute } from "next";
import { hotel } from "@/data/hotel";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${hotel.url}/sitemap.xml`,
  };
}
