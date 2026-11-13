import SectionHeader from "./SectionHeader";

const experiences = [
  {
    org: "Western Railway",
    role: "Intern",
    location: "Vadodara",
    period: "Dec 2025 – May 2026",
    project: "NOCC ROOT — Centralized Data Storing & Management System",
    stack: ["React", "Python", "FastAPI", "PostgreSQL", "Docker", "Git"],
    color: "var(--indigo)",
    icon: "🚂",
    points: [
      "Developed a centralized enterprise platform for managing operational and engineering data at the Network Operations Control Center (NOCC).",
      "Built configurable admin modules capable of dynamically generating database tables, schemas, and input forms based on operational requirements.",
      "Designed PostgreSQL database structures for scalable enterprise data management.",
      "Developed backend APIs using FastAPI for secure data processing and system integration.",
    ],
  },
  {
    org: "Western Railway",
    role: "Intern",
    location: "Vadodara",
    period: "Oct 2023 – April 2024",
    project: "WRSIMS — Western Railway Station Asset Information Management System",
    stack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    color: "var(--terracotta)",
    icon: "🏛️",
    points: [
      "Digitized manual paper-based asset records into a structured digital database, improving data accessibility and operational efficiency.",
      "Collected, validated, and maintained enterprise asset data to ensure data accuracy and consistency.",
      "Designed and optimized relational MySQL database schemas for managing station assets, categories, users, and maintenance records.",
      "Developed SQL queries for retrieving, filtering, and managing operational data.",
      "Implemented RBAC for four organizational user roles, ensuring secure access to enterprise data.",
    ],
  },
];

const education = [
  {
    degree: "MCA (Artificial Intelligence)",
    institution: "Parul University",
    year: "2026",
    grade: "First Class with Distinction",
    color: "var(--indigo)",
    icon: "🎓",
  },
  {
    degree: "BCA (Full Stack Web Development)",
    institution: "Parul University",
    year: "2024",
    grade: "First Class with Distinction",
    color: "var(--terracotta)",
    icon: "💻",
  },
];

const certifications = [
  {
    org: "NVIDIA Deep Learning Institute",
    title: "Fundamentals of Accelerated Computing with CUDA Python",
    status: "In Progress",
    color: "var(--forest-green)",
    icon: "🏅",
  },
  {
    org: "IIT Bombay",
    title: "Java Programming Fundamentals",
    status: "Completed",
    color: "var(--copper)",
    icon: "📜",
  },
  {
    org: "IIT Bombay",
    title: "Python Programming Essentials",
    status: "Completed",
    color: "var(--copper)",
    icon: "📜",
  },
];

export default function Experience() {
  return (
    <section
      id="karigari"
      className="py-24 relative"
      style={{ background: "var(--parchment)" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-0.5"
        style={{
          background: "linear-gradient(90deg, transparent, var(--gold), var(--indigo), var(--gold), transparent)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5"
        style={{
          background: "linear-gradient(90deg, transparent, var(--gold), var(--indigo), var(--gold), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="Karigari — The Craft Journey"
          title="Experience & Learning"
          subtitle="Every master craftsman carries the marks of their apprenticeship. Here is the tapestry of experience, education, and certifications that shape my craft."
        />

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Work Experience - 2 columns */}
          <div className="lg:col-span-2">
            <h3
              className="text-xs tracking-widest uppercase mb-8"
              style={{ fontFamily: "'Cinzel', serif", color: "var(--terracotta)" }}
            >
              ❈ Work Experience ❈
            </h3>

            <div className="relative pl-14 space-y-10">
              <div className="timeline-line" />

              {experiences.map((exp, idx) => (
                <div key={idx} className="relative">
                  {/* Timeline dot */}
                  <div
                    className="timeline-dot absolute -left-10 top-1.5"
                    style={{ background: exp.color, borderColor: exp.color }}
                  />

                  <div className="glass-card p-6">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-lg">{exp.icon}</span>
                          <h4
                            className="font-semibold text-base"
                            style={{ fontFamily: "'Cinzel', serif", color: "var(--deep-brown)" }}
                          >
                            {exp.org}
                          </h4>
                          <span
                            className="skill-tag text-xs"
                            style={{
                              background: "rgba(196,82,42,0.08)",
                              border: "1px solid rgba(196,82,42,0.20)",
                              color: "var(--terracotta)",
                            }}
                          >
                            {exp.role}
                          </span>
                        </div>
                        <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                          {exp.location}
                        </p>
                      </div>
                      <span
                        className="text-xs font-medium px-3 py-1 rounded-sm"
                        style={{
                          background: "rgba(212,160,23,0.10)",
                          border: "1px solid rgba(212,160,23,0.25)",
                          color: "var(--ochre)",
                          fontFamily: "'Cinzel', serif",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {exp.period}
                      </span>
                    </div>

                    {/* Project */}
                    <div
                      className="text-xs font-semibold mb-1"
                      style={{ color: exp.color, fontFamily: "'Cinzel', serif", letterSpacing: "0.05em" }}
                    >
                      Project:
                    </div>
                    <p
                      className="text-sm mb-4 font-medium"
                      style={{ fontFamily: "'Playfair Display', serif", color: "var(--text-secondary)", fontStyle: "italic" }}
                    >
                      {exp.project}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {exp.stack.map((t) => (
                        <span
                          key={t}
                          className="skill-tag"
                          style={{
                            background: "rgba(44,24,16,0.05)",
                            border: "1px solid rgba(44,24,16,0.12)",
                            color: "var(--text-muted)",
                            fontSize: "0.7rem",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Points */}
                    <ul className="space-y-1.5">
                      {exp.points.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs leading-relaxed"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          <span style={{ color: exp.color, flexShrink: 0 }}>▸</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: Education + Certs */}
          <div className="space-y-8">
            {/* Education */}
            <div>
              <h3
                className="text-xs tracking-widest uppercase mb-6"
                style={{ fontFamily: "'Cinzel', serif", color: "var(--terracotta)" }}
              >
                ❈ Education ❈
              </h3>
              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="glass-card p-5 relative overflow-hidden"
                  >
                    <div
                      className="absolute left-0 top-0 bottom-0 w-1"
                      style={{ background: edu.color }}
                    />
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{edu.icon}</span>
                      <div>
                        <h4
                          className="text-sm font-semibold mb-1"
                          style={{ fontFamily: "'Cinzel', serif", color: "var(--deep-brown)" }}
                        >
                          {edu.degree}
                        </h4>
                        <p className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>
                          {edu.institution}
                        </p>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span
                            className="skill-tag text-xs"
                            style={{
                              background: "rgba(212,160,23,0.10)",
                              border: "1px solid rgba(212,160,23,0.25)",
                              color: "var(--ochre)",
                            }}
                          >
                            {edu.year}
                          </span>
                          <span
                            className="text-xs"
                            style={{ color: edu.color, fontWeight: 500 }}
                          >
                            {edu.grade}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3
                className="text-xs tracking-widest uppercase mb-6"
                style={{ fontFamily: "'Cinzel', serif", color: "var(--terracotta)" }}
              >
                ❈ Certifications ❈
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="glass-card p-4 flex gap-3">
                    <span className="text-xl mt-0.5">{cert.icon}</span>
                    <div>
                      <p
                        className="text-xs font-semibold mb-0.5"
                        style={{ color: cert.color, fontFamily: "'Cinzel', serif", letterSpacing: "0.05em" }}
                      >
                        {cert.org}
                      </p>
                      <p
                        className="text-xs mb-2 leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {cert.title}
                      </p>
                      <span
                        className="skill-tag text-xs"
                        style={{
                          background:
                            cert.status === "In Progress"
                              ? "rgba(212,160,23,0.10)"
                              : "rgba(45,90,39,0.10)",
                          border:
                            cert.status === "In Progress"
                              ? "1px solid rgba(212,160,23,0.30)"
                              : "1px solid rgba(45,90,39,0.30)",
                          color:
                            cert.status === "In Progress"
                              ? "var(--ochre)"
                              : "var(--forest-green)",
                        }}
                      >
                        {cert.status}
                      </span>
                    </div>
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
