"use client";
import { basePath } from "../app/util";
import Link from "next/link";
export function OurExperiencesSection() {
const achievements = [
  { icon: "clock", text: "On-time delivery within budget, every project" },
  { icon: "shield", text: "Consistent safety and quality standards maintained" },
  { icon: "building", text: "Large-scale public infrastructure works supported" },
  { icon: "repeat", text: "Ongoing maintenance contracts with loyal, returning clients" },
];

function AchieveIcon({ type }) {
  const shared = { width: 16, height: 16, viewBox: "0 0 24 24", fill: "none", stroke: "#7dcaa9", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" };
  if (type === "clock") return (
    <svg {...shared}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
  );
  if (type === "shield") return (
    <svg {...shared}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
  );
  if (type === "building") return (
    <svg {...shared}><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
  );
  return (
    <svg {...shared}><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>
  );
}
  return (
    <section className="py-24 bg-gradient-to-b from-white via-[#f7fafc] to-[#e3f2fd]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Card wrapper */}
        <div className="rounded-[24px] border border-[#ddeef8] bg-white shadow-[0_8px_40px_rgba(14,70,114,0.08)] overflow-hidden">
          <div className="grid lg:grid-cols-2">

            {/* ── Left: content ─────────────────────────────── */}
            <div className="flex flex-col justify-between p-10 lg:p-14 border-b lg:border-b-0 lg:border-r border-[#ddeef8]">
              <div>
                {/* eyebrow */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-5 h-0.5 bg-[#7dcaa9] inline-block" />
                  <span className="text-[10px] font-bold tracking-[2.5px] uppercase text-[#7dcaa9]">
                    Since 2006
                  </span>
                </div>

                <h2 className="font-display text-[44px] md:text-[36px] font-extrabold text-[#0e4672] uppercase tracking-tight leading-none mb-5">
                  Our Experiences
                </h2>

                <p className="font-body text-[#4b6580] text-base leading-relaxed mb-8">
                  Our strength lies in a skilled, experienced workforce capable of handling projects of
                  any scale — from residential HDB estates to large-scale public infrastructure.
                </p>

                {/* Achievement list */}
                <ul className="space-y-3 mb-8">
                  {achievements.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 bg-[#f4fbf8] border-l-[3px] border-[#7dcaa9] rounded-r-xl px-4 py-3"
                    >
                      <span className="mt-0.5 flex-shrink-0">
                        <AchieveIcon type={item.icon} />
                      </span>
                      <span className="font-body text-sm text-[#0e4672] leading-relaxed">{item.text}</span>
                    </li>
                  ))}
                </ul>

                <p className="font-body text-[#4b6580] text-sm leading-relaxed">
                  Our continued work with returning clients reflects the trust we have built over time.
                </p>
              </div>

              {/* Stats + CTA */}
              <div className="mt-10">
                {/* <div className="flex gap-3 flex-wrap mb-7">
                  {[
                    { num: "20+", label: "Years" },
                    { num: "HDB", label: "Approved" },
                    { num: "BCA", label: "Licensed" },
                  ].map((s, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center justify-center px-5 py-3 bg-[#0e4672] rounded-[14px] min-w-[70px]"
                    >
                      <span className="font-display text-2xl font-extrabold text-[#7dcaa9] leading-none">
                        {s.num}
                      </span>
                      <span className="text-[9px] font-bold tracking-[1.5px] uppercase text-[#a8d8c4] mt-1">
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div> */}

                <Link
                  href="/projects"
                  className="inline-flex items-center gap-3 px-7 py-4 bg-[#7dcaa9] text-[#0e4672] font-heading font-bold text-[11px] tracking-[0.18em] uppercase rounded-sm hover:bg-[#5cb88d] transition-colors duration-300"
                >
                  View Our Projects
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* ── Right: image ───────────────────────────────── */}
            <div
              className="relative min-h-[420px] lg:min-h-0 bg-[#0e4672] flex flex-col justify-end overflow-hidden"
            >
              {/* Replace with your actual <img> — the div below is the placeholder */}
              <img
                src={`${basePath}/images/team-1.png`}
                alt="Mubest team at work"
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />

              {/* Decorative top-right corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#7dcaa9] opacity-20 rounded-bl-full" />

              {/* Location badge */}
              <div className="absolute top-5 left-5 flex items-center gap-2 bg-[rgba(125,202,169,0.15)] border border-[rgba(125,202,169,0.35)] rounded-lg px-3 py-1.5">
                <svg className="w-3.5 h-3.5 text-[#7dcaa9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#7dcaa9]">Singapore</span>
              </div>

              {/* Bottom caption bar */}
              <div className="relative z-10 px-7 py-5 bg-[rgba(14,70,114,0.85)] backdrop-blur-sm">
                <p className="text-[#7dcaa9] text-[11px] font-semibold mb-0.5 tracking-wide">
                  Mubest team · on-site
                </p>
                <p className="text-[#a8d8c4] text-[10px] opacity-75">
                  Delivering quality electrical infrastructure across Singapore
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}