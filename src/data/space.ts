export type SpaceItem = {
  id: string;
  name: string;
  nameKr: string;
  description: string;
};

export const spaces: SpaceItem[] = [
  {
    id: "lounge",
    name: "LOUNGE",
    nameKr: "라운지",
    description: "여행자들이 쉬고 이야기 나눌 수 있는 공용 라운지",
  },
  {
    id: "dining",
    name: "DINING ROOM",
    nameKr: "다이닝룸",
    description: "함께 식사하고 시간을 보낼 수 있는 다이닝 공간",
  },
  {
    id: "kitchen",
    name: "KITCHEN",
    nameKr: "공용주방",
    description: "이용객이 자유롭게 사용할 수 있는 공용주방",
  },
  {
    id: "living",
    name: "LIVING ROOM",
    nameKr: "거실",
    description: "편안하게 휴식할 수 있는 거실",
  },
  {
    id: "laundry",
    name: "LAUNDRY",
    nameKr: "세탁실",
    description: "이용객이 사용할 수 있는 세탁실",
  },
];

export const facilities = ["무료 Wi-Fi", "TV", "공용주방", "거실", "다이닝룸", "세탁실"];
