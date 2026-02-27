"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconSyringeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const plungeVariants: Variants = {
  rest: { y: 0, x: 0 },
  hover: {
    y: [0, 2, 0],
    x: [0, -2, 0],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const bodyVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: [1, 1.03, 1],
    transition: { duration: 0.6, repeat: Infinity, ease: "easeInOut" },
  },
};

export function IconSyringe({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconSyringeProps) {
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
      <motion.path d="m18 2 4 4" variants={plungeVariants} />
      <motion.path d="m17 7 3-3" variants={plungeVariants} />
      <motion.g variants={bodyVariants}>
        <path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5" />
        <path d="m9 11 4 4" />
        <path d="m5 19-3 3" />
        <path d="m14 4 6 6" />
      </motion.g>
    </motion.svg>
  );
}
