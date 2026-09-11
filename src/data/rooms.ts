// 일반 객실 정보. 홍보용 사이트 특성상 개별 객실을 구분해서 보여주기보다
// 객실 사진들을 하나의 갤러리로 모아 전체적인 분위기만 보여주는 용도로 사용한다.
// 사진은 public/images/room-{id}.jpg 로 매칭된다 (id는 화면에 노출되지 않는 내부 키).

export const roomPricing = {
  single: { label: "1인 단독룸", price: "49,000원" },
  double: { label: "2인", price: "79,000원" },
  infantPolicy: "0~36개월 미만 무료",
};

// 객실 사진 갤러리용 내부 id 목록. 새 사진을 추가하려면
// public/images/room-{id}.jpg 를 추가하고 이 배열에 id만 추가하면 된다.
export const roomPhotoIds: string[] = ["1", "2", "3", "4", "5", "6", "7"];

export const roomPolicies = {
  checkIn: "오후 3시",
  checkOut: "오전 11시",
  breakfast: "기본 조식 제공 (일반 객실 기준)",
  groupBreakfastNotice: "단체 및 독채 예약은 조식 제공이 어렵습니다.",
};
