import SectionHeader from "./SectionHeader";
import TemplateBorder from "./TemplateBorder";

const skills = {
  "Programming Languages": ["Python", "SQL", "Java", "PHP", "JavaScript"],
  Analytics: ["Power BI", "Dashboard Dev", "Tableau", "KPI Reporting", "ETL", "Excel"],
  Database: ["PostgreSQL", "MySQL", "MongoDB", "Database Design"],
  Tools: ["Git", "Docker", "FastAPI", "REST APIs"],
};

const profSkills = [
  "Data Analytics",
  "Data Visualization",
  "Data Cleaning & Validation",
  "Data Modeling & Schema Design",
  "Business Intelligence",
  "Business Analysis",
  "Predictive Analysis",
  "Requirement Analysis",
  "Project Coordination",
  "Process Improvement",
  "Automation",
  "Stakeholder Communication",
];

const skillColors: Record<string, { bg: string; border: string; text: string }> = {
  "Programming Languages": {
    bg: "rgba(45,58,107,0.08)",
    border: "rgba(45,58,107,0.25)",
    text: "var(--indigo)",
  },
  Analytics: {
    bg: "rgba(196,82,42,0.08)",
    border: "rgba(196,82,42,0.25)",
    text: "var(--terracotta)",
  },
  Database: {
    bg: "rgba(45,90,39,0.08)",
    border: "rgba(45,90,39,0.25)",
    text: "var(--forest-green)",
  },
  Tools: {
    bg: "rgba(184,115,51,0.10)",
    border: "rgba(184,115,51,0.30)",
    text: "var(--copper)",
  },
};

export default function Skills() {
  return (
    <section
      id="kala"
      className="py-24 relative"
      style={{ background: "var(--parchment)" }}
    >
      {/* Top & Bottom decorative stripe */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--gold), var(--terracotta), var(--gold), transparent)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--gold), var(--terracotta), var(--gold), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="Kala — The Craft"
          title="Technical Mastery"
          subtitle="Like a master artisan who commands every tool in the workshop, I have honed a diverse set of skills across the full spectrum of data and software engineering."
        />

        {/* Technical Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {Object.entries(skills).map(([category, items]) => {
            const colors = skillColors[category];
            return (
              <div key={category} className="glass-card p-6 relative overflow-hidden">
                {/* Top accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{ background: colors.border }}
                />
                <h3
                  className="text-xs font-semibold tracking-widest uppercase mb-4"
                  style={{
                    fontFamily: "'Cinzel', serif",
                    color: colors.text,
                  }}
                >
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="skill-tag"
                      style={{
                        background: colors.bg,
                        border: `1px solid ${colors.border}`,
                        color: colors.text,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Professional Skills */}
        <div className="glass-card p-8">
          <div className="flex items-center gap-4 mb-6">
            <div
              className="w-8 h-8"
              style={{
                background: "linear-gradient(135deg, var(--terracotta), var(--gold))",
                clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
              }}
            />
            <h3
              className="text-sm tracking-widest uppercase"
              style={{ fontFamily: "'Cinzel', serif", color: "var(--deep-brown)" }}
            >
              Professional Skills
            </h3>
          </div>
          <TemplateBorder className="mb-6" />
          <div className="flex flex-wrap gap-3">
            {profSkills.map((skill) => (
              <span
                key={skill}
                className="skill-tag px-3 py-1.5"
                style={{
                  background: "rgba(212,160,23,0.08)",
                  border: "1px solid rgba(212,160,23,0.30)",
                  color: "var(--deep-brown)",
                  fontSize: "0.8rem",
                }}
              >
                ✦ {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="mt-8 glass-card p-6 flex items-center gap-6 flex-wrap">
          <span
            className="text-xs tracking-widest uppercase"
            style={{ fontFamily: "'Cinzel', serif", color: "var(--terracotta)" }}
          >
            🗣 Languages
          </span>
          <div
            className="w-px h-5"
            style={{ background: "rgba(212,160,23,0.40)" }}
          />
          {["English", "Hindi", "Gujarati"].map((lang) => (
            <span
              key={lang}
              className="skill-tag"
              style={{
                background: "rgba(45,58,107,0.08)",
                border: "1px solid rgba(45,58,107,0.20)",
                color: "var(--indigo)",
              }}
            >
              {lang}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
