import Link from "next/link";
import { contactInfo, navItems, siteInfo } from "@/data/site";
import PhoneLink from "./PhoneLink";

export default function Footer() {
  return (
    <footer className="bg-navy text-ivory/80 mt-auto">
      <div className="container-castle py-12 grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-brand text-2xl text-ivory">{siteInfo.brandNameEn}</p>
          <p className="font-sans-kr text-xs tracking-widest text-gold-light mt-1">
            {siteInfo.brandNameKr}
          </p>
          <p className="font-sans-kr text-sm mt-4 leading-relaxed max-w-xs text-ivory/60">
            {siteInfo.taglineEn}
            <br />
            {siteInfo.city} · European Style Hostel
          </p>
        </div>

        <div>
          <p className="font-sans-kr text-xs tracking-widest text-gold-light mb-4">MENU</p>
          <ul className="grid grid-cols-2 gap-y-2 gap-x-4 font-sans-kr text-sm">
            {navItems
              .filter((i) => i.href !== "/")
              .map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-gold-light transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        <div>
          <p className="font-sans-kr text-xs tracking-widest text-gold-light mb-4">CONTACT</p>
          <ul className="font-sans-kr text-sm space-y-2">
            {contactInfo.phones.map((p) => (
              <li key={p.number}>
                <PhoneLink number={p.number} className="hover:text-gold-light transition-colors">
                  {p.label} · {p.number}
                </PhoneLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="container-castle py-5 text-xs text-ivory/40 font-sans-kr flex flex-col sm:flex-row gap-2 sm:justify-between">
          <span>&copy; {new Date().getFullYear()} THE CASTLE (더캐슬), Chuncheon.</span>
          <span>객실 예약은 Airbnb / Booking.com / Agoda / 여기어때 / 야놀자에서 가능합니다.</span>
        </div>
      </div>
    </footer>
  );
}
