import type { Room } from "@/data/rooms";
import PlaceholderImage from "./PlaceholderImage";

export default function RoomCard({ room }: { room: Room }) {
  return (
    <div className="flex flex-col gap-3">
      <PlaceholderImage
        label={`${room.name} 사진`}
        slug={`room-${room.id}`}
        aspect="aspect-[3/4]"
        fit="contain"
      />
      <p className="font-brand text-lg text-navy text-center">{room.name}</p>
    </div>
  );
}
