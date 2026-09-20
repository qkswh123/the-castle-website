# THE CASTLE(더캐슬) 홈페이지 — 온보딩 가이드

춘천 유럽풍 호스텔·독채 숙소 THE CASTLE의 공식 브랜드 홈페이지 프로젝트입니다.
이 문서는 새로 합류하는 사람(또는 새 Claude 세션)이 프로젝트 맥락을 빠르게 파악하기 위한 요약입니다.

## 프로젝트 목적

- 실제 운영 중인 숙소의 **홍보용 브랜드 사이트**. 예약/결제 기능은 없음.
- 일반 객실 예약은 Airbnb/Booking.com/Agoda/여기어때/야놀자 등 외부 플랫폼으로 연결.
- 독채·단체 예약은 전화/카카오톡 문의로 연결.

## 기술 스택

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4. 서버 컴포넌트 위주, 클라이언트 컴포넌트는 Header(모바일 메뉴)만.

## 실행 방법

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start   # 프로덕션 빌드 확인
```

## 배포 / 저장소

- GitHub: https://github.com/qkswh123/the-castle-website (public)
- Vercel: https://the-castle-website.vercel.app (production, `npx vercel --prod`로 재배포)

## 폴더 구조

```
src/
  app/            페이지 라우트 (HOME, ABOUT, ROOMS, PRIVATE HOUSE, SPACE, CHUNCHEON, REVIEW, LOCATION, CONTACT)
  components/     Header, Hero, About, PlaceholderImage, PrivateHousePricing 등 UI 컴포넌트
  data/           가격/연락처/링크/객실/공간/후기/여행지 등 콘텐츠 데이터 (여기만 수정하면 사이트 내용 변경)
  lib/            공용 유틸 (tel: 링크 포맷, 이미지 자동 감지)
```

콘텐츠(가격, 전화번호, 문구 등)와 UI를 분리해서, 운영자가 코드를 몰라도 `src/data/*.ts` 파일만 수정하면
사이트 내용을 바꿀 수 있도록 설계되어 있습니다. 자세한 파일별 매핑은 [README.md](README.md) 참고.

## 사진 시스템 (중요)

`public/images/{slug}.{jpg|jpeg|png|webp}` 파일이 있으면 자동으로 그 자리의 placeholder를 실제 사진으로
교체합니다 (`src/lib/images.ts`의 `resolveImage`). 코드 수정 없이 파일만 넣으면 됩니다.
슬러그 전체 목록은 README.md의 "실제 사진 넣기" 표 참고.

**현재 상태: 모든 사진이 의도적으로 제거된 상태입니다.** 페이지 디자인/구조를 먼저 확정한 뒤 사진을 다시
넣기로 했습니다 (2026-09-19 결정). 그 전에는 회색 placeholder 박스가 정상입니다.

## 지금까지의 주요 결정 사항 (왜 이렇게 되어 있는지)

- **ROOMS 페이지**: 처음엔 "1호실/2호실..."처럼 객실별 상세 카드(가격/인원/편의시설)로 만들었으나,
  "예약용 페이지가 아니라 홍보용"이라는 피드백에 따라 **가격/인원 정보 없이 사진만 모은 갤러리**로
  단순화함 (`src/data/rooms.ts`의 `roomPhotoIds` 배열 + `room-{id}.jpg` 사진).
- **타이포그래피**: 원래 영문 Playfair Display + 한글 Noto Serif KR(제목) + Noto Sans KR(본문) 조합이었으나,
  "글씨체가 균일하지 않다"는 피드백으로 **Noto Sans KR 하나로 통일**함. (Gulim 요청이 있었으나 Gulim은
  Windows 전용 시스템 폰트라 웹에 배포 불가 — 대안으로 고딕체 통일을 제안하고 승인받음.)
- **독채 전체 이용가**: 안내 자료에 500,000원/549,000원 두 가지가 혼재되어 있어 확정 전까지
  `src/data/privateHouse.ts`의 `fullHousePrice` 값 하나로 관리 중. **운영자 확인 필요.**
- **사진 방향(회전) 이슈**: 폰 사진을 sips로 회전시키면 픽셀은 맞게 돌지만 EXIF 방향 태그가
  남아있어서, Next.js 이미지 최적화(sharp)가 그 태그를 보고 다시 한번 회전시켜 웹사이트에서만
  사진이 눕혀 보이는 문제가 있었음. `sharp().jpeg().toBuffer()`로 재인코딩해서 EXIF를 제거하면
  해결됨. 앞으로 사진을 회전할 일이 있으면 이 점 주의.
- **실제 리스팅 사진 사용 시**: 여기어때 등 예약 플랫폼에 이미 올라간 사진(가로 2400×1324, .webp)은
  방향 문제 없이 깔끔하게 쓸 수 있었음. 반면 휴대폰 원본 세로 사진은 아주 긴 비율(1848×4000)이라
  `object-cover`로 자르면 침대 등 핵심 피사체가 잘려나가는 문제가 있어 `PlaceholderImage`
  컴포넌트에 `fit="contain"` 옵션을 추가해뒀음 — 필요할 때만 사용.

## 아직 안 끝난 것 / 다음에 할 일

- [ ] 페이지 디자인 아웃라인 확정 (현재 논의 시작 단계 — README나 대화 맥락 참고)
- [ ] 실제 사진 다시 채워넣기 (디자인 확정 후)
- [ ] 독채 전체 이용가 확정 (500,000원 vs 549,000원)
- [ ] 실제 주소 / 네이버지도·카카오맵 링크 연결 (`src/data/location.ts`, `src/data/site.ts`의 `mapLinks`)
- [ ] 예약 플랫폼 실제 URL 연결 (`src/data/site.ts`의 `bookingPlatforms`)
- [ ] 카카오톡 채널 URL 연결 (`src/data/site.ts`의 `contactInfo.kakaoUrl`)
- [ ] 춘천 여행지 실제 거리/이동시간/지도 링크 확인 후 입력 (`src/data/attractions.ts`) — 확인 안 된 값은
      임의로 채우지 말 것 (기존 방침)

## 중요한 구현 원칙 (계속 지켜야 함)

- 실제로 확인되지 않은 정보(가격, 거리, 시간, 사진)는 임의로 만들어내지 않는다.
- 실제 예약 기능은 구현하지 않는다 (외부 플랫폼 연결만).
- 외부 예약 플랫폼 URL을 임의로 만들지 않는다.
- 가격/연락처 등은 항상 `src/data/*.ts`에서 관리해 수정하기 쉽게 유지한다.
