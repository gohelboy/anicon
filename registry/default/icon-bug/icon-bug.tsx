"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconBugProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const legVariants: Variants = {
  rest: { rotate: 0 },
  hover: (i: number) => ({
    rotate: [0, i % 2 === 0 ? 5 : -5, 0],
    transition: {
      duration: 0.2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }),
};

const antennaeVariants: Variants = {
  rest: { rotate: 0 },
  hover: {
    rotate: [0, 10, -10, 0],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconBug({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconBugProps) {
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
      <path d="M12 20v-9" />
      <path d="M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z" />
      <motion.path d="M14.12 3.88 16 2" variants={antennaeVariants} style={{ originX: "14.12px", originY: "3.88px" }} />
      <motion.path d="M21 21a4 4 0 0 0-3.81-4" variants={legVariants} custom={0} />
      <motion.path d="M21 5a4 4 0 0 1-3.55 3.97" variants={legVariants} custom={1} />
      <motion.path d="M22 13h-4" variants={legVariants} custom={2} />
      <motion.path d="M3 21a4 4 0 0 1 3.81-4" variants={legVariants} custom={3} />
      <motion.path d="M3 5a4 4 0 0 0 3.55 3.97" variants={legVariants} custom={4} />
      <motion.path d="M6 13H2" variants={legVariants} custom={5} />
      <motion.path d="m8 2 1.88 1.88" variants={antennaeVariants} style={{ originX: "9.88px", originY: "3.88px" }} />
      <path d="M9 7.13V6a3 3 0 1 1 6 0v1.13" />
    </motion.svg>
  );
}
