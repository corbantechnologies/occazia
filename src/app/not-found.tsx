import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-gold-600">Page not found</p>
      <h1 className="mt-3 font-display text-4xl font-semibold text-wine-900">We couldn&apos;t find that page</h1>
      <p className="mt-4 text-ink/80">It may have moved. These are a good place to start:</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {[
          { href: "/rooms", label: "Rooms" },
          { href: "/events", label: "Conferences" },
          { href: "/location", label: "Location" },
          { href: "/", label: "Home" },
        ].map((link) => (
          <Link key={link.href} href={link.href} className="rounded-full border border-wine-700 px-5 py-2 font-semibold text-wine-700">
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
