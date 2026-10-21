import type { ReactNode } from "react";
import { Photo } from "@/components/Photo";
import type { Photo as PhotoData } from "@/data/photos";

type Props = {
  eyebrow: string;
  title: string;
  photo?: PhotoData;
  children?: ReactNode;
};

// Photo banner with the page's h1, used at the top of inner pages.
export function PageHero({ eyebrow, title, photo, children }: Props) {
  return (
    <section className="relative isolate flex min-h-[44svh] items-end overflow-hidden">
      <Photo photo={photo} label={title} sizes="100vw" preload className="-z-10" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-wine-900/90 via-wine-900/45 to-wine-900/10" />
      <div className="mx-auto w-full max-w-6xl px-4 pb-10 pt-24 text-white">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold-500">{eyebrow}</p>
        <h1 className="mt-2 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">{title}</h1>
        {children && <div className="mt-4 max-w-2xl text-lg text-sand-100">{children}</div>}
      </div>
    </section>
  );
}
