import type { Attraction } from "@/data/attractions";
import { categoryLabels } from "@/data/attractions";
import PlaceholderImage from "./PlaceholderImage";

export default function AttractionCard({ attraction }: { attraction: Attraction }) {
  return (
    <div className="flex flex-col bg-warm-white border border-navy/10">
      <PlaceholderImage label={`${attraction.name} 사진`} aspect="aspect-[4/3]" />
      <div className="p-5 flex flex-col gap-2 flex-1">
        <span className="font-sans-kr text-[11px] tracking-widest text-gold uppercase">
          {categoryLabels[attraction.category]}
        </span>
        <h3 className="font-brand text-lg text-navy">{attraction.name}</h3>
        <p className="font-sans-kr text-sm text-charcoal/65 leading-relaxed flex-1">
          {attraction.description}
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 pt-2 border-t border-navy/5 mt-2 font-sans-kr text-xs text-charcoal/45">
          <span>{attraction.travelTime ?? "이동시간 확인중"}</span>
          {attraction.mapUrl ? (
            <a href={attraction.mapUrl} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
              지도 보기
            </a>
          ) : (
            <span>지도 링크 준비중</span>
          )}
        </div>
      </div>
    </div>
  );
}
