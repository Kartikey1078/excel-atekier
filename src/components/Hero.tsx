"use client";

import { motion } from "framer-motion";
import { EnquireButton } from "@/components/EnquireButton";
import { COMPANY_NAME } from "@/lib/brand";

const words = ["Always", "Advancing", "Built Form"];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export function Hero() {
  return (
    <section id="hero" className="relative h-[100svh] w-full overflow-hidden bg-black">
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden
      >
        <source src="/bannersmall.mp4" type="video/mp4" />
      </video>
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-black/25 md:bg-black/20"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[min(65svh,480px)] bg-gradient-to-t from-black/88 via-black/50 to-transparent md:h-[min(42svh,320px)] md:from-black/70 md:via-black/30"
        aria-hidden
      />

      <div className="site-container relative z-[2] flex min-h-[100svh] flex-col justify-end pb-12 pt-24 sm:pb-14 md:pb-16 md:pt-0">
        <div className="w-full md:hidden">
          <motion.p
            className="text-hero-eyebrow mb-5 font-medium uppercase text-white/65"
            {...fadeUp(0.12)}
          >
            {COMPANY_NAME}
          </motion.p>

          <h1 className="w-full max-w-none text-white">
            <motion.span
              className="text-hero-display block font-semibold tracking-tight"
              {...fadeUp(0.22)}
            >
              Bold spaces.
            </motion.span>
            <motion.span
              className="text-hero-display -mt-0.5 block font-light text-white/92 sm:mt-0"
              {...fadeUp(0.32)}
            >
              Built clear.
            </motion.span>
            <motion.span
              className="text-hero-subline mt-2 block font-medium text-white/88 sm:mt-3"
              {...fadeUp(0.42)}
            >
              For founders & growing teams.
            </motion.span>
          </h1>

          <motion.p
            className="text-hero-lead mt-6 max-w-[24rem] text-pretty text-white/72 sm:max-w-none sm:pr-8"
            {...fadeUp(0.52)}
          >
            Workplaces and retail, from first sketch to opening day. Small studio, direct access, fast decisions.
          </motion.p>
          <motion.div className="pointer-events-auto mt-7" {...fadeUp(0.62)}>
            <EnquireButton variant="primary" />
          </motion.div>
        </div>

        <div className="hidden w-full max-w-5xl flex-col items-start gap-8 md:flex">
          <h1
            className="pointer-events-none flex w-full flex-wrap justify-start gap-x-3 gap-y-1 select-none lg:gap-x-6"
            aria-label="Always Advancing Built Form"
          >
            {words.map((word, index) => (
              <motion.p
                key={word}
                className="text-display-lg text-white"
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2 + index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {word}
              </motion.p>
            ))}
          </h1>
          <motion.div
            className="pointer-events-auto shrink-0"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <EnquireButton variant="primary" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
