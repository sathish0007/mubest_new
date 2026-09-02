"use client";
import { basePath } from "@/app/util";
import Link from "next/link";
import { useEffect, useState } from "react";

const footerLinks = {
  company: [
    { label: "About Us", href: "/#about" },
    { label: "Our Services", href: "/#services" },
    { label: "Projects", href: "/projects" },
    {label: "Careers", href: "/#careers" },
    { label: "Contact", href: "/#contact" },
  ],
  services: [
    { label: "Electrical Works & Maintenance", href: "/#services" },
    { label: "Mechanical Engineering Works (M & E)", href: "/#services" },
    { label: "General Building Works", href: "/#services" },
    { label: "Lighting & Energy Efficiency", href: "/#services" },
    { label: "Substations & Electrical Facilities", href: "/#services" },
    { label: "Security & Communication Systems", href: "/#services" },
  ],
  certifications: [
    "EMA Licensed Electricians",
    "BCA Registered Contractor",
    "bizSAFE Star Certified",
    "ISO 9001:2015 Certified",
  ],
};

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/mubestsg/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
];

export default function FooterSection() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {/* Floating Go to Top button */}
      <button
        onClick={scrollToTop}
        aria-label="Go to top"
        className={`fixed bottom-8 right-6 z-50 w-12 h-12 rounded-full bg-[#7dcaa9] text-[#030712] shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-[#FFD54F] hover:scale-110 ${
          showTop ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>

      <footer className="relative bg-[#030712] border-t border-[rgba(255,193,7,0.08)] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-[rgba(255,193,7,0.02)] blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full bg-[rgba(255,143,0,0.02)] blur-[80px]" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-10 h-10">
                    <img                      
                      loading="lazy"
                      src={basePath + "/favicon.png"}
                      alt="Mubest PTE LTD Logo - Electrical Services"
                      className="w-full h-full object-contain"
                      width={40}
                      height={40}
                      decoding="async"
                    />
                  </div>
                  <div>
                    <div className="font-display text-xl leading-none text-white tracking-widest">
                      Mubest Pte Ltd.
                    </div>
                    <div className="font-heading text-[8px] tracking-[0.25em] text-white uppercase leading-none opacity-70">
                      Since 2006.
                    </div>
                  </div>
                </div>
                <p className="font-body text-sm text-slate-400 leading-relaxed mb-6">
                  Singapore's trusted electrical infrastructure specialists. Delivering quality solutions for residential, commercial, and industrial projects since 2006.
                </p>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 rounded-lg border border-[rgba(255,193,7,0.2)] bg-[rgba(13,21,37,0.5)] flex items-center justify-center text-slate-400 hover:text-[#7dcaa9] hover:border-[#7dcaa9] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#7dcaa9] focus:ring-offset-2 focus:ring-offset-[#0d1525]"
                      aria-label={`Visit our ${social.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-heading text-sm text-white tracking-[0.15em] uppercase mb-6">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-body text-sm text-slate-400 hover:text-[#7dcaa9] transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-heading text-sm text-white tracking-[0.15em] uppercase mb-6">
                Our Services
              </h3>
              <ul className="space-y-3">
                {footerLinks.services.map((service) => (
                  <li key={service.label}>
                    <Link
                      href={service.href}
                      className="font-body text-sm text-slate-400 hover:text-[#7dcaa9] transition-colors duration-300"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Certifications */}
            <div>
              <h3 className="font-heading text-sm text-white tracking-[0.15em] uppercase mb-6">
                Contact Info
              </h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-[#7dcaa9] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className="font-body text-sm text-slate-400">
                    196, Woodlands Industrial Park E5<br />
                    Singapore 757 279
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-[#7dcaa9] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 00.948.684l1.498 4.493a1 1 0 00.502.756l2.048 1.024a11.037 11.037 0 010 1.986l-2.048 1.024a1 1 0 00-.502.756l-1.498 4.493a1 1 0 00-.948.684H5a2 2 0 01-2-2V5z" />
                  </svg>
                  <a href="tel:+6563590110" className="font-body text-sm text-slate-400 hover:text-[#7dcaa9] transition-colors duration-300">
                    +65 6359 0110
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-[#7dcaa9] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:info@mubest.com.sg" className="font-body text-sm text-slate-400 hover:text-[#7dcaa9] transition-colors duration-300">
                    info@mubest.com.sg
                  </a>
                </div>
              </div>

           
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[rgba(255,193,7,0.08)]">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="font-body text-xs text-slate-600 text-center md:text-left">
                © {new Date().getFullYear()} Mubest Pte Ltd. All rights reserved.
              </p>
            
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}