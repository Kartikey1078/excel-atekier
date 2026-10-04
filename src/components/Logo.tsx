import Image from "next/image";
import { COMPANY_NAME } from "@/lib/brand";

type LogoProps = {
  className?: string;
  /** Taller mark for footer */
  size?: "header" | "footer";
};

export function Logo({ className = "", size = "header" }: LogoProps) {
  const sizeClass =
    size === "footer"
      ? "h-16 w-auto max-w-[min(90vw,360px)] sm:h-20 sm:max-w-[400px]"
      : "h-10 w-auto max-w-[min(52vw,220px)] sm:h-11 sm:max-w-[260px] md:h-12 md:max-w-[300px]";

  return (
    <Image
      src="/logo.png"
      alt={COMPANY_NAME}
      width={800}
      height={320}
      priority={size === "header"}
      className={`object-contain object-left ${sizeClass} ${className}`}
    />
  );
}
