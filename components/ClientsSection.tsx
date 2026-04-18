"use client";
import { useEffect, useRef, useState } from "react";

const clients = [
  { id: 1, name: "ANG MO KIO TOWN COUNCIL" },
  { id: 2, name: "CHUA CHU KANG TOWN COUNCIL" },
  { id: 3, name: "COMMERCIAL INDUSTRIAL SUPPLIES & SERVICES PTE LTD" },
  { id: 4, name: "CPL ENGINEERING SERVICES PTE LTD" },
  { id: 5, name: "DAVIS LIGHTING PTE LTD" },
  { id: 6, name: "EC INTERIOR DESIGN & DECORATION" },
  { id: 7, name: "ELINGTON ENGINEERING PTE LTD" },
  { id: 8, name: "EM SERVICE PTE LTD." },
  { id: 9, name: "HAI KHIM ENGINEERING PTE LTD" },
  { id: 10, name: "HAM ENGINEERING PTE LTD" },
  { id: 11, name: "HOLLAND BUKIT PANJANG TOWN COUNCIL" },
  { id: 12, name: "JURONG-CLEMENTI TOWN COUNCIL" },
  { id: 13, name: "MARINE PARADE TOWN COUNCIL" },
  { id: 14, name: "MARSILING-YEW TEE TOWN COUNCIL" },
  { id: 15, name: "NIPPON BUILDER PTE LTD" },
  { id: 16, name: "PASIR RIS - PUNGGOL TOWN COUNCIL" },
  { id: 17, name: "PRESICO ENGINEERING PTE LTD" },
  { id: 18, name: "SEMBAWANG TOWN COUNCIL" },
  { id: 19, name: "SENGKANG TOWN COUNCIL" },
  { id: 20, name: "SING HO ELECTRICAL ENGINEERING PTE LTD" },
  { id: 21, name: "ST ENGINEERING URBAN SOLUTIONS LTD" },
  { id: 22, name: "TANJONG PAGAR TOWN COUNCIL" },
  { id: 23, name: "TLC M&E ENGRG.PTE LTD" },
  { id: 24, name: "UG M&E PTE LTD" },
  { id: 25, name: "WEST COAST TOWN COUNCIL" },
  { id: 26, name: "YAO HENG BUILDERS" },
];

// Duplicate clients for seamless loop
const duplicatedClients = [...clients, ...clients];
export default function ClientsSection() {

// Track which client images failed to load
  const [imageError, setImageError] = useState<{ [key: number]: boolean }>({});
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
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
    <section ref={sectionRef} id="clients" className="relative py-20 bg-white overflow-hidden">
      {/* Soft logo color background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full bg-[rgba(14,70,114,0.06)] blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-[rgba(13,111,96,0.05)] blur-[120px]" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16 px-6 max-w-7xl mx-auto">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 border border-[#FFC107]/30 bg-[#FFC107]/10 rounded-full mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#FFC107] animate-pulse" />
            <span className="font-mono text-xs text-[#0e4672] tracking-[0.15em] uppercase">
              Trusted Partners
            </span>
          </div>

          <h2
            className={`font-display text-[40px] md:text-[56px] text-[#0e4672] font-bold tracking-wider mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "0.1s" }}
          >
            OUR CLIENTS
          </h2>

          <p
            className={`font-body text-[#0d6f60] text-base max-w-2xl mx-auto leading-relaxed transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            Trusted by leading organizations across Singapore
          </p>
        </div>

        {/* Scrolling Container */}
        <style jsx>{`
          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .scroll-container {
            animation: scroll-left 40s linear infinite;
          }
          .scroll-container:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="relative overflow-hidden">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Scrolling logos */}
          <div
            ref={scrollRef}
            className="scroll-container flex gap-8 md:gap-12 py-8 px-6 w-max"
          >
            {duplicatedClients.map((client, index) => {
              const initials = client.name
                .split(" ")
                .map((word) => word[0])
                .slice(0, 2)
                .join("");

              const showInitials = imageError[client.id];

              return (
                <div
                  key={`${client.id}-${Math.floor(index / clients.length)}`}
                  className="group flex-shrink-0 flex items-center justify-center"
                >
                  {/* Logo container */}
                  <div className="relative flex items-center justify-center h-20 md:h-28 aspect-square">
                    <div className="relative w-full h-full flex items-center justify-center">
                      {/* Background circle */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#e3f2fd] to-[#f1f8e9] border border-[#0e4672]/15 group-hover:border-[#FFC107] group-hover:from-[#fffde7] group-hover:to-[#e3f2fd] transition-all duration-300" />

                      {/* Logo image or initials */}
                      <div className="relative z-10 flex items-center justify-center w-full h-full p-3">
                        {!showInitials && (
                          <img
                            src={`/images/clients/${client.id}.png`}
                            alt={client.name}
                            className="w-full h-full max-w-[95%] max-h-[95%] object-contain group-hover:scale-110 transition-transform duration-300"
                            onError={() => setImageError((prev) => ({ ...prev, [client.id]: true }))}
                          />
                        )}
                        {showInitials && (
                          <span
                            className="font-display text-2xl md:text-4xl text-[#0e4672] font-bold tracking-wider group-hover:scale-110 transition-transform duration-300 flex items-center justify-center w-full h-full"
                            id={`initials-${client.id}`}
                          >
                            {initials || "?"}
                          </span>
                        )}
                      </div>

                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 rounded-xl bg-[#FFC107]/15 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                    </div>

                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-[#0e4672]/90 border border-[#FFC107]/30 rounded-lg text-white font-body text-xs text-center whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
                      {client.name}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: isVisible ? "0.8s" : "0s" }}
        >
          <p className="font-body text-[#0d6f60] text-sm max-w-2xl mx-auto mb-6">
            Join our network of satisfied clients. Experience reliability, expertise, and excellence in every project we undertake.
          </p>
        </div>
      </div>
    </section>
  );
}

