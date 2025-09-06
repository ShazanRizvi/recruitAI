import { motion, animate } from "framer-motion";
import { useEffect, useState } from "react";

// Use for Tailwind + shadcn
export default function AnimatedProgressCircle({
  score = 0,
  size = 120,
  strokeWidth = 10,
  className = "",
  label = null,
}) {
  const [display, setDisplay] = useState(0);


  useEffect(() => {
    
    const controls = animate(display, score, {
      duration: 0.8,
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [score,display]);

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.max(0, Math.min(100, display));
  const offset = circumference - (progress / 100) * circumference;
  

  // Color changing logic: red <40, yellow 40-69, blue >=70
  let activeColor;
  if (progress < 40) activeColor = "stroke-red-500";
  else if (progress < 70) activeColor = "stroke-yellow-400";
  else activeColor = "stroke-blue-500";

  return (
    <div className={`flex flex-col items-center space-y-2 ${className}`}>
      <svg width={size} height={size} className="block">
        <circle
          className="stroke-muted-foreground"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <motion.circle
          className={`transition-colors duration-500 ${activeColor}`}
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
        <text
          x="50%"
          y="52%"
          textAnchor="middle"
          dy="0.35em"
          className="fill-foreground text-2xl font-bold select-none pointer-events-none"
        >
          {Math.round(progress)}%
        </text>
      </svg>
      {label && (
        <span className="mt-1 text-muted-foreground text-sm font-medium">
          {label}
        </span>
      )}
    </div>
  );
}
