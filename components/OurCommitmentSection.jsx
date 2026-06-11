"use client";
import Link from "next/link";
import { ShieldCheck, Flame, TrendingUp } from "lucide-react";

export function OurCommitmentSection() {
  const achievements = [
  { icon: "clock", text: "On-time delivery within budget, every project" },
  { icon: "shield", text: "Consistent safety and quality standards maintained" },
  { icon: "building", text: "Large-scale public infrastructure works supported" },
  { icon: "repeat", text: "Ongoing maintenance contracts with loyal, returning clients" },
];

const commitments = [
  {
    title: "Safety First",
    body: "Strict safety standards on every site, including live public environments.",
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7dcaa9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Client-Centred",
    body: "Clear coordination with clients and all stakeholders throughout every project phase.",
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7dcaa9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Minimal Disruption",
    body: "Efficient execution in active public spaces with genuine care for the surrounding community.",
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7dcaa9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 14 10 14 10 20" />
        <polyline points="20 10 14 10 14 4" />
        <line x1="14" y1="10" x2="21" y2="3" />
        <line x1="3" y1="21" x2="10" y2="14" />
      </svg>
    ),
  },
];
const coreValues = [
  { title: "Truth", description: "Honesty and transparency guide every decision.", icon: <ShieldCheck size={28} strokeWidth={1.6} /> },
  { title: "Hard Work", description: "Discipline and dedication drive our success.", icon: <Flame size={28} strokeWidth={1.6} /> },
  { title: "Progress", description: "Continuous growth and constant improvement.", icon: <TrendingUp size={28} strokeWidth={1.6} /> },
];
  return (
    <section className="py-24 bg-gradient-to-b from-[#e3f2fd] via-white to-[#f7fafc]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Card wrapper */}
        <div className="rounded-[24px] border border-[#ddeef8] bg-white shadow-[0_8px_40px_rgba(14,70,114,0.08)] overflow-hidden">

          {/* Top accent stripe */}
          <div className="h-1 w-full bg-gradient-to-r from-[#0e4672] via-[#3a7ca5] to-[#7dcaa9]" />

          <div className="grid lg:grid-cols-2">

            {/* ── Left: headline + director quote ───────────── */}
            <div className="p-10 lg:p-14 border-b lg:border-b-0 lg:border-r border-[#ddeef8]">

              {/* eyebrow */}
              <div className="flex items-center gap-2 mb-4">
                <span className="w-5 h-0.5 bg-[#7dcaa9] inline-block" />
                <span className="text-[10px] font-bold tracking-[2.5px] uppercase text-[#7dcaa9]">
                  Our Promise
                </span>
              </div>

              <h2 className="font-display text-[44px] md:text-[36px] font-extrabold text-[#0e4672] uppercase tracking-tight leading-none mb-5">
                Our Commitment
              </h2>

              <p className="font-body text-[#4b6580] text-base leading-relaxed mb-8">
                We approach every project with a focus on reliability, safety and clear coordination
                with clients and stakeholders — minimising disruption while maintaining the highest
                standards in active public environments.
              </p>

              {/* Director quote */}
              {/* <div className="relative bg-[#f4fbf8] border border-[#c8e9da] rounded-[18px] p-6">
                <span className="absolute -top-4 left-5 text-[48px] leading-none font-serif text-[#7dcaa9] select-none">
                  "
                </span>
                <p className="font-body text-[#0e4672] text-sm leading-relaxed italic mt-3 mb-5">
                  At Mubest, we believe in building lasting relationships through consistent quality
                  work and unwavering commitment to safety. Our team takes pride in supporting
                  Singapore's infrastructure development.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#0e4672] flex items-center justify-center text-[#7dcaa9] text-[10px] font-bold flex-shrink-0">
                    MD
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-[#0e4672] mb-0">Director</p>
                    <p className="text-[10px] text-[#4b6580]">Mubest Pte Ltd</p>
                  </div>
                </div>
              </div> */}
            </div>

            {/* ── Right: commitment pillars + core values ───── */}
            <div className="p-10 lg:p-14">

              {/* Commitment pillars */}
              <p className="text-[9px] font-bold tracking-[2px] uppercase text-[#7dcaa9] mb-4">
                How we deliver
              </p>

              <div className="space-y-3 mb-8">
                {commitments.map((c, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 bg-white border border-[#ddeef8] rounded-[14px] px-4 py-4 hover:border-[#7dcaa9] hover:shadow-[0_4px_20px_rgba(14,70,114,0.08)] transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-[10px] bg-[#0e4672] flex items-center justify-center flex-shrink-0">
                      {c.svg}
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.8px] text-[#0e4672] mb-1">
                        {c.title}
                      </p>
                      <p className="text-[12px] text-[#4b6580] leading-relaxed">{c.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Core values */}
              {/* <p className="text-[9px] font-bold tracking-[2px] uppercase text-[#7dcaa9] mb-3">
                Core Values
              </p>
              <div className="grid grid-cols-3 gap-3">
                {coreValues.map((v, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center text-center bg-[#f4fbf8] border border-[#ddeef8] rounded-[14px] px-3 py-4 hover:border-[#7dcaa9] hover:bg-white transition-all duration-300"
                  >
                    <div className="text-[#0e4672] mb-2">{v.icon}</div>
                    <p className="text-[10.5px] font-bold uppercase tracking-[0.5px] text-[#0e4672] mb-1">
                      {v.title}
                    </p>
                    <p className="text-[10px] text-[#4b6580] leading-snug">{v.description}</p>
                  </div>
                ))}
              </div> */}

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}