import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import SpaceGallery from "@/components/SpaceGallery";
import { facilities } from "@/data/space";

export const metadata: Metadata = {
  title: "SPACE",
  description:
    "춘천 THE CASTLE의 공용 라운지, 다이닝룸, 공용주방, 거실, 세탁실 등 여행객이 함께 머물고 소통하는 공간을 소개합니다.",
};

export default function SpacePage() {
  return (
    <>
      <section className="bg-navy py-20 md:py-28">
        <div className="container-castle text-center">
          <SectionHeading
            eyebrow="Space"
            title="공간 및 시설"
            subtitle="여행자들이 함께 머물고 소통할 수 있는 THE CASTLE의 공용 공간들"
            light
          />
        </div>
      </section>

      <section className="py-20 md:py-28 bg-warm-white">
        <div className="container-castle">
          <SpaceGallery />
        </div>
      </section>

      <section className="py-16 md:py-20 bg-ivory">
        <div className="container-castle">
          <div className="text-center mb-10">
            <p className="font-sans-kr text-xs tracking-widest text-gold uppercase">
              Facilities
            </p>
            <h2 className="font-brand text-2xl md:text-3xl text-navy mt-2">
              편의시설
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {facilities.map((f) => (
              <span
                key={f}
                className="font-sans-kr text-sm px-5 py-2.5 border border-navy/15 text-navy/75 bg-warm-white"
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
