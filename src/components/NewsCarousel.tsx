"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { newsItems } from "@/data/home";
import { COMPANY_NAME } from "@/lib/brand";
import { Reveal } from "./Reveal";

const total = newsItems.length;

export function NewsCarousel() {
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragX = useMotionValue(0);
  const dragOpacity = useTransform(dragX, [-120, 0, 120], [0.92, 1, 0.92]);

  const goTo = (index: number) => {
    const next = (index + total) % total;
    setActive(next);
    trackRef.current?.children[next]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onScroll = () => {
      const cards = Array.from(track.children) as HTMLElement[];
      const center = track.scrollLeft + track.clientWidth / 2;
      let closest = 0;
      let minDistance = Number.POSITIVE_INFINITY;

      cards.forEach((card, index) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const distance = Math.abs(center - cardCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closest = index;
        }
      });

      setActive(closest);
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="news"
      className="overflow-x-hidden bg-black px-4 pt-6 text-white sm:px-6 sm:pt-8 md:px-10 md:pt-10 pb-12 sm:pb-16 md:pb-24"
    >
      <div className="mx-auto w-full max-w-[1920px]">
        <Reveal className="mb-6 md:mb-10">
          <div className="mobile-readable space-y-3 sm:space-y-4 md:max-w-5xl md:space-y-6">
            <p className="text-p-sm uppercase tracking-[0.12em] text-white/90 md:text-sm">
              News
            </p>
            <h2 className="text-editorial-title tracking-tight text-white">
              What&apos;s new at {COMPANY_NAME}
            </h2>
            <p className="text-editorial-body text-white/80 md:max-w-4xl">
              We&apos;re a growing studio with work in design, on site, and in the
              pipeline. Here we share{" "}
              <span className="font-medium text-white">project launches</span>,{" "}
              <span className="font-medium text-white">work in progress</span>, and{" "}
              <span className="font-medium text-white">partnerships</span> that shape
              what we build next—clear updates, no filler.
            </p>
          </div>
        </Reveal>

        <div
          ref={trackRef}
          className="-mx-4 flex snap-x snap-mandatory gap-2 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:gap-[5px] sm:px-6 md:mx-0 md:px-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {newsItems.map((item, index) => (
            <motion.article
              key={item.id}
              style={{ opacity: index === active ? dragOpacity : 1 }}
              className="group w-[min(88vw,661px)] shrink-0 snap-center p-1 sm:w-[min(90vw,661px)] sm:p-2"
            >
              <div className="relative aspect-[661/640] w-full overflow-hidden bg-neutral-900">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 661px"
                />
                <div className="absolute inset-x-2 bottom-2 rounded-sm bg-white p-3 text-black sm:p-4 md:inset-x-3 md:bottom-3 md:p-5">
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-2 text-[0.625rem] sm:mb-4 sm:gap-3 sm:text-i-xs">
                    <span className="rounded-full bg-black px-3 py-1 text-white">
                      News
                    </span>
                    <span className="text-black/60">{item.date}</span>
                    <span className="text-black/60">
                      {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-base leading-snug font-medium tracking-tight text-black sm:text-h1">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-black/70 sm:mt-4 sm:text-p">
                    {item.excerpt}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between gap-4">
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous news item"
              onClick={() => goTo(active - 1)}
              className="h-10 w-10 border border-white/30 text-sm transition-colors hover:bg-white hover:text-black"
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Next news item"
              onClick={() => goTo(active + 1)}
              className="h-10 w-10 border border-white/30 text-sm transition-colors hover:bg-white hover:text-black"
            >
              →
            </button>
          </div>
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.12}
            style={{ x: dragX }}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) goTo(active + 1);
              if (info.offset.x > 60) goTo(active - 1);
            }}
            className="hidden h-1 w-40 rounded-full bg-white/20 md:block"
          >
            <div
              className="h-full rounded-full bg-[#197d66] transition-all"
              style={{ width: `${((active + 1) / total) * 100}%` }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
