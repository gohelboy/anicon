"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconLollipopProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const spinVariants: Variants = {
  rest: { rotate: 0 },
  hover: {
    rotate: 360,
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

const swirlVariants: Variants = {
  rest: { pathLength: 1 },
  hover: {
    pathLength: [0, 1],
    transition: { duration: 1, ease: "easeOut" },
  },
};

export function IconLollipop({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconLollipopProps) {
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
      <motion.g variants={spinVariants} style={{ originX: "11px", originY: "11px" }}>
        <circle cx="11" cy="11" r="8" />
        <motion.path d="M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0" variants={swirlVariants} />
      </motion.g>
      <path d="m21 21-4.3-4.3" />
    </motion.svg>
  );
}
