export default function TemplateBorder({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 my-4 ${className}`} aria-hidden="true">
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
      <div className="flex items-center gap-1.5 flex-shrink-0">
        <span className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]" />
        <span className="w-2.5 h-2.5 rotate-45 border border-[#D4AF37] bg-[#E05638]/40" />
        <span className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]" />
      </div>
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
    </div>
  );
}
