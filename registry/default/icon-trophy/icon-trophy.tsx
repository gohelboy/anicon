"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconTrophyProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const trophyVariants: Variants = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: [0, -2, 0],
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const shineVariants: Variants = {
  rest: { pathLength: 0, opacity: 0 },
  hover: {
    pathLength: [0, 1, 1],
    opacity: [0, 1, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
      times: [0, 0.5, 1],
    },
  },
};

export function IconTrophy({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconTrophyProps) {
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
      <motion.g variants={trophyVariants}>
        <path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978" />
        <path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978" />
        <path d="M18 9h1.5a1 1 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z" />
        <path d="M6 9H4.5a1 1 0 0 1 0-5H6" />
        
        {/* Shine effect */}
        <motion.path 
          d="M9 5h6" 
          stroke="white" 
          strokeWidth="1" 
          variants={shineVariants} 
          style={{ opacity: 0.5 }}
        />
      </motion.g>
    </motion.svg>
  );
}
