/**
 * Fluid / oil wave divider between sections.
 *
 * Props:
 *  - fromColor: CSS color of the section above  (default: surface)
 *  - toColor:   CSS color of the section below   (default: background)
 *  - accent:    whether to show gold oil shimmer  (default: true)
 *  - flip:      mirror vertically (wave flows up) (default: false)
 *  - size:      "sm" | "md" | "lg"                (default: "md")
 */

interface FluidWaveProps {
  fromColor?: string;
  toColor?: string;
  accent?: boolean;
  flip?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = {
  sm: "h-[40px] md:h-[50px] lg:h-[60px]",
  md: "h-[60px] md:h-[80px] lg:h-[100px]",
  lg: "h-[80px] md:h-[100px] lg:h-[120px]",
};

const FluidWave = ({
  fromColor = "hsl(220 14% 97%)",
  toColor = "hsl(0 0% 100%)",
  accent = true,
  flip = false,
  size = "md",
  className = "",
}: FluidWaveProps) => {
  const id = `oil-grad-${Math.random().toString(36).slice(2, 8)}`;

  return (
    <div
      className={`relative z-10 -mt-px -mb-px w-full overflow-hidden leading-[0] ${className}`}
      style={{
        backgroundColor: fromColor,
        transform: flip ? "scaleY(-1)" : undefined,
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ backgroundColor: fromColor }}
      />
      <svg
        viewBox="0 0 1440 122"
        preserveAspectRatio="none"
        className={`block w-full ${sizeMap[size]}`}
        aria-hidden="true"
      >
        {accent && (
          <defs>
            <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={toColor} />
              <stop offset="35%" stopColor={toColor} />
              <stop offset="50%" stopColor="hsl(38 90% 50% / 0.12)" />
              <stop offset="65%" stopColor={toColor} />
              <stop offset="100%" stopColor={toColor} />
            </linearGradient>
          </defs>
        )}
        {/* Back layer */}
        <path
          d="M0,80 C120,45 240,85 360,62 C480,38 600,78 720,68 C840,58 960,35 1080,52 C1200,68 1320,42 1440,58 L1440,122 L0,122 Z"
          fill={toColor}
          opacity="0.45"
        />
        {/* Mid layer */}
        <path
          d="M0,88 C180,52 300,98 480,72 C660,44 780,88 960,74 C1140,58 1260,42 1440,68 L1440,122 L0,122 Z"
          fill={accent ? `url(#${id})` : toColor}
        />
        {/* Front layer */}
        <path
          d="M0,96 C200,72 400,104 600,86 C800,66 1000,96 1200,82 C1320,74 1400,90 1440,86 L1440,122 L0,122 Z"
          fill={toColor}
        />
      </svg>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px]"
        style={{ backgroundColor: toColor }}
      />
    </div>
  );
};

export default FluidWave;
