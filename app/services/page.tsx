"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";

const services = [
  {
    title: "Electrical Infrastructure",
    description: "Complete electrification systems for residential, commercial and industrial projects. We design and install robust electrical networks that ensure safety, reliability, and efficiency.",
    features: ["Power distribution systems", "Cable management", "Panel installations", "Safety compliance"],
    image: "/images/1.png",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Lighting Systems",
    description: "Energy-efficient lighting solutions for public spaces, buildings and infrastructure. Our lighting designs enhance visibility while reducing energy consumption.",
    features: ["LED lighting installations", "Smart lighting controls", "Outdoor illumination", "Energy audits"],
    image: "/images/2.png",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Maintenance & Support",
    description: "Ongoing maintenance contracts and emergency electrical services. We provide 24/7 support to keep your systems running smoothly.",
    features: ["Preventive maintenance", "Emergency repairs", "System monitoring", "24/7 support"],
    image: "/images/3.png",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Project Management",
    description: "End-to-end project coordination from planning to completion. We ensure timely delivery and budget adherence for all electrical projects.",
    features: ["Project planning", "Timeline management", "Quality assurance", "Client coordination"],
    image: "/images/4.png",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
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
    <main className="bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10"></div>
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Featured Service Images */}
        <div className="absolute top-20 right-10 w-48 h-32 opacity-20 hover:opacity-40 transition-opacity duration-500">
          <img src="/images/5.png" alt="Electrical work" className="w-full h-full object-cover rounded-lg shadow-2xl" />
        </div>
        <div className="absolute bottom-32 left-16 w-56 h-36 opacity-15 hover:opacity-35 transition-opacity duration-500">
          <img src="/images/6.png" alt="Lighting systems" className="w-full h-full object-cover rounded-lg shadow-2xl" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Professional Electrical Services
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-heading mb-6 animate-fade-in-up">
            Our <span className="text-primary">Expertise</span>
          </h1>
          <p className="text-xl md:text-2xl text-body mb-8 animate-fade-in-up animation-delay-200 max-w-3xl mx-auto">
            Comprehensive electrical solutions powered by 20+ years of experience and cutting-edge technology
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 animate-fade-in-up animation-delay-400">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">500+</div>
              <div className="text-sm text-body">Projects Done</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">20+</div>
              <div className="text-sm text-body">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">24/7</div>
              <div className="text-sm text-body">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">100%</div>
              <div className="text-sm text-body">Satisfaction</div>
            </div>
          </div>

          <div className="flex justify-center space-x-4 animate-fade-in-up animation-delay-400">
            <Link
              href="#services"
              className="bg-primary hover:bg-secondary text-background px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              View Services
            </Link>
            <Link
              href="/contact"
              className="border border-primary text-primary hover:bg-primary hover:text-background px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Get Quote
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" ref={sectionRef} className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-block px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-4">
              What We Offer
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive <span className="text-blue-400">Electrical Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From design to execution, we provide end-to-end electrical services with expertise, precision, and commitment to quality.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-400/10 overflow-hidden ${
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Service Icon Overlay */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-blue-600/90 backdrop-blur-sm rounded-lg flex items-center justify-center text-white">
                    {service.icon}
                  </div>
                </div>

                {/* Content Section */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <svg className="w-6 h-6 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>

                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-blue-400">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-gray-400 text-sm">
                          <svg className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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
            <div className="text-center p-6 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl border border-blue-500/20">
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Quality Assurance</h3>
              <p className="text-gray-400">Every project meets the highest industry standards and safety regulations.</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-green-900/20 to-blue-900/20 rounded-2xl border border-green-500/20">
              <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Timely Delivery</h3>
              <p className="text-gray-400">We respect your time with punctual project completion and reliable scheduling.</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl border border-purple-500/20">
              <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">24/7 Support</h3>
              <p className="text-gray-400">Round-the-clock emergency electrical services and technical assistance.</p>
            </div>
          </div>

          {/* Team in Action Gallery */}
          <section className="mt-24">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">Our Team in Action</h2>
              <p className="text-lg text-gray-400 mb-10 text-center max-w-2xl mx-auto">
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
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your <span className="text-blue-400">Project?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today to discuss your electrical needs and get a customized solution.
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}