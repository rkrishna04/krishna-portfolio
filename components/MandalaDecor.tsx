export default function MandalaDecor({ size = 300, opacity = 0.07, className = "", style }: {
  size?: number;
  opacity?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 300 300"
      className={className}
      style={{ opacity, ...style }}
      aria-hidden="true"
    >
      {/* Outer ring */}
      <circle cx="150" cy="150" r="140" fill="none" stroke="#D4A017" strokeWidth="1" strokeDasharray="4 6" />
      <circle cx="150" cy="150" r="128" fill="none" stroke="#C4522A" strokeWidth="0.5" />

      {/* Petal ring 1 */}
      {Array.from({ length: 16 }).map((_, i) => {
        const angle = (i * 360) / 16;
        const rad = (angle * Math.PI) / 180;
        const x = 150 + 110 * Math.cos(rad);
        const y = 150 + 110 * Math.sin(rad);
        return (
          <ellipse
            key={i}
            cx={x}
            cy={y}
            rx="8"
            ry="4"
            fill="#D4A017"
            transform={`rotate(${angle + 90}, ${x}, ${y})`}
          />
        );
      })}

      {/* Petal ring 2 */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 360) / 12 + 15;
        const rad = (angle * Math.PI) / 180;
        const x = 150 + 85 * Math.cos(rad);
        const y = 150 + 85 * Math.sin(rad);
        return (
          <ellipse
            key={i}
            cx={x}
            cy={y}
            rx="10"
            ry="5"
            fill="none"
            stroke="#C4522A"
            strokeWidth="1"
            transform={`rotate(${angle + 90}, ${x}, ${y})`}
          />
        );
      })}

      {/* Inner lotus */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 360) / 8;
        const rad = (angle * Math.PI) / 180;
        const x1 = 150 + 55 * Math.cos(rad);
        const y1 = 150 + 55 * Math.sin(rad);
        const x2 = 150 + 35 * Math.cos(rad + 0.4);
        const y2 = 150 + 35 * Math.sin(rad + 0.4);
        const x3 = 150 + 35 * Math.cos(rad - 0.4);
        const y3 = 150 + 35 * Math.sin(rad - 0.4);
        return (
          <path
            key={i}
            d={`M 150 150 Q ${x2} ${y2} ${x1} ${y1} Q ${x3} ${y3} 150 150`}
            fill="rgba(212,160,23,0.3)"
            stroke="#D4A017"
            strokeWidth="0.5"
          />
        );
      })}

      {/* Middle circles */}
      <circle cx="150" cy="150" r="30" fill="none" stroke="#D4A017" strokeWidth="1" />
      <circle cx="150" cy="150" r="20" fill="none" stroke="#C4522A" strokeWidth="0.5" strokeDasharray="3 4" />
      <circle cx="150" cy="150" r="10" fill="rgba(212,160,23,0.2)" stroke="#D4A017" strokeWidth="1" />
      <circle cx="150" cy="150" r="4" fill="#D4A017" />

      {/* Diamond marks */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 360) / 8 + 22.5;
        const rad = (angle * Math.PI) / 180;
        const x = 150 + 65 * Math.cos(rad);
        const y = 150 + 65 * Math.sin(rad);
        return (
          <rect
            key={i}
            x={x - 3}
            y={y - 3}
            width="6"
            height="6"
            fill="#C4522A"
            transform={`rotate(45, ${x}, ${y})`}
          />
        );
      })}
    </svg>
  );
}
