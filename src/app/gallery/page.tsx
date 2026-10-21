import { Gallery } from "@/components/Gallery";
import { JsonLd } from "@/components/JsonLd";
import { VideoFacade } from "@/components/VideoFacade";
import { hotel } from "@/data/hotel";
import { gallery, photoCategories, photoSlots } from "@/data/photos";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Photo Gallery",
  description: `Photos of ${hotel.name}: rooms, conference halls, restaurant, bar and lounge, and the hotel in Homa Bay.`,
  path: "/gallery",
  photo: photoSlots.hero,
});

const videoId = new URL(hotel.social.youtube).pathname.slice(1);

export default function GalleryPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <JsonLd data={breadcrumbSchema([["Gallery", "/gallery"]])} />
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold-600">Gallery</p>
      <h1 className="mt-2 font-display text-4xl font-semibold text-wine-900 sm:text-5xl">Take a look around</h1>
      <p className="mt-3 max-w-2xl text-ink/80">Tap any photo to view it full screen, then swipe to see the next one.</p>

      <div className="mt-8">
        <Gallery photos={gallery} categories={photoCategories} />
      </div>

      <h2 className="mt-16 font-display text-3xl font-semibold text-wine-900">Watch the video</h2>
      <div className="mt-6 max-w-3xl">
        <VideoFacade videoId={videoId} title={`${hotel.name} video`} />
      </div>
    </section>
  );
}
