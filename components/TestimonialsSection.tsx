"use client";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Ahmad Rahman",
    title: "Facilities Manager",
    company: "HDB",
    content:
      "Outstanding service! The team completed our sub-station upgrade ahead of schedule and within budget. Their expertise in electrical systems is unmatched in Singapore.",
    rating: 5,
  },
  {
    id: 2,
    name: "Jennifer Tan",
    title: "Project Director",
    company: "SP Group",
    content:
      "We've worked with MUBEST on multiple town council maintenance projects. Their attention to detail and commitment to safety standards is exceptional.",
    rating: 5,
  },
  {
    id: 3,
    name: "David Lim",
    title: "Operations Head",
    company: "Jurong Town Council",
    content:
      "Professional team, excellent communication, and top-notch workmanship. MUBEST handled our housing rewiring project with utmost care and efficiency.",
    rating: 5,
  },
  {
    id: 4,
    name: "Michelle Wong",
    title: "Estate Manager",
    company: "Tanjong Pagar",
    content:
      "MUBEST's turnkey solutions have transformed our electrical infrastructure. Their team is knowledgeable, punctual, and always goes the extra mile.",
    rating: 5,
  },
  {
    id: 5,
    name: "Robert Ng",
    title: "Chief Engineer",
    company: "Sembcorp",
    content:
      "Reliable, efficient, and cost-effective. MUBEST has been instrumental in maintaining our lamp post installations across multiple districts.",
    rating: 5,
  },
  {
    id: 6,
    name: "Sarah Lee",
    title: "Infrastructure Lead",
    company: "LTA",
    content:
      "MUBEST has been our trusted partner for electrical maintenance for over 5 years. Their team is professional, responsive, and delivers quality work every time. Highly recommended!",
    rating: 5,
  },
  {
    id: 7,
    name: "Priya Kumar",
    title: "Project Manager",
    company: "JTC Corporation",
    content:
      "The team's technical expertise and project management capabilities are impressive. They handled our industrial electrical upgrade with precision and minimal disruption to operations.",
    rating: 5,
  },
  {
    id: 8,
    name: "Marcus Chen",
    title: "Director",
    company: "Sembcorp Industries",
    content:
      "Excellent coordination and execution. MUBEST's ability to manage tight schedules while maintaining safety standards is commendable. We'll definitely work with them again.",
    rating: 5,
  },
  {
    id: 9,
    name: "Lisa Anderson",
    title: "Operations Manager",
    company: "PUB",
    content:
      "Swift response times and quality solutions. Their team resolved our critical electrical issues quickly and professionally. Great value for money.",
    rating: 5,
  },
  {
    id: 10,
    name: "Vikram Sharma",
    title: "Senior Engineer",
    company: "ST Engineering",
    content:
      "Partnering with MUBEST has been seamless. Their technical knowledge, combined with their proactive approach to problem-solving, sets them apart in the industry.",
    rating: 5,
  },
  {
    id: 11,
    name: "Claire Ng",
    title: "Maintenance Supervisor",
    company: "Pasir Ris - Punggol",
    content:
      "Consistent quality and reliability in their deliverables. MUBEST has become our preferred contractor for all electrical maintenance needs across our estates.",
    rating: 5,
  },
  {
    id: 12,
    name: "Daniel Wong",
    title: "Chief Operations Officer",
    company: "Marsiling-Yew Tee",
    content:
      "Professional, punctual, and thorough. Their team goes above and beyond to ensure every project is completed to the highest standards. Highly satisfied with their work.",
    rating: 5,
  },
];

// Group testimonials into sets of 3
const testimonialGroups = [];
for (let i = 0; i < testimonials.length; i += 3) {
  testimonialGroups.push(testimonials.slice(i, i + 3));
}

// Duplicate groups for seamless loop
const duplicatedGroups = [...testimonialGroups, ...testimonialGroups];

export default function TestimonialsSection() {
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
      id="testimonials"
      className="relative py-32 bg-[#030712] overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 rounded-full bg-[rgba(255,193,7,0.03)] blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-[rgba(255,143,0,0.02)] blur-[120px]" />
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
              Client Success
            </span>
          </div>

          <h2
            className={`font-display text-[48px] md:text-[64px] text-white tracking-wider mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "0.1s" }}
          >
            WHAT OUR CLIENTS SAY
          </h2>

          <p
            className={`font-body text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            We take pride in delivering exceptional service. Here's what our valued clients have to say about working with us.
          </p>
        </div>

        {/* Continuous Scrolling Container */}
        <style jsx>{`
          @keyframes scroll-groups {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .scroll-container {
            animation: scroll-groups 80s linear infinite;
          }
          .scroll-container:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="relative overflow-hidden">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none" />

          {/* Scrolling testimonial groups */}
          <div className="scroll-container flex gap-6 py-8 px-6 w-max">
            {duplicatedGroups.map((group, groupIndex) => (
              <div
                key={`group-${groupIndex}`}
                className="flex gap-6 flex-shrink-0"
              >
                {group.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="group flex-shrink-0 w-80 overflow-hidden rounded-2xl border border-[rgba(255,193,7,0.2)] bg-gradient-to-br from-[rgba(13,21,37,0.6)] via-[rgba(13,21,37,0.4)] to-[rgba(13,21,37,0.2)] backdrop-blur-xl p-6 md:p-8 hover:border-[rgba(255,193,7,0.5)] transition-all duration-300"
                  >
                    {/* Background accent */}
                    <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[rgba(255,193,7,0.1)] to-transparent rounded-full blur-3xl -z-10" />
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[rgba(255,193,7,0.05)] to-transparent rounded-full blur-3xl -z-10" />

                    {/* Star Rating */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-[#FFC107]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Quote */}
                    <div className="mb-6">
                      <svg
                        className="w-6 h-6 text-[#FFC107] mb-3 opacity-50"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.716-5-7-5-6 0-5 5-5 9.972C0 15.971 1 21 3 21z" />
                      </svg>
                      <p className="font-body text-sm text-white leading-relaxed italic line-clamp-4">
                        "{testimonial.content}"
                      </p>
                    </div>

                    {/* Author Info */}
                    <div className="flex items-center gap-3 pt-4 border-t border-[rgba(255,193,7,0.1)]">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFC107] to-[#FF8F00] flex items-center justify-center flex-shrink-0">
                        <span className="font-display text-sm font-bold text-[#030712]">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-heading text-sm text-white tracking-[0.05em] truncate">
                          {testimonial.name}
                        </h3>
                        <p className="font-body text-xs text-slate-400 truncate">
                          {testimonial.title}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-6 md:gap-12 mt-20 pt-20 px-6 max-w-7xl mx-auto border-t border-[rgba(255,193,7,0.1)]">
          {[
            { number: "100%", label: "Client Satisfaction" },
            { number: "500+", label: "Projects Done" },
            { number: "20+", label: "Years Experience" },
          ].map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: isVisible ? `${0.4 + index * 0.1}s` : "0s" }}
            >
              <h3 className="font-display text-4xl md:text-5xl text-[#FFC107] mb-2">
                {stat.number}
              </h3>
              <p className="font-body text-xs md:text-sm text-slate-400 uppercase tracking-[0.1em]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
