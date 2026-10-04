"use client";

import Image from "next/image";
import { expertiseItems } from "@/data/home";
import { EnquireButton } from "@/components/EnquireButton";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function ExpertiseGrid() {
  return (
    <section id="expertise" className="section-pad-small bg-black text-white">
      <div className="mx-auto max-w-[1920px]">
        <div className="grid gap-10 px-4 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:items-start md:gap-8 md:px-10 lg:grid-cols-[420px_1fr]">
          <Reveal>
            <SectionHeading
              tag="Expertise"
              title="Explore our wide range of expertise"
              description="All scales, all sectors, all budgets. Around the world and into virtual environments. From product collaborations to city-scale masterplans, our commitment to thoughtful design stays constant."
            />
            <div className="mt-8">
              <EnquireButton variant="secondary" />
            </div>
          </Reveal>

          <div className="grid grid-cols-2 border-t border-l border-white/20 md:grid-cols-4">
            {expertiseItems.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="group border-r border-b border-white/20 p-2 pb-8">
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      style={{ objectPosition: item.objectPosition ?? "50% 50%" }}
                      sizes="(max-width: 600px) 50vw, (max-width: 1024px) 30vw, 25vw"
                    />
                  </div>
                  <h4 className="mt-4 text-sm tracking-tight md:text-base">{item.title}</h4>
                  <button
                    type="button"
                    className="mt-3 text-i-xs text-white/60 transition-colors group-hover:text-white"
                  >
                    View More
                  </button>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
