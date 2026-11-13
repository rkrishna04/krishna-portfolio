import SectionHeader from "./SectionHeader";

interface Project {
  id: string;
  title: string;
  category: "Full Stack" | "AI & ML" | "Data Analytics";
  stack: string[];
  description: string[];
  icon: string;
  accentColor: string;
  textColor: string;
}

const projects: Project[] = [
  {
    id: "expense",
    title: "Expense Tracker",
    category: "Full Stack",
    stack: ["Python", "SQL"],
    icon: "📊",
    accentColor: "rgba(45,58,107,0.12)",
    textColor: "var(--indigo)",
    description: [
      "Desktop application to record and manage daily income and expenses.",
      "Implemented expense categorization, transaction history, and monthly summaries.",
      "Generated reports to help users analyze spending patterns and manage budgets.",
    ],
  },
  {
    id: "ttf",
    title: "TTF — The Tasty Food",
    category: "Full Stack",
    stack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    icon: "🍽️",
    accentColor: "rgba(196,82,42,0.12)",
    textColor: "var(--terracotta)",
    description: [
      "Responsive online food ordering web application with customer and admin modules.",
      "Designed a relational MySQL database for menu management, orders, and customer data.",
      "Implemented authentication, order processing, and database-driven operations.",
    ],
  },
  {
    id: "game",
    title: "Online Multiplayer Game",
    category: "Full Stack",
    stack: ["Unreal Engine", "C#", "Blender"],
    icon: "🎮",
    accentColor: "rgba(45,90,39,0.12)",
    textColor: "var(--forest-green)",
    description: [
      "Multiplayer action game built on Unreal Engine with custom gameplay mechanics.",
      "Designed interactive multiplayer functionality with real-time synchronization.",
      "Created and integrated 3D assets using Blender.",
    ],
  },
  {
    id: "healtrack",
    title: "HealTrack — AI Healthcare App",
    category: "AI & ML",
    stack: ["React", "Python", "Machine Learning"],
    icon: "🏥",
    accentColor: "rgba(184,115,51,0.12)",
    textColor: "var(--copper)",
    description: [
      "AI-powered healthcare assistant for symptom analysis and preliminary disease prediction.",
      "Implemented ML algorithms for diagnosis suggestions and health safety recommendations.",
      "Processed healthcare datasets for prediction and analytical insights.",
    ],
  },
  {
    id: "sales-dashboard",
    title: "Sales Analytics Dashboard",
    category: "Data Analytics",
    stack: ["Power BI", "SQL", "Excel"],
    icon: "📈",
    accentColor: "rgba(212,160,23,0.12)",
    textColor: "var(--ochre)",
    description: [
      "Interactive Power BI dashboard to analyze sales performance and business KPIs.",
      "Cleaned and transformed raw data using Power Query; wrote DAX measures for revenue, profit, and growth.",
      "Designed drill-through reports and trend analysis for data-driven decision-making.",
    ],
  },
];

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  "Full Stack": {
    bg: "rgba(45,58,107,0.10)",
    text: "var(--indigo)",
    border: "rgba(45,58,107,0.25)",
  },
  "AI & ML": {
    bg: "rgba(184,115,51,0.10)",
    text: "var(--copper)",
    border: "rgba(184,115,51,0.25)",
  },
  "Data Analytics": {
    bg: "rgba(196,82,42,0.10)",
    text: "var(--terracotta)",
    border: "rgba(196,82,42,0.25)",
  },
};

export default function Projects() {
  return (
    <section
      id="katha"
      className="py-24"
      style={{ background: "var(--ivory)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="Katha — The Stories"
          title="Works & Projects"
          subtitle="Each creation is a katha — a story of problem-solving, craftsmanship, and purpose. Here are the digital narratives I have woven."
        />

        {/* Category legend */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {Object.entries(categoryColors).map(([cat, colors]) => (
            <span
              key={cat}
              className="skill-tag text-sm px-4 py-2"
              style={{
                background: colors.bg,
                border: `1px solid ${colors.border}`,
                color: colors.text,
              }}
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, idx) => {
            const catColors = categoryColors[project.category];
            return (
              <article
                key={project.id}
                className="project-card glass-card p-7 flex flex-col"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Project header */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-14 h-14 flex items-center justify-center rounded-sm text-2xl"
                    style={{
                      background: project.accentColor,
                      border: `1px solid ${catColors.border}`,
                    }}
                  >
                    {project.icon}
                  </div>
                  <span
                    className="skill-tag text-xs"
                    style={{
                      background: catColors.bg,
                      border: `1px solid ${catColors.border}`,
                      color: catColors.text,
                    }}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-lg font-semibold mb-4"
                  style={{
                    fontFamily: "'Cinzel', serif",
                    color: "var(--deep-brown)",
                    letterSpacing: "0.03em",
                  }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <ul className="flex-1 space-y-2 mb-5">
                  {project.description.map((line, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      <span style={{ color: project.textColor, flexShrink: 0 }}>✦</span>
                      {line}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 pt-4" style={{ borderTop: "1px solid rgba(212,160,23,0.15)" }}>
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="skill-tag"
                      style={{
                        background: "rgba(44,24,16,0.05)",
                        border: "1px solid rgba(44,24,16,0.12)",
                        color: "var(--text-muted)",
                        fontSize: "0.7rem",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}

          {/* Coming Soon Card */}
          <article
            className="project-card glass-card p-7 flex flex-col items-center justify-center text-center"
            style={{ border: "2px dashed rgba(212,160,23,0.30)", background: "rgba(250,246,238,0.40)" }}
          >
            <div className="text-4xl mb-4 animate-pulse-gold">✨</div>
            <h3
              className="text-sm tracking-widest uppercase mb-2"
              style={{ fontFamily: "'Cinzel', serif", color: "var(--gold)" }}
            >
              More to Come
            </h3>
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>
              New creations are being woven on the loom of karigari.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
