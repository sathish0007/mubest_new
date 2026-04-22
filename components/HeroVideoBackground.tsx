// Place your downloaded video at public/videos/singapore-hero.mp4 before using this code.

import React from "react";

export default function HeroVideoBackground({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/videos/singapore-hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/images/hero-fallback.jpg"
      />
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div className="relative z-20 w-full flex flex-col items-center justify-center h-full">
        {children}
      </div>
    </div>
  );
}
