"use client";

import Image from "next/image";
import { EnquireButton } from "@/components/EnquireButton";
import { ctaLinks } from "@/data/home";
import { Reveal } from "./Reveal";

/** Landscape — left panel + section background */
const ABOUT_IMAGE_PRIMARY =
  "/pexels-blackcurrant-great-2016663774-33410957 (2).jpg";
/** Portrait — right panel */
const ABOUT_IMAGE_SECONDARY = "/pexels-biravencrow-33166275.jpg";

function AboutPracticeImage({
  src,
  alt,
  width,
  height,
  objectPosition = "center",
  className = "",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  objectPosition?: string;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-neutral-800 ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-full w-full object-cover"
        style={{ objectPosition }}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
}

function CtaRow() {
  return (
    <div className="mt-10 flex flex-wrap items-center gap-2">
      <EnquireButton variant="primary" />
      {ctaLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="inline-flex items-center gap-2 bg-white px-4 py-3 text-i-xs text-black transition-transform hover:scale-[1.02]"
        >
          {link.label}
          <span aria-hidden>→</span>
        </a>
      ))}
    </div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="relative min-h-[100svh] overflow-hidden bg-neutral-900 text-white">
      <Image
        src={ABOUT_IMAGE_PRIMARY}
        alt=""
        fill
        priority
        className="object-cover object-center blur-[2px] scale-105"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="site-container relative z-10 flex min-h-[100svh] flex-col justify-between py-20 md:py-24">
        <Reveal className="w-full max-w-5xl">
          <p className="text-p-sm uppercase tracking-[0.12em] text-white/90 md:text-sm">
            About Us
          </p>
          <h2 className="text-editorial-title mt-4 max-w-4xl">About the practice</h2>
          <p className="text-editorial-body mt-6 max-w-4xl text-white/80 md:mt-8">
            We are{" "}
            <span className="font-medium text-white">
              architects, designers, and technologists
            </span>
            .{" "}
            <span className="font-medium text-white">Thinkers, makers, and collaborators</span>
            . A diverse team working across global studios to deliver ambitious work with{" "}
            <span className="font-medium text-white">care and precision</span>.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-12 md:items-end">
          <Reveal className="md:col-span-7" delay={0.1}>
            <AboutPracticeImage
              src={ABOUT_IMAGE_PRIMARY}
              width={6000}
              height={3376}
              alt="EXCEL ATELIER — architecture and urban design"
              objectPosition="center 40%"
              className="aspect-[16/10]"
            />
          </Reveal>
          <Reveal className="md:col-span-5 md:-ml-16 md:mb-10" delay={0.2}>
            <AboutPracticeImage
              src={ABOUT_IMAGE_SECONDARY}
              width={1670}
              height={2500}
              alt="EXCEL ATELIER — studio and workspace"
              objectPosition="center 35%"
              className="aspect-[4/5] border border-white/10 shadow-2xl"
            />
          </Reveal>
        </div>

        <CtaRow />
      </div>
    </section>
  );
}

export function ResearchSection() {
  return (
    <section id="research" className="section-pad-large bg-black text-white">
      <div className="site-container grid gap-10 md:grid-cols-2 md:items-center">
        <Reveal className="max-w-2xl md:max-w-none">
          <p className="text-p-sm uppercase tracking-[0.12em] text-white/90 md:text-sm">
            Research &amp; Technology
          </p>
          <h2 className="text-editorial-title mt-4">Always ahead of the curve</h2>
          <p className="text-editorial-body mt-6 max-w-3xl text-white/80 md:mt-8">
            Led by a{" "}
            <span className="font-medium text-white">culture of inquiry</span>, we{" "}
            <span className="font-medium text-white">experiment, test, and refine</span>{" "}
            continuously. We anticipate challenges, prototype solutions, and translate
            research into{" "}
            <span className="font-medium text-white">built and virtual environments</span>
            .
          </p>
          <button
            type="button"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.14em] text-white transition-colors hover:text-white/80 md:mt-10 md:text-base"
          >
            View More
            <span aria-hidden>→</span>
          </button>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80"
              alt=""
              fill
              className="object-cover transition-transform duration-700 hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function SustainabilitySection() {
  return (
    <section id="approach" className="relative min-h-[100svh] overflow-hidden bg-black text-white">
      <Image
        src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=2000&q=80"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="site-container relative z-10 flex min-h-[100svh] flex-col justify-center py-20">
        <Reveal>
          <p className="text-p-sm uppercase tracking-[0.12em] text-white/90 md:text-sm">
            Sustainability
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-8 w-full max-w-4xl">
          <div className="relative aspect-[16/10] overflow-hidden rounded-sm">
            <Image
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 70vw"
            />
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mt-8 w-full max-w-4xl md:max-w-5xl">
          <h2 className="text-editorial-title">Designing for longevity</h2>
          <p className="text-editorial-body mt-6 max-w-4xl text-white/80 md:mt-8">
            We create buildings and environments intended to endure. From{" "}
            <span className="font-medium text-white">low-carbon design strategies</span>{" "}
            to{" "}
            <span className="font-medium text-white">climate modelling workflows</span>,
            sustainability is woven into every stage of our process.
          </p>
        </Reveal>

        <Reveal delay={0.25} className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
          <div className="relative hidden aspect-[4/3] overflow-hidden md:block">
            <Image
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
              alt=""
              fill
              className="object-cover"
              sizes="40vw"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
