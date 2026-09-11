import { aboutHighlights, aboutParagraphs } from "@/data/about";
import PlaceholderImage from "./PlaceholderImage";
import SectionHeading from "./SectionHeading";

type AboutProps = {
  compact?: boolean;
};

export default function About({ compact = false }: AboutProps) {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="container-castle grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="grid grid-cols-2 gap-4">
          <PlaceholderImage
            label="THE CASTLE 외관"
            slug="about-exterior"
            aspect="aspect-[3/4]"
            className="mt-8"
          />
          <PlaceholderImage label="THE CASTLE 라운지" slug="about-lounge" aspect="aspect-[3/4]" />
        </div>

        <div className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="About THE CASTLE"
            title="춘천에서 만나는 작은 유럽"
            align="left"
          />

          <div className="flex flex-col gap-4 font-sans-kr text-[15px] leading-loose text-charcoal/80">
            {(compact ? aboutParagraphs.slice(0, 2) : aboutParagraphs).map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          {!compact && (
            <div className="grid grid-cols-2 gap-x-6 gap-y-4 mt-4 pt-6 border-t border-navy/10">
              {aboutHighlights.map((h) => (
                <div key={h.label}>
                  <p className="font-brand text-base text-navy">{h.label}</p>
                  <p className="font-sans-kr text-xs text-charcoal/55 mt-1">{h.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
