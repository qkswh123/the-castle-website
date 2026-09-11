import { bookingPlatforms } from "@/data/site";

export default function BookingPlatforms() {
  return (
    <div className="flex flex-col items-center gap-6">
      <p className="font-sans-kr text-sm text-charcoal/70">
        객실 예약은 아래 플랫폼에서 가능합니다.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        {bookingPlatforms.map((platform) =>
          platform.url ? (
            <a
              key={platform.id}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-navy text-navy font-sans-kr text-sm tracking-wide hover:bg-navy hover:text-ivory transition-colors"
            >
              {platform.name}
            </a>
          ) : (
            <span
              key={platform.id}
              title="예약 링크 연결 준비중입니다."
              className="px-6 py-3 border border-navy/20 text-navy/35 font-sans-kr text-sm tracking-wide cursor-not-allowed"
            >
              {platform.name}
            </span>
          )
        )}
      </div>
    </div>
  );
}
