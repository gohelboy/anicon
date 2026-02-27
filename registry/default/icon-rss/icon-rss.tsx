"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconRssProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const wave1Variants: Variants = {
  rest: { pathLength: 1, opacity: 1 },
  hover: {
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 0.8,
      delay: 0.2,
      repeat: Infinity,
      ease: "easeOut",
    },
  },
};

const wave2Variants: Variants = {
  rest: { pathLength: 1, opacity: 1 },
  hover: {
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 0.8,
      delay: 0.5,
      repeat: Infinity,
      ease: "easeOut",
    },
  },
};

const dotVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: [1, 1.4, 1],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconRss({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconRssProps) {
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
      <motion.path d="M4 11a9 9 0 0 1 9 9" variants={wave1Variants} />
      <motion.path d="M4 4a16 16 0 0 1 16 16" variants={wave2Variants} />
      <motion.circle cx="5" cy="19" r="1" variants={dotVariants} />
    </motion.svg>
  );
}
