"use client";
import Image from "next/image";

const services = [
  {
    title: "Electrical Infrastructure & Power Systems",
    description: "Installation, upgrading and maintenance of electrical infrastructure for residential, commercial and public developments. Our work includes electrical rewiring of residential blocks, electrical load upgrading works (ELU), underground cable replacement, substations, distribution systems and consumer switch rooms.",
    image: "/images/1.png",
  },
  {
    title: "Lighting & Energy Efficiency",
    description: "Design and installation of lighting systems for streets, carparks and public areas. We also carry out LED retrofitting and energy-efficient lighting upgrades for existing facilities.",
    image: "/images/2.png",
  },
  {
    title: "Substations & Electrical Facilities",
    description: "Design and construction of substations, consumer switch rooms (CSR), and electrical linkways to support reliable power distribution within developments.",
    image: "/images/17.png",
  },
  {
    title: "Mechanical Systems (ACMV)",
    description: "Installation and maintenance of air-conditioning, refrigeration and ventilation systems to ensure proper environmental control for buildings and facilities.",
    image: "/images/18.png",
  },
  {
    title: "Security & Communication Systems",
    description: "Installation of CCTV surveillance systems, fibre network infrastructure and related building communication systems.",
    image: "/images/19.png",
  },
  {
    title: "Building & External Infrastructure Works",
    description: "General building works, external infrastructure construction and project support works that complement electrical and mechanical installations.",
    image: "/images/20.png",
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
              className="group rounded-3xl shadow-2xl border border-[#e0f2f1] p-0 flex flex-col items-center text-center relative overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-[0_8px_40px_rgba(14,70,114,0.18)]"
              style={{ minHeight: 420, background: '#fff' }}
            >
              {/* Background image with dark overlay for text readability */}
              <div className="absolute inset-0 z-0">
                <Image src={service.image} alt={service.title} fill style={{ objectFit: 'cover' }} className="transition-transform duration-700 scale-100 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500" />
              </div>
              <div className="relative z-10 flex flex-col items-center justify-center h-full w-full p-10">
                <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl text-white mb-3 font-serif tracking-tight group-hover:text-[#FFC107] transition-colors duration-300 drop-shadow-lg">
                  {service.title}
                </h3>
                <p className="text-white/90 text-base md:text-lg font-normal mb-2 font-serif drop-shadow-md group-hover:text-[#fffde7] transition-colors duration-300">
                  {service.description}
                </p>
              </div>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1.5 bg-[#FFC107] rounded-full opacity-0 group-hover:opacity-80 transition-all duration-500 z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}