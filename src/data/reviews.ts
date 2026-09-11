// 샘플 후기 데이터. 실제 후기가 준비되면 isSample: false 항목으로 교체/추가한다.

export type Review = {
  id: string;
  content: string;
  author?: string;
  isSample: boolean;
};

export const reviews: Review[] = [
  {
    id: "sample-1",
    content: "유럽에 온 것 같은 분위기가 좋았어요.",
    isSample: true,
  },
  {
    id: "sample-2",
    content: "가족들과 독채로 이용하기 좋았습니다.",
    isSample: true,
  },
  {
    id: "sample-3",
    content: "춘천 여행하면서 편하게 쉬다 갑니다.",
    isSample: true,
  },
];

// 후기 플랫폼 링크. 실제 URL이 확정되면 채워 넣는다.
export const reviewPlatformLinks = {
  naverUrl: "",
  bookingReviewUrl: "",
  airbnbReviewUrl: "",
};
