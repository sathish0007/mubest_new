"use client";
import { useEffect, useRef, useState } from "react";

const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 00.948.684l1.498 4.493a1 1 0 00.502.756l2.048 1.024a11.037 11.037 0 010 1.986l-2.048 1.024a1 1 0 00-.502.756l-1.498 4.493a1 1 0 00-.948.684H5a2 2 0 01-2-2V5z" />
      </svg>
    ),
    label: "Phone",
    value: "+65 6359 0110 / 0119",
    href: "tel:+6563590110",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: "info@mubest.com.sg",
    href: "mailto:info@mubest.com.sg",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Address",
    value: "196, Woodlands Industrial Park E5, Singapore 757 279",
    href: "#",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Business Hours",
    value: "Mon - Fri, 8:30am - 6pm",
    href: "#",
  },
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-32 bg-[#030712] overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-[rgba(255,193,7,0.03)] blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-[rgba(255,143,0,0.02)] blur-[120px]" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-20 px-6 max-w-7xl mx-auto">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 border border-[rgba(255,193,7,0.25)] bg-[rgba(255,193,7,0.06)] rounded-full mb-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#FFC107] animate-pulse" />
            <span className="font-mono text-xs text-[#FFC107] tracking-[0.15em] uppercase">
              Get In Touch
            </span>
          </div>

          <h2
            className={`font-display text-[48px] md:text-[64px] text-white tracking-wider mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "0.1s" }}
          >
            LET'S TALK
          </h2>

          <p
            className={`font-body text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            Have an electrical project in mind? Reach out to our team and we'll provide a comprehensive solution tailored to your needs.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Full Map */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.3s" }}
          >
            {/* Interactive Map with Marker */}
            <div className="relative h-full min-h-96 lg:min-h-[600px] rounded-2xl overflow-hidden border border-[rgba(255,193,7,0.2)]">
              
              {/* Google Maps Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d127633.20956615252!2d103.792514!3d1.451664!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5324d0555edd0050!2sMubest%20Pte%20Ltd!5e0!3m2!1sen!2sin!4v1670935784959!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Right: Contact Info & Stats */}
          <div
            className={`space-y-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.4s" }}
          >
            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="group flex items-start gap-4 p-5 rounded-xl border border-[rgba(255,193,7,0.15)] bg-gradient-to-br from-[rgba(13,21,37,0.5)] to-[rgba(13,21,37,0.2)] hover:border-[rgba(255,193,7,0.4)] hover:bg-gradient-to-br hover:from-[rgba(13,21,37,0.7)] hover:to-[rgba(13,21,37,0.3)] transition-all duration-300 cursor-pointer"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#FFC107] to-[#FF8F00] flex items-center justify-center text-[#030712] group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-heading text-white tracking-[0.05em] mb-1">
                      {info.label}
                    </h3>
                    <p className="text-sm text-slate-400 group-hover:text-[#FFC107] transition-colors duration-300">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { number: "24/7", label: "Emergency Support" },
                { number: "1hr", label: "Response Time" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl border border-[rgba(255,193,7,0.15)] bg-gradient-to-br from-[rgba(13,21,37,0.5)] to-[rgba(13,21,37,0.2)] text-center hover:border-[rgba(255,193,7,0.4)] transition-all duration-300"
                >
                  <h3 className="font-display text-2xl text-[#FFC107] mb-1">
                    {stat.number}
                  </h3>
                  <p className="font-body text-xs text-slate-400 uppercase tracking-[0.1em]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
