"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconCodeXmlProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const bracketVariants: Variants = {
  rest: { pathLength: 1 },
  hover: {
    pathLength: [1, 0, 1],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const slashVariants: Variants = {
  rest: { pathLength: 1, opacity: 1 },
  hover: {
    pathLength: [1, 0, 1],
    opacity: [1, 0.5, 1],
    transition: {
      duration: 0.6,
      delay: 0.2,
      ease: "easeInOut",
    },
  },
};

export function IconCodeXml({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconCodeXmlProps) {
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
      <motion.path d="m18 16 4-4-4-4" variants={bracketVariants} />
      <motion.path d="m6 8-4 4 4 4" variants={bracketVariants} />
      <motion.path d="m14.5 4-5 16" variants={slashVariants} />
    </motion.svg>
  );
}
