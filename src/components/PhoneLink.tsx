import { telHref } from "@/lib/format";

type PhoneLinkProps = {
  number: string;
  className?: string;
  children?: React.ReactNode;
};

export default function PhoneLink({ number, className = "", children }: PhoneLinkProps) {
  return (
    <a href={telHref(number)} className={className}>
      {children ?? number}
    </a>
  );
}
