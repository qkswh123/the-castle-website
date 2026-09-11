import Link from "next/link";

export default function HomeClosingCTA() {
  return (
    <section className="relative py-24 bg-navy overflow-hidden">
      <div className="absolute inset-0 opacity-[0.08]" aria-hidden>
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-gold)_0,_transparent_60%)]" />
      </div>
      <div className="relative container-castle flex flex-col items-center text-center gap-6">
        <span className="font-sans-kr text-xs tracking-[0.3em] uppercase text-gold-light">
          Reservation
        </span>
        <h2 className="font-brand text-3xl md:text-4xl text-ivory">
          THE CASTLE에서의 하루를 예약하세요
        </h2>
        <p className="font-sans-kr text-sm md:text-base text-ivory/65 max-w-md leading-relaxed">
          일반 객실은 예약 플랫폼에서, 독채·단체 이용은 전화 문의로 안내해 드립니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <Link
            href="/rooms"
            className="px-8 py-3.5 bg-gold text-navy font-sans-kr text-sm tracking-widest hover:bg-gold-light transition-colors"
          >
            객실 예약 플랫폼 보기
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3.5 border border-ivory/40 text-ivory font-sans-kr text-sm tracking-widest hover:border-gold hover:text-gold-light transition-colors"
          >
            독채 · 단체 문의
          </Link>
        </div>
      </div>
    </section>
  );
}
