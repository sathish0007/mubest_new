"use client";
import Link from "next/link";

const footerLinks = {
  company: [
    { label: "About Us", href: "/#about" },
    { label: "Our Services", href: "/#services" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/#contact" },
  ],
  services: [
    { label: "Electrical Rewiring", href: "/#services" },
    { label: "Substation Maintenance", href: "/#services" },
    { label: "Lighting Systems", href: "/#services" },
    { label: "Emergency Repairs", href: "/#services" },
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
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
];

export default function FooterSection() {
  return (
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
                    <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                      <polygon
                        points="20,2 38,12 38,28 20,38 2,28 2,12"
                        stroke="#FFC107"
                        strokeWidth="1.5"
                        fill="rgba(255,193,7,0.08)"
                      />
                      <path
                        d="M22 8L12 22h8l-2 10 10-14h-8l2-10z"
                        fill="#FFC107"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-display text-xl leading-none text-white tracking-widest">
                      MUBEST
                    </div>
                    <div className="font-heading text-[8px] tracking-[0.25em] text-[#FFC107] uppercase leading-none opacity-70">
                      PTE LTD.
                    </div>
                  </div>
                </div>
                <p className="font-body text-sm text-slate-400 leading-relaxed mb-6">
                  Singapore's trusted electrical infrastructure specialists. Delivering quality solutions for residential, commercial, and industrial projects since 2009.
                </p>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 rounded-lg border border-[rgba(255,193,7,0.2)] bg-[rgba(13,21,37,0.5)] flex items-center justify-center text-slate-400 hover:text-[#FFC107] hover:border-[#FFC107] transition-all duration-300"
                      aria-label={social.name}
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
                      className="font-body text-sm text-slate-400 hover:text-[#FFC107] transition-colors duration-300"
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
                      className="font-body text-sm text-slate-400 hover:text-[#FFC107] transition-colors duration-300"
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
                  <svg className="w-4 h-4 text-[#FFC107] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className="font-body text-sm text-slate-400">
                    196, Woodlands Industrial Park E5<br />
                    Singapore 757 279
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-[#FFC107] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 00.948.684l1.498 4.493a1 1 0 00.502.756l2.048 1.024a11.037 11.037 0 010 1.986l-2.048 1.024a1 1 0 00-.502.756l-1.498 4.493a1 1 0 00-.948.684H5a2 2 0 01-2-2V5z" />
                  </svg>
                  <a href="tel:+6563590110" className="font-body text-sm text-slate-400 hover:text-[#FFC107] transition-colors duration-300">
                    +65 6359 0110 / 0119
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-[#FFC107] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:info@mubest.com.sg" className="font-body text-sm text-slate-400 hover:text-[#FFC107] transition-colors duration-300">
                    info@mubest.com.sg
                  </a>
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h4 className="font-heading text-xs text-white tracking-[0.15em] uppercase mb-3">
                  Certifications
                </h4>
                <div className="space-y-2">
                  {footerLinks.certifications.map((cert) => (
                    <div key={cert} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FFC107] flex-shrink-0" />
                      <span className="font-body text-xs text-slate-500">{cert}</span>
                    </div>
                  ))}
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
                © {new Date().getFullYear()} Mubest Pte Ltd. All rights reserved. | UEN: 200901234A
              </p>
              <div className="flex items-center gap-6 text-slate-600">
                <span className="font-mono text-xs">EMA Licensed</span>
                <span className="w-1 h-1 rounded-full bg-[#FFC107]" />
                <span className="font-mono text-xs">BCA Registered</span>
                <span className="w-1 h-1 rounded-full bg-[#FFC107]" />
                <span className="font-mono text-xs">bizSAFE Star</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}