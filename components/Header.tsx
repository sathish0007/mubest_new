"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ["home", "services", "contact"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass border-b border-[rgba(255,193,7,0.12)] py-3"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex-shrink-0">
              <img
                src="/favicon.png"
                alt="Mubest Logo"
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 rounded-full bg-[rgba(255,193,7,0.1)] blur-lg scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div>
              <div className="font-display text-2xl leading-none text-white tracking-widest group-hover:text-[#FFC107] transition-colors duration-300">
                MUBEST
              </div>
              <div className="font-heading text-[10px] tracking-[0.25em] text-[#FFC107] uppercase leading-none opacity-70">
                PTE LTD.
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href.startsWith("/#") && pathname === "/" && activeSection === link.href.replace("/#", ""));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-5 py-2 font-heading text-sm tracking-[0.1em] uppercase transition-all duration-300 rounded-sm
                    ${isActive
                      ? "text-[#FFC107]"
                      : "text-slate-400 hover:text-white"
                    }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 bg-[rgba(255,193,7,0.06)] rounded-sm border border-[rgba(255,193,7,0.15)]" />
                  )}
                  <span className="relative">{link.label}</span>
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-5 right-5 h-px bg-[#FFC107]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+6512345678"
              className="flex items-center gap-2 text-sm font-heading tracking-wider text-slate-400 hover:text-[#FFC107] transition-colors duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +65 1234 5678
            </a>
            <Link
              href="/#contact"
              className="relative group overflow-hidden px-6 py-2.5 font-heading text-sm tracking-[0.15em] uppercase text-[#030712] bg-[#FFC107] rounded-sm font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,193,7,0.4)]"
            >
              <span className="relative z-10">Get Quote</span>
              <div className="absolute inset-0 bg-[#FF8F00] translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-px bg-[#FFC107] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-4 h-px bg-[#FFC107] transition-all duration-300 ${menuOpen ? "opacity-0 w-0" : ""}`} />
            <span className={`block w-6 h-px bg-[#FFC107] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 md:hidden ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-[#030712]/90 backdrop-blur-xl transition-opacity duration-500 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-[#0a0f1e] border-l border-[rgba(255,193,7,0.12)] p-8 pt-24 transition-transform duration-500 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="flex flex-col gap-2">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 font-heading text-lg tracking-[0.1em] uppercase text-slate-300 hover:text-[#FFC107] hover:bg-[rgba(255,193,7,0.05)] rounded-sm transition-all duration-200 border border-transparent hover:border-[rgba(255,193,7,0.1)]"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <span className="text-[#FFC107] text-xs font-mono opacity-50">0{i + 1}</span>
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-8 pt-8 border-t border-[rgba(255,193,7,0.1)]">
            <Link
              href="/#contact"
              onClick={() => setMenuOpen(false)}
              className="block w-full text-center px-6 py-3 font-heading text-sm tracking-[0.2em] uppercase text-[#030712] bg-[#FFC107] font-semibold rounded-sm hover:bg-[#FF8F00] transition-colors duration-300"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
