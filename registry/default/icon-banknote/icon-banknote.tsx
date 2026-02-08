"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconBanknoteProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const noteVariants: Variants = {
  rest: { scale: 1, y: 0 },
  hover: {
    y: [0, -1, 1, 0],
    rotate: [0, 1, -1, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const circleVariants: Variants = {
  rest: { scale: 1, opacity: 1 },
  hover: {
    scale: [1, 1.2, 1],
    opacity: [1, 0.7, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconBanknote({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconBanknoteProps) {
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
      <motion.rect width="20" height="12" x="2" y="6" rx="2" variants={noteVariants} />
      <motion.circle cx="12" cy="12" r="2" variants={circleVariants} />
      <path d="M6 12h.01M18 12h.01" />
    </motion.svg>
  );
}
