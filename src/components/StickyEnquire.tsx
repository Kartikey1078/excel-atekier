import { COMPANY_PHONE_DISPLAY } from "@/lib/brand";
import { ENQUIRE_TEL, enquireStickyClassName } from "./EnquireButton";
import { PhoneIcon } from "./PhoneIcon";

export function StickyEnquire() {
  return (
    <a
      href={ENQUIRE_TEL}
      className={enquireStickyClassName}
      aria-label={`Enquire now — call ${COMPANY_PHONE_DISPLAY}`}
    >
      <PhoneIcon className="h-[1.25rem] w-[1.25rem] shrink-0" />
      <span className="text-[0.65rem] font-medium uppercase tracking-[0.22em] [writing-mode:vertical-rl] sm:text-i-xs sm:tracking-[0.14em]">
        Enquire now
      </span>
    </a>
  );
}
