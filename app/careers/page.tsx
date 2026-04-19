"use client";
import Link from "next/link";

import Header from "../../components/Header";
import FooterSection from "../../components/FooterSection";
const heroImages = [
  "/images/13.png",
  "/images/16.png",
  "/images/23.png",
  "/images/45.png"
];

export default function CareersPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-white via-[#f7fafc] to-[#e3f2fd]">
        {/* Hero Section */}
        <section className="relative h-[340px] md:h-[420px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0e4672]/90 via-[#046f5e]/80 to-[#7bc59d]/60 shadow-lg">
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/10 z-10" />
          {/* Staggered Photo Grid */}
          <div className="absolute inset-0 flex justify-center items-end gap-4 z-0 px-4">
            {heroImages.map((src, i) => (
              <img
                key={src}
                src={src}
                alt="Mubest team"
                className={`h-40 md:h-56 w-32 md:w-44 object-cover rounded-2xl shadow-xl border-4 border-white/60 transition-transform duration-500 ${i % 2 === 0 ? 'mb-8' : 'mb-0'} hover:scale-105`}
                style={{ zIndex: 2 + i }}
              />
            ))}
          </div>
          {/* Hero Text */}
          <div className="relative z-20 text-center">
            <h1 className="font-display text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-white via-[#7bc59d] to-[#FFC107] bg-clip-text text-transparent drop-shadow-lg mb-4">Careers at Mubest</h1>
            <p className="text-lg md:text-2xl text-white/90 font-medium max-w-2xl mx-auto mb-2 drop-shadow">Build your future with a team that powers Singapore's infrastructure.</p>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 py-20 px-4">
          {/* Left: Why Join & Benefits */}
          <div className="space-y-10">
            <section className="bg-white/90 rounded-2xl shadow-lg p-8 border border-[#e3f2fd] flex flex-col gap-4">
              <h2 className="font-heading text-2xl text-[#046f5e] mb-2 flex items-center gap-2">
                <svg className="w-7 h-7 text-[#0e4672]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m4 0h-1v-4h-1m4 0h-1v-4h-1" /></svg>
                Why Join Us?
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-[#0d6f60]">
                <li>Opportunity to work on large-scale infrastructure and building projects</li>
                <li>Exposure to real site experience and project environments</li>
                <li>Supportive and team-oriented workplace</li>
                <li>Stable company with ongoing projects</li>
                <li>Accredited with Progressive Wage Mark (PWM Mark)</li>
              </ul>
            </section>
            <section className="bg-white/90 rounded-2xl shadow-lg p-8 border border-[#e3f2fd] flex flex-col gap-4">
              <h2 className="font-heading text-2xl text-[#046f5e] mb-2 flex items-center gap-2">
                <svg className="w-7 h-7 text-[#FFC107]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Benefits
              </h2>
              <ul className="space-y-4">
                <li><span className="font-semibold text-[#0e4672]">Monthly Medical Claims:</span> <span className="ml-2 text-[#0d6f60]">Employees are entitled to medical claim reimbursements, capped at $15 per month.</span></li>
                <li><span className="font-semibold text-[#0e4672]">Birthday Vouchers:</span> <span className="ml-2 text-[#0d6f60]">Each employee will receive a birthday voucher as a token of appreciation and celebration.</span></li>
                <li><span className="font-semibold text-[#0e4672]">Salary Increments:</span> <span className="ml-2 text-[#0d6f60]">Employees are eligible for annual salary increments based on performance evaluations.</span></li>
                <li><span className="font-semibold text-[#0e4672]">Year-End Bonus:</span> <span className="ml-2 text-[#0d6f60]">A performance-based bonus will be awarded at the end of the year determined by the employee’s individual contributions and achievements.</span></li>
              </ul>
            </section>
          </div>
          {/* Right: Opportunities & Apply */}
          <div className="space-y-10">
            <section className="bg-white/90 rounded-2xl shadow-lg p-8 border border-[#e3f2fd] flex flex-col gap-6">
              <h2 className="font-heading text-2xl text-[#046f5e] mb-2 flex items-center gap-2">
                <svg className="w-7 h-7 text-[#7bc59d]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                Current Opportunities
              </h2>
              <div className="grid grid-cols-1 gap-6">
                <div className="flex items-center gap-4 bg-gradient-to-br from-[#e3f2fd] to-[#7bc59d]/20 rounded-xl p-4 shadow group hover:shadow-lg transition-all duration-300">
                  <img src="/images/11.png" alt="Electrical Engineer" className="h-16 w-16 object-cover rounded-full border-4 border-[#0e4672]/10 group-hover:scale-105 transition-transform duration-300" />
                  <div>
                    <h3 className="font-bold text-lg text-[#0e4672] mb-1">Electrical Engineer</h3>
                    <p className="text-[#0d6f60] text-sm">Design, implement, and maintain electrical systems for diverse projects. Collaborate with teams to deliver safe, efficient solutions.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-gradient-to-br from-[#e3f2fd] to-[#7bc59d]/20 rounded-xl p-4 shadow group hover:shadow-lg transition-all duration-300">
                  <img src="/images/14.png" alt="Project Manager" className="h-16 w-16 object-cover rounded-full border-4 border-[#0e4672]/10 group-hover:scale-105 transition-transform duration-300" />
                  <div>
                    <h3 className="font-bold text-lg text-[#0e4672] mb-1">Project Manager</h3>
                    <p className="text-[#0d6f60] text-sm">Lead and coordinate project teams, manage timelines and budgets, and ensure successful project delivery from start to finish.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-gradient-to-br from-[#e3f2fd] to-[#7bc59d]/20 rounded-xl p-4 shadow group hover:shadow-lg transition-all duration-300">
                  <img src="/images/15.png" alt="Site Supervisor" className="h-16 w-16 object-cover rounded-full border-4 border-[#0e4672]/10 group-hover:scale-105 transition-transform duration-300" />
                  <div>
                    <h3 className="font-bold text-lg text-[#0e4672] mb-1">Site Supervisor</h3>
                    <p className="text-[#0d6f60] text-sm">Oversee on-site operations, ensure safety compliance, and coordinate with teams. Class 3 Driving License preferred.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-gradient-to-br from-[#e3f2fd] to-[#7bc59d]/20 rounded-xl p-4 shadow group hover:shadow-lg transition-all duration-300">
                  <img src="/images/18.png" alt="Construction Worker" className="h-16 w-16 object-cover rounded-full border-4 border-[#0e4672]/10 group-hover:scale-105 transition-transform duration-300" />
                  <div>
                    <h3 className="font-bold text-lg text-[#0e4672] mb-1">Construction Worker</h3>
                    <p className="text-[#0d6f60] text-sm">Support construction and installation activities, maintain site safety, and contribute to quality project outcomes.</p>
                  </div>
                </div>
              </div>
            </section>
            <section className="bg-white/90 rounded-2xl shadow-lg p-8 border border-[#e3f2fd] flex flex-col gap-4">
              <h2 className="font-heading text-2xl text-[#046f5e] mb-2 flex items-center gap-2">
                <svg className="w-7 h-7 text-[#FFC107]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12v1m0 4v.01M8 12v1m0 4v.01M12 8v.01M12 16v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Apply to Join Us
              </h2>
              <p className="text-[#0d6f60] mb-2">If you are interested in joining Mubest, please send your resume to:</p>
              <div className="mb-2">
                <span className="font-semibold text-[#0e4672]">Email:</span> <a href="mailto:info@mubest.com.sg" className="text-[#046f5e] underline">info@mubest.com.sg</a>
              </div>
              <div className="mb-2">
                <span className="font-semibold text-[#0e4672]">Phone:</span> <a href="tel:+6563590110" className="text-[#046f5e] underline">+65 6359 0110</a>
              </div>
              <div className="mb-2">
                <span className="font-semibold text-[#0e4672]">Address:</span>
                <span className="ml-2 text-[#0d6f60]">196 Woodlands Industrial Park E5, Woodlands Bizhub, Singapore 757279</span>
              </div>
              <p className="text-[#0d6f60] mt-4">If there are no suitable openings, you are still welcome to submit your resume for future opportunities.</p>
            </section>
          </div>
        </div>
        {/* Removed duplicate sections for cleaner UI. */}
      </main>
      <FooterSection />
    </>
  );
}
