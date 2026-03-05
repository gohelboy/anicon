"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconYoyoProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const stringVariants: Variants = {
  rest: { pathLength: 1 },
  hover: {
    pathLength: [0.6, 1, 0.6],
    transition: { duration: 0.9, repeat: Infinity, ease: "easeInOut" },
  },
};

const yoyoVariants: Variants = {
  rest: { y: 0 },
  hover: {
    y: [0, 4, 0],
    transition: { duration: 0.9, repeat: Infinity, ease: "easeInOut" },
  },
};

export function IconYoyo({ size = 24, strokeWidth = 2, className, ...props }: IconYoyoProps) {
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
      <motion.path d="M12 4c0 2 2 2 2 4" variants={stringVariants} />
      <motion.path d="M14 8v4" variants={stringVariants} />
      <motion.g variants={yoyoVariants}>
        <circle cx="14" cy="14" r="4" />
        <circle cx="14" cy="14" r="1" />
      </motion.g>
    </motion.svg>
  );
}
