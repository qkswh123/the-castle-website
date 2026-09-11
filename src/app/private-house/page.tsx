import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import PlaceholderImage from "@/components/PlaceholderImage";
import PrivateHousePricing from "@/components/PrivateHousePricing";
import PhoneLink from "@/components/PhoneLink";
import { privateHouseUseCases } from "@/data/privateHouse";
import { contactInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "PRIVATE HOUSE",
  description:
    "춘천 THE CASTLE 독채. 최대 18명이 함께하는 단체 전용 공간으로 결혼식, 동창회, 가족모임, 세미나 등에 이용하기 좋습니다.",
};

export default function PrivateHousePage() {
  return (
    <>
      <section className="bg-navy py-20 md:py-28">
        <div className="container-castle text-center">
          <SectionHeading
            eyebrow="Private House"
            title="최대 18명이 함께하는 특별한 하루"
            light
          />
        </div>
      </section>

      <section className="py-16 md:py-20 bg-warm-white">
        <div className="container-castle grid md:grid-cols-2 gap-4">
          <PlaceholderImage label="독채 외관" aspect="aspect-[4/3]" />
          <PlaceholderImage label="독채 내부 공용공간" aspect="aspect-[4/3]" />
        </div>
      </section>

      <section className="py-16 md:py-20 bg-ivory">
        <div className="container-castle text-center max-w-2xl mx-auto">
          <p className="font-sans-kr text-base md:text-lg text-charcoal/75 leading-relaxed">
            가족모임부터 동창회, 세미나, 각종 단체 행사까지
            <br />
            우리만의 공간에서 편안하게 즐겨보세요.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {privateHouseUseCases.map((useCase) => (
              <span
                key={useCase}
                className="font-sans-kr text-sm px-5 py-2 border border-navy/15 text-navy/75"
              >
                {useCase}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-warm-white">
        <div className="container-castle max-w-3xl mx-auto flex flex-col gap-8">
          <SectionHeading eyebrow="Pricing" title="이용 요금" />
          <PrivateHousePricing />
          <p className="text-center font-sans-kr text-sm text-gold border-t border-navy/10 pt-6">
            ※ 단체 및 독채 예약 시 조식 제공이 어렵습니다.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-navy">
        <div className="container-castle flex flex-col items-center text-center gap-6">
          <h2 className="font-brand text-2xl md:text-3xl text-ivory">
            독채 이용을 문의해보세요
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-gold text-navy font-sans-kr text-sm tracking-widest hover:bg-gold-light transition-colors"
            >
              독채 이용 문의하기
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row gap-x-8 gap-y-2 mt-2 font-sans-kr text-sm text-ivory/75">
            {contactInfo.phones.map((p) => (
              <PhoneLink key={p.number} number={p.number} className="hover:text-gold-light">
                {p.label} · {p.number}
              </PhoneLink>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
