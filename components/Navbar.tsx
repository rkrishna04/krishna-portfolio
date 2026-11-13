"use client";
import { useState, useEffect } from "react";

const navItems = [
  { label: "Namaste", href: "#namaste" },
  { label: "Kala", href: "#kala" },
  { label: "Katha", href: "#katha" },
  { label: "Karigari", href: "#karigari" },
  { label: "Samvad", href: "#samvad" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#namaste");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
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
      { threshold: 0.4 }
    );
    navItems.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 shadow-lg"
          : "py-5"
      }`}
      style={{
        background: scrolled
          ? "rgba(250,246,238,0.95)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(212,160,23,0.20)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#namaste" className="flex items-center gap-3 group no-underline text-inherit">
          <div
            className="w-9 h-9 flex items-center justify-center rounded-sm"
            style={{
              background: "linear-gradient(135deg, #C4522A, #D4A017)",
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
          >
            <span
              className="text-xs font-bold"
              style={{ fontFamily: "'Cinzel', serif", color: "#FAF6EE" }}
            >
              KR
            </span>
          </div>
          <span
            className="hidden sm:block text-sm tracking-widest uppercase"
            style={{ fontFamily: "'Cinzel', serif", color: "var(--deep-brown)" }}
          >
            Krishna Rathwa
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="nav-link"
              style={{ color: active === href ? "var(--terracotta)" : undefined }}
            >
              {label}
            </a>
          ))}
          <a
            href="mailto:krishnarathwa04@gmail.com"
            className="btn-primary text-xs"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-12 h-12 gap-1.5 p-2 rounded-sm"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-5 h-0.5 transition-all duration-300"
              style={{
                background: "var(--terracotta)",
                transform:
                  menuOpen
                    ? i === 0
                      ? "rotate(45deg) translate(4px, 4px)"
                      : i === 2
                      ? "rotate(-45deg) translate(4px, -4px)"
                      : "opacity: 0"
                    : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden mt-2 mx-6 rounded-lg p-6 glass-card"
        >
          <nav className="flex flex-col gap-4">
            {navItems.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="nav-link py-1"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <a
              href="mailto:krishnarathwa04@gmail.com"
              className="btn-primary text-xs mt-2 justify-center"
            >
              Hire Me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
