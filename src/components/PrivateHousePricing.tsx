import { privateHousePricing } from "@/data/privateHouse";

export default function PrivateHousePricing() {
  return (
    <div className="grid sm:grid-cols-2 gap-6">
      <div className="border border-gold/30 p-8 flex flex-col gap-2">
        <p className="font-sans-kr text-xs tracking-widest text-gold uppercase">
          기본 요금
        </p>
        <p className="font-brand text-3xl text-navy mt-2">
          {privateHousePricing.baseForTwo}
        </p>
        <p className="font-sans-kr text-sm text-charcoal/60">2인 기준</p>
        <p className="font-sans-kr text-sm text-charcoal/70 mt-3">
          추가 인원 1인당 {privateHousePricing.perExtraGuest}
        </p>
        <p className="font-sans-kr text-xs text-charcoal/50">
          최대 {privateHousePricing.maxGuests}명
        </p>
      </div>

      <div className="border border-gold bg-navy p-8 flex flex-col gap-2">
        <p className="font-sans-kr text-xs tracking-widest text-gold-light uppercase">
          독채 전체 이용
        </p>
        <p className="font-brand text-3xl text-ivory mt-2">
          {privateHousePricing.fullHousePrice}
        </p>
        <p className="font-sans-kr text-sm text-ivory/60">
          최대 {privateHousePricing.maxGuests}명 기준
        </p>
        <p className="font-sans-kr text-xs text-ivory/50 mt-3">
          {privateHousePricing.cardSurchargeNote}
        </p>
      </div>
    </div>
  );
}
