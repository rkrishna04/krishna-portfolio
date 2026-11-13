"use client";
import MandalaDecor from "./MandalaDecor";
import TemplateBorder from "./TemplateBorder";

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "5+", label: "Projects Built" },
  { value: "2", label: "Internships" },
  { value: "FCIWD", label: "With Distinction" },
];

export default function Hero() {
  return (
    <section
      id="namaste"
      className="relative min-h-screen flex items-center overflow-hidden mandala-bg"
      style={{ background: "var(--ivory)" }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 jali-pattern opacity-30 pointer-events-none" />
      <MandalaDecor
        size={500}
        opacity={0.06}
        className="absolute -top-20 -right-20 animate-spin-slow pointer-events-none"
      />
      <MandalaDecor
        size={350}
        opacity={0.05}
        className="absolute -bottom-20 -left-20 pointer-events-none"
        style={{ animationDirection: "reverse", animation: "spin-slow 20s linear infinite reverse" } as React.CSSProperties}
      />

      {/* Warli-style geometric top accent */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background: "linear-gradient(90deg, var(--indigo), var(--terracotta), var(--gold), var(--terracotta), var(--indigo))",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            {/* Greeting badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-sm mb-8"
              style={{
                background: "rgba(196,82,42,0.08)",
                border: "1px solid rgba(196,82,42,0.25)",
              }}
            >
              <span className="text-lg">🙏</span>
              <span
                className="text-xs tracking-widest uppercase"
                style={{ fontFamily: "'Cinzel', serif", color: "var(--terracotta)" }}
              >
                Namaste, I am
              </span>
            </div>

            {/* Name */}
            <h1
              className="mb-2 leading-none"
              style={{
                fontFamily: "'Cinzel Decorative', serif",
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                color: "var(--deep-brown)",
              }}
            >
              Krishna
            </h1>
            <h1
              className="mb-6 leading-none animate-shimmer"
              style={{
                fontFamily: "'Cinzel Decorative', serif",
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              }}
            >
              Rathwa
            </h1>

            {/* Role tag */}
            <div className="flex flex-wrap gap-2 mb-6">
              {["Data Analyst", "AI Developer", "Full Stack Dev", "BI Engineer"].map((role) => (
                <span
                  key={role}
                  className="skill-tag"
                  style={{
                    background: "rgba(45,58,107,0.08)",
                    border: "1px solid rgba(45,58,107,0.20)",
                    color: "var(--indigo)",
                  }}
                >
                  {role}
                </span>
              ))}
            </div>

            {/* Tagline */}
            <TemplateBorder className="mb-6 max-w-xs" />

            <p
              className="text-base sm:text-lg leading-relaxed mb-8 max-w-lg"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "var(--text-secondary)",
                fontStyle: "italic",
              }}
            >
              &ldquo;Just as a skilled kārigār shapes raw clay into art,
              I craft data into decisions — blending analytical precision
              with creative intelligence to build solutions that matter.&rdquo;
            </p>

            {/* Summary prose */}
            <p
              className="text-sm leading-relaxed mb-10 max-w-lg"
              style={{ color: "var(--text-muted)" }}
            >
              MCA (Artificial Intelligence) graduate from Parul University with enterprise
              internship experience at Western Railway — specializing in SQL, Python, database
              design, data analytics, and business intelligence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a href="#katha" className="btn-primary">
                <span>View My Works</span>
                <span>→</span>
              </a>
              <a href="#samvad" className="btn-secondary">
                <span>Let&apos;s Talk</span>
              </a>
              <a
                href="https://www.linkedin.com/in/rathwa-krishna"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8"
              style={{ borderTop: "1px solid rgba(212,160,23,0.25)" }}
            >
              {stats.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div
                    className="text-xl font-bold"
                    style={{
                      fontFamily: "'Cinzel', serif",
                      color: "var(--terracotta)",
                    }}
                  >
                    {value}
                  </div>
                  <div
                    className="text-xs mt-1"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Portrait + Mandala frame */}
          <div className="hidden lg:flex justify-center items-center relative">
            {/* Outer orbit ring */}
            <div
              className="absolute w-96 h-96 rounded-full animate-spin-slow pointer-events-none"
              style={{
                border: "1px dashed rgba(212,160,23,0.30)",
              }}
            />
            {/* Middle ring */}
            <div
              className="absolute w-80 h-80 rounded-full animate-pulse-gold pointer-events-none"
              style={{
                border: "2px solid rgba(196,82,42,0.15)",
              }}
            />

            {/* Avatar container */}
            <div
              className="relative w-72 h-72 flex items-center justify-center rounded-full"
              style={{
                background: "linear-gradient(135deg, rgba(196,82,42,0.12), rgba(212,160,23,0.12), rgba(45,58,107,0.10))",
                border: "3px solid rgba(212,160,23,0.40)",
                boxShadow: "0 20px 60px rgba(44,24,16,0.20), inset 0 1px 0 rgba(255,255,255,0.60)",
              }}
            >
              {/* Initials avatar */}
              <div className="text-center">
                <div
                  className="text-7xl font-bold mb-2"
                  style={{
                    fontFamily: "'Cinzel Decorative', serif",
                    background: "linear-gradient(135deg, #C4522A, #D4A017)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  KR
                </div>
                <div
                  className="text-xs tracking-widest uppercase"
                  style={{ fontFamily: "'Cinzel', serif", color: "var(--text-muted)" }}
                >
                  Data • AI • Dev
                </div>
              </div>

              {/* Corner ornaments */}
              {["-top-3 -left-3", "-top-3 -right-3", "-bottom-3 -left-3", "-bottom-3 -right-3"].map((pos, i) => (
                <div
                  key={i}
                  className={`absolute ${pos} w-6 h-6`}
                  style={{
                    background: "var(--gold)",
                    clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                  }}
                />
              ))}
            </div>

            {/* Floating skill chips */}
            {[
              { label: "Python", pos: "-top-4 left-8", color: "#2D5A27" },
              { label: "Power BI", pos: "top-16 -right-8", color: "#C4522A" },
              { label: "SQL", pos: "bottom-16 -left-8", color: "#2D3A6B" },
              { label: "FastAPI", pos: "-bottom-4 right-12", color: "#B87333" },
            ].map(({ label, pos, color }) => (
              <div
                key={label}
                className={`absolute ${pos} px-3 py-1.5 rounded-sm text-xs font-semibold animate-float`}
                style={{
                  background: "var(--ivory)",
                  border: `1px solid ${color}40`,
                  color,
                  fontFamily: "'Cinzel', serif",
                  boxShadow: "0 4px 16px rgba(44,24,16,0.12)",
                  letterSpacing: "0.1em",
                  animationDelay: `${Math.random() * 2}s`,
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span
          className="text-xs tracking-widest uppercase"
          style={{ fontFamily: "'Cinzel', serif", color: "var(--text-muted)" }}
        >
          Scroll
        </span>
        <div
          className="w-0.5 h-8 mx-auto"
          style={{
            background: "linear-gradient(180deg, var(--gold), transparent)",
          }}
        />
      </div>
    </section>
  );
}
