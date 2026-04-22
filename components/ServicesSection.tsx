"use client";
import Image from "next/image";

const services = [
  {
    title: "Electrical Infrastructure & Power Systems",
    description: "Installation, upgrading and maintenance of electrical infrastructure for residential, commercial and public developments. Our work includes electrical rewiring of residential blocks, electrical load upgrading works (ELU), underground cable replacement, substations, distribution systems and consumer switch rooms.",
    image: "/images/services/electrical_power.jpg",
  },
  {
    title: "Lighting & Energy Efficiency",
    description: "Design and installation of lighting systems for streets, carparks and public areas. We also carry out LED retrofitting and energy-efficient lighting upgrades for existing facilities.",
    image: "/images/services/light_energy.jpg",
  },
  {
    title: "Substations & Electrical Facilities",
    description: "Design and construction of substations, consumer switch rooms (CSR), and electrical linkways to support reliable power distribution within developments.",
    image: "/images/services/substation_electric.jpg",
  },
  {
    title: "Mechanical Systems (ACMV)",
    description: "Installation and maintenance of air-conditioning, refrigeration and ventilation systems to ensure proper environmental control for buildings and facilities.",
    image: "/images/services/mechanical_system.jpg",
  },
  {
    title: "Security & Communication Systems",
    description: "Installation of CCTV surveillance systems, fibre network infrastructure and related building communication systems.",
    image: "/images/services/cctv.jpg",
  },
  {
    title: "Building & External Infrastructure Works",
    description: "General building works, external infrastructure construction and project support works that complement electrical and mechanical installations.",
    image: "/images/services/electrical_installation.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-32 bg-[#f7fafc] font-serif overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-8 h-px bg-[#0e4672]" />
          <span className="font-mono text-xs tracking-[0.3em] text-[#0e4672] uppercase">Our Services</span>
        </div>
        <h2 className="font-extrabold text-[44px] md:text-[72px] leading-none tracking-tight text-[#0e4672] drop-shadow-sm mb-16 font-serif">
          Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group rounded-3xl shadow-2xl border border-[#e0f2f1] bg-white flex flex-col items-center text-center overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-[0_8px_40px_rgba(14,70,114,0.18)]"
              style={{ minHeight: 420 }}
            >
              {/* Top image, Airbnb-style */}
              <div className="w-full h-56 relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={i < 2}
                />
              </div>
              <div className="flex-1 flex flex-col items-center justify-center w-full px-6 py-8">
                <h3 className="font-bold text-xl md:text-2xl lg:text-2xl text-[#0e4672] mb-3 font-serif tracking-tight group-hover:text-[#FFC107] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[#0d6f60] text-base md:text-lg font-normal mb-2 font-serif group-hover:text-[#0e4672] transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}