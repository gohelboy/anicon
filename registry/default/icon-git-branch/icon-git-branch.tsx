"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconGitBranchProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const circleVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: [1, 1.2, 1],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatDelay: 1,
    },
  },
};

const lineVariants: Variants = {
  rest: { pathLength: 1 },
  hover: {
    pathLength: [1, 0.8, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconGitBranch({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconGitBranchProps) {
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
      <motion.line x1="6" x2="6" y1="3" y2="15" variants={lineVariants} />
      <motion.circle cx="18" cy="6" r="3" variants={circleVariants} />
      <motion.circle cx="6" cy="18" r="3" variants={circleVariants} />
      <motion.path d="M18 9a9 9 0 0 1-9 9" variants={lineVariants} />
    </motion.svg>
  );
}
