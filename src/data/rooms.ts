// 일반 객실 정보. 홍보용 사이트 특성상 가격/상세 스펙 비교보다
// 객실 사진을 모아 분위기를 보여주는 용도로 사용한다.
// 사진은 public/images/room-{id}.jpg 로 매칭된다.

export const roomPricing = {
  single: { label: "1인 단독룸", price: "49,000원" },
  double: { label: "2인", price: "79,000원" },
  infantPolicy: "0~36개월 미만 무료",
};

export type Room = {
  id: string;
  name: string;
};

export const rooms: Room[] = [
  { id: "1", name: "1호실" },
  { id: "2", name: "2호실" },
  { id: "3", name: "3호실" },
  { id: "4", name: "4호실" },
  { id: "5", name: "5호실" },
  { id: "6", name: "6호실" },
  { id: "7", name: "7호실" },
];

export const roomPolicies = {
  checkIn: "오후 3시",
  checkOut: "오전 11시",
  breakfast: "기본 조식 제공 (일반 객실 기준)",
  groupBreakfastNotice: "단체 및 독채 예약은 조식 제공이 어렵습니다.",
};
