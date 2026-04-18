"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";

const services = [
  {
    title: "Electrical Infrastructure & Power Systems",
    description: "Installation, upgrading and maintenance of electrical infrastructure for residential, commercial and public developments. Our work includes electrical rewiring of residential blocks, electrical load upgrading works (ELU), underground cable replacement, substations, distribution systems and consumer switch rooms.",
    features: [
      "Electrical rewiring of residential blocks",
      "Electrical load upgrading (ELU)",
      "Underground cable replacement",
      "Substations & distribution systems",
      "Consumer switch rooms (CSR)"
    ],
    image: "/images/1.png",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Lighting & Energy Efficiency",
    description: "Design and installation of lighting systems for streets, carparks and public areas. We also carry out LED retrofitting and energy-efficient lighting upgrades for existing facilities.",
    features: [
      "Street, carpark & public area lighting",
      "LED retrofitting",
      "Energy-efficient lighting upgrades",
      "Smart lighting controls"
    ],
    image: "/images/2.png",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Substations & Electrical Facilities",
    description: "Design and construction of substations, consumer switch rooms (CSR), and electrical linkways to support reliable power distribution within developments.",
    features: [
      "Substation design & construction",
      "Consumer switch rooms (CSR)",
      "Electrical linkways",
      "Power distribution reliability"
    ],
    image: "/images/17.png",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18V6h12v12H6z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 9h6v6H9z" />
      </svg>
    ),
  },
  {
    title: "Mechanical Systems (ACMV)",
    description: "Installation and maintenance of air-conditioning, refrigeration and ventilation systems to ensure proper environmental control for buildings and facilities.",
    features: [
      "Air-conditioning systems",
      "Mechanical ventilation",
      "Refrigeration systems",
      "Environmental control solutions"
    ],
    image: "/images/18.png",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="4" strokeWidth={1.5} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 12a8 8 0 0116 0M12 4v2m0 12v2m8-8h-2M4 12H2" />
      </svg>
    ),
  },
  {
    title: "Security & Communication Systems",
    description: "Installation of CCTV surveillance systems, fibre network infrastructure and related building communication systems.",
    features: [
      "CCTV surveillance systems",
      "Fibre network infrastructure",
      "Building communication systems",
      "Access control solutions"
    ],
    image: "/images/19.png",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Building & External Infrastructure Works",
    description: "General building works, external infrastructure construction and project support works that complement electrical and mechanical installations.",
    features: [
      "General building works",
      "External infrastructure construction",
      "Project support works",
      "Integration with electrical/mechanical systems"
    ],
    image: "/images/20.png",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth={1.5} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 9h16M9 4v16" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
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
    <main className="bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-[#f7fafc] to-[#e3f2fd]">
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-[#e3f2fd] text-[#0e4672] rounded-full text-sm font-medium mb-4">
              Professional Electrical Services
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-[#0e4672] mb-6 animate-fade-in-up">
            Our <span className="text-[#FFC107]">Expertise</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#0d6f60] mb-8 animate-fade-in-up animation-delay-200 max-w-3xl mx-auto">
            Comprehensive electrical solutions powered by 20+ years of experience and cutting-edge technology
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 animate-fade-in-up animation-delay-400">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FFC107] mb-1">500+</div>
              <div className="text-sm text-[#0d6f60]">Projects Done</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FFC107] mb-1">20+</div>
              <div className="text-sm text-[#0d6f60]">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FFC107] mb-1">24/7</div>
              <div className="text-sm text-[#0d6f60]">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FFC107] mb-1">100%</div>
              <div className="text-sm text-[#0d6f60]">Satisfaction</div>
            </div>
          </div>
          <div className="flex justify-center space-x-4 animate-fade-in-up animation-delay-400">
            <Link
              href="#services"
              className="bg-[#FFC107] hover:bg-[#0e4672] hover:text-[#FFC107] text-[#0e4672] px-8 py-3 rounded-lg font-semibold transition-colors duration-300 border-2 border-[#FFC107]"
            >
              View Services
            </Link>
            <Link
              href="/contact"
              className="border-2 border-[#0e4672] text-[#0e4672] hover:bg-[#0e4672] hover:text-[#FFC107] px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" ref={sectionRef} className="py-20 px-4 bg-gradient-to-b from-white via-[#f7fafc] to-[#e3f2fd]">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-block px-4 py-2 bg-[#e3f2fd] text-[#0e4672] rounded-full text-sm font-medium mb-4">
              What We Offer
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0e4672] mb-6">
              Comprehensive <span className="text-[#FFC107]">Electrical Solutions</span>
            </h2>
            <p className="text-xl text-[#0d6f60] max-w-3xl mx-auto">
              From design to execution, we provide end-to-end electrical services with expertise, precision, and commitment to quality.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`group bg-white rounded-2xl p-8 border border-[#e3f2fd] hover:border-[#FFC107] shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-[#FFC107]/10 overflow-hidden ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Image Section */}
                <div className="relative mb-6 overflow-hidden rounded-xl h-48">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.currentTarget.src = '/images/1.png'; // Fallback image
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#FFC107]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Service Icon Overlay */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-[#FFC107]/90 backdrop-blur-sm rounded-lg flex items-center justify-center text-[#0e4672]">
                    {service.icon}
                  </div>
                </div>

                {/* Content Section */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-bold text-[#0e4672] group-hover:text-[#FFC107] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <svg className="w-6 h-6 text-[#FFC107] opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>

                  <p className="text-[#0d6f60] leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-[#FFC107]">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-[#0d6f60] text-sm">
                          <svg className="w-4 h-4 text-[#0e4672] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Service Highlights */}
          <div className={`mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center p-6 bg-gradient-to-br from-[#e3f2fd] to-[#fffde7] rounded-2xl border border-[#FFC107]/20">
              <div className="w-16 h-16 bg-[#FFC107]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#FFC107]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0e4672] mb-2">Quality Assurance</h3>
              <p className="text-[#0d6f60]">Every project meets the highest industry standards and safety regulations.</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-[#e3f2fd] to-[#fffde7] rounded-2xl border border-[#0d6f60]/10">
              <div className="w-16 h-16 bg-[#0d6f60]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#0d6f60]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0e4672] mb-2">Timely Delivery</h3>
              <p className="text-[#0d6f60]">We respect your time with punctual project completion and reliable scheduling.</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-[#e3f2fd] to-[#fffde7] rounded-2xl border border-[#0e4672]/10">
              <div className="w-16 h-16 bg-[#0e4672]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#0e4672]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0e4672] mb-2">24/7 Support</h3>
              <p className="text-[#0d6f60]">Round-the-clock emergency electrical services and technical assistance.</p>
            </div>
          </div>

          {/* Team in Action Gallery */}
          <section className="mt-24">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0e4672] mb-4 text-center">Our Team in Action</h2>
              <p className="text-lg text-[#0d6f60] mb-10 text-center max-w-2xl mx-auto">
                See our dedicated professionals delivering quality service on-site. These moments capture our commitment to safety, teamwork, and excellence.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <img src="/images/13.png" alt="Worker 1" className="rounded-xl object-cover w-full h-40 md:h-48 shadow-lg" />
                <img src="/images/14.png" alt="Worker 2" className="rounded-xl object-cover w-full h-40 md:h-48 shadow-lg" />
                <img src="/images/15.png" alt="Worker 3" className="rounded-xl object-cover w-full h-40 md:h-48 shadow-lg" />
                <img src="/images/16.png" alt="Worker 4" className="rounded-xl object-cover w-full h-40 md:h-48 shadow-lg" />
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#e3f2fd] to-[#fffde7]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0e4672] mb-6">
            Ready to Start Your <span className="text-[#FFC107]">Project?</span>
          </h2>
          <p className="text-xl text-[#0d6f60] mb-8">
            Contact us today to discuss your electrical needs and get a customized solution.
          </p>
          <Link
            href="/contact"
            className="bg-[#FFC107] hover:bg-[#0e4672] hover:text-[#FFC107] text-[#0e4672] px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 inline-block border-2 border-[#FFC107]"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}