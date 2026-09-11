// 독채(PRIVATE HOUSE) 가격 정보.
// 안내 자료에 따라 전체 이용 가격이 500,000원 / 549,000원 두 가지로 표기되어 있어
// 코드에 값을 고정하지 않고 이 파일에서만 관리한다. 확정되면 아래 값만 수정하면 된다.

export const privateHousePricing = {
  baseForTwo: "60,000원",
  perExtraGuest: "30,000원",
  maxGuests: 18,
  fullHousePrice: "500,000원", // 최신 확정 전까지 임시값. 549,000원과 병행 확인 필요.
  cardSurchargeNote: "카드 결제 시 10% 추가",
  breakfastNotice: "단체 및 독채 예약 시 조식 제공이 어렵습니다.",
};

export const privateHouseUseCases = [
  "결혼식",
  "동창회",
  "가족모임",
  "세미나",
  "교회행사",
  "워크숍",
  "친목모임",
];
