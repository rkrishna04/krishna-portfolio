"use client";
import TemplateBorder from "./TemplateBorder";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative py-12"
      style={{ background: "var(--deep-brown)" }}
    >
      {/* Top ornamental border */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--gold), var(--terracotta), var(--gold), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Main footer grid */}
        <div className="grid sm:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
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
                className="text-sm tracking-widest uppercase"
                style={{ fontFamily: "'Cinzel', serif", color: "#FAF6EE" }}
              >
                Krishna Rathwa
              </span>
            </div>
            <p
              className="text-xs leading-relaxed"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "rgba(250,246,238,0.55)",
                fontStyle: "italic",
              }}
            >
              Data Analyst · AI Developer · Full Stack Engineer
            </p>
            <p
              className="text-xs mt-2"
              style={{ color: "rgba(250,246,238,0.40)" }}
            >
              Vadodara, India
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h4
              className="text-xs tracking-widest uppercase mb-4"
              style={{ fontFamily: "'Cinzel', serif", color: "var(--gold)" }}
            >
              Navigate
            </h4>
            <nav className="space-y-2">
              {[
                ["Namaste — About", "#namaste"],
                ["Kala — Skills", "#kala"],
                ["Katha — Projects", "#katha"],
                ["Karigari — Experience", "#karigari"],
                ["Samvad — Contact", "#samvad"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="block text-xs transition-colors duration-200"
                  style={{ color: "rgba(250,246,238,0.55)" }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--gold)")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(250,246,238,0.55)")}
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-xs tracking-widest uppercase mb-4"
              style={{ fontFamily: "'Cinzel', serif", color: "var(--gold)" }}
            >
              Connect
            </h4>
            <div className="space-y-2">
              <a
                href="mailto:krishnarathwa04@gmail.com"
                className="flex items-center gap-2 text-xs transition-colors duration-200"
                style={{ color: "rgba(250,246,238,0.55)" }}
              >
                <span>✉️</span> krishnarathwa04@gmail.com
              </a>
              <a
                href="tel:+919106170271"
                className="flex items-center gap-2 text-xs"
                style={{ color: "rgba(250,246,238,0.55)" }}
              >
                <span>📞</span> +91 9106170271
              </a>
              <a
                href="https://www.linkedin.com/in/rathwa-krishna"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs"
                style={{ color: "rgba(250,246,238,0.55)" }}
              >
                <span>💼</span> linkedin.com/in/rathwa-krishna
              </a>
            </div>
          </div>
        </div>

        <TemplateBorder className="mb-8 opacity-30" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-xs"
            style={{
              fontFamily: "'Cinzel', serif",
              color: "rgba(250,246,238,0.35)",
              letterSpacing: "0.1em",
            }}
          >
            © {currentYear} Krishna Rathwa. Crafted with ❤️ & karigari.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs" style={{ color: "rgba(250,246,238,0.25)" }}>
              Built with
            </span>
            {["Next.js", "Tailwind", "TypeScript"].map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-0.5 rounded-sm"
                style={{
                  background: "rgba(212,160,23,0.10)",
                  color: "var(--gold)",
                  border: "1px solid rgba(212,160,23,0.20)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
