// 일반 객실 정보. 가격/시설 등은 실제 운영 정보가 바뀌면 이 배열만 수정하면 된다.

export const roomPricing = {
  single: { label: "1인 단독룸", price: "49,000원" },
  double: { label: "2인", price: "79,000원" },
  infantPolicy: "0~36개월 미만 무료",
};

export type Room = {
  id: string;
  name: string;
  description: string;
  capacity: string;
  amenities: string[];
  price: string;
  breakfastIncluded: boolean;
};

export const rooms: Room[] = [
  {
    id: "single-room",
    name: "싱글룸",
    description: "혼자만의 시간을 위한 프라이빗 단독 객실입니다.",
    capacity: "1인",
    amenities: ["무료 Wi-Fi", "개인 수납공간", "냉난방 완비"],
    price: roomPricing.single.price,
    breakfastIncluded: true,
  },
  {
    id: "double-room",
    name: "더블룸",
    description: "함께 여행하는 두 사람을 위한 아늑한 객실입니다.",
    capacity: "2인",
    amenities: ["무료 Wi-Fi", "개인 수납공간", "냉난방 완비"],
    price: roomPricing.double.price,
    breakfastIncluded: true,
  },
];

export const roomPolicies = {
  checkIn: "오후 3시",
  checkOut: "오전 11시",
  breakfast: "기본 조식 제공 (일반 객실 기준)",
  groupBreakfastNotice: "단체 및 독채 예약은 조식 제공이 어렵습니다.",
};
