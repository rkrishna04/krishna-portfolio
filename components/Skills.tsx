import SectionHeader from "./SectionHeader";

const skillCategories = [
  {
    name: "Programming Languages",
    icon: "💻",
    skills: ["Python", "SQL", "Java", "PHP", "JavaScript"],
    accent: "from-[#D4AF37]/20 to-transparent",
    tagColor: "border-[#D4AF37]/40 text-[#F5D77F]",
  },
  {
    name: "Analytics & Intelligence",
    icon: "📊",
    skills: ["Power BI", "Tableau", "Dashboard Dev", "KPI Reporting", "ETL Pipelines", "Advanced Excel"],
    accent: "from-[#E05638]/20 to-transparent",
    tagColor: "border-[#E05638]/40 text-[#FF9E80]",
  },
  {
    name: "Database Systems",
    icon: "🗄️",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Schema Modeling", "Query Optimization", "RBAC"],
    accent: "from-[#10B981]/20 to-transparent",
    tagColor: "border-[#10B981]/40 text-[#A7F3D0]",
  },
  {
    name: "Frameworks & DevOps",
    icon: "⚙️",
    skills: ["FastAPI", "React", "Docker", "Git / GitHub", "REST APIs", "CI/CD"],
    accent: "from-[#3B82F6]/20 to-transparent",
    tagColor: "border-[#3B82F6]/40 text-[#93C5FD]",
  },
];

const professionalSkills = [
  "Data Analytics & Cleaning",
  "Data Modeling & Schema Design",
  "Business Intelligence & Reporting",
  "Predictive Analysis",
  "Requirement Engineering",
  "Process Optimization & Automation",
  "Enterprise System Integration",
  "Stakeholder Communication",
];

export default function Skills() {
  return (
    <section id="kala" className="py-24 relative bg-[#0B0910]">
      {/* Decorative top & bottom borders */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="कला • Technical Mastery"
          title="The Technical Arsenal"
          subtitle="Honoring the precision of traditional Indian karigari, my tech stack spans analytical rigor, enterprise database design, and machine intelligence."
        />

        {/* 4 Category Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((cat) => (
            <div
              key={cat.name}
              className="heritage-card p-6 flex flex-col justify-between relative overflow-hidden group"
            >
              {/* Subtle top gradient glow */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cat.accent}`}
              />

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{cat.icon}</span>
                  <h3 className="font-cinzel text-sm font-bold text-[#F8F6F0] tracking-wider uppercase">
                    {cat.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`text-xs px-3 py-1 rounded-md bg-[#181523] border ${cat.tagColor} font-medium transition-transform group-hover:scale-105`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Competencies & Languages Card */}
        <div className="heritage-card p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#D4AF37]/20">
            <div>
              <h3 className="font-cinzel text-lg font-bold text-[#F8F6F0] flex items-center gap-2">
                <span>✦</span>
                <span>Professional & Analytical Competencies</span>
              </h3>
              <p className="text-xs text-[#8E8679] mt-1">
                Enterprise methodologies and engineering workflows applied at Western Railway.
              </p>
            </div>
            
            {/* Natural Languages */}
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">
                Languages:
              </span>
              {["English (Fluent)", "Hindi (Native)", "Gujarati (Native)"].map((lang) => (
                <span
                  key={lang}
                  className="heritage-pill text-xs py-1 px-3 border-[#D4AF37]/30 text-[#F5D77F]"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
            {professionalSkills.map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-2 p-3 rounded-lg bg-[#14121F] border border-white/5 hover:border-[#D4AF37]/30 transition-colors"
              >
                <span className="text-[#D4AF37] text-xs">◆</span>
                <span className="text-xs font-medium text-[#C5BFB0]">{skill}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
