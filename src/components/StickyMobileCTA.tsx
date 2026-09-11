import Link from "next/link";
import { contactInfo } from "@/data/site";
import { telHref } from "@/lib/format";

export default function StickyMobileCTA() {
  const primaryPhone = contactInfo.phones[0]?.number;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 flex border-t border-gold/20 bg-navy/95 backdrop-blur">
      <Link
        href="/private-house"
        className="flex-1 py-3.5 text-center font-sans-kr text-sm tracking-wide text-ivory border-r border-ivory/10"
      >
        독채 문의
      </Link>
      {primaryPhone && (
        <a
          href={telHref(primaryPhone)}
          className="flex-1 py-3.5 text-center font-sans-kr text-sm tracking-wide text-navy bg-gold"
        >
          전화하기
        </a>
      )}
    </div>
  );
}
