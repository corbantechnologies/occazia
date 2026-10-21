import type { Metadata } from "next";
import type { Photo } from "@/data/photos";

type Options = {
  title: string;
  description: string;
  path: string;
  photo?: Photo;
};

// Per-page title, description, canonical URL and social preview image.
export function pageMetadata({ title, description, path, photo }: Options): Metadata {
  const images = photo ? [{ url: photo.src.src, width: photo.src.width, height: photo.src.height, alt: photo.alt }] : undefined;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, images },
  };
}
