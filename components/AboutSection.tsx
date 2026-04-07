"use client";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-28 px-6 bg-[#030712] overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 tracking-tight leading-tight drop-shadow-xl">
          POWERING
          <span className="block text-blue-400">SINGAPORE'S INFRASTRUCTURE</span>
        </h1>
        <h2 className="font-display text-2xl md:text-3xl text-[#FFC107] font-bold mb-8 tracking-widest uppercase">Electrical Experts</h2>
        <p className="font-body text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
          Mubest Pte Ltd is a Singapore-based company focused on electrical infrastructure and building works across public housing developments, commercial properties, and large-scale projects.<br className="hidden md:block" />
          Established in 2006, we bring over 20 years of experience in electrification and infrastructure works, supporting the development of residential estates, public spaces, and private projects. Our work includes lighting and electrical systems for housing blocks, linkways, public areas, commercial buildings, and large-scale facilities.
        </p>
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold text-blue-400">80+</span>
            <span className="text-sm text-slate-400 mt-1 uppercase tracking-widest">Certified Professionals</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold text-blue-400">20+</span>
            <span className="text-sm text-slate-400 mt-1 uppercase tracking-widest">Years of Trust</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold text-blue-400">500+</span>
            <span className="text-sm text-slate-400 mt-1 uppercase tracking-widest">Projects Done</span>
          </div>
        </div>
      </div>
    </section>
  );
}