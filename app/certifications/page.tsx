"use client";
import { useRef, useState } from "react";
import "../../app/certifications/scrollbar-hide.css";
import FooterSection from "../../components/FooterSection";
import Header from "../../components/Header";

// Use actual certificate images from /app/images/ceritificates
const certifications = [
  "/images/ceritificates/1.png",
  "/images/ceritificates/2.png",
  "/images/ceritificates/3.png",
  "/images/ceritificates/4.png",
  "/images/ceritificates/5.png",
  "/images/ceritificates/6.png",
  "/images/ceritificates/7.png",
  "/images/ceritificates/8.png",
  "/images/ceritificates/9.png",
  "/images/ceritificates/10.png",
  "/images/ceritificates/11.png",
  "/images/ceritificates/12.png",
  "/images/ceritificates/13.png",
  "/images/ceritificates/14.png",
  "/images/ceritificates/15.png",
  "/images/ceritificates/16.png",
  "/images/ceritificates/17.png",
  "/images/ceritificates/18.png",
  "/images/ceritificates/19.png",
];

export default function CertificationsPage() {
  const [zoomed, setZoomed] = useState<null | number>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollBy = (offset: number) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-white via-[#f7fafc] to-[#e3f2fd] pb-20">
        <section className="max-w-6xl mx-auto px-4 pt-24 pb-10">
          <h1 className="font-display text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-[#0e4672] via-[#046f5e] to-[#7bc59d] bg-clip-text text-transparent mb-8 drop-shadow">Certifications & Awards</h1>
          <div className="relative flex items-center justify-center">
            <button
              className="absolute left-0 z-10 bg-white/80 hover:bg-[#7bc59d]/80 text-[#046f5e] rounded-full shadow p-2 transition-all disabled:opacity-30"
              style={{ top: '50%', transform: 'translateY(-50%)' }}
              onClick={() => scrollBy(-320)}
              aria-label="Scroll left"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <div
              ref={carouselRef}
              className="flex gap-8 overflow-x-auto snap-x snap-mandatory px-12 no-scrollbar"
              style={{ scrollBehavior: 'smooth' }}
            >
              {certifications.map((img, idx) => (
                <div
                  key={img}
                  className="min-w-[440px] max-w-[440px] flex flex-col items-center cursor-pointer snap-center"
                  onClick={() => setZoomed(idx)}
                  tabIndex={0}
                  aria-label={`Zoom image ${idx + 1}`}
                >
                  <img
                    src={img}
                    alt={`Certification ${idx + 1}`}
                    className="h-[28rem] w-[28rem] object-contain rounded-xl border-4 border-[#0e4672]/10 bg-white shadow-lg hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
            <button
              className="absolute right-0 z-10 bg-white/80 hover:bg-[#7bc59d]/80 text-[#046f5e] rounded-full shadow p-2 transition-all disabled:opacity-30"
              style={{ top: '50%', transform: 'translateY(-50%)' }}
              onClick={() => scrollBy(320)}
              aria-label="Scroll right"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </section>
        {/* Zoomed Modal */}
        {zoomed !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setZoomed(null)}>
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full relative flex flex-col items-center animate-fadeIn" onClick={e => e.stopPropagation()}>
              <button className="absolute top-4 right-4 text-[#046f5e] text-2xl font-bold hover:text-[#FFC107]" onClick={() => setZoomed(null)} aria-label="Close zoomed view">&times;</button>
              <img src={certifications[zoomed]} alt={`Certification ${zoomed + 1}`} className="h-[38rem] w-[38rem] max-w-full max-h-[90vh] object-contain rounded-xl border-4 border-[#0e4672]/10 bg-white" />
            </div>
          </div>
        )}
      </main>
      <FooterSection />
    </>
  );
}
