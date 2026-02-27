"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconPodcastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const outerRingVariants: Variants = {
  rest: { opacity: 1 },
  hover: {
    opacity: [1, 0.3, 1],
    transition: {
      duration: 1.2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const innerRingVariants: Variants = {
  rest: { opacity: 1 },
  hover: {
    opacity: [1, 0.3, 1],
    transition: {
      duration: 1.2,
      delay: 0.3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const micVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: [1, 1.2, 1],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconPodcast({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconPodcastProps) {
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
      <path d="M13 17a1 1 0 1 0-2 0l.5 4.5a0.5 0.5 0 0 0 1 0z" fill="currentColor" />
      <motion.path d="M16.85 18.58a9 9 0 1 0-9.7 0" variants={outerRingVariants} />
      <motion.path d="M8 14a5 5 0 1 1 8 0" variants={innerRingVariants} />
      <motion.circle cx="12" cy="11" r="1" fill="currentColor" variants={micVariants} />
    </motion.svg>
  );
}
