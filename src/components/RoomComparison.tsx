import Link from "next/link";
import { CheckIcon } from "@/components/icons";
import { formatKsh } from "@/data/hotel";
import { roomComparison, rooms } from "@/data/rooms";

// Standard vs Deluxe vs Executive, with the current room highlighted on room pages.
export function RoomComparison({ current }: { current?: string }) {
  const cell = (value: string | boolean) =>
    value === true ? (
      <>
        <CheckIcon className="mx-auto h-5 w-5 text-wine-700" />
        <span className="sr-only">Yes</span>
      </>
    ) : value === false ? (
      <>
        <span aria-hidden className="text-ink/50">–</span>
        <span className="sr-only">No</span>
      </>
    ) : (
      value
    );
  const highlight = (slug: string) => (slug === current ? "bg-wine-50" : "");

  return (
    <div className="relative -mx-4 overflow-x-auto px-4">
      <table className="w-full min-w-[36rem] border-collapse text-center text-sm">
        <thead>
          <tr>
            <td className="w-1/4" />
            {rooms.map((room) => (
              <th key={room.slug} scope="col" className={`rounded-t-xl px-3 py-3 align-bottom ${highlight(room.slug)}`}>
                {room.slug === current ? (
                  <span className="font-display text-lg font-semibold text-wine-900">
                    {room.name}
                    <span className="block font-sans text-xs font-semibold uppercase tracking-widest text-wine-700">This room</span>
                  </span>
                ) : (
                  <Link href={`/rooms/${room.slug}`} className="font-display text-lg font-semibold text-wine-900 underline-offset-4 hover:underline">
                    {room.name}
                  </Link>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {roomComparison.map((row) => (
            <tr key={row.label} className="border-t border-wine-900/10">
              <th scope="row" className="py-3 pr-3 text-left font-semibold text-ink/80">{row.label}</th>
              {rooms.map((room) => (
                <td key={room.slug} className={`px-3 py-3 ${highlight(room.slug)}`}>{cell(row.values[room.slug])}</td>
              ))}
            </tr>
          ))}
          <tr className="border-t border-wine-900/10">
            <th scope="row" className="py-3 pr-3 text-left font-semibold text-ink/80">From, per night</th>
            {rooms.map((room) => (
              <td key={room.slug} className={`rounded-b-xl px-3 py-3 font-display text-lg font-semibold text-wine-900 ${highlight(room.slug)}`}>
                {formatKsh(room.rates.BB)}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
