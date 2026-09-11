import { spaces } from "@/data/space";
import PlaceholderImage from "./PlaceholderImage";

export default function SpaceGallery() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      {spaces.map((space, i) => (
        <div
          key={space.id}
          className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
            i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
          }`}
        >
          <PlaceholderImage
            label={`${space.nameKr} 사진`}
            slug={`space-${space.id}`}
            aspect="aspect-[4/3]"
          />
          <div>
            <p className="font-sans-kr text-xs tracking-widest text-gold uppercase">
              {space.nameKr}
            </p>
            <h3 className="font-brand text-3xl md:text-4xl text-navy mt-2">
              {space.name}
            </h3>
            <p className="font-sans-kr text-sm md:text-base text-charcoal/70 mt-4 leading-relaxed max-w-md">
              {space.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
