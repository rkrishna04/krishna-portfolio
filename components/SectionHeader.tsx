import TemplateBorder from "./TemplateBorder";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeader({ label, title, subtitle, center = true }: SectionHeaderProps) {
  return (
    <div className={`mb-14 ${center ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}`}>
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold tracking-widest uppercase mb-3">
        <span>🪔</span>
        <span>{label}</span>
      </div>
      <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F8F6F0] mb-3">
        {title}
      </h2>
      <TemplateBorder className="max-w-xs mx-auto" />
      {subtitle && (
        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#C5BFB0] font-light">
          {subtitle}
        </p>
      )}
    </div>
  );
}
