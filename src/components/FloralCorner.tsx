
interface FloralCornerProps {
  className?: string;
  flip?: boolean;
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}

export default function FloralCorner({
  className = "",
  flip = false,
  size = 60,
  color = "#7B1C35",
  style,
}: FloralCornerProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      className={className}
      style={{ ...style }}
      aria-hidden="true"
    >
      <path
        d="M2 2 Q20 2 30 12 Q40 22 58 22"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M2 2 Q2 20 12 30 Q22 40 22 58"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="2" cy="2" r="3" fill={color} opacity="0.5" />
      <circle cx="30" cy="12" r="2" fill={color} opacity="0.4" />
      <circle cx="12" cy="30" r="2" fill={color} opacity="0.4" />
      <path
        d="M8 8 Q14 6 16 12 Q18 18 12 20 Q6 22 4 16 Q2 10 8 8Z"
        fill={color}
        opacity="0.25"
      />
      <circle cx="20" cy="5" r="1.5" fill={color} opacity="0.35" />
      <circle cx="5" cy="20" r="1.5" fill={color} opacity="0.35" />
      <circle cx="55" cy="22" r="2" fill={color} opacity="0.3" />
      <circle cx="22" cy="55" r="2" fill={color} opacity="0.3" />
    </svg>
  );
}