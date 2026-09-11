import Image from "next/image";
import { resolveImage } from "@/lib/images";

type PlaceholderImageProps = {
  label: string;
  slug?: string; // public/images/{slug}.jpg 가 있으면 실제 사진으로 자동 교체됨
  aspect?: string; // tailwind aspect-ratio class, e.g. "aspect-[4/3]"
  className?: string;
  priority?: boolean;
  fit?: "cover" | "contain"; // 세로로 아주 긴 휴대폰 사진은 "contain"으로 잘림 없이 표시
};

export default function PlaceholderImage({
  label,
  slug,
  aspect = "aspect-[4/3]",
  className = "",
  priority = false,
  fit = "cover",
}: PlaceholderImageProps) {
  const src = slug ? resolveImage(slug) : null;

  if (src) {
    return (
      <div
        className={`relative w-full ${aspect} ${className} overflow-hidden rounded-sm ${
          fit === "contain" ? "bg-ivory-dark" : ""
        }`}
      >
        <Image
          src={src}
          alt={label}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className={fit === "contain" ? "object-contain" : "object-cover"}
        />
      </div>
    );
  }

  // 실제 사진이 준비되기 전까지 사용하는 자리표시 이미지.
  // public/images/{slug}.jpg 로 사진을 추가하면 자동으로 교체된다.
  return (
    <div
      className={`relative w-full ${aspect} ${className} overflow-hidden rounded-sm bg-gradient-to-br from-navy-light via-navy to-charcoal`}
      role="img"
      aria-label={`${label} 사진 준비중`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 border border-gold/25 m-2">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          className="text-gold-light/70"
        >
          <path
            d="M4 16.5V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v10.5"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <path
            d="M4 16.5 9 11l3.5 3.5L15 12l5 4.5"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <circle cx="9" cy="8.5" r="1.3" stroke="currentColor" strokeWidth="1.2" />
          <path
            d="M4 16.5v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2"
            stroke="currentColor"
            strokeWidth="1.2"
          />
        </svg>
        <span className="font-sans-kr text-xs tracking-wide text-ivory/70 text-center px-3">
          {label}
        </span>
      </div>
    </div>
  );
}
