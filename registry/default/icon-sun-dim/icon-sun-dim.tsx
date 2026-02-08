"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconSunDimProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const coreVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: [1, 1.1, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const rayVariants: Variants = {
  rest: { opacity: 1, scale: 1 },
  hover: {
    opacity: [1, 0.4, 1],
    scale: [1, 0.8, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconSunDim({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconSunDimProps) {
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
      <motion.circle 
        cx="12" cy="12" r="4" 
        variants={coreVariants}
      />
      <motion.g variants={rayVariants}>
        <path d="M12 4h.01" />
        <path d="M20 12h.01" />
        <path d="M12 20h.01" />
        <path d="M4 12h.01" />
        <path d="M17.657 6.343h.01" />
        <path d="M17.657 17.657h.01" />
        <path d="M6.343 17.657h.01" />
        <path d="M6.343 6.343h.01" />
      </motion.g>
    </motion.svg>
  );
}
