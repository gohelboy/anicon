"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconMicroscopeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const focusVariants: Variants = {
  rest: { y: 0 },
  hover: {
    y: [0, -1.5, 0.5, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const lensVariants: Variants = {
  rest: { opacity: 1 },
  hover: {
    opacity: [1, 0.6, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

export function IconMicroscope({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconMicroscopeProps) {
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
      <path d="M6 18h8" />
      <path d="M3 22h18" />
      <path d="M14 22a7 7 0 1 0 0-14h-1" />
      <motion.g variants={focusVariants}>
        <path d="M9 14h2" />
        <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
        <motion.path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" variants={lensVariants} />
      </motion.g>
    </motion.svg>
  );
}
