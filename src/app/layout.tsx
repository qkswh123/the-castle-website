import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thecastle-chuncheon.example.com"),
  title: {
    default: "THE CASTLE(더캐슬) | 춘천 유럽풍 호스텔·독채 숙소",
    template: "%s | THE CASTLE 더캐슬",
  },
  description:
    "춘천 THE CASTLE(더캐슬)은 유럽풍의 감성을 담은 호스텔형 숙소입니다. 프라이빗 객실과 공용 라운지, 최대 18명이 이용 가능한 독채 공간까지 — 춘천 여행의 특별한 하루를 만나보세요.",
  keywords: [
    "춘천 숙소",
    "춘천 호스텔",
    "춘천 펜션",
    "춘천 독채",
    "춘천 단체 숙소",
    "춘천 가족 숙소",
    "춘천 여행",
    "춘천 유럽풍 숙소",
  ],
  openGraph: {
    title: "THE CASTLE(더캐슬) | 춘천 유럽풍 호스텔·독채 숙소",
    description: "춘천에서 만나는 작은 유럽, THE CASTLE. 프라이빗 객실부터 최대 18인 독채까지.",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${notoSansKr.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-warm-white text-charcoal pb-14 lg:pb-0">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
