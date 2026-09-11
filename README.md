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

## 실제 사진 교체하기

현재 모든 이미지 영역은 `PlaceholderImage` 컴포넌트로 표시되는 자리표시자입니다.
실제 사진이 준비되면 `public/images/` 폴더에 사진을 추가하고, 각 페이지의
`PlaceholderImage` 부분을 Next.js `<Image />` 컴포넌트로 교체해 연결하면 됩니다.

## 폴더 구조

```
src/
  app/            페이지 라우트 (HOME, ABOUT, ROOMS, PRIVATE HOUSE, SPACE, CHUNCHEON, REVIEW, LOCATION, CONTACT)
  components/     Header, Hero, About, RoomCard, PrivateHousePricing 등 UI 컴포넌트
  data/           가격/연락처/링크 등 콘텐츠 데이터
  lib/            공용 유틸 (tel: 링크 포맷 등)
```
