import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import { locationInfo } from "@/data/location";
import { mapLinks } from "@/data/site";

export const metadata: Metadata = {
  title: "LOCATION",
  description: "춘천 THE CASTLE 오시는 길. 주소, 주차 안내, 춘천역·남춘천역에서 오는 방법을 확인하세요.",
};

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 py-4 border-b border-navy/10">
      <span className="font-sans-kr text-xs tracking-widest text-gold uppercase w-28 shrink-0">
        {label}
      </span>
      <span className="font-sans-kr text-sm text-charcoal/75 leading-relaxed">
        {value || "정보 준비중입니다."}
      </span>
    </div>
  );
}

export default function LocationPage() {
  return (
    <>
      <section className="bg-navy py-20 md:py-28">
        <div className="container-castle text-center">
          <SectionHeading eyebrow="Location" title="오시는 길" light />
        </div>
      </section>

      <section className="py-20 md:py-28 bg-warm-white">
        <div className="container-castle grid lg:grid-cols-2 gap-12">
          <div className="aspect-[4/3] bg-ivory-dark border border-navy/10 flex items-center justify-center">
            <p className="font-sans-kr text-sm text-charcoal/45 text-center px-6">
              지도가 이 자리에 표시됩니다.
              <br />
              주소 확정 후 네이버지도 / 카카오맵이 연결될 예정입니다.
            </p>
          </div>

          <div className="flex flex-col">
            <InfoRow label="주소" value={locationInfo.address || locationInfo.addressNotice} />
            <InfoRow label="주차" value={locationInfo.parkingInfo} />
            <InfoRow label="춘천역" value={locationInfo.fromChuncheonStation} />
            <InfoRow label="남춘천역" value={locationInfo.fromNamChuncheonStation} />
            <InfoRow label="대중교통" value={locationInfo.publicTransitInfo} />

            <div className="flex flex-wrap gap-3 mt-8">
              {mapLinks.naverMapUrl ? (
                <a
                  href={mapLinks.naverMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-navy text-navy font-sans-kr text-sm hover:bg-navy hover:text-ivory transition-colors"
                >
                  네이버지도로 보기
                </a>
              ) : (
                <span className="px-6 py-3 border border-navy/20 text-navy/35 font-sans-kr text-sm cursor-not-allowed">
                  네이버지도 (준비중)
                </span>
              )}
              {mapLinks.kakaoMapUrl ? (
                <a
                  href={mapLinks.kakaoMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-navy text-navy font-sans-kr text-sm hover:bg-navy hover:text-ivory transition-colors"
                >
                  카카오맵으로 보기
                </a>
              ) : (
                <span className="px-6 py-3 border border-navy/20 text-navy/35 font-sans-kr text-sm cursor-not-allowed">
                  카카오맵 (준비중)
                </span>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
