"use client";
import { useEffect, useRef, useState } from "react";
import AboutTeamPhoto from "./AboutTeamPhoto";

const values = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Safety First",
    desc: "Every project follows strict SS 638 Singapore standards and international electrical codes, ensuring zero-compromise safety.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Fast Response",
    desc: "Our rapid-response team dispatches within 60 minutes for emergency electrical faults across Singapore.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Smart Solutions",
    desc: "We integrate modern smart metering and energy management systems to optimize your electrical infrastructure.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Expert Team",
    desc: "A team of 80+ EMA-licensed electricians, engineers, and project managers with combined decades of expertise.",
  },
];

const milestones = [
  { year: "2009", event: "Founded in Jurong, Singapore" },
  { year: "2012", event: "Awarded BCA Green Mark certification" },
  { year: "2015", event: "Expanded to industrial & MRT projects" },
  { year: "2018", event: "ISO 9001:2015 Quality certification" },
  { year: "2021", event: "Achieved bizSAFE Star status" },
  { year: "2024", event: "500+ projects milestone reached" },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 overflow-hidden bg-white font-serif"
      style={{ fontFamily: 'Times New Roman, Times, serif' }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section label */}
        <div className={`flex items-center gap-4 mb-6 transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
          <div className="w-8 h-px bg-[#0e4672]" />
          <span className="text-xs tracking-[0.3em] text-[#0e4672] uppercase font-serif" style={{ fontFamily: 'Times New Roman, Times, serif' }}>Who We Are</span>
        </div>

        {/* Main heading */}
        <div className={`mb-20 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-extrabold text-[44px] md:text-[72px] leading-none tracking-tight text-[#0e4672] drop-shadow-sm font-serif" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
About Us          </h2>
          
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          {/* Left: Story */}
          <div className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}> 
            <p className="text-[#0e4672] text-lg leading-relaxed mb-6 font-medium font-serif" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
              Mubest Pte Ltd is a Singapore-based company focused on electrical infrastructure and building works across public housing developments, commercial properties and large-scale projects.
            </p>
            <p className="text-[#0d6f60] text-base leading-relaxed mb-8 font-serif" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
              Established in 2006, the company brings together over 20 years of experience in electrification and infrastructure works. We have supported the development of residential estates, public spaces and private projects, delivering practical and reliable solutions that meet industry standards.
              Our work includes lighting and electrical systems for housing blocks, linkways, public areas, commercial buildings and large-scale facilities.
            </p>
            {/* Key capabilities */}
            <div className="space-y-3 mb-8">
              {[
                "High & Low Voltage Installation",
                "Preventive Maintenance Programs",
                "Emergency 24/7 Fault Response",
                "Energy Audits & Smart Systems",
                "Building Electrical Construction (M&E)",
              ].map((item, i) => (
                <div
                  key={item}
                  className="flex items-center gap-3 group"
                  style={{ transitionDelay: `${200 + i * 80}ms` }}
                >
                  <div className="w-5 h-5 rounded-sm border border-[#FFC107] bg-[#FFF8E1] flex items-center justify-center flex-shrink-0 group-hover:bg-[#FFE082] transition-colors duration-300">
                    <svg className="w-3 h-3 text-[#FFC107]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-[#0e4672] text-sm font-semibold font-serif" style={{ fontFamily: 'Times New Roman, Times, serif' }}>{item}</span>
                </div>
              ))}
            </div>
            <a
              href="/about"
              className="group inline-flex items-center gap-3 font-bold text-sm tracking-[0.15em] uppercase text-[#FFC107] hover:text-[#0d6f60] transition-colors duration-300 font-serif"
              style={{ fontFamily: 'Times New Roman, Times, serif' }}
            >
              View More
              <div className="w-8 h-px bg-[#FFC107] group-hover:w-12 transition-all duration-300" />
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
          {/* Right: Animated Team Photo */}
          <div className={`transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <AboutTeamPhoto animate={true} />
          </div>
        </div>
      
      </div>
    </section>
  );
}
