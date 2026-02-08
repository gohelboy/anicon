"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconGraduationCapProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const tasselVariants: Variants = {
  rest: { rotate: 0 },
  hover: {
    rotate: [0, 15, -15, 10, -10, 0],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const capVariants: Variants = {
  rest: { y: 0 },
  hover: {
    y: [0, -2, 0],
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export function IconGraduationCap({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconGraduationCapProps) {
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
      <motion.g variants={capVariants}>
        <path d="M22 10v6" />
        <path d="M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-5" />
      </motion.g>
      <motion.path d="M22 10v6" variants={tasselVariants} style={{ originY: "10px" }} />
    </motion.svg>
  );
}
