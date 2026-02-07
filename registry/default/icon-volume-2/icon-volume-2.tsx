"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconVolume2Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

// Sound waves pulse outward like real sound
const wave1Variants: Variants = {
  rest: { opacity: 1, pathLength: 1 },
  hover: {
    opacity: [1, 0.5, 1],
    scale: [1, 1.1, 1],
    transition: { duration: 0.6, repeat: Infinity, repeatType: "loop" },
  },
};

const wave2Variants: Variants = {
  rest: { opacity: 1, pathLength: 1 },
  hover: {
    opacity: [1, 0.5, 1],
    scale: [1, 1.15, 1],
    transition: { duration: 0.6, delay: 0.15, repeat: Infinity, repeatType: "loop" },
  },
};

export function IconVolume2({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconVolume2Props) {
  const { onAnimationStart, onAnimationEnd, onDragStart, onDrag, onDragEnd, ...rest } = props;
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="-2 -2 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={prefersReducedMotion ? false : "rest"}
      whileHover={prefersReducedMotion ? undefined : "hover"}
      whileTap={prefersReducedMotion ? undefined : "tap"}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      style={{ overflow: "visible" }}
      {...rest}
    >
      {/* Speaker body - static */}
      <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
      
      {/* Sound waves - pulse */}
      <motion.path d="M16 9a5 5 0 0 1 0 6" variants={wave1Variants} style={{ originX: "0%" }} />
      <motion.path d="M19.364 18.364a9 9 0 0 0 0-12.728" variants={wave2Variants} style={{ originX: "0%" }} />
    </motion.svg>
  );
}
