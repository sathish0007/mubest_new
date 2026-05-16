"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import { ShieldCheck, Flame, TrendingUp } from "lucide-react";

const services = [
  {
    title: "Electrical Infrastructure",
    description: "Complete electrification systems for residential, commercial and industrial projects",
    image: "/images/services/electrical_power.png", // Power lines/infrastructure
  },
  {
    title: "Lighting & Energy Efficiency",
    description: "Energy-efficient lighting solutions for public spaces, buildings and infrastructure",
    image: "/images/services/light_energy.png", // Modern lighting
  },
  {
    title: "Mechanical and Electrical (M&E)",
    description: "Ongoing M&E contracts and emergency electrical services",
    image: "/images/services/mechanical_system.png", // Maintenance worker
  },
  {
    title: "Building & External Infrastructure Works",
    description: "General building works, external infrastructure construction.",
    image: "/images/services/electrical_installation.jpg", // Project planning
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
    title: "Truth",
    description: "Honesty and transparency guide every decision we make.",
    icon: <ShieldCheck size={42} strokeWidth={1.8} />,
  },
  {
    title: "Hard Work",
    description: "Consistency, discipline, and dedication drive our success.",
    icon: <Flame size={42} strokeWidth={1.8} />,
  },
  {
    title: "Progress",
    description: "We believe in continuous growth and constant improvement.",
    icon: <TrendingUp size={42} strokeWidth={1.8} />,
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white">
      <Header />
      {/* About Section - clean, white, rich UI */}
      <section className="pt-44 pb-0 bg-gradient-to-b from-white via-[#f7fafc] to-[#e3f2fd]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h1 className="font-display text-[44px] md:text-[36px] text-[#0e4672] tracking-tight mb-6">ABOUT MUBEST</h1>
            <p className="font-body text-lg text-[#0e4672] leading-relaxed mb-6">
              Mubest Pte Ltd is Singapore’s trusted partner for electrical infrastructure, lighting, and maintenance solutions. With over 20 years of experience, we deliver quality, safety, and innovation for residential, commercial, and industrial projects.
              Established in 2006, the company brings together extensive experience in electrical and infrastructure works, and handyman services. We support residential estates, public spaces, and private developments, delivering reliable solutions that meet industry standards.
            </p>
            <p className="font-body text-lg text-[#0e4672] leading-relaxed mb-6">
              Our team has successfully supported the development of residential estates, public spaces and private projects, earning a strong reputation for quality, safety and timely delivery.
            </p>
          </div>
          {/* Visual Element */}
          <div className="relative flex items-center justify-center">
            <img src="/images/about-team.jpg" alt="About Mubest" className="w-full max-w-md rounded-2xl shadow-2xl border-4 border-[#e3f2fd] bg-white object-cover" />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-[#7dcaa9]/20 blur-2xl" />
          </div>
        </div>
      </section>

      {/* About Section */}
 

      {/* What We Do Section */}
      <section className="pt-44 bg-gradient-to-b from-[#e3f2fd] via-white to-[#f7fafc]"
      style={{paddingTop:"88px"}}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-[48px] md:text-[36px] text-[#0e4672] tracking-wider mb-6">
              WHAT WE DO
            </h2>
            <p className="font-body text-[#0e4672] text-lg max-w-3xl mx-auto">
              We provide a comprehensive range of services supporting electrical and infrastructure works
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="group rounded-3xl shadow-2xl border border-[#e0f2f1] bg-white flex flex-col items-center text-center overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-[0_8px_40px_rgba(14,70,114,0.18)]"
                style={{ minHeight: 340 }}
              >
                {/* Top image, Airbnb-style */}
                <div className="w-full h-48 relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 flex flex-col items-center justify-center w-full px-4 py-6">
                  <h3 className="font-bold text-xl md:text-2xl text-[#0e4672] mb-3 font-serif tracking-tight group-hover:text-[#7dcaa9] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm text-[#0e4672] leading-relaxed text-center">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/#services"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#7dcaa9] text-[#030712] font-heading font-semibold text-sm tracking-[0.15em] uppercase rounded-sm hover:shadow-[0_0_40px_rgba(255,193,7,0.5)] transition-all duration-300"
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
      <section className="py-32 bg-gradient-to-b from-white via-[#f7fafc] to-[#e3f2fd]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <h2 className="font-display text-[48px] md:text-[36px] text-[#0e4672] tracking-wider mb-8">
                OUR EXPERIENCES
              </h2>
              <p className="font-body text-[#0e4672] text-lg leading-relaxed mb-8">
                Our strength lies in a skilled and experienced workforce capable of handling projects of different scales.
              </p>
              <p className="font-body text-[#0e4672] text-lg leading-relaxed mb-8">
                Over the years, we have built a track record in:
              </p>

              <ul className="space-y-4 mb-8">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#7dcaa9] mt-2 flex-shrink-0" />
                    <span className="font-body text-[#0e4672]">{achievement}</span>
                  </li>
                ))}
              </ul>

              <p className="font-body text-[#0e4672] text-lg leading-relaxed mb-8">
                Our continued work with returning clients reflects the trust we have built over time.
              </p>

              <Link
                href="/projects"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#7dcaa9] text-[#030712] font-heading font-semibold text-sm tracking-[0.15em] uppercase rounded-sm hover:shadow-[0_0_40px_rgba(255,193,7,0.5)] transition-all duration-300"
              >
                <span>View Our Projects</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6"
          style={{ backgroundImage: `url(/images/team-1.png)`, backgroundSize: 'cover',backgroundRepeat:'no-repeat', backgroundPosition: 'center',width: '100%', height: '100%' }}
          >
            {/* <img src="/images/vehicle-bg.png" alt="Mubest team" className={`h-40 md:h-56 w-full object-cover rounded-2xl shadow-xl border-4 border-white/60 transition-transform duration-500  hover:scale-105`} /> */}
              {/* {[
                { number: "500+", label: "Projects Completed" },
                { number: "20+", label: "Years Experience" },
                // { number: "100%", label: "Client Satisfaction" },
                { number: "24/7", label: "Support Available" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl border border-[#e3f2fd] bg-white text-center hover:border-[#7dcaa9] shadow-sm transition-all duration-300"
                >
                  <h3 className="font-display text-3xl md:text-4xl text-[#7dcaa9] mb-2">
                    {stat.number}
                  </h3>
                  <p className="font-body text-xs md:text-sm text-[#0e4672] uppercase tracking-[0.1em]">
                    {stat.label}
                  </p>
                </div>
              ))} */}
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-32 bg-gradient-to-b from-[#e3f2fd] via-white to-[#f7fafc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-[48px] md:text-[36px] text-[#0e4672] tracking-wider mb-6">
              OUR COMMITMENT
            </h2>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <p className="font-body text-[#0e4672] text-xl leading-relaxed mb-8">
              We approach every project with a focus on reliability, safety and clear coordination with clients and stakeholders.
            </p>
            <p className="font-body text-[#0e4672] text-xl leading-relaxed">
              Much of our work is carried out in active public environments. We take care to minimise disruption while maintaining safety standards and ensuring work is completed efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Message from Director */}
      <section className="py-32 bg-gradient-to-b from-white via-[#f7fafc] to-[#e3f2fd]"
      style={{display:"none"}}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Director Image Placeholder */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[rgba(255,193,7,0.1)] to-[rgba(255,193,7,0.05)] p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#7dcaa9] to-[#FF8F00] flex items-center justify-center">
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
              <h2 className="font-display text-[48px] md:text-[36px] text-[#0e4672] tracking-wider mb-8">
                MESSAGE FROM THE DIRECTOR
              </h2>
              <blockquote className="font-body text-[#0e4672] text-xl leading-relaxed italic border-l-4 border-[#7dcaa9] pl-8">
                "At Mubest, we believe in building lasting relationships through consistent quality work and unwavering commitment to safety. Our team takes pride in supporting Singapore's infrastructure development with reliable electrical solutions that stand the test of time."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-32 bg-gradient-to-b from-[#e3f2fd] via-white to-[#f7fafc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-[48px] md:text-[36px] text-[#0e4672] tracking-wider mb-6">
              VISION & MISSION
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="p-8 rounded-xl border border-[#e3f2fd] bg-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7dcaa9] to-[#FF8F00] flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#0e4672]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl text-[#0e4672]">Vision</h3>
              </div>
              <p className="font-body text-[#0e4672] leading-relaxed">
                To deliver reliable and practical electrical solutions that support the development of modern infrastructure.
              </p>
            </div>

            {/* Mission */}
            <div className="p-8 rounded-xl border border-[#e3f2fd] bg-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7dcaa9] to-[#FF8F00] flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#0e4672]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl text-[#0e4672]">Mission</h3>
              </div>
              <p className="font-body text-[#0e4672] leading-relaxed">
                To build long-term relationships with our clients by delivering consistent, quality work with a focus on safety, reliability and efficiency.
              </p>
            </div>
          </div>

          {/* Core Values */}
         <div className="mt-20">
  <h3 className="font-display text-[44px] md:text-[36px] text-[#0e4672] tracking-[0.2em] text-center mb-16">
    CORE VALUES
  </h3>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {coreValues.map((value, index) => (
      <div
        key={index}
        className="
          group relative overflow-hidden
          p-10 rounded-[28px]
          bg-white/90 backdrop-blur-sm
          border border-[#dbeaf5]
          shadow-[0_10px_40px_rgba(14,70,114,0.08)]
          hover:shadow-[0_20px_60px_rgba(14,70,114,0.15)]
          hover:-translate-y-2
          transition-all duration-500
        "
      >
        {/* Glow Effect */}
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0e4672] to-[#7dcaa9] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        {/* Icon */}
        <div
          className="
            relative z-10
            w-20 h-20 mx-auto mb-6
            rounded-2xl
            bg-[#f4f9fd]
            flex items-center justify-center
            text-[#0e4672]
            group-hover:bg-[#0e4672]
            group-hover:text-[#7dcaa9]
            transition-all duration-500
          "
        >
          {value.icon}
        </div>

        {/* Title */}
        <h4 className="relative z-10 font-heading text-2xl text-[#0e4672] mb-4 text-center">
          {value.title}
        </h4>

        {/* Description */}
        <p className="relative z-10 font-body text-[15px] leading-7 text-[#4b6580] text-center">
          {value.description}
        </p>
      </div>
    ))}
  </div>
</div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}