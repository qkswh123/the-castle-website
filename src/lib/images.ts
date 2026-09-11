import fs from "node:fs";
import path from "node:path";

const IMAGE_DIR = path.join(process.cwd(), "public", "images");
const EXTENSIONS = ["jpg", "jpeg", "png", "webp"];

// public/images/{slug}.jpg(또는 png/webp/jpeg)가 존재하면 그 경로를 반환하고,
// 없으면 null을 반환해 placeholder가 대신 표시되도록 한다.
// 서버 컴포넌트에서만 사용 가능 (빌드/요청 시 파일시스템을 직접 확인).
export function resolveImage(slug: string): string | null {
  for (const ext of EXTENSIONS) {
    if (fs.existsSync(path.join(IMAGE_DIR, `${slug}.${ext}`))) {
      return `/images/${slug}.${ext}`;
    }
  }
  return null;
}
