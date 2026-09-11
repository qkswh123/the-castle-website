import type { Room } from "@/data/rooms";
import PlaceholderImage from "./PlaceholderImage";

export default function RoomCard({ room }: { room: Room }) {
  return (
    <div className="flex flex-col bg-ivory border border-navy/10">
      <PlaceholderImage label={`${room.name} 사진`} aspect="aspect-[4/3]" />
      <div className="p-6 flex flex-col gap-4 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-brand text-2xl text-navy">{room.name}</h3>
            <p className="font-sans-kr text-xs text-charcoal/55 mt-1">
              기준 {room.capacity}
            </p>
          </div>
          <p className="font-brand text-xl text-gold shrink-0">{room.price}</p>
        </div>

        <p className="font-sans-kr text-sm text-charcoal/70 leading-relaxed">
          {room.description}
        </p>

        <ul className="flex flex-wrap gap-2 mt-auto pt-2">
          {room.amenities.map((a) => (
            <li
              key={a}
              className="font-sans-kr text-xs px-3 py-1.5 border border-navy/15 text-navy/70"
            >
              {a}
            </li>
          ))}
        </ul>

        <p className="font-sans-kr text-xs text-green mt-1">
          {room.breakfastIncluded ? "조식 포함" : "조식 미포함"}
        </p>
      </div>
    </div>
  );
}
