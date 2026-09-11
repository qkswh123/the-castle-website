import Image from "next/image";
import Link from "next/link";
import { siteInfo } from "@/data/site";
import { resolveImage } from "@/lib/images";

export default function Hero() {
  // public/images/hero.jpg 를 추가하면 실제 사진이 배경으로 자동 표시된다.
  const heroImage = resolveImage("hero");

  return (
    <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden bg-navy">
      {heroImage && (
        <Image
          src={heroImage}
          alt="THE CASTLE 대표 사진"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      )}
      <div
        className={`absolute inset-0 ${
          heroImage
            ? "bg-navy/70"
            : "bg-[radial-gradient(ellipse_at_top,_var(--color-navy-light)_0%,_var(--color-navy)_60%,_var(--color-charcoal)_100%)]"
        }`}
      />
      {!heroImage && (
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, var(--color-gold) 0, var(--color-gold) 1px, transparent 1px, transparent 34px)",
          }}
          aria-hidden
        />
      )}
      <div className="absolute inset-6 md:inset-10 border border-gold/25 pointer-events-none" />

      <div className="relative z-10 container-castle flex flex-col items-center text-center gap-7 py-24">
        <span className="font-sans-kr text-xs md:text-sm tracking-[0.35em] uppercase text-gold-light">
          {siteInfo.city} · European Style Hostel &amp; Homestay
        </span>

        <h1 className="font-brand text-6xl md:text-8xl text-ivory tracking-wide">
          {siteInfo.brandNameEn}
        </h1>

        <p className="font-display text-xl md:text-2xl text-ivory/90">
          {siteInfo.tagline}
        </p>

        <p className="font-sans-kr text-sm md:text-base text-ivory/65 max-w-md leading-relaxed">
          유럽풍의 특별한 공간에서
          <br />
          편안한 하루와 소중한 시간을 만나보세요.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Link
            href="/rooms"
            className="px-8 py-3.5 border border-gold text-gold-light font-sans-kr text-sm tracking-widest hover:bg-gold hover:text-navy transition-colors"
          >
            객실 둘러보기
          </Link>
          <Link
            href="/private-house"
            className="px-8 py-3.5 bg-gold text-navy font-sans-kr text-sm tracking-widest hover:bg-gold-light transition-colors"
          >
            독채 알아보기
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-ivory/50">
        <span className="font-sans-kr text-[11px] tracking-widest">SCROLL</span>
        <div className="w-px h-8 bg-ivory/30" />
      </div>
    </section>
  );
}
