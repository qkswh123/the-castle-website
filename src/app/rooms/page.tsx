import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import PlaceholderImage from "@/components/PlaceholderImage";
import BookingPlatforms from "@/components/BookingPlatforms";
import Breakfast from "@/components/Breakfast";
import { roomPhotoIds, roomPolicies } from "@/data/rooms";

export const metadata: Metadata = {
  title: "ROOMS",
  description:
    "춘천 THE CASTLE 객실 안내. 유럽풍 인테리어의 프라이빗 객실들을 소개합니다. 체크인 오후 3시, 체크아웃 오전 11시, 기본 조식 제공.",
};

export default function RoomsPage() {
  return (
    <>
      <section className="bg-navy py-20 md:py-28">
        <div className="container-castle text-center">
          <SectionHeading
            eyebrow="Rooms"
            title="객실 안내"
            subtitle="프라이빗한 나만의 공간에서 편안한 하루를 보내세요."
            light
          />
        </div>
      </section>

      <section className="py-20 md:py-28 bg-warm-white">
        <div className="container-castle">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
            {roomPhotoIds.map((id) => (
              <PlaceholderImage
                key={id}
                label="객실 사진"
                slug={`room-${id}`}
                aspect="aspect-[3/4]"
                fit="contain"
              />
            ))}
          </div>

          <div className="mt-14 grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-center">
            <div className="border border-navy/10 py-6 px-4">
              <p className="font-sans-kr text-xs text-charcoal/50">체크인</p>
              <p className="font-brand text-xl text-navy mt-1">{roomPolicies.checkIn}</p>
            </div>
            <div className="border border-navy/10 py-6 px-4">
              <p className="font-sans-kr text-xs text-charcoal/50">체크아웃</p>
              <p className="font-brand text-xl text-navy mt-1">{roomPolicies.checkOut}</p>
            </div>
            <div className="border border-navy/10 py-6 px-4">
              <p className="font-sans-kr text-xs text-charcoal/50">영유아</p>
              <p className="font-brand text-lg text-navy mt-1">0~36개월 무료</p>
            </div>
          </div>

          <p className="text-center font-sans-kr text-xs text-charcoal/50 mt-6">
            {roomPolicies.groupBreakfastNotice}
          </p>
        </div>
      </section>

      <Breakfast />

      <section className="py-20 md:py-24 bg-ivory-dark">
        <div className="container-castle">
          <BookingPlatforms />
        </div>
      </section>
    </>
  );
}
