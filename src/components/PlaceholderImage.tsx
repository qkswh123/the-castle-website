type PlaceholderImageProps = {
  label: string;
  aspect?: string; // tailwind aspect-ratio class, e.g. "aspect-[4/3]"
  className?: string;
};

// 실제 사진이 준비되기 전까지 사용하는 자리표시 이미지.
// 나중에 assets/images 폴더의 실제 사진으로 교체하면 된다.
export default function PlaceholderImage({
  label,
  aspect = "aspect-[4/3]",
  className = "",
}: PlaceholderImageProps) {
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
