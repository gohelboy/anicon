"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconTrendingUpProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const pathVariants: Variants = {
  rest: { pathLength: 1 },
  hover: {
    pathLength: [1, 0, 1],
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 0.5,
    },
  },
};

const arrowVariants: Variants = {
  rest: { x: 0, y: 0 },
  hover: {
    x: [0, 2, 0],
    y: [0, -2, 0],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconTrendingUp({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconTrendingUpProps) {
  const {
    onAnimationStart,
    onAnimationEnd,
    onDragStart,
    onDrag,
    onDragEnd,
    ...restOptions
  } = props;
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
      <motion.path
        d="M16 7h6v6"
        variants={prefersReducedMotion ? {} : arrowVariants}
      />
      <motion.path d="m22 7-8.5 8.5-5-5L2 17" variants={pathVariants} />
    </motion.svg>
  );
}
