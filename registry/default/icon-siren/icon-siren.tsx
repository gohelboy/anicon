"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconSirenProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const sirenVariants: Variants = {
  rest: { rotate: 0 },
  hover: {
    rotate: [0, -5, 5, -5, 5, 0],
    transition: {
      duration: 0.4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const rayVariants: Variants = {
  rest: { opacity: 1, scale: 1 },
  hover: {
    opacity: [1, 0.4, 1],
    scale: [1, 1.2, 1],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconSiren({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconSirenProps) {
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
      <motion.g variants={sirenVariants} style={{ originX: "12px", originY: "18px" }}>
        <path d="M7 18v-6a5 5 0 1 1 10 0v6" />
        <path d="M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z" />
        <path d="M12 12v6" />
      </motion.g>
      <motion.g variants={rayVariants}>
        <path d="M21 12h1" />
        <path d="M18.5 4.5 18 5" />
        <path d="M2 12h1" />
        <path d="M12 2v1" />
        <path d="m4.929 4.929.707.707" />
      </motion.g>
    </motion.svg>
  );
}
