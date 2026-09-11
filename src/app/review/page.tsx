import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ReviewCard from "@/components/ReviewCard";
import { reviewPlatformLinks, reviews } from "@/data/reviews";

export const metadata: Metadata = {
  title: "REVIEW",
  description: "춘천 THE CASTLE을 이용한 고객들의 이용 후기를 확인해보세요.",
};

export default function ReviewPage() {
  return (
    <>
      <section className="bg-navy py-20 md:py-28">
        <div className="container-castle text-center">
          <SectionHeading eyebrow="Review" title="이용 후기" light />
        </div>
      </section>

      <section className="py-20 md:py-28 bg-ivory">
        <div className="container-castle">
          <p className="text-center font-sans-kr text-xs text-charcoal/45 mb-10">
            아래 후기는 예시 콘텐츠입니다. 실제 이용 후기는 순차적으로 업데이트될 예정입니다.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <ReviewCard key={r.id} review={r} />
            ))}
          </div>

          {(reviewPlatformLinks.naverUrl ||
            reviewPlatformLinks.bookingReviewUrl ||
            reviewPlatformLinks.airbnbReviewUrl) && (
            <div className="flex flex-wrap justify-center gap-3 mt-14">
              {reviewPlatformLinks.naverUrl && (
                <a
                  href={reviewPlatformLinks.naverUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-navy text-navy font-sans-kr text-sm hover:bg-navy hover:text-ivory transition-colors"
                >
                  네이버 후기 보기
                </a>
              )}
              {reviewPlatformLinks.bookingReviewUrl && (
                <a
                  href={reviewPlatformLinks.bookingReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-navy text-navy font-sans-kr text-sm hover:bg-navy hover:text-ivory transition-colors"
                >
                  Booking.com 후기 보기
                </a>
              )}
              {reviewPlatformLinks.airbnbReviewUrl && (
                <a
                  href={reviewPlatformLinks.airbnbReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-navy text-navy font-sans-kr text-sm hover:bg-navy hover:text-ivory transition-colors"
                >
                  Airbnb 후기 보기
                </a>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
