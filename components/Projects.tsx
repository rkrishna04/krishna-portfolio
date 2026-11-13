"use client";
import { useState } from "react";
import SectionHeader from "./SectionHeader";

interface Project {
  id: string;
  title: string;
  category: "AI & ML" | "Data Analytics" | "Full-Stack";
  badge: string;
  stack: string[];
  description: string[];
  icon: string;
  highlight: string;
}

const projects: Project[] = [
  {
    id: "healtrack",
    title: "HealTrack — AI-Powered Healthcare System",
    category: "AI & ML",
    badge: "MCA Flagship Project",
    stack: ["React", "Python", "Machine Learning", "FastAPI"],
    icon: "🏥",
    highlight: "Symptom Analysis & Disease Prediction",
    description: [
      "Engineered an AI-powered diagnostic assistant predicting potential disease risks based on patient symptoms.",
      "Trained machine learning classification models to deliver preliminary health recommendations.",
      "Processed and cleansed clinical healthcare datasets to maximize prediction accuracy and clinical safety.",
    ],
  },
  {
    id: "sales-dashboard",
    title: "Enterprise Sales Analytics Dashboard",
    category: "Data Analytics",
    badge: "Business Intelligence",
    stack: ["Power BI", "SQL", "DAX", "Power Query", "Excel"],
    icon: "📈",
    highlight: "Executive KPI Reporting & Forecasts",
    description: [
      "Built an interactive Power BI executive dashboard tracking real-time revenue, margin growth, and regional performance.",
      "Engineered automated ETL workflows in Power Query and authored advanced DAX measures for comparative metrics.",
      "Designed dynamic drill-through reports enabling leadership to make fast, data-backed operational decisions.",
    ],
  },
  {
    id: "nocc-root",
    title: "NOCC ROOT — Enterprise Data Management",
    category: "Full-Stack",
    badge: "Western Railway Intern Project",
    stack: ["React", "Python", "FastAPI", "PostgreSQL", "Docker", "Git"],
    icon: "🚂",
    highlight: "Network Operations Control Platform",
    description: [
      "Engineered a centralized operations platform for managing Western Railway Network Operations Control Center engineering data.",
      "Built dynamic admin modules generating database schemas and custom input forms based on operational needs.",
      "Designed scalable PostgreSQL relational schemas and high-throughput FastAPI endpoints with Docker deployment.",
    ],
  },
  {
    id: "ttf",
    title: "TTF — The Tasty Food Portal",
    category: "Full-Stack",
    badge: "BCA Web Project",
    stack: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
    icon: "🍽️",
    highlight: "Full-Cycle Ordering & Menu Management",
    description: [
      "Developed a complete food ordering web application with customer ordering workflows and restaurant management.",
      "Designed normalized MySQL relational schemas for menus, dynamic inventory, order tickets, and customer records.",
      "Implemented session authentication, role authorization, and database transactions.",
    ],
  },
  {
    id: "expense-tracker",
    title: "Personal Financial Expense Tracker",
    category: "Full-Stack",
    badge: "Data Application",
    stack: ["Python", "SQL", "Database Design"],
    icon: "💰",
    highlight: "Automated Ledger & Budget Insights",
    description: [
      "Architected a desktop application to record, categorize, and reconcile income and recurring expenditure.",
      "Created monthly spend analytics and visual summaries to assist users in optimizing personal savings.",
      "Implemented SQL persistence with automatic database schema setup and transaction logging.",
    ],
  },
];

const categories = ["All Works", "AI & ML", "Data Analytics", "Full-Stack"] as const;

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All Works");

  const filteredProjects =
    activeCategory === "All Works"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="katha" className="py-24 relative bg-[#08070A]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="कथा • The Stories"
          title="Featured Creations"
          subtitle="Each project is a digital katha — a chronicle of engineering challenges resolved through analytical insight, rigorous architecture, and purpose-built software."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-cinzel text-xs font-semibold tracking-wider uppercase transition-all ${
                activeCategory === cat
                  ? "bg-[#D4AF37] text-[#08070A] shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                  : "bg-[#181523] text-[#C5BFB0] border border-[#D4AF37]/20 hover:border-[#D4AF37]/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="heritage-card p-7 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Header: Icon & Category */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#181523] border border-[#D4AF37]/30 text-2xl group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                    {project.icon}
                  </div>
                  <span className="heritage-pill text-[11px] py-1 px-3 border-[#D4AF37]/40 text-[#D4AF37]">
                    {project.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-cinzel text-lg font-bold text-[#F8F6F0] group-hover:text-[#D4AF37] transition-colors mb-2">
                  {project.title}
                </h3>

                <p className="text-xs font-semibold text-[#E05638] uppercase tracking-wider mb-4">
                  {project.highlight}
                </p>

                {/* Bullets */}
                <ul className="space-y-2 mb-6">
                  {project.description.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#C5BFB0] leading-relaxed">
                      <span className="text-[#D4AF37] mt-0.5">✦</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer: Tech Stack Tags & Action */}
              <div className="pt-4 border-t border-[#D4AF37]/15">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.stack.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] px-2 py-0.5 rounded bg-[#181523] text-[#F5D77F] border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs font-cinzel tracking-wider text-[#D4AF37] group-hover:text-[#F8F6F0] transition-colors">
                  <span>Architecture Verified</span>
                  <span>↗</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
