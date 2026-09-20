# THE CASTLE (더캐슬) 공식 홈페이지

춘천 유럽풍 호스텔·독채 숙소 THE CASTLE의 브랜드 소개 홈페이지입니다.
Next.js(App Router) + TypeScript + Tailwind CSS로 제작되었습니다.

일반 객실 예약/결제는 이 사이트에서 처리하지 않으며, Airbnb / Booking.com / Agoda / 여기어때 / 야놀자 등
외부 플랫폼으로 연결합니다. 독채·단체 문의는 전화/카카오톡으로 연결됩니다.

## 실행 방법

```bash
npm install
npm run dev
```

`http://localhost:3000` 에서 확인할 수 있습니다.

배포용 빌드:

```bash
npm run build
npm run start
```

## 자주 수정하게 될 파일 (콘텐츠/가격/링크)

운영자가 코드를 몰라도 아래 파일들만 수정하면 사이트 내용이 바뀝니다. 모두 `src/data/` 폴더에 있습니다.

| 내용 | 파일 |
| --- | --- |
| 대표 전화번호, 카카오톡 링크, 예약 플랫폼 URL, 네비게이션 | `src/data/site.ts` |
| 일반 객실 가격/시설/조식 여부 | `src/data/rooms.ts` |
| 독채 가격(전체 이용가, 인원 추가 요금, 카드 수수료) | `src/data/privateHouse.ts` |
| 공용공간(라운지/다이닝룸/주방 등) 소개 문구 | `src/data/space.ts` |
| 춘천 여행지/맛집 정보 | `src/data/attractions.ts` |
| 이용 후기 | `src/data/reviews.ts` |
| 오시는 길(주소, 주차, 교통, 지도 링크) | `src/data/location.ts` |
| ABOUT 소개 문구 | `src/data/about.ts` |

### 예약 플랫폼 링크 연결하기

`src/data/site.ts`의 `bookingPlatforms` 배열에서 각 항목의 `url` 값에 실제 예약 페이지 주소를 입력하면
ROOMS 페이지의 버튼이 자동으로 활성화됩니다. 비워두면 "준비중"으로 표시됩니다.

### 독채 전체 이용 가격

기존 안내 자료에 500,000원 / 549,000원 두 가지로 표기되어 있어, 확정 전까지는
`src/data/privateHouse.ts`의 `fullHousePrice` 값으로 관리합니다. 확정되면 이 값만 수정하면 됩니다.

### 지도 연결하기

주소가 확정되면 `src/data/location.ts`와 `src/data/site.ts`의 `mapLinks`에 실제 주소와
네이버지도/카카오맵 URL을 입력하세요.

## 실제 사진 넣기 (코드 수정 없이 파일만 추가하면 됨)

`public/images/` 폴더에 아래 표의 **파일명 그대로** 사진을 넣으면 자동으로 placeholder 대신 실제 사진이 표시됩니다.
확장자는 `.jpg`, `.jpeg`, `.png`, `.webp` 중 아무거나 가능합니다 (예: `hero.jpg` 또는 `hero.webp`).
사진이 없는 자리는 지금처럼 회색 placeholder가 계속 표시되니, 준비되는 대로 하나씩 추가하면 됩니다.
사진을 추가/변경한 뒤에는 `npm run build`(또는 `npm run dev` 재시작)를 다시 실행해야 반영됩니다.

| 파일명 (확장자 제외) | 어디에 쓰이나 |
| --- | --- |
| `hero.jpg` | 첫 화면(HOME) 배경 사진 |
| `about-exterior.jpg` | 홈/ABOUT 소개 섹션 — 외관 사진 |
| `about-lounge.jpg` | 홈/ABOUT 소개 섹션 — 라운지 사진 |
| `about-page-lounge.jpg` | ABOUT 페이지 하단 — 라운지 |
| `about-page-dining.jpg` | ABOUT 페이지 하단 — 다이닝룸 |
| `about-page-room.jpg` | ABOUT 페이지 하단 — 객실 내부 |
| `category-rooms.jpg` | 홈 화면 카테고리 카드 — ROOMS |
| `category-private-house.jpg` | 홈 화면 카테고리 카드 — PRIVATE HOUSE |
| `category-space.jpg` | 홈 화면 카테고리 카드 — SPACE |
| `category-chuncheon.jpg` | 홈 화면 카테고리 카드 — CHUNCHEON |
| `room-1.jpg` ~ `room-7.jpg` | ROOMS 페이지 — 객실 사진 갤러리 (번호는 `src/data/rooms.ts`의 `roomPhotoIds` 배열과 매칭, 사진을 늘리거나 줄이려면 그 배열의 id 개수를 맞추면 됨) |
| `breakfast-1.jpg`, `breakfast-2.jpg` | 조식 소개 섹션 |
| `private-house-exterior.jpg` | PRIVATE HOUSE 페이지 — 외관 |
| `private-house-interior.jpg` | PRIVATE HOUSE 페이지 — 내부 공용공간 |
| `space-lounge.jpg` | SPACE 페이지 — 라운지 |
| `space-dining.jpg` | SPACE 페이지 — 다이닝룸 |
| `space-kitchen.jpg` | SPACE 페이지 — 공용주방 |
| `space-living.jpg` | SPACE 페이지 — 거실 |
| `space-laundry.jpg` | SPACE 페이지 — 세탁실 |
| `chuncheon-namiseom.jpg` 등 `chuncheon-{id}.jpg` | CHUNCHEON 페이지 여행지 사진 (id는 `src/data/attractions.ts`의 각 항목 `id` 값) |

새 객실이나 새 여행지를 `src/data/rooms.ts` / `src/data/attractions.ts`에 추가하면, 그 항목의 `id`를 그대로
파일명에 사용하면 됩니다 (예: `id: "twin-room"` → `room-twin-room.jpg`).

주의: 여기어때/에어비앤비 등 예약 플랫폼에 올라간 사진을 그대로 캡처해서 쓰기보다는,
원본 사진 파일(휴대폰/카메라 원본 또는 촬영 업체에서 받은 파일)을 사용하는 것을 권장합니다.
플랫폼에 노출된 이미지는 해상도가 낮게 압축되어 있어 웹사이트에서 흐릿하게 보일 수 있습니다.

## 폴더 구조

```
src/
  app/            페이지 라우트 (HOME, ABOUT, ROOMS, PRIVATE HOUSE, SPACE, CHUNCHEON, REVIEW, LOCATION, CONTACT)
  components/     Header, Hero, About, RoomCard, PrivateHousePricing 등 UI 컴포넌트
  data/           가격/연락처/링크 등 콘텐츠 데이터
  lib/            공용 유틸 (tel: 링크 포맷 등)
```
