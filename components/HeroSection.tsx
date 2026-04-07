"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 15, suffix: "yrs", label: "Industry Experience" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 24, suffix: "/7", label: "Emergency Support" },
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

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main background images with enhanced transitions */}
      {projectImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-all duration-[3000ms] ease-in-out ${
            index === currentImageIndex
              ? "opacity-100 scale-110"
              : "opacity-0 scale-105"
          }`}
        >
          <img
            src={image}
            alt={`Electrical project ${index + 1}`}
            className="w-full h-full object-cover filter brightness-50 contrast-125"
            loading="lazy"
          />
        </div>
      ))}

      {/* Dynamic gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#030712]/90 via-[#030712]/70 to-[#030712]/90" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/95 via-transparent to-[#030712]/80" />

      {/* Animated mesh overlay */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="mesh" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="1" fill="#FFC107" opacity="0.3" />
              <line x1="0" y1="50" x2="100" y2="50" stroke="#FFC107" strokeWidth="0.5" opacity="0.2" />
              <line x1="50" y1="0" x2="50" y2="100" stroke="#FFC107" strokeWidth="0.5" opacity="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mesh)" />
        </svg>
      </div>
    </div>
  );
}

function StatCard({ value, suffix, label, delay, start }: { value: number; suffix: string; label: string; delay: number; start: boolean }) {
  const count = useCountUp(value, 1800, start);
  return (
    <div
      className={`relative group text-center p-6 border-grad rounded-sm bg-[rgba(13,21,37,0.6)] backdrop-blur-sm hover:bg-[rgba(255,193,7,0.04)] transition-all duration-500 reveal ${start ? "visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 rounded-sm bg-gradient-to-b from-[rgba(255,193,7,0.03)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className={`font-display text-5xl md:text-6xl text-[#FFC107] glow-text leading-none mb-2 ${start ? "count-animate" : ""}`}>
        {start ? count : 0}{suffix}
      </div>
      <div className="font-heading text-xs tracking-[0.2em] text-slate-400 uppercase">{label}</div>
    </div>
  );
}

export default function HeroSection() {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const [lineVisible, setLineVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLineVisible(true), 600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden">

      {/* Animated Project Images Background */}
      <AnimatedBackground />

      {/* Background elements overlay */}
      <div className="absolute inset-0 z-10">
        {/* Floating Electrical Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#FFC107] rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Enhanced Circuit Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFC107" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#FF8F00" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#FFC107" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <line x1="0" y1="20%" x2="25%" y2="20%" stroke="url(#circuitGradient)" strokeWidth="1" strokeDasharray="6 12" className="animate-pulse">
            <animate attributeName="stroke-dashoffset" values="0;24" dur="3s" repeatCount="indefinite" />
          </line>
          <line x1="75%" y1="80%" x2="100%" y2="80%" stroke="url(#circuitGradient)" strokeWidth="1" strokeDasharray="6 12" className="animate-pulse">
            <animate attributeName="stroke-dashoffset" values="24;0" dur="3s" repeatCount="indefinite" />
          </line>
          <line x1="90%" y1="0" x2="90%" y2="30%" stroke="url(#circuitGradient)" strokeWidth="1" strokeDasharray="6 12" className="animate-pulse">
            <animate attributeName="stroke-dashoffset" values="0;24" dur="4s" repeatCount="indefinite" />
          </line>
          <circle cx="25%" cy="20%" r="4" fill="url(#circuitGradient)" opacity="0.7" className="animate-ping">
            <animate attributeName="r" values="2;6;2" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="90%" cy="30%" r="3" fill="url(#circuitGradient)" opacity="0.6" className="animate-ping">
            <animate attributeName="r" values="1.5;4.5;1.5" dur="2.5s" repeatCount="indefinite" />
          </circle>
        </svg>

        {/* Dramatic Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-radial from-[#FFC107]/20 via-[#FF8F00]/10 to-transparent blur-[150px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-radial from-[#FF8F00]/15 via-[#FFC107]/8 to-transparent blur-[120px] animate-pulse-slow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-radial from-[#FFC107]/25 via-[#FF8F00]/12 to-transparent blur-[100px] animate-pulse-slow" style={{ animationDelay: "2s" }} />

        {/* Lightning Effects */}
        <div className="absolute top-8 right-8 lightning">
          <svg width="60" height="120" viewBox="0 0 60 120" fill="none" className="drop-shadow-2xl">
            <path d="M36 3L6 66h24l-3 51 42-69H36L48 3z" fill="#FFC107" opacity="0.8" filter="url(#glow)" className="animate-pulse">
              <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
            </path>
            <defs>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
                <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>
          </svg>
        </div>

        {/* Hexagonal Grid with Animation */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexAnimated" x="0" y="0" width="120" height="104" patternUnits="userSpaceOnUse">
              <polygon points="60,4 108,31 108,77 60,104 12,77 12,31" fill="none" stroke="#FFC107" strokeWidth="1" opacity="0.6">
                <animate attributeName="stroke-opacity" values="0.2;0.8;0.2" dur="4s" repeatCount="indefinite" />
              </polygon>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexAnimated)" />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">

          {/* Left: Enhanced Text Content */}
          <div className="space-y-8">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 border-2 border-[#FFC107]/30 bg-gradient-to-r from-[#FFC107]/10 via-[#FF8F00]/5 to-[#FFC107]/10 rounded-full backdrop-blur-sm opacity-0 animate-fade-up">
              <div className="w-3 h-3 rounded-full bg-[#FFC107] animate-pulse shadow-lg shadow-[#FFC107]/50" />
              <span className="font-mono text-sm text-[#FFC107] tracking-[0.2em] uppercase font-semibold">
                EMA Licensed • BCA Registered
              </span>
              <div className="w-3 h-3 rounded-full bg-[#FFC107] animate-pulse shadow-lg shadow-[#FFC107]/50" style={{ animationDelay: "0.5s" }} />
            </div>

            {/* Dramatic Heading */}
            <div className="space-y-4">
              <h1 className="font-display text-6xl md:text-7xl lg:text-8xl leading-[0.85] tracking-tighter opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
                <span className="block text-white drop-shadow-2xl">
                  POWERING
                </span>
                <span className="block bg-gradient-to-r from-[#FFC107] via-[#FF8F00] to-[#FFC107] bg-clip-text text-transparent animate-gradient-x">
                  SINGAPORE'S
                </span>
                <span className="block text-white drop-shadow-2xl">
                  INFRASTRUCTURE
                </span>
              </h1>

              {/* Animated Underline */}
              <div className="flex items-center gap-4">
                <div className="h-1 bg-gradient-to-r from-[#FFC107] to-[#FF8F00] rounded-full animate-pulse-glow opacity-0 animate-fade-up" style={{ animationDelay: "0.8s", width: "120px" }} />
                <div className="w-3 h-3 rounded-full bg-[#FFC107] opacity-0 animate-fade-up" style={{ animationDelay: "1s" }} />
              </div>
            </div>

            {/* Enhanced Description */}
            <p className="font-body text-lg md:text-xl leading-relaxed text-slate-300 max-w-2xl opacity-0 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <span className="text-[#FFC107] font-semibold">Mubest Pte Ltd</span> delivers
              <span className="text-white font-medium"> world-class electrical solutions</span> with
              <span className="text-[#FFC107]"> 15+ years of excellence</span>.
              From critical infrastructure to residential projects, we ensure
              <span className="text-white font-medium"> zero-downtime reliability</span> and
              <span className="text-[#FFC107]"> unmatched safety standards</span>.
            </p>

            {/* Premium CTA Buttons */}
            <div className="flex flex-wrap gap-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.6s" }}>
              <a
                href="#contact"
                className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-[#FFC107] via-[#FF8F00] to-[#FFC107] text-[#030712] font-heading font-bold text-lg tracking-[0.1em] uppercase rounded-lg hover:shadow-2xl hover:shadow-[#FFC107]/50 transition-all duration-500 transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 group-hover:translate-x-full transition-all duration-700" />
                <span className="relative flex items-center gap-3">
                  ⚡ Get Quote
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>

              <a
                href="#projects"
                className="group px-8 py-4 border-2 border-[#FFC107]/50 bg-[#FFC107]/5 backdrop-blur-sm text-[#FFC107] font-heading font-semibold text-lg tracking-[0.1em] uppercase rounded-lg hover:bg-[#FFC107]/10 hover:border-[#FFC107] transition-all duration-500 transform hover:scale-105"
              >
                <span className="flex items-center gap-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Our Work
                </span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 pt-4 opacity-0 animate-fade-up" style={{ animationDelay: "0.8s" }}>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm text-slate-400">24/7 Emergency Response</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FFC107] animate-pulse" />
                <span className="text-sm text-slate-400">500+ Projects Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-sm text-slate-400">ISO 9001:2015 Certified</span>
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative hidden lg:flex items-center justify-center">
            {/* Rotating ring */}
            <div className="absolute w-96 h-96 rounded-full border border-[rgba(255,193,7,0.1)] animate-spin-slow" />
            <div className="absolute w-80 h-80 rounded-full border border-dashed border-[rgba(255,193,7,0.06)]" style={{ animationDirection: "reverse" }} />

            {/* Central bolt */}
            <div className="relative z-10 animate-float">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-[rgba(255,193,7,0.12)] to-[rgba(255,143,0,0.04)] border border-[rgba(255,193,7,0.2)] flex items-center justify-center glow-volt">
                <svg width="100" height="160" viewBox="0 0 100 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M60 10L10 90h40l-10 60 50-90H50L60 10z" fill="url(#boltGrad)" filter="url(#boltGlow)"/>
                  <defs>
                    <linearGradient id="boltGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFF176"/>
                      <stop offset="100%" stopColor="#FF8F00"/>
                    </linearGradient>
                    <filter id="boltGlow">
                      <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
                      <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
                    </filter>
                  </defs>
                </svg>
              </div>

              {/* Orbiting indicators */}
              {[
                { label: "Maintenance", angle: -30, icon: "🔧" },
                { label: "Construction", angle: 90, icon: "🏗️" },
                { label: "Emergency", angle: 210, icon: "⚡" },
              ].map(({ label, angle, icon }) => {
                const rad = (angle * Math.PI) / 180;
                const r = 150;
                const x = Math.cos(rad) * r;
                const y = Math.sin(rad) * r;
                return (
                  <div
                    key={label}
                    className="absolute flex items-center gap-2 glass rounded-full px-3 py-1.5 whitespace-nowrap"
                    style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)`, transform: "translate(-50%, -50%)" }}
                  >
                    <span className="text-sm">{icon}</span>
                    <span className="font-heading text-xs text-slate-300 tracking-wider">{label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div ref={statsRef} className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} delay={i * 100} start={statsVisible} />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-mono text-[10px] tracking-[0.3em] text-slate-500 uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#FFC107] to-transparent animate-pulse" />
      </div>
    </section>
  );
}
