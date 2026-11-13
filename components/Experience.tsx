import SectionHeader from "./SectionHeader";

const experiences = [
  {
    org: "Western Railway",
    division: "Network Operations Control Center (NOCC), Vadodara",
    role: "Enterprise Systems Intern",
    period: "Dec 2025 – May 2026",
    project: "NOCC ROOT — Centralized Data Storing & Management System",
    stack: ["React", "Python", "FastAPI", "PostgreSQL", "Docker", "Git"],
    badge: "Enterprise Platform",
    highlights: [
      "Engineered a centralized enterprise platform to capture, catalog, and query mission-critical operational and engineering data for the Western Railway Network Operations Control Center.",
      "Designed dynamic administrative modules capable of automatically provisioning relational tables, schemas, and validated data intake forms according to divisional requirements.",
      "Architected PostgreSQL relational schemas optimized for high volume and data integrity across operational railway assets.",
      "Built resilient, authenticated backend REST APIs in FastAPI with containerized Docker deployments.",
    ],
  },
  {
    org: "Western Railway",
    division: "Vadodara Division",
    role: "Database & Software Engineering Intern",
    period: "Oct 2023 – April 2024",
    project: "WRSIMS — Western Railway Station Asset Information Management System",
    stack: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
    badge: "Asset Digitization",
    highlights: [
      "Spearheaded the complete digital migration of legacy paper records into a structured relational asset database, vastly improving operational accessibility and auditing efficiency.",
      "Standardized, validated, and normalized physical railway infrastructure asset registries across multiple Vadodara stations.",
      "Designed normalized MySQL schemas to monitor station hardware, categorize assets, and track maintenance lifecycles.",
      "Implemented strict Role-Based Access Control (RBAC) across four distinct organizational user tiers.",
    ],
  },
];

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    specialization: "Artificial Intelligence",
    institution: "Parul University",
    year: "Graduating 2026",
    grade: "First Class with Distinction",
    status: "Honors",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    specialization: "Full Stack Web Development",
    institution: "Parul University",
    year: "Graduated 2024",
    grade: "First Class with Distinction",
    status: "Honors",
  },
];

const certifications = [
  {
    issuer: "NVIDIA Deep Learning Institute",
    title: "Fundamentals of Accelerated Computing with CUDA Python",
    status: "In Progress",
    icon: "🟢",
  },
  {
    issuer: "IIT Bombay",
    title: "Java Programming Fundamentals",
    status: "Verified Credential",
    icon: "📜",
  },
  {
    issuer: "IIT Bombay",
    title: "Python Programming Essentials",
    status: "Verified Credential",
    icon: "📜",
  },
];

export default function Experience() {
  return (
    <section id="karigari" className="py-24 relative bg-[#0B0910]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="कारीगरी • The Craft Journey"
          title="Experience & Education"
          subtitle="A track record of enterprise software development at Western Railway, paired with rigorous academic excellence in Artificial Intelligence."
        />

        <div className="grid lg:grid-cols-12 gap-10">
          
          {/* Work Experience Timeline (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                🚂
              </span>
              <h3 className="font-cinzel text-lg font-bold text-[#F8F6F0] tracking-wider uppercase">
                Western Railway Experience
              </h3>
            </div>

            <div className="relative pl-6 sm:pl-8 space-y-8 border-l border-[#D4AF37]/30">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative group">
                  {/* Glowing Node Dot */}
                  <span className="absolute -left-[31px] sm:-left-[39px] top-6 w-4 h-4 rounded-full bg-[#08070A] border-2 border-[#D4AF37] shadow-[0_0_10px_#D4AF37] flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E05638]" />
                  </span>

                  <div className="heritage-card p-6 sm:p-7">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-cinzel text-base sm:text-lg font-bold text-[#F8F6F0]">
                            {exp.org}
                          </h4>
                          <span className="heritage-pill text-[10px] py-0.5 px-2.5 border-[#D4AF37]/40 text-[#D4AF37]">
                            {exp.role}
                          </span>
                        </div>
                        <p className="text-xs text-[#8E8679] mt-0.5">{exp.division}</p>
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 rounded bg-[#181523] text-[#F5D77F] border border-white/10">
                        {exp.period}
                      </span>
                    </div>

                    <div className="mb-4 p-3 rounded-lg bg-[#14121F] border border-[#D4AF37]/20">
                      <span className="text-[10px] uppercase font-semibold text-[#D4AF37] tracking-wider block mb-0.5">
                        Initiative & System:
                      </span>
                      <p className="font-cinzel text-xs font-bold text-[#F8F6F0]">
                        {exp.project}
                      </p>
                    </div>

                    <ul className="space-y-2 mb-5">
                      {exp.highlights.map((point, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-[#C5BFB0] leading-relaxed">
                          <span className="text-[#D4AF37] mt-0.5 flex-shrink-0">◆</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                      {exp.stack.map((tech) => (
                        <span key={tech} className="text-[10px] px-2 py-0.5 rounded bg-[#181523] text-[#C5BFB0] border border-white/5">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Education Block */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                  🎓
                </span>
                <h3 className="font-cinzel text-lg font-bold text-[#F8F6F0] tracking-wider uppercase">
                  Academic Credentials
                </h3>
              </div>

              <div className="space-y-4">
                {education.map((edu, i) => (
                  <div key={i} className="heritage-card p-6">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h4 className="font-cinzel text-sm font-bold text-[#F8F6F0]">
                        {edu.degree}
                      </h4>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-xs text-[#F5D77F] font-medium mb-1">
                      Specialization in {edu.specialization}
                    </p>
                    <p className="text-xs text-[#8E8679] mb-3">
                      {edu.institution}
                    </p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] text-xs font-semibold">
                      <span>✓</span>
                      <span>{edu.grade}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Block */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                  🏅
                </span>
                <h3 className="font-cinzel text-lg font-bold text-[#F8F6F0] tracking-wider uppercase">
                  Industry Certifications
                </h3>
              </div>

              <div className="space-y-3">
                {certifications.map((cert, i) => (
                  <div key={i} className="heritage-card p-4 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{cert.icon}</span>
                      <div>
                        <h5 className="font-cinzel text-xs font-bold text-[#F8F6F0]">
                          {cert.title}
                        </h5>
                        <p className="text-[11px] text-[#8E8679]">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold px-2.5 py-1 rounded bg-[#181523] text-[#F5D77F] border border-white/10 flex-shrink-0">
                      {cert.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
