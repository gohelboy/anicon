"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconRouterProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const waveVariants: Variants = {
  rest: { opacity: 1, scale: 1 },
  hover: {
    opacity: [0.3, 1, 0.3],
    scale: [0.95, 1.05, 0.95],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const ledVariants: Variants = {
  rest: { opacity: 1 },
  hover: {
    opacity: [1, 0.2, 1],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconRouter({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconRouterProps) {
  const { onAnimationStart, onAnimationEnd, onDragStart, onDrag, onDragEnd, ...rest } = props;
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
      {...rest}
    >
      <rect width="20" height="8" x="2" y="14" rx="2" />
      <motion.path d="M6.01 18H6" variants={ledVariants} />
      <motion.path d="M10.01 18H10" variants={ledVariants} />
      <path d="M15 10v4" />
      <motion.path d="M17.84 7.17a4 4 0 0 0-5.66 0" variants={waveVariants} />
      <motion.path d="M20.66 4.34a8 8 0 0 0-11.31 0" variants={waveVariants} />
    </motion.svg>
  );
}
