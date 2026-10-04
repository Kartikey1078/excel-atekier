import { COMPANY_PHONE } from "@/lib/brand";
import { PhoneIcon } from "./PhoneIcon";

export const ENQUIRE_TEL = `tel:${COMPANY_PHONE}`;

const base =
  "inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-i-xs font-medium uppercase tracking-[0.16em] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]";

const variants = {
  primary:
    "bg-white text-neutral-950 shadow-[0_10px_40px_rgba(0,0,0,0.35)] hover:bg-neutral-100 hover:shadow-[0_12px_44px_rgba(0,0,0,0.4)]",
  secondary:
    "border border-white/55 bg-black/30 text-white backdrop-blur-md hover:border-white hover:bg-white hover:text-neutral-950",
} as const;

type EnquireButtonProps = {
  variant?: keyof typeof variants;
  className?: string;
};

export function EnquireButton({ variant = "primary", className = "" }: EnquireButtonProps) {
  return (
    <a href={ENQUIRE_TEL} className={`${base} ${variants[variant]} ${className}`}>
      <PhoneIcon className="h-[1.15rem] w-[1.15rem] shrink-0" />
      Enquire now
    </a>
  );
}

export const enquireStickyClassName =
  "fixed right-0 top-1/2 z-40 flex -translate-y-1/2 flex-col items-center gap-2.5 rounded-l-md bg-white px-2.5 py-5 text-neutral-950 shadow-[0_8px_32px_rgba(0,0,0,0.45)] transition-colors hover:bg-neutral-100 sm:gap-3 sm:px-3 sm:py-6";
