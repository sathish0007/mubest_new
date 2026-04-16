"use client";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-28 px-6 bg-background bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-accent/10 blur-[120px]" />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold text-heading mb-4 tracking-tight leading-tight drop-shadow-xl">
          POWERING
          <span className="block text-primary">SINGAPORE'S INFRASTRUCTURE</span>
        </h1>
        <h2 className="font-display text-2xl md:text-3xl text-accent font-bold mb-8 tracking-widest uppercase">Electrical Experts</h2>
        <p className="font-body text-lg md:text-xl text-body mb-10 max-w-3xl mx-auto">
          Mubest Pte Ltd is a Singapore-based company focused on electrical infrastructure and building works across public housing developments, commercial properties, and large-scale projects.<br className="hidden md:block" />
          Established in 2006, we bring over 20 years of experience in electrification and infrastructure works, supporting the development of residential estates, public spaces, and private projects. Our work includes lighting and electrical systems for housing blocks, linkways, public areas, commercial buildings, and large-scale facilities.
        </p>
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold text-primary">80+</span>
            <span className="text-sm text-body mt-1 uppercase tracking-widest">Certified Professionals</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold text-primary">20+</span>
            <span className="text-sm text-body mt-1 uppercase tracking-widest">Years of Trust</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold text-primary">500+</span>
            <span className="text-sm text-body mt-1 uppercase tracking-widest">Projects Done</span>
          </div>
        </div>
      </div>
    </section>
  );
}