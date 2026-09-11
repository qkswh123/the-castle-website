import type { Metadata } from "next";
import About from "@/components/About";
import SectionHeading from "@/components/SectionHeading";
import PlaceholderImage from "@/components/PlaceholderImage";

export const metadata: Metadata = {
  title: "ABOUT",
  description:
    "춘천 THE CASTLE(더캐슬) 소개. 유럽풍 감성과 프라이빗 객실, 공용 라운지를 함께 갖춘 호스텔형 숙소입니다.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy py-20 md:py-28">
        <div className="container-castle text-center">
          <SectionHeading eyebrow="About" title="THE CASTLE 소개" light />
        </div>
      </section>

      <About />

      <section className="py-20 md:py-28 bg-warm-white">
        <div className="container-castle">
          <div className="grid md:grid-cols-3 gap-6">
            <PlaceholderImage label="공용 라운지" />
            <PlaceholderImage label="다이닝룸" />
            <PlaceholderImage label="객실 내부" />
          </div>
        </div>
      </section>
    </>
  );
}
