import Link from "next/link";
import PlaceholderImage from "./PlaceholderImage";

const categories = [
  {
    href: "/rooms",
    title: "ROOMS",
    subtitle: "객실 안내",
    description: "프라이빗한 싱글·더블룸에서 편안한 휴식을 경험하세요.",
    imageLabel: "객실 사진",
    slug: "category-rooms",
  },
  {
    href: "/private-house",
    title: "PRIVATE HOUSE",
    subtitle: "독채",
    description: "최대 18명이 함께하는 우리만의 공간, 독채 전체 대여.",
    imageLabel: "독채 사진",
    slug: "category-private-house",
  },
  {
    href: "/space",
    title: "SPACE",
    subtitle: "공용공간",
    description: "라운지, 다이닝룸, 공용주방 등 함께 머무는 공간들.",
    imageLabel: "공용공간 사진",
    slug: "category-space",
  },
  {
    href: "/chuncheon",
    title: "CHUNCHEON",
    subtitle: "춘천 여행",
    description: "THE CASTLE에서 시작하는 춘천 여행 정보.",
    imageLabel: "춘천 여행 사진",
    slug: "category-chuncheon",
  },
];

export default function HomeCategories() {
  return (
    <section className="py-20 md:py-28 bg-warm-white">
      <div className="container-castle">
        <div className="text-center mb-14">
          <span className="font-sans-kr text-xs md:text-sm tracking-[0.3em] uppercase text-gold">
            Discover
          </span>
          <h2 className="font-brand text-3xl md:text-4xl text-navy mt-3">
            THE CASTLE을 만나보세요
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group flex flex-col gap-4"
            >
              <PlaceholderImage
                label={c.imageLabel}
                slug={c.slug}
                aspect="aspect-[4/5]"
                className="transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div>
                <p className="font-sans-kr text-[11px] tracking-widest text-gold uppercase">
                  {c.subtitle}
                </p>
                <h3 className="font-brand text-xl text-navy mt-1">{c.title}</h3>
                <p className="font-sans-kr text-sm text-charcoal/65 mt-2 leading-relaxed">
                  {c.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
