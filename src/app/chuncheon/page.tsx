import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import AttractionCard from "@/components/AttractionCard";
import { attractions } from "@/data/attractions";

export const metadata: Metadata = {
  title: "CHUNCHEON",
  description:
    "THE CASTLE에 머무는 동안 즐길 수 있는 춘천 여행 정보. 주요 관광지, 자연 산책 코스, 가족 여행, 데이트 코스, 닭갈비 맛집과 카페를 소개합니다.",
};

const tourCategories = ["tour", "nature", "family", "date"] as const;
const foodCategories = ["food", "cafe"] as const;

export default function ChuncheonPage() {
  const tourItems = attractions.filter((a) => tourCategories.includes(a.category as (typeof tourCategories)[number]));
  const foodItems = attractions.filter((a) => foodCategories.includes(a.category as (typeof foodCategories)[number]));

  return (
    <>
      <section className="bg-navy py-20 md:py-28">
        <div className="container-castle text-center">
          <SectionHeading
            eyebrow="Chuncheon"
            title="춘천 여행"
            subtitle="THE CASTLE에 머무는 동안, 춘천의 자연과 이야기를 만나보세요."
            light
          />
        </div>
      </section>

      <section className="py-20 md:py-24 bg-warm-white">
        <div className="container-castle">
          <SectionHeading eyebrow="Tour" title="관광 · 자연 · 가족 · 데이트" align="left" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {tourItems.map((a) => (
              <AttractionCard key={a.id} attraction={a} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-ivory">
        <div className="container-castle">
          <SectionHeading eyebrow="Food" title="춘천 맛집 · 카페" align="left" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {foodItems.map((a) => (
              <AttractionCard key={a.id} attraction={a} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
