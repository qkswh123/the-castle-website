import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import PhoneLink from "@/components/PhoneLink";
import { contactInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "CONTACT",
  description: "춘천 THE CASTLE 독채 및 단체 이용 문의. 전화 또는 카카오톡으로 상담해드립니다.",
};

export default function ContactPage() {
  const primaryPhone = contactInfo.phones[0]?.number;

  return (
    <>
      <section className="bg-navy py-20 md:py-28">
        <div className="container-castle text-center">
          <SectionHeading eyebrow="Contact" title="PRIVATE HOUSE & GROUP" light />
        </div>
      </section>

      <section className="py-20 md:py-28 bg-warm-white">
        <div className="container-castle max-w-xl mx-auto flex flex-col items-center text-center gap-8">
          <p className="font-sans-kr text-base text-charcoal/75 leading-relaxed">
            독채 이용 및 단체 예약은
            <br />
            전화 또는 문의를 통해 상담해주세요.
          </p>

          <div className="flex flex-col gap-2">
            {contactInfo.phones.map((p) => (
              <PhoneLink
                key={p.number}
                number={p.number}
                className="font-brand text-2xl text-navy hover:text-gold transition-colors"
              >
                {p.number}
              </PhoneLink>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            {primaryPhone && (
              <a
                href={`tel:${primaryPhone.replace(/-/g, "")}`}
                className="px-8 py-3.5 bg-navy text-ivory font-sans-kr text-sm tracking-widest hover:bg-navy-light transition-colors text-center"
              >
                전화 문의
              </a>
            )}
            {contactInfo.kakaoUrl ? (
              <a
                href={contactInfo.kakaoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-gold text-navy font-sans-kr text-sm tracking-widest hover:bg-gold-light transition-colors text-center"
              >
                카카오톡 문의
              </a>
            ) : (
              <span
                title="카카오톡 채널 링크 연결 준비중입니다."
                className="px-8 py-3.5 border border-navy/20 text-navy/35 font-sans-kr text-sm tracking-widest text-center cursor-not-allowed"
              >
                카카오톡 문의 (준비중)
              </span>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
