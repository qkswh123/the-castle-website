import PlaceholderImage from "./PlaceholderImage";
import SectionHeading from "./SectionHeading";

export default function Breakfast() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="container-castle grid lg:grid-cols-2 gap-12 items-center">
        <div className="grid grid-cols-2 gap-4">
          <PlaceholderImage label="조식 사진" aspect="aspect-square" />
          <PlaceholderImage label="다이닝룸 조식 테이블" aspect="aspect-square" className="mt-8" />
        </div>

        <div className="flex flex-col gap-5">
          <SectionHeading
            eyebrow="Breakfast"
            title="GOOD MORNING, THE CASTLE"
            align="left"
            subtitle="숙박객에게 제공되는 따뜻한 아침 식사와 함께 여유로운 아침을 시작해보세요."
          />
          <p className="font-sans-kr text-sm text-gold border-l-2 border-gold pl-3">
            ※ 단체 및 독채 예약 시 조식 제공이 어렵습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
