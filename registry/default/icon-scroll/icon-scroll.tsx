"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconScrollProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const rollVariants: Variants = {
  rest: { x: 0 },
  hover: {
    x: [0, 1.5, 0],
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const lineVariants: Variants = {
  rest: { pathLength: 1 },
  hover: {
    pathLength: [0.2, 1],
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

export function IconScroll({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconScrollProps) {
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
      <motion.g variants={rollVariants}>
        <circle cx="6" cy="8" r="2" />
        <circle cx="18" cy="16" r="2" />
      </motion.g>
      <path d="M8 8h8a2 2 0 0 1 2 2v4" />
      <path d="M16 16H8a2 2 0 0 1-2-2V8" />
      <motion.path d="M10 11h4" variants={lineVariants} />
      <motion.path d="M10 13h3" variants={lineVariants} />
    </motion.svg>
  );
}
