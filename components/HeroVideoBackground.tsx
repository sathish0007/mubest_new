// Place your downloaded video at public/videos/singapore-hero.mp4 before using this code.

import { basePath } from "@/app/util";
import React, { useEffect } from "react";

export default function HeroVideoBackground({ children }: { children?: React.ReactNode }) {
  const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
  };
  useEffect(() => {
   setTimeout(() => {
      handleVideoLoaded();
    }, 3000); // Adjust the timeout duration as needed
  }, []);
  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">

     
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={basePath + "/videos/singapore-hero.mp4"}
        style={{ display: isVideoLoaded ? "block" : "none" }}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={basePath + "/images/hero-fallback.jpg"}
      />
      
        <img
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={basePath + "/images/hero-bg.webp"}
          alt="Hero Fallback"
          style={{ display: isVideoLoaded ? "none" : "block" }}
        />
    
      <div className="relative z-20 w-full flex flex-col items-center justify-center h-full">
        {children}
      </div>
    </div>
  );
}
