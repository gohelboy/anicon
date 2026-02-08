"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconPillProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const pillVariants: Variants = {
  rest: { rotate: 0 },
  hover: {
    rotate: [0, 5, -5, 5, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const lineVariants: Variants = {
  rest: { opacity: 1 },
  hover: {
    opacity: [1, 0.5, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
    },
  },
};

export function IconPill({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconPillProps) {
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
      <motion.g variants={pillVariants} style={{ originX: "12px", originY: "12px" }}>
        <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
        <motion.path d="m8.5 8.5 7 7" variants={lineVariants} />
      </motion.g>
    </motion.svg>
  );
}
