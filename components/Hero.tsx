"use client";
import MandalaDecor from "./MandalaDecor";
import TemplateBorder from "./TemplateBorder";

const metrics = [
  { value: "2+", label: "Years Experience", sub: "Enterprise & Academic" },
  { value: "5+", label: "Production Projects", sub: "AI, Data & Full-Stack" },
  { value: "2", label: "Railway Internships", sub: "Western Railway NOCC" },
  { value: "FCIWD", label: "Distinction", sub: "Parul University MCA" },
];

const highlights = [
  { icon: "🤖", title: "Artificial Intelligence", desc: "Machine learning, disease prediction & CUDA algorithms" },
  { icon: "📊", title: "Data & BI Analytics", desc: "Power BI dashboards, DAX, KPI reporting & ETL pipelines" },
  { icon: "⚡", title: "Database Architecture", desc: "PostgreSQL, MySQL, schema optimization & RBAC security" },
  { icon: "🌐", title: "Full-Stack Systems", desc: "React, FastAPI, Python, Docker & enterprise portals" },
];

export default function Hero() {
  return (
    <section
      id="namaste"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden jali-grid"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#E05638]/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Background Rotating Mandala Watermark */}
      <MandalaDecor
        size={650}
        opacity={0.06}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-slow pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Narrative & Intro (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Cultural Namaste Greeting Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#181523] border border-[#D4AF37]/30 shadow-[0_0_15px_rgba(212,175,55,0.15)] mb-6">
              <span className="text-base">🙏</span>
              <span className="font-cinzel text-xs tracking-widest uppercase font-semibold text-[#D4AF37]">
                नमस्ते • Welcome to My Digital Atelier
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-cinzel text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F8F6F0] leading-none mb-3">
              KRISHNA
            </h1>
            <h1 className="font-cinzel text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight gold-gradient-text leading-none mb-6">
              RATHWA
            </h1>

            {/* Core Professional Identity */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              {["AI Developer", "Data Analyst", "Full-Stack Engineer", "BI Specialist"].map((tag, i) => (
                <span key={i} className="heritage-pill text-xs py-1 px-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Narrative / Philosophy */}
            <p className="font-playfair italic text-lg sm:text-xl text-[#F5D77F]/90 leading-relaxed max-w-2xl mb-4">
              &ldquo;Just as an Indian kārigār shapes raw bronze and silk into enduring art, 
              I transform raw enterprise data and code into intelligent, purposeful digital architectures.&rdquo;
            </p>

            <p className="text-sm sm:text-base text-[#C5BFB0] leading-relaxed max-w-2xl mb-8">
              MCA (Artificial Intelligence) graduate from Parul University with enterprise engineering internship 
              experience at Western Railway. Dedicated to high-scale database design, predictive analytics, 
              Power BI dashboard systems, and robust backend infrastructure.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 w-full sm:w-auto mb-12">
              <a href="#katha" className="btn-gold w-full sm:w-auto">
                <span>View Works (કથા)</span>
                <span>→</span>
              </a>
              <a href="#samvad" className="btn-outline-gold w-full sm:w-auto">
                <span>Let&apos;s Connect (સંવાદ)</span>
              </a>
              <a
                href="https://www.linkedin.com/in/rathwa-krishna"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold w-full sm:w-auto"
              >
                <span>LinkedIn Profile ↗</span>
              </a>
            </div>

            {/* Metrics Bar */}
            <div className="w-full pt-8 border-t border-[#D4AF37]/20 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {metrics.map(({ value, label, sub }) => (
                <div key={label} className="flex flex-col">
                  <span className="font-cinzel text-2xl sm:text-3xl font-bold text-[#D4AF37]">
                    {value}
                  </span>
                  <span className="text-xs font-semibold text-[#F8F6F0] mt-0.5">
                    {label}
                  </span>
                  <span className="text-[11px] text-[#8E8679]">
                    {sub}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Visual Yantra & Feature Cards (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            {/* Center Royal Seal / Yantra */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center mb-8">
              {/* Outer Decorative Rotating Ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-[#D4AF37]/40 animate-spin-slow" />
              
              {/* Middle Pulsing Ring */}
              <div className="absolute inset-4 rounded-full border-2 border-[#E05638]/30 animate-pulse-glow" />
              
              {/* Central Glowing Seal */}
              <div className="relative w-56 h-56 rounded-full bg-gradient-to-br from-[#181523] via-[#100E17] to-[#08070A] border-2 border-[#D4AF37]/60 flex flex-col items-center justify-center p-6 text-center shadow-[0_0_50px_rgba(212,175,55,0.25)]">
                <MandalaDecor size={180} opacity={0.35} className="absolute inset-0 m-auto pointer-events-none" />
                <span className="font-cinzel-decorative text-4xl sm:text-5xl font-bold gold-gradient-text">
                  KR
                </span>
                <span className="font-cinzel text-[11px] font-semibold text-[#D4AF37] tracking-widest uppercase mt-2">
                  कारीगरी • ARTISAN
                </span>
                <span className="text-[10px] text-[#8E8679] tracking-wider mt-1">
                  Western Railway • Parul Univ
                </span>
              </div>
            </div>

            {/* Quick Capability Highlights Grid */}
            <div className="w-full grid sm:grid-cols-2 gap-3.5">
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className="heritage-card p-4 flex flex-col gap-1.5"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{h.icon}</span>
                    <h2 className="font-cinzel text-xs font-bold text-[#F8F6F0]">
                      {h.title}
                    </h2>
                  </div>
                  <p className="text-[11px] text-[#C5BFB0] leading-relaxed">
                    {h.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
