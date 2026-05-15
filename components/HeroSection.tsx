"use client";
import { useEffect, useRef, useState } from "react";
import HeroVideoBackground from "./HeroVideoBackground";

const stats = [
  { value: 20, suffix: "+", label: "Years of Experience" },
  { value: 900, suffix: "+", label: "HDB Blocks Rewired" },
  { value: 10, suffix: "+", label: "Town Councils Served" },
  { value: 100, suffix: "+", label: "Commercial Sites" },
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

function StatCard({ value, suffix, label, delay, start }: { value: number; suffix: string; label: string; delay: number; start: boolean }) {
  const count = useCountUp(value, 1800, start);
  return (
    <div
      className="flex flex-col items-center justify-center bg-white rounded-xl shadow-lg p-8 transition-transform duration-300 hover:scale-105 border border-[#e0f2f1]"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="font-display text-5xl md:text-6xl text-[#FFC107] font-extrabold mb-2 drop-shadow-sm">
        {start ? count : 0}{suffix}
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
              <img src="/images/biz-safe-transparent-rcpset4ksj9t4gx7ydpg773coqqsatx6w965z529z4.png" alt="BizSafe" className="h-10 object-contain" />
              <img src="/images/GGBD-logo-transparent-rcpsf85ztvuea8bdik7hb3aq6wonpzkwablxnkfz7k.png" alt="GGBD" className="h-10 object-contain" />
              <img src="/images/progress-wage-transparent-rcpsfhkdq879ibxpzo9r00xc4rebuym7nm4sgc21hc.png" alt="Progressive Wage" className="h-10 object-contain" />
            </div> */}
          </div>
        </HeroVideoBackground>
      </section>
      {/* Stats row below hero section, below video */}
      <section className="relative z-20 max-w-6xl mx-auto px-4 pb-20 -mt-12" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} delay={i * 100} start={true} />
          ))}
        </div>
      </section>
    </>
  );
}
