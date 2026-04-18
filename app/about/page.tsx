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
  return (
    <main className="bg-white">
      <Header />
      {/* About Section - clean, white, rich UI */}
      <section className="py-24 bg-gradient-to-b from-white via-[#f7fafc] to-[#e3f2fd]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h1 className="font-display text-[44px] md:text-[64px] text-[#0e4672] tracking-tight mb-6">About Mubest</h1>
            <p className="font-body text-lg text-[#0d6f60] leading-relaxed mb-6">
              Mubest Pte Ltd is Singapore’s trusted partner for electrical infrastructure, lighting, and maintenance solutions. With over 20 years of experience, we deliver quality, safety, and innovation for residential, commercial, and industrial projects.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 font-semibold text-[#0e4672] text-base"><span className="w-2 h-2 rounded-full bg-[#FFC107]" /> EMA Licensed Electricians</li>
              <li className="flex items-center gap-3 font-semibold text-[#0e4672] text-base"><span className="w-2 h-2 rounded-full bg-[#FFC107]" /> BCA Registered Contractor</li>
              <li className="flex items-center gap-3 font-semibold text-[#0e4672] text-base"><span className="w-2 h-2 rounded-full bg-[#FFC107]" /> ISO 9001:2015 Certified</li>
              <li className="flex items-center gap-3 font-semibold text-[#0e4672] text-base"><span className="w-2 h-2 rounded-full bg-[#FFC107]" /> bizSAFE Star Certified</li>
            </ul>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/projects" className="inline-flex items-center gap-3 px-8 py-4 bg-[#FFC107] text-[#0e4672] font-bold text-sm tracking-[0.15em] uppercase rounded-sm hover:shadow-[0_0_40px_rgba(255,193,7,0.25)] transition-all duration-300">View Projects</Link>
              <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 border-2 border-[#0e4672] text-[#0e4672] font-bold text-sm tracking-[0.15em] uppercase rounded-sm hover:bg-[#0e4672] hover:text-[#FFC107] transition-all duration-300">Contact Us</Link>
            </div>
          </div>
          {/* Visual Element */}
          <div className="relative flex items-center justify-center">
            <img src="/images/1.png" alt="About Mubest" className="w-full max-w-md rounded-2xl shadow-2xl border-4 border-[#e3f2fd] bg-white object-cover" />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-[#FFC107]/20 blur-2xl" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 bg-gradient-to-b from-white via-[#f7fafc] to-[#e3f2fd]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <h2 className="font-display text-[48px] md:text-[56px] text-[#0e4672] tracking-wider mb-8">
                OUR STORY
              </h2>
              <div className="space-y-6 text-[#0d6f60] leading-relaxed">
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
      <section className="py-32 bg-gradient-to-b from-[#e3f2fd] via-white to-[#f7fafc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-[48px] md:text-[56px] text-[#0e4672] tracking-wider mb-6">
              WHAT WE DO
            </h2>
            <p className="font-body text-[#0d6f60] text-lg max-w-3xl mx-auto">
              We provide a comprehensive range of services supporting electrical and infrastructure works
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl border border-[#e3f2fd] bg-white hover:border-[#FFC107] shadow-sm transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#FFC107] to-[#FF8F00] flex items-center justify-center mb-4 text-[#0e4672] group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-heading text-lg text-[#0e4672] mb-3">{service.title}</h3>
                <p className="font-body text-sm text-[#0d6f60] leading-relaxed">{service.description}</p>
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
      <section className="py-32 bg-gradient-to-b from-white via-[#f7fafc] to-[#e3f2fd]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <h2 className="font-display text-[48px] md:text-[56px] text-[#0e4672] tracking-wider mb-8">
                OUR EXPERIENCES
              </h2>
              <p className="font-body text-[#0d6f60] text-lg leading-relaxed mb-8">
                Our strength lies in a skilled and experienced workforce capable of handling projects of different scales.
              </p>
              <p className="font-body text-[#0d6f60] text-lg leading-relaxed mb-8">
                Over the years, we have built a track record in:
              </p>

              <ul className="space-y-4 mb-8">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#FFC107] mt-2 flex-shrink-0" />
                    <span className="font-body text-[#0d6f60]">{achievement}</span>
                  </li>
                ))}
              </ul>

              <p className="font-body text-[#0d6f60] text-lg leading-relaxed mb-8">
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
                  className="p-6 rounded-xl border border-[#e3f2fd] bg-white text-center hover:border-[#FFC107] shadow-sm transition-all duration-300"
                >
                  <h3 className="font-display text-3xl md:text-4xl text-[#FFC107] mb-2">
                    {stat.number}
                  </h3>
                  <p className="font-body text-xs md:text-sm text-[#0d6f60] uppercase tracking-[0.1em]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-32 bg-gradient-to-b from-[#e3f2fd] via-white to-[#f7fafc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-[48px] md:text-[56px] text-[#0e4672] tracking-wider mb-6">
              OUR COMMITMENT
            </h2>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <p className="font-body text-[#0d6f60] text-xl leading-relaxed mb-8">
              We approach every project with a focus on reliability, safety and clear coordination with clients and stakeholders.
            </p>
            <p className="font-body text-[#0d6f60] text-xl leading-relaxed">
              Much of our work is carried out in active public environments. We take care to minimise disruption while maintaining safety standards and ensuring work is completed efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Message from Director */}
      <section className="py-32 bg-gradient-to-b from-white via-[#f7fafc] to-[#e3f2fd]">
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
              <h2 className="font-display text-[48px] md:text-[56px] text-[#0e4672] tracking-wider mb-8">
                MESSAGE FROM THE DIRECTOR
              </h2>
              <blockquote className="font-body text-[#0d6f60] text-xl leading-relaxed italic border-l-4 border-[#FFC107] pl-8">
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
            <h2 className="font-display text-[48px] md:text-[56px] text-[#0e4672] tracking-wider mb-6">
              VISION & MISSION
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="p-8 rounded-xl border border-[#e3f2fd] bg-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FFC107] to-[#FF8F00] flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#0e4672]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl text-[#0e4672]">Vision</h3>
              </div>
              <p className="font-body text-[#0d6f60] leading-relaxed">
                To deliver reliable and practical electrical solutions that support the development of modern infrastructure.
              </p>
            </div>

            {/* Mission */}
            <div className="p-8 rounded-xl border border-[#e3f2fd] bg-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FFC107] to-[#FF8F00] flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#0e4672]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl text-[#0e4672]">Mission</h3>
              </div>
              <p className="font-body text-[#0d6f60] leading-relaxed">
                To build long-term relationships with our clients by delivering consistent, quality work with a focus on safety, reliability and efficiency.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mt-16">
            <h3 className="font-display text-[36px] md:text-[42px] text-[#0e4672] tracking-wider text-center mb-12">
              CORE VALUES
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl border border-[#e3f2fd] bg-white text-center hover:border-[#FFC107] shadow-sm transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h4 className="font-heading text-lg text-[#0e4672] mb-3">{value.title}</h4>
                  <p className="font-body text-sm text-[#0d6f60] leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-32 bg-gradient-to-b from-white via-[#f7fafc] to-[#e3f2fd]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-display text-[48px] md:text-[56px] text-[#0e4672] tracking-wider mb-6">
            CAREERS
          </h2>
          <p className="font-body text-[#0d6f60] text-xl leading-relaxed max-w-3xl mx-auto mb-8">
            We welcome individuals who are committed to quality work and continuous improvement.
          </p>
          <p className="font-body text-[#0d6f60] text-lg max-w-2xl mx-auto">
            Join our team of skilled professionals and contribute to Singapore's electrical infrastructure development.
          </p>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}