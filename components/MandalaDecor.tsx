export default function MandalaDecor({
  size = 400,
  opacity = 0.15,
  className = "",
  style,
}: {
  size?: number;
  opacity?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 400 400"
      className={className}
      style={{ opacity, ...style }}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="mandalaGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.8" />
          <stop offset="40%" stopColor="#E05638" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Central Glow */}
      <circle cx="200" cy="200" r="160" fill="url(#mandalaGrad)" opacity="0.3" />

      {/* Outer Rings */}
      <circle cx="200" cy="200" r="185" fill="none" stroke="#D4AF37" strokeWidth="1" strokeDasharray="3 6" />
      <circle cx="200" cy="200" r="170" fill="none" stroke="#D4AF37" strokeWidth="0.75" />
      <circle cx="200" cy="200" r="150" fill="none" stroke="#E05638" strokeWidth="0.5" strokeDasharray="6 6" />

      {/* 16 Radial Petals */}
      {Array.from({ length: 16 }).map((_, i) => {
        const deg = (i * 360) / 16;
        const rad = (deg * Math.PI) / 180;
        const x = 200 + 130 * Math.cos(rad);
        const y = 200 + 130 * Math.sin(rad);
        return (
          <g key={`petal-${i}`} transform={`rotate(${deg}, ${x}, ${y})`}>
            <path
              d={`M ${x} ${y - 12} C ${x + 8} ${y} ${x + 8} ${y + 12} ${x} ${y + 24} C ${x - 8} ${y + 12} ${x - 8} ${y} ${x} ${y - 12}`}
              fill="none"
              stroke="#D4AF37"
              strokeWidth="0.8"
            />
            <circle cx={x} cy={y + 6} r="2" fill="#D4AF37" />
          </g>
        );
      })}

      {/* 8 Lotus Inner Leaves */}
      {Array.from({ length: 8 }).map((_, i) => {
        const deg = (i * 360) / 8 + 22.5;
        const rad = (deg * Math.PI) / 180;
        const x = 200 + 75 * Math.cos(rad);
        const y = 200 + 75 * Math.sin(rad);
        return (
          <circle
            key={`inner-${i}`}
            cx={x}
            cy={y}
            r="4"
            fill="#E05638"
            stroke="#D4AF37"
            strokeWidth="0.5"
          />
        );
      })}

      {/* Center Sacred Geometry Yantra */}
      <polygon
        points="200,140 252,230 148,230"
        fill="none"
        stroke="#D4AF37"
        strokeWidth="1.2"
      />
      <polygon
        points="200,260 252,170 148,170"
        fill="none"
        stroke="#D4AF37"
        strokeWidth="1.2"
      />

      <circle cx="200" cy="200" r="30" fill="none" stroke="#E05638" strokeWidth="1" />
      <circle cx="200" cy="200" r="16" fill="none" stroke="#D4AF37" strokeWidth="0.8" strokeDasharray="3 3" />
      <circle cx="200" cy="200" r="6" fill="#D4AF37" />
    </svg>
  );
}
