"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconSunMoonProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const sunMoonVariants: Variants = {
  rest: { rotate: 0 },
  hover: {
    rotate: [0, 45, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const rayVariants: Variants = {
  rest: { opacity: 1 },
  hover: {
    opacity: [1, 0.4, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconSunMoon({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconSunMoonProps) {
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
      <motion.g variants={sunMoonVariants} style={{ originX: "12px", originY: "12px" }}>
        <path d="M12 2v2" />
        <path d="M14.837 16.385a6 6 0 1 1-7.223-7.222c.624-.147.97.66.715 1.248a4 4 0 0 0 5.26 5.259c.589-.255 1.396.09 1.248.715" />
        <motion.path 
          d="M16 12a4 4 0 0 0-4-4" 
          variants={rayVariants}
        />
        <motion.path 
          d="m19 5-1.256 1.256" 
          variants={rayVariants}
        />
        <motion.path 
          d="M20 12h2" 
          variants={rayVariants}
        />
      </motion.g>
    </motion.svg>
  );
}
