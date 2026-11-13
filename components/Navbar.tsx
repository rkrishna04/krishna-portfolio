"use client";
import { useState, useEffect } from "react";

const navItems = [
  { label: "Namaste", sub: "About", href: "#namaste" },
  { label: "Kala", sub: "Skills", href: "#kala" },
  { label: "Katha", sub: "Works", href: "#katha" },
  { label: "Karigari", sub: "Journey", href: "#karigari" },
  { label: "Samvad", sub: "Contact", href: "#samvad" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#namaste");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { threshold: 0.3 }
    );
    navItems.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-[#08070A]/90 backdrop-blur-md border-b border-[#D4AF37]/20 shadow-2xl shadow-black/80"
          : "py-5 bg-gradient-to-b from-[#08070A]/80 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo / Monogram */}
        <a href="#namaste" className="flex items-center gap-3.5 group">
          <div className="relative w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#D4AF37]/20 to-[#E05638]/20 border border-[#D4AF37]/40 group-hover:border-[#D4AF37] transition-all shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            <span className="font-cinzel text-sm font-bold gold-gradient-text tracking-widest">
              KR
            </span>
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#D4AF37] rounded-full animate-ping opacity-75" />
          </div>
          <div className="flex flex-col">
            <span className="font-cinzel text-sm font-bold tracking-widest text-[#F8F6F0] group-hover:text-[#D4AF37] transition-colors">
              KRISHNA RATHWA
            </span>
            <span className="text-[10px] tracking-widest uppercase text-[#8E8679] font-medium">
              Data & AI Craftsman
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map(({ label, sub, href }) => {
            const isActive = active === href;
            return (
              <a
                key={href}
                href={href}
                className="group relative flex flex-col items-center py-1 transition-colors"
              >
                <span
                  className={`font-cinzel text-xs tracking-widest uppercase font-semibold transition-colors ${
                    isActive ? "text-[#D4AF37]" : "text-[#C5BFB0] group-hover:text-[#F8F6F0]"
                  }`}
                >
                  {label}
                </span>
                <span className="text-[9px] uppercase tracking-wider text-[#8E8679] group-hover:text-[#D4AF37]/80">
                  {sub}
                </span>
                {isActive && (
                  <span className="absolute -bottom-1 w-6 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent rounded-full shadow-[0_0_8px_#D4AF37]" />
                )}
              </a>
            );
          })}
          <a
            href="mailto:krishnarathwa04@gmail.com"
            className="btn-gold !py-2.5 !px-5 text-xs ml-2"
          >
            <span>Hire Me</span>
            <span className="text-xs">✦</span>
          </a>
        </nav>

        {/* Mobile Hamburger Toggle (48x48px min touch target) */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-12 h-12 gap-1.5 p-2 rounded-lg bg-[#181523]/80 border border-[#D4AF37]/30 text-[#D4AF37]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[#D4AF37] transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-4 h-0.5 bg-[#D4AF37] transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#D4AF37] transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <div className="md:hidden mt-3 mx-4 p-6 rounded-2xl bg-[#100E17]/95 border border-[#D4AF37]/30 backdrop-blur-2xl shadow-2xl shadow-black">
          <nav className="flex flex-col gap-4">
            {navItems.map(({ label, sub, href }) => (
              <a
                key={href}
                href={href}
                className="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-[#D4AF37]/10 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                <span className="font-cinzel text-sm tracking-widest text-[#F8F6F0]">
                  {label}
                </span>
                <span className="text-xs text-[#8E8679] uppercase">{sub}</span>
              </a>
            ))}
            <a
              href="mailto:krishnarathwa04@gmail.com"
              className="btn-gold w-full text-center mt-2"
              onClick={() => setMenuOpen(false)}
            >
              Hire Me ✦
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
