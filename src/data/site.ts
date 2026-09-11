// 브랜드/연락처 등 사이트 전역 정보. 실제 정보가 확정되면 이 파일만 수정하면 된다.

export const siteInfo = {
  brandNameEn: "THE CASTLE",
  brandNameKr: "더캐슬",
  tagline: "춘천에서 만나는 작은 유럽",
  taglineEn: "European Style Hostel & Homestay",
  city: "춘천",
  description:
    "춘천 THE CASTLE(더캐슬)은 유럽풍의 감성과 편안한 숙박을 함께 즐길 수 있는 호스텔형 숙소입니다. 프라이빗 객실, 공용 라운지, 최대 18명이 이용 가능한 독채 공간을 갖추고 있습니다.",
};

export const contactInfo = {
  phones: [
    { label: "대표번호 1", number: "010-8131-4999" },
    { label: "대표번호 2", number: "010-6370-4888" },
  ],
  // 카카오톡 채널 URL이 확정되면 아래 값을 교체한다.
  kakaoUrl: "",
};

export const checkInOut = {
  checkIn: "오후 3시",
  checkOut: "오전 11시",
};

// 예약/문의 관련 외부 링크. 실제 계정 URL이 확정되기 전까지는 빈 문자열로 둔다.
export const bookingPlatforms: {
  id: string;
  name: string;
  url: string;
}[] = [
  { id: "airbnb", name: "Airbnb", url: "" },
  { id: "booking", name: "Booking.com", url: "" },
  { id: "agoda", name: "Agoda", url: "" },
  { id: "yeogi", name: "여기어때", url: "" },
  { id: "yanolja", name: "야놀자", url: "" },
];

export const mapLinks = {
  naverMapUrl: "",
  kakaoMapUrl: "",
  address: "",
};

export const navItems = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "ROOMS", href: "/rooms" },
  { label: "PRIVATE HOUSE", href: "/private-house" },
  { label: "SPACE", href: "/space" },
  { label: "CHUNCHEON", href: "/chuncheon" },
  { label: "REVIEW", href: "/review" },
  { label: "LOCATION", href: "/location" },
  { label: "CONTACT", href: "/contact" },
];
