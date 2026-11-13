import TemplateBorder from "./TemplateBorder";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeader({ label, title, subtitle, center = true }: SectionHeaderProps) {
  return (
    <div className={`mb-14 ${center ? "text-center" : ""}`}>
      <p className="section-label mb-3">❈ {label} ❈</p>
      <h2 className="section-title text-3xl sm:text-4xl mb-4">{title}</h2>
      <TemplateBorder className={center ? "mx-auto max-w-xs" : "max-w-xs"} />
      {subtitle && (
        <p
          className={`mt-5 text-base leading-relaxed max-w-2xl ${center ? "mx-auto" : ""}`}
          style={{ color: "var(--text-secondary)", fontFamily: "'Playfair Display', serif" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
