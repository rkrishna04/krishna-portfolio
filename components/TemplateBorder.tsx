export default function TemplateBorder({ className = "" }: { className?: string }) {
  return (
    <svg
      width="100%"
      height="20"
      viewBox="0 0 400 20"
      preserveAspectRatio="none"
      className={`h-5 w-full block ${className}`}
      style={{ maxHeight: "20px" }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="borderGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="30%" stopColor="#D4A017" />
          <stop offset="50%" stopColor="#C4522A" />
          <stop offset="70%" stopColor="#D4A017" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
      {/* Main line */}
      <line x1="0" y1="10" x2="400" y2="10" stroke="url(#borderGrad)" strokeWidth="1" />
      {/* Diamond motifs */}
      {[80, 160, 200, 240, 320].map((x, i) => (
        <g key={i}>
          <rect x={x - 4} y={6} width="8" height="8" fill="#D4A017" transform={`rotate(45, ${x}, 10)`} />
          <rect x={x - 2} y={8} width="4" height="4" fill="#FAF6EE" transform={`rotate(45, ${x}, 10)`} />
        </g>
      ))}
      {/* Small dots */}
      {[40, 120, 280, 360].map((x, i) => (
        <circle key={i} cx={x} cy={10} r="2" fill="#C4522A" />
      ))}
    </svg>
  );
}
