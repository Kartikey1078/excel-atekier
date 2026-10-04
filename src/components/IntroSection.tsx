"use client";

import { EnquireButton } from "@/components/EnquireButton";
import { COMPANY_NAME } from "@/lib/brand";
import { Reveal } from "./Reveal";

export function IntroSection() {
  return (
    <section className="bg-black px-4 pt-12 text-white sm:px-6 sm:pt-16 md:px-10 md:pt-24 pb-6 sm:pb-8 md:pb-10">
      <div className="mx-auto w-full max-w-[1920px]">
        <Reveal>
          <div className="grid gap-8 md:grid-cols-[2fr_3fr] md:gap-8">
            <h2 className="text-intro-left text-balance md:max-w-none md:pr-4">
              We design bold spaces for teams just starting out.
            </h2>
            <div>
              <h2 className="text-intro-right gradient-editorial text-pretty">
                {COMPANY_NAME} is a new studio built for founders who need clarity fast—
                not another slow, siloed process. From concept to built reality, we
                help you shape workplaces, retail, and brand spaces that feel
                intentional on day one. Small team, direct access, no fluff. Let&apos;s
                make your first impression count.
              </h2>
            </div>
          </div>
        </Reveal>
        <Reveal className="mt-8 md:mt-10" delay={0.08}>
          <EnquireButton variant="secondary" />
        </Reveal>
      </div>
    </section>
  );
}
