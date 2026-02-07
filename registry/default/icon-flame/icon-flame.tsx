"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconFlameProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const outerFlameVariants: Variants = {
  rest: { scaleY: 1, scaleX: 1, y: 0 },
  hover: {
    scaleY: [1, 1.1, 1, 1.05, 1],
    scaleX: [1, 1.05, 0.95, 1.02, 1],
    y: [0, -1, 0],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const emberVariants: Variants = {
  rest: { y: 0, x: 0, opacity: 0 },
  hover: (i: number) => ({
    y: [0, -6],
    x: [0, i % 2 === 0 ? 3 : -3],
    opacity: [0, 1, 0],
    scale: [0.5, 1, 0.5],
    transition: {
      duration: 1.2,
      repeat: Infinity,
      delay: i * 0.4,
      ease: "easeOut",
    },
  }),
};

export function IconFlame({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconFlameProps) {
  const { onAnimationStart, onAnimationEnd, onDragStart, onDrag, onDragEnd, ...restOptions } = props;
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
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
      {...restOptions}
    >
      {/* Outer Flame */}
      <motion.path 
        d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.292 1-3a2.5 2.5 0 0 0 2.5 2.5z" 
        variants={outerFlameVariants}
        style={{ originY: "20px" }}
      />

      {/* Rising Embers */}
      {[0, 1, 2].map((i) => (
        <motion.circle 
          key={i}
          cx={12 + (i - 1) * 3} 
          cy={18} 
          r={0.5} 
          fill="currentColor" 
          stroke="none"
          variants={emberVariants}
          custom={i}
        />
      ))}
    </motion.svg>
  );
}
