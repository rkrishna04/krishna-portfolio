"use client";
import TemplateBorder from "./TemplateBorder";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#060508] border-t border-[#D4AF37]/20 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-12 gap-10 pb-12">
          
          {/* Brand & Monogram (5 cols) */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#D4AF37]/20 to-[#E05638]/20 border border-[#D4AF37]/40">
                <span className="font-cinzel text-sm font-bold gold-gradient-text tracking-widest">
                  KR
                </span>
              </div>
              <span className="font-cinzel text-base font-bold tracking-widest text-[#F8F6F0]">
                KRISHNA RATHWA
              </span>
            </div>
            
            <p className="font-playfair italic text-sm text-[#C5BFB0] max-w-sm leading-relaxed mb-4">
              Engineering reliable data pipelines, intelligent algorithms, and enterprise systems — infused with the soul of timeless craftsmanship.
            </p>

            <span className="text-xs text-[#8E8679]">
              Based in Vadodara, Gujarat, India • Available Worldwide
            </span>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="font-cinzel text-xs font-bold text-[#D4AF37] uppercase tracking-widest mb-4">
              Sections
            </h4>
            <ul className="space-y-2.5 text-xs text-[#C5BFB0]">
              {[
                { name: "नमस्ते • Namaste (About)", href: "#namaste" },
                { name: "कला • Kala (Technical Arsenal)", href: "#kala" },
                { name: "कथा • Katha (Featured Works)", href: "#katha" },
                { name: "कारीगरी • Karigari (Experience)", href: "#karigari" },
                { name: "संवाद • Samvad (Contact)", href: "#samvad" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-[#D4AF37] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Socials (4 cols) */}
          <div className="md:col-span-4">
            <h4 className="font-cinzel text-xs font-bold text-[#D4AF37] uppercase tracking-widest mb-4">
              Direct Channels
            </h4>
            <div className="space-y-2 text-xs text-[#C5BFB0]">
              <p>
                <a
                  href="mailto:krishnarathwa04@gmail.com"
                  className="hover:text-[#D4AF37] transition-colors flex items-center gap-2"
                >
                  <span>✉️</span>
                  <span>krishnarathwa04@gmail.com</span>
                </a>
              </p>
              <p>
                <a
                  href="tel:+919106170271"
                  className="hover:text-[#D4AF37] transition-colors flex items-center gap-2"
                >
                  <span>📞</span>
                  <span>+91 9106170271</span>
                </a>
              </p>
              <p>
                <a
                  href="https://www.linkedin.com/in/rathwa-krishna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4AF37] transition-colors flex items-center gap-2"
                >
                  <span>💼</span>
                  <span>linkedin.com/in/rathwa-krishna</span>
                </a>
              </p>
            </div>
          </div>

        </div>

        <TemplateBorder className="opacity-40 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8E8679]">
          <p>
            © {currentYear} Krishna Rathwa. Built with Next.js, TypeScript & Tailwind CSS.
          </p>
          <div className="flex items-center gap-3">
            <span className="font-cinzel text-[#D4AF37]">
              सत्यमेવ જયતે • Excellence in Engineering
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
