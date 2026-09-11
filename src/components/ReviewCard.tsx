import type { Review } from "@/data/reviews";

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="relative bg-warm-white border border-navy/10 p-8 flex flex-col gap-4">
      <span className="font-brand text-4xl text-gold/40 leading-none">&ldquo;</span>
      <p className="font-sans-kr text-[15px] text-charcoal/80 leading-relaxed -mt-4">
        {review.content}
      </p>
      {review.isSample && (
        <span className="font-sans-kr text-[11px] text-charcoal/35 mt-auto pt-2">
          예시 콘텐츠 (샘플)
        </span>
      )}
    </div>
  );
}
