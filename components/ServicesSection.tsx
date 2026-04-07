"use client";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "Housing Precinct Rewiring",
    description: "Complete electrical rewiring solutions for residential housing precincts, ensuring safety and modern electrical standards.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    category: "Residential"
  },
  {
    title: "MSB Works",
    description: "Main Switch Board installation, maintenance, and upgrades for commercial and industrial facilities.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10h3l-3 3v-3z" />
      </svg>
    ),
    category: "Commercial"
  },
  {
    title: "TurnKey / Sub Projects",
    description: "End-to-end electrical project management from design to completion for complex installations.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    category: "Project Management"
  },
  {
    title: "Sub Stations - Electrical",
    description: "Design, installation, and maintenance of electrical substations for power distribution.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 2l3 3-3 3V2z" />
      </svg>
    ),
    category: "Industrial"
  },
  {
    title: "Town Council Electrical Maintenance",
    description: "Comprehensive electrical maintenance services under term contracts for town councils and estates.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    category: "Maintenance"
  },
  {
    title: "Survey & Asset Coding",
    description: "Detailed electrical system surveys and asset coding for inventory management and maintenance planning.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    category: "Survey"
  },
  {
    title: "Testing & Tuning",
    description: "Electrical system testing, calibration, and performance tuning to ensure optimal operation.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    category: "Testing"
  },
  {
    title: "Mechanical Completion",
    description: "Final mechanical completion and commissioning of electrical systems before handover.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    category: "Commissioning"
  },
  {
    title: "Distribution Board",
    description: "Installation and maintenance of electrical distribution boards and panel systems.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
    category: "Installation"
  },
  {
    title: "Electrical Room & Instrumentation",
    description: "Complete electrical room setup and instrumentation for control and monitoring systems.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    category: "Control Systems"
  },
  {
    title: "Lamp Post Installation",
    description: "Professional installation of street lighting and decorative lamp posts with proper foundations.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    category: "Lighting"
  },
  {
    title: "CCTV Camera Installation",
    description: "Security camera system installation, configuration, and integration with electrical systems.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 10h.01M11 10h.01" />
      </svg>
    ),
    category: "Security"
  },
  {
    title: "Cable Tray Works",
    description: "Cable management solutions including cable tray installation for switchrooms and distribution areas.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    category: "Infrastructure"
  },
  {
    title: "Lighting Maintenance",
    description: "Regular maintenance and repair services for housing estate lighting systems.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    category: "Maintenance"
  },
  {
    title: "Concrete Foundation Works",
    description: "Concrete foundation and base installation for electrical infrastructure like lampposts.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    category: "Construction"
  }
];

const categories = ["All", "Residential", "Commercial", "Industrial", "Maintenance", "Installation"];

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleServices, setVisibleServices] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisibleServices(true), 200);
        }
      },
      { threshold: 0.1 }
    );
    if (servicesRef.current) observer.observe(servicesRef.current);
    return () => observer.disconnect();
  }, []);

  const filteredServices = activeCategory === "All"
    ? services
    : services.filter(service => service.category === activeCategory);

  return (
    <section id="services" className="py-32 bg-[#030712] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[rgba(255,193,7,0.03)] blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-[rgba(255,143,0,0.02)] blur-[100px] animate-pulse-slow" style={{ animationDelay: "2s" }} />

        {/* Circuit pattern overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-services" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2" fill="#FFC107" opacity="0.3"/>
              <circle cx="80" cy="80" r="2" fill="#FFC107" opacity="0.3"/>
              <line x1="20" y1="20" x2="80" y2="80" stroke="#FFC107" strokeWidth="0.5" opacity="0.2"/>
              <line x1="20" y1="80" x2="80" y2="20" stroke="#FFC107" strokeWidth="0.5" opacity="0.2"/>
              <rect x="45" y="45" width="10" height="10" fill="none" stroke="#FFC107" strokeWidth="0.5" opacity="0.2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-services)" />
        </svg>

        {/* Floating electrical symbols */}
        <div className="absolute top-20 left-10 opacity-[0.03] animate-float" style={{ animationDelay: "1s" }}>
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <path d="M30 10L40 25H20L30 40L25 50L30 45L35 50L30 40L40 25H20L30 10z" fill="#FFC107"/>
          </svg>
        </div>
        <div className="absolute bottom-32 right-16 opacity-[0.03] animate-float" style={{ animationDelay: "3s" }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="15" stroke="#FFC107" strokeWidth="2"/>
            <circle cx="20" cy="20" r="8" stroke="#FFC107" strokeWidth="1"/>
            <line x1="20" y1="5" x2="20" y2="15" stroke="#FFC107" strokeWidth="1"/>
            <line x1="20" y1="25" x2="20" y2="35" stroke="#FFC107" strokeWidth="1"/>
            <line x1="5" y1="20" x2="15" y2="20" stroke="#FFC107" strokeWidth="1"/>
            <line x1="25" y1="20" x2="35" y2="20" stroke="#FFC107" strokeWidth="1"/>
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-[rgba(255,193,7,0.25)] bg-[rgba(255,193,7,0.06)] rounded-full mb-8 opacity-0 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-[#FFC107] animate-pulse" />
            <span className="font-mono text-xs text-[#FFC107] tracking-[0.15em] uppercase">
              Our Expertise
            </span>
          </div>

          <h2 className="font-display text-[60px] md:text-[80px] text-white tracking-wider mb-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            ELECTRICAL
          </h2>
          <h2 className="font-display text-[60px] md:text-[80px] text-[#FFC107] glow-text tracking-wider mb-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            SERVICES
          </h2>

          <p className="font-body text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed opacity-0 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            From residential rewiring to industrial substations, we deliver comprehensive electrical solutions
            with precision, safety, and reliability. Our licensed engineers ensure every project meets the highest standards.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 opacity-0 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-heading text-sm tracking-[0.1em] uppercase transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#FFC107] text-[#030712] shadow-[0_0_20px_rgba(255,193,7,0.3)]"
                  : "border border-[rgba(255,193,7,0.25)] text-slate-400 hover:text-[#FFC107] hover:border-[rgba(255,193,7,0.5)]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div ref={servicesRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <div
              key={service.title}
              className={`group relative p-6 border-grad rounded-sm bg-[rgba(13,21,37,0.6)] backdrop-blur-sm hover:bg-[rgba(255,193,7,0.04)] transition-all duration-500 reveal ${
                visibleServices ? "visible" : ""
              } overflow-hidden`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* Card background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(255,193,7,0.02)] via-transparent to-[rgba(255,143,0,0.01)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Animated border */}
              <div className="absolute inset-0 rounded-sm bg-gradient-to-r from-transparent via-[rgba(255,193,7,0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 group-hover:animate-pulse" />

              <div className="absolute inset-0 rounded-sm bg-gradient-to-b from-[rgba(255,193,7,0.03)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 rounded-full bg-[rgba(255,193,7,0.1)] border border-[rgba(255,193,7,0.2)] flex items-center justify-center mb-4 group-hover:bg-[rgba(255,193,7,0.15)] transition-colors duration-300 text-[#FFC107]">
                  {service.icon}
                </div>

                {/* Category Badge */}
                <div className="inline-flex items-center px-2 py-1 bg-[rgba(255,193,7,0.08)] border border-[rgba(255,193,7,0.15)] rounded-full mb-3">
                  <span className="font-mono text-[10px] text-[#FFC107] tracking-[0.1em] uppercase">
                    {service.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading text-lg text-white mb-3 group-hover:text-[#FFC107] transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="font-body text-slate-400 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Hover indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-5 h-5 text-[#FFC107]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 opacity-0 animate-fade-up" style={{ animationDelay: "0.6s" }}>
          <div className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#FFC107] text-[#030712] font-heading font-semibold text-sm tracking-[0.15em] uppercase rounded-sm hover:shadow-[0_0_40px_rgba(255,193,7,0.5)] transition-all duration-300 cursor-pointer overflow-hidden">
            {/* Button background animation */}
            <div className="absolute inset-0 bg-[#FF8F00] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFC107] to-[#FF8F00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <span className="relative z-10">Request Service Quote</span>
            <svg className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>

            {/* Spark effect */}
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#FFC107] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping" />
          </div>
        </div>
      </div>
    </section>
  );
}