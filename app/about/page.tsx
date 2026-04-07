"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";

const services = [
  {
    title: "Electrical Infrastructure",
    description: "Complete electrification systems for residential, commercial and industrial projects",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Lighting Systems",
    description: "Energy-efficient lighting solutions for public spaces, buildings and infrastructure",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Maintenance & Support",
    description: "Ongoing maintenance contracts and emergency electrical services",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Project Management",
    description: "End-to-end project coordination from planning to completion",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
];

const achievements = [
  "Delivering projects on time and within budget",
  "Maintaining consistent safety and quality standards",
  "Supporting large-scale public infrastructure works",
  "Managing ongoing maintenance contracts",
];

const coreValues = [
  {
    title: "Integrity",
    description: "Honesty and transparency in all our work",
    icon: "🤝",
  },
  {
    title: "Quality",
    description: "Commitment to excellence in every project",
    icon: "⭐",
  },
  {
    title: "Respect",
    description: "Valuing our clients, partners, and team",
    icon: "🙌",
  },
  {
    title: "Improvement",
    description: "Continuous learning and innovation",
    icon: "🚀",
  },
];

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-[#030712]">
      <Header />

      {/* Enhanced Hero Section with Images and Slogans */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Background Images Collage */}
        <div className="absolute inset-0">
          {/* Main background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#040d1a] via-[#030712] to-[#0a1628]" />

          {/* Featured project images as floating elements */}
          <div className="absolute top-20 left-10 w-64 h-40 opacity-20 hover:opacity-40 transition-opacity duration-500">
            <img src="/images/1.png" alt="Electrical project" className="w-full h-full object-cover rounded-lg shadow-2xl" />
          </div>
          <div className="absolute top-32 right-16 w-48 h-32 opacity-15 hover:opacity-35 transition-opacity duration-500">
            <img src="/images/2.png" alt="Lighting installation" className="w-full h-full object-cover rounded-lg shadow-2xl" />
          </div>
          <div className="absolute bottom-40 left-20 w-56 h-36 opacity-18 hover:opacity-40 transition-opacity duration-500">
            <img src="/images/3.png" alt="Infrastructure work" className="w-full h-full object-cover rounded-lg shadow-2xl" />
          </div>
          <div className="absolute bottom-20 right-10 w-52 h-28 opacity-16 hover:opacity-38 transition-opacity duration-500">
            <img src="/images/4.png" alt="Commercial electrical" className="w-full h-full object-cover rounded-lg shadow-2xl" />
          </div>

          {/* Animated particles */}
          <div className="absolute inset-0">
            {[...Array(25)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-[#FFC107] rounded-full opacity-40 animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 4}s`,
                  animationDuration: `${3 + Math.random() * 4}s`,
                }}
              />
            ))}
          </div>

          {/* Circuit pattern overlay */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit-about" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="120" height="120" fill="none"/>
                <line x1="0" y1="60" x2="45" y2="60" stroke="#FFC107" strokeWidth="1"/>
                <line x1="75" y1="60" x2="120" y2="60" stroke="#FFC107" strokeWidth="1"/>
                <line x1="60" y1="0" x2="60" y2="45" stroke="#FFC107" strokeWidth="1"/>
                <line x1="60" y1="75" x2="60" y2="120" stroke="#FFC107" strokeWidth="1"/>
                <circle cx="60" cy="60" r="8" fill="none" stroke="#FFC107" strokeWidth="1"/>
                <circle cx="60" cy="60" r="2" fill="#FFC107"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit-about)"/>
          </svg>

          {/* Enhanced glowing orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[rgba(255,193,7,0.12)] blur-[180px] animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[rgba(255,143,0,0.10)] blur-[160px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[rgba(255,193,7,0.08)] blur-[120px] animate-pulse-slow" style={{ animationDelay: "4s" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
          {/* Enhanced Section label with animation */}
          <div className={`flex items-center gap-4 mb-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#FFC107] to-transparent animate-pulse" />
            <span className="font-mono text-sm tracking-[0.3em] text-[#FFC107] uppercase font-semibold">About Mubest</span>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#FFC107] to-transparent animate-pulse" />
          </div>

          {/* Enhanced Main heading with staggered animation */}
          <div className={`mb-12 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <h1 className="font-display text-[56px] md:text-[80px] lg:text-[100px] leading-[0.85] tracking-wider text-white mb-4">
              POWERING
            </h1>
            <h1 className="font-display text-[56px] md:text-[80px] lg:text-[100px] leading-[0.85] tracking-wider text-[#FFC107] glow-text mb-6">
              SINGAPORE'S
            </h1>
            <h1 className="font-display text-[56px] md:text-[80px] lg:text-[100px] leading-[0.85] tracking-wider text-white mb-8">
              FUTURE
            </h1>

            {/* Animated underline */}
            <div className="flex items-center gap-4">
              <div className={`h-1 bg-gradient-to-r from-[#FFC107] to-[#FF8F00] rounded-full transition-all duration-1500 delay-500 ${isVisible ? "w-40" : "w-0"}`} />
              <div className="w-3 h-3 rounded-full bg-[#FFC107] animate-pulse" />
            </div>
          </div>

          {/* Compelling Slogans and Value Props */}
          <div className={`max-w-6xl transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center md:text-left">
                <div className="text-[#FFC107] text-4xl font-bold mb-2">20+</div>
                <div className="text-white text-lg font-semibold mb-1">Years of Excellence</div>
                <div className="text-slate-400 text-sm">Trusted electrical solutions</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-[#FFC107] text-4xl font-bold mb-2">500+</div>
                <div className="text-white text-lg font-semibold mb-1">Projects Completed</div>
                <div className="text-slate-400 text-sm">From housing to infrastructure</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-[#FFC107] text-4xl font-bold mb-2">24/7</div>
                <div className="text-white text-lg font-semibold mb-1">Support Available</div>
                <div className="text-slate-400 text-sm">Emergency electrical services</div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <p className="font-body text-slate-300 text-xl md:text-2xl leading-relaxed mb-6 text-center">
                "Illuminating Singapore's infrastructure with reliable, innovative electrical solutions since 2006"
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
                <span className="bg-[#FFC107]/10 text-[#FFC107] px-3 py-1 rounded-full">✓ Safety First</span>
                <span className="bg-[#FFC107]/10 text-[#FFC107] px-3 py-1 rounded-full">✓ Quality Assured</span>
                <span className="bg-[#FFC107]/10 text-[#FFC107] px-3 py-1 rounded-full">✓ Timely Delivery</span>
                <span className="bg-[#FFC107]/10 text-[#FFC107] px-3 py-1 rounded-full">✓ Expert Team</span>
              </div>
            </div>
          </div>

          {/* Enhanced Call to action buttons */}
          <div className={`flex flex-wrap gap-6 mt-12 transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <Link
              href="/services"
              className="group relative overflow-hidden flex items-center gap-3 px-8 py-4 bg-[#FFC107] text-[#030712] font-heading font-semibold text-sm tracking-[0.15em] uppercase rounded-sm hover:shadow-[0_0_40px_rgba(255,193,7,0.5)] transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 group-hover:translate-x-full transition-all duration-500" />
              <span className="relative">Explore Services</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            <Link
              href="/contact"
              className="group flex items-center gap-3 px-8 py-4 border-2 border-[#FFC107] text-[#FFC107] font-heading font-semibold text-sm tracking-[0.15em] uppercase rounded-sm hover:bg-[#FFC107] hover:text-[#030712] transition-all duration-300"
            >
              <span>Get Quote</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Enhanced Scroll indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex flex-col items-center gap-2 text-slate-400">
            <span className="text-xs uppercase tracking-widest">Discover Our Story</span>
            <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-[#FFC107] rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 bg-[#030712]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <h2 className="font-display text-[48px] md:text-[56px] text-white tracking-wider mb-8">
                OUR STORY
              </h2>
              <div className="space-y-6 text-slate-300 leading-relaxed">
                <p>
                  Established in 2006, the company brings together over 20 years of experience in electrification and infrastructure works. We have supported the development of residential estates, public spaces and private projects, delivering practical and reliable solutions that meet industry standards.
                </p>
                <p>
                  Our work includes lighting and electrical systems for housing blocks, linkways, public areas, commercial buildings and large-scale facilities.
                </p>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[rgba(255,193,7,0.1)] to-[rgba(255,193,7,0.05)] p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#FFC107] to-[#FF8F00] flex items-center justify-center">
                    <svg className="w-12 h-12 text-[#030712]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl text-white mb-2">20+ Years</h3>
                  <p className="text-slate-400">Of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-32 bg-[#040d1a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-[48px] md:text-[56px] text-white tracking-wider mb-6">
              WHAT WE DO
            </h2>
            <p className="font-body text-slate-400 text-lg max-w-3xl mx-auto">
              We provide a comprehensive range of services supporting electrical and infrastructure works
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl border border-[rgba(255,193,7,0.2)] bg-gradient-to-br from-[rgba(13,21,37,0.6)] to-[rgba(13,21,37,0.2)] hover:border-[rgba(255,193,7,0.5)] transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#FFC107] to-[#FF8F00] flex items-center justify-center mb-4 text-[#030712] group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-heading text-lg text-white mb-3">{service.title}</h3>
                <p className="font-body text-sm text-slate-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/#services"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#FFC107] text-[#030712] font-heading font-semibold text-sm tracking-[0.15em] uppercase rounded-sm hover:shadow-[0_0_40px_rgba(255,193,7,0.5)] transition-all duration-300"
            >
              <span>View All Services</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Experiences Section */}
      <section className="py-32 bg-[#030712]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <h2 className="font-display text-[48px] md:text-[56px] text-white tracking-wider mb-8">
                OUR EXPERIENCES
              </h2>
              <p className="font-body text-slate-300 text-lg leading-relaxed mb-8">
                Our strength lies in a skilled and experienced workforce capable of handling projects of different scales.
              </p>
              <p className="font-body text-slate-300 text-lg leading-relaxed mb-8">
                Over the years, we have built a track record in:
              </p>

              <ul className="space-y-4 mb-8">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#FFC107] mt-2 flex-shrink-0" />
                    <span className="font-body text-slate-300">{achievement}</span>
                  </li>
                ))}
              </ul>

              <p className="font-body text-slate-300 text-lg leading-relaxed mb-8">
                Our continued work with returning clients reflects the trust we have built over time.
              </p>

              <Link
                href="/projects"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#FFC107] text-[#030712] font-heading font-semibold text-sm tracking-[0.15em] uppercase rounded-sm hover:shadow-[0_0_40px_rgba(255,193,7,0.5)] transition-all duration-300"
              >
                <span>View Our Projects</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "500+", label: "Projects Completed" },
                { number: "20+", label: "Years Experience" },
                { number: "100%", label: "Client Satisfaction" },
                { number: "24/7", label: "Support Available" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl border border-[rgba(255,193,7,0.2)] bg-gradient-to-br from-[rgba(13,21,37,0.6)] to-[rgba(13,21,37,0.2)] text-center hover:border-[rgba(255,193,7,0.4)] transition-all duration-300"
                >
                  <h3 className="font-display text-3xl md:text-4xl text-[#FFC107] mb-2">
                    {stat.number}
                  </h3>
                  <p className="font-body text-xs md:text-sm text-slate-400 uppercase tracking-[0.1em]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-32 bg-[#040d1a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-[48px] md:text-[56px] text-white tracking-wider mb-6">
              OUR COMMITMENT
            </h2>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <p className="font-body text-slate-300 text-xl leading-relaxed mb-8">
              We approach every project with a focus on reliability, safety and clear coordination with clients and stakeholders.
            </p>
            <p className="font-body text-slate-300 text-xl leading-relaxed">
              Much of our work is carried out in active public environments. We take care to minimise disruption while maintaining safety standards and ensuring work is completed efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Message from Director */}
      <section className="py-32 bg-[#030712]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Director Image Placeholder */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[rgba(255,193,7,0.1)] to-[rgba(255,193,7,0.05)] p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#FFC107] to-[#FF8F00] flex items-center justify-center">
                    <svg className="w-16 h-16 text-[#030712]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl text-white mb-2">Director</h3>
                  <p className="text-slate-400">Mubest Pte Ltd</p>
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <h2 className="font-display text-[48px] md:text-[56px] text-white tracking-wider mb-8">
                MESSAGE FROM THE DIRECTOR
              </h2>
              <blockquote className="font-body text-slate-300 text-xl leading-relaxed italic border-l-4 border-[#FFC107] pl-8">
                "At Mubest, we believe in building lasting relationships through consistent quality work and unwavering commitment to safety. Our team takes pride in supporting Singapore's infrastructure development with reliable electrical solutions that stand the test of time."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-32 bg-[#040d1a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-[48px] md:text-[56px] text-white tracking-wider mb-6">
              VISION & MISSION
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="p-8 rounded-xl border border-[rgba(255,193,7,0.2)] bg-gradient-to-br from-[rgba(13,21,37,0.6)] to-[rgba(13,21,37,0.2)]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FFC107] to-[#FF8F00] flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#030712]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl text-white">Vision</h3>
              </div>
              <p className="font-body text-slate-300 leading-relaxed">
                To deliver reliable and practical electrical solutions that support the development of modern infrastructure.
              </p>
            </div>

            {/* Mission */}
            <div className="p-8 rounded-xl border border-[rgba(255,193,7,0.2)] bg-gradient-to-br from-[rgba(13,21,37,0.6)] to-[rgba(13,21,37,0.2)]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FFC107] to-[#FF8F00] flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#030712]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl text-white">Mission</h3>
              </div>
              <p className="font-body text-slate-300 leading-relaxed">
                To build long-term relationships with our clients by delivering consistent, quality work with a focus on safety, reliability and efficiency.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mt-16">
            <h3 className="font-display text-[36px] md:text-[42px] text-white tracking-wider text-center mb-12">
              CORE VALUES
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl border border-[rgba(255,193,7,0.2)] bg-gradient-to-br from-[rgba(13,21,37,0.6)] to-[rgba(13,21,37,0.2)] text-center hover:border-[rgba(255,193,7,0.4)] transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h4 className="font-heading text-lg text-white mb-3">{value.title}</h4>
                  <p className="font-body text-sm text-slate-400 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-32 bg-[#030712]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-display text-[48px] md:text-[56px] text-white tracking-wider mb-6">
            CAREERS
          </h2>
          <p className="font-body text-slate-300 text-xl leading-relaxed max-w-3xl mx-auto mb-8">
            We welcome individuals who are committed to quality work and continuous improvement.
          </p>
          <p className="font-body text-slate-400 text-lg max-w-2xl mx-auto">
            Join our team of skilled professionals and contribute to Singapore's electrical infrastructure development.
          </p>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}