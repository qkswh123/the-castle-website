type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  const subColor = light ? "text-ivory/75" : "text-charcoal/70";
  const titleColor = light ? "text-ivory" : "text-navy";

  return (
    <div className={`flex flex-col gap-3 ${alignClass}`}>
      {eyebrow && (
        <span className="font-sans-kr text-xs md:text-sm tracking-[0.25em] uppercase text-gold">
          {eyebrow}
        </span>
      )}
      <h2 className={`font-brand text-3xl md:text-4xl lg:text-5xl ${titleColor}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`font-sans-kr text-sm md:text-base max-w-xl ${subColor} leading-relaxed`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
