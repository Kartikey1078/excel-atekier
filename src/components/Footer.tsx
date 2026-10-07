"use client";

import Image from "next/image";
import { FooterEnquiryForm } from "./FooterEnquiryForm";
import { Logo } from "./Logo";
import { COMPANY_NAME } from "@/lib/brand";

const topLinks = ["Contact", "Careers", "Reports", "Expertise"];
const bottomLinks = ["Privacy Policy", "Terms of Use", "Sustainability", "Architecture"];

export function Footer() {
  return (
    <footer id="contact" className="relative scroll-mt-28 overflow-x-hidden bg-black pb-2 text-white">
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=2000&q=80"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/50" />
      </div>

      <div className="site-container relative z-10 py-10 md:py-14">
        <div className="flex flex-col gap-8 border-b border-white/20 pb-8 md:flex-row md:items-center md:justify-between">
          <Logo size="footer" />
          <div className="flex flex-wrap gap-4 md:gap-8">
            {topLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-i-xs text-white/80 transition-colors hover:text-white"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div>
            <p className="text-p-sm uppercase tracking-[0.12em] text-white/70">Contact</p>
            <p className="mt-4 max-w-md text-p-sm leading-relaxed text-white/60">
              {COMPANY_NAME} is an architecture and design studio focused on thoughtful
              spaces, research-led process, and long-term impact.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 transition-colors hover:bg-white hover:text-black"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M11.742 2.26a2.79 2.79 0 0 0-1.962-.816H4.225a2.786 2.786 0 0 0-2.778 2.778v5.556a2.786 2.786 0 0 0 2.778 2.778H9.78a2.786 2.786 0 0 0 2.778-2.778V4.222a2.79 2.79 0 0 0-.816-1.962M4.225.333H9.78a3.9 3.9 0 0 1 3.89 3.89v5.555a3.9 3.9 0 0 1-3.89 3.889H4.225a3.9 3.9 0 0 1-3.89-3.89V4.223A3.9 3.9 0 0 1 4.226.333m5.926 3.749a.834.834 0 1 0 .926-1.386.834.834 0 0 0-.926 1.386m-1.914 1.07a2.222 2.222 0 1 0-2.47 3.696 2.222 2.222 0 0 0 2.47-3.696m-3.086-.924a3.333 3.333 0 1 1 3.703 5.543 3.333 3.333 0 0 1-3.703-5.543"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          <FooterEnquiryForm />
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/15 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-4 md:gap-6">
            {bottomLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-i-xs text-white/70 transition-colors hover:text-white"
              >
                {link}
              </a>
            ))}
          </div>
          <p className="text-i-xs text-white/60">©2026 {COMPANY_NAME}</p>
        </div>
      </div>
    </footer>
  );
}
