"use client";

import { useRef } from "react";
import { Reveal } from "./Reveal";

export function VideoBanner() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="relative bg-black">
      <Reveal className="relative aspect-[4/5] w-full overflow-hidden md:aspect-[16/9] lg:aspect-[21/9]">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="Studio showcase video"
        >
          <source src="/bannersmall.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/15" />
        <div className="site-container absolute inset-x-0 top-6 md:top-10">
          <p className="text-p-sm text-white">Video</p>
        </div>
        <button
          type="button"
          className="absolute bottom-8 left-4 z-10 flex items-center gap-3 bg-white px-5 py-3 text-i-xs text-black transition-transform hover:scale-[1.02] md:left-10"
          onClick={() => {
            const video = videoRef.current;
            if (!video) return;
            if (document.fullscreenElement) {
              void document.exitFullscreen();
            } else {
              void video.requestFullscreen();
            }
          }}
        >
          <span className="inline-block h-2 w-2 rounded-full bg-black" />
          WATCH NOW
        </button>
      </Reveal>
    </section>
  );
}
