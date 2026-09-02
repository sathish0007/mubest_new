"use client";
import { useEffect, useRef, useState } from "react";
import HeroVideoBackground from "./HeroVideoBackground";

const stats = [
  { value: 20, suffix: "+", label: "Years of Experience" },
  { value: null, suffix: null, label: "Island Wide Operations", isSingapore: true },
  { value: 300, suffix: "+", label: "Qualified Professionals" },
];

// Available project images for background slideshow
const projectImages = [
  "/images/1.png", "/images/2.png", "/images/3.png", "/images/4.png", "/images/5.png",
  "/images/6.png", "/images/7.png", "/images/8.png", "/images/9.png", "/images/10.png",
  "/images/11.png", "/images/13.png", "/images/14.png", "/images/15.png", "/images/16.png",
  "/images/17.png", "/images/18.png", "/images/19.png", "/images/20.png", "/images/22.png",
  "/images/23.png", "/images/24.png", "/images/25.png", "/images/26.png", "/images/27.png",
  "/images/29.png", "/images/31.png", "/images/35.png", "/images/37.png", "/images/39.png",
  "/images/40.png", "/images/41.png", "/images/42.png", "/images/43.png", "/images/44.png",
  "/images/45.png", "/images/47.png", "/images/49.png", "/images/50.png", "/images/51.png"
];
function SingaporeFlag() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 2" width="72" height="36" role="img"
    style={{boxShadow:"1px 1px 2px 2px #e0d8d8"}}>
      <title>Singapore Flag</title>
      <rect x="0" y="0" width="4" height="1" fill="#EF3340"/>
      <rect x="0" y="1" width="4" height="1" fill="#FFFFFF"/>
      <circle cx="0.75" cy="0.5" r="0.3" fill="#FFFFFF"/>
      <circle cx="0.86" cy="0.5" r="0.24" fill="#EF3340"/>
      <polygon points="1.3,0.27 1.319,0.333 1.385,0.333 1.333,0.37 1.352,0.433 1.3,0.396 1.248,0.433 1.267,0.37 1.215,0.333 1.281,0.333" fill="#FFFFFF"/>
      <polygon points="1.519,0.342 1.538,0.405 1.604,0.405 1.552,0.442 1.571,0.505 1.519,0.468 1.467,0.505 1.486,0.442 1.434,0.405 1.5,0.405" fill="#FFFFFF"/>
      <polygon points="1.435,0.577 1.454,0.64 1.52,0.64 1.468,0.677 1.487,0.74 1.435,0.703 1.383,0.74 1.402,0.677 1.35,0.64 1.416,0.64" fill="#FFFFFF"/>
      <polygon points="1.165,0.577 1.184,0.64 1.25,0.64 1.198,0.677 1.217,0.74 1.165,0.703 1.113,0.74 1.132,0.677 1.08,0.64 1.146,0.64" fill="#FFFFFF"/>
      <polygon points="1.081,0.342 1.1,0.405 1.166,0.405 1.114,0.442 1.133,0.505 1.081,0.468 1.029,0.505 1.048,0.442 0.996,0.405 1.062,0.405" fill="#FFFFFF"/>
    </svg>
  );
}
function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

// Animated Background Slideshow Component
function AnimatedBackground() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Only cover the right half (for large screens)
  return (
    <div
      className="absolute top-0 bottom-0 right-0 overflow-hidden pointer-events-none"
      style={{
        width: '50vw',
        height: '100%',
        zIndex: 0,
        // Offset for header if needed
        minHeight: 'calc(100vh - 80px)',
      }}
    >
      {projectImages.map((image, index) => (
        <div
          key={image}
          className={`absolute left-0 right-0 top-0 bottom-0 transition-all duration-[3000ms] ease-in-out ${
            index === currentImageIndex
              ? "opacity-100 scale-110"
              : "opacity-0 scale-105"
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            filter: 'brightness(0.96) contrast(1.1)',
            width: '100%',
            height: '100%',
          }}
          aria-label={`Electrical project ${index + 1}`}
        />
      ))}
    </div>
  );
}

function StatCard({ value, suffix, label, delay, start, isSingapore }: {
  value: any; suffix: string | null; label: string; delay: number; start: boolean; isSingapore?: boolean;
}) {
  const count = useCountUp(value ?? 0, 1800, start);
  return (
    <div
      className="flex flex-col items-center justify-center bg-white rounded-xl shadow-lg p-8 transition-transform duration-300 hover:scale-105 border border-[#e0f2f1]"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="font-display text-5xl md:text-6xl text-[#0e4672] font-extrabold mb-2 drop-shadow-sm flex items-center justify-center">
        {isSingapore ? (
          <SingaporeFlag />
        ) : (
          <>{start && count > 0 ? count : ""}{suffix}</>
        )}
      </div>
      <div className="font-heading text-sm md:text-base tracking-widest text-[#0e4672] uppercase mt-2">
        {label}
      </div>
    </div>
  );
}

export default function HeroSection() {
  // Slideshow state for project images
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section id="home" className="relative flex flex-col justify-center items-center overflow-hidden" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
        <HeroVideoBackground>
          <div className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto py-48 md:py-64 px-4 text-center">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-[#fff] mb-4 tracking-tight drop-shadow-lg">
              QUALITY IS OUR PRIORITY
            </h1>
            <br/>
            {/* <p className="font-body text-lg md:text-xl text-slate-700 mb-10">
              We are a trusted main contractor in Singapore, specializing in delivering quality residential projects with excellence and reliability.
            </p> */}
            {/* <a
              href="#contact"
              className="inline-block px-10 py-4 bg-[#0e4672] text-white font-heading font-semibold text-lg rounded-full shadow-lg hover:bg-[#0d6f60] transition-colors duration-300"
            >
              Get in Touch
            </a> */}
            {/* <div className="flex flex-wrap justify-center items-center gap-6 mt-12">
              <img src="/images/biz-safe-transparent-rcpset4ksj9t4gx7ydpg773coqqsatx6w965z529z4.png" alt="BizSafe - Workplace Safety and Health Certification" className="h-10 object-contain" width={100} height={40} decoding="async" />
              <img src="/images/GGBD-logo-transparent-rcpsf85ztvuea8bdik7hb3aq6wonpzkwablxnkfz7k.png" alt="GGBD - Singapore Enterprise Development Logo" className="h-10 object-contain" width={100} height={40} decoding="async" />
              <img src="/images/progress-wage-transparent-rcpsfhkdq879ibxpzo9r00xc4rebuym7nm4sgc21hc.png" alt="Progressive Wage Model - Singapore Program" className="h-10 object-contain" width={100} height={40} decoding="async" />
            </div> */}
          </div>
        </HeroVideoBackground>
      </section>
      {/* Stats row below hero section, below video */}
      <section className="relative z-20 max-w-6xl mx-auto px-4 pb-20 -mt-12" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} delay={i * 100} start={true} />
          ))}
        </div>
      </section>
    </>
  );
}
