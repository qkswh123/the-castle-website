// 춘천 여행 정보. 거리/이동시간은 확인되지 않은 값은 비워두고,
// 확정되는 대로 distance / travelTime 필드를 채운다. 임의로 추정해 작성하지 않는다.

export type AttractionCategory = "tour" | "nature" | "family" | "date" | "food" | "cafe";

export type Attraction = {
  id: string;
  name: string;
  category: AttractionCategory;
  description: string;
  distance?: string;
  travelTime?: string;
  mapUrl?: string;
};

export const categoryLabels: Record<AttractionCategory, string> = {
  tour: "주요 관광지",
  nature: "자연 / 산책",
  family: "가족 여행",
  date: "데이트 코스",
  food: "맛집",
  cafe: "카페",
};

// 널리 알려진 춘천 관광/맛집 스팟입니다. THE CASTLE로부터의 정확한 거리·이동시간·지도 링크는
// 확인되지 않아 비워 두었습니다 — 운영진이 확인한 값으로 채워 넣어 주세요.
export const attractions: Attraction[] = [
  {
    id: "namiseom",
    name: "남이섬",
    category: "tour",
    description: "메타세쿼이아 길과 사계절 풍경으로 유명한 춘천 대표 관광지입니다.",
  },
  {
    id: "soyang-dam",
    name: "소양강댐",
    category: "nature",
    description: "국내 최대 규모의 다목적댐으로, 주변 산책과 드라이브 코스로 알려져 있습니다.",
  },
  {
    id: "uiam-lake-skywalk",
    name: "의암호 스카이워크",
    category: "date",
    description: "의암호 위를 걸으며 호수 전망을 즐길 수 있는 산책 명소입니다.",
  },
  {
    id: "ethnic-living-museum",
    name: "세계민속악기박물관 · 아동미술체험박물관",
    category: "family",
    description: "아이와 함께 체험하기 좋은 춘천의 대표 가족 여행 코스입니다.",
  },
  {
    id: "myeongdong-dakgalbi-street",
    name: "춘천 명동 닭갈비골목",
    category: "food",
    description: "춘천의 대표 음식인 닭갈비와 막국수를 즐길 수 있는 골목입니다.",
  },
  {
    id: "chuncheon-cafe",
    name: "춘천 호수 전망 카페",
    category: "cafe",
    description: "호수와 산 전망을 함께 즐길 수 있는 춘천의 카페들입니다.",
  },
];
