"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconSunProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

// Sun rotates slowly and radiates warmth
const sunVariants: Variants = {
  rest: { rotate: 0, scale: 1 },
  hover: {
    rotate: 45,
    scale: 1.1,
    transition: { type: "spring", stiffness: 200, damping: 15 },
  },
  tap: {
    rotate: 90,
    scale: 1.15,
    transition: { type: "spring", stiffness: 200, damping: 15 },
  },
};

// Rays pulse outward
const rayVariants: Variants = {
  rest: { opacity: 1, scale: 1 },
  hover: {
    opacity: [1, 0.7, 1],
    scale: [1, 1.1, 1],
    transition: { duration: 0.8, repeat: Infinity, repeatType: "loop" },
  },
};

export function IconSun({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconSunProps) {
  const { onAnimationStart, onAnimationEnd, onDragStart, onDrag, onDragEnd, ...rest } = props;
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="-3 -3 30 30"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      variants={sunVariants}
      initial={prefersReducedMotion ? false : "rest"}
      whileHover={prefersReducedMotion ? undefined : "hover"}
      whileTap={prefersReducedMotion ? undefined : "tap"}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      style={{ overflow: "visible" }}
      {...rest}
    >
      {/* Sun center */}
      <circle cx="12" cy="12" r="4" />
      
      {/* Sun rays - pulse */}
      <motion.g variants={rayVariants}>
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </motion.g>
    </motion.svg>
  );
}
