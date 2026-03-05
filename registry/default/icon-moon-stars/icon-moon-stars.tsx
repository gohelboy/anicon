"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconMoonStarsProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const moonVariants: Variants = {
  rest: { rotate: 0 },
  hover: {
    rotate: [0, -8, 0],
    transition: { duration: 0.9, ease: "easeInOut" },
  },
};

const starVariants: Variants = {
  rest: { scale: 1, opacity: 1 },
  hover: {
    scale: [1, 1.35, 1],
    opacity: [0.6, 1, 0.6],
    transition: { duration: 1, repeat: Infinity, ease: "easeInOut" },
  },
};

export function IconMoonStars({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconMoonStarsProps) {
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
      <motion.path
        d="M14.5 3a8 8 0 1 0 6.5 12.6A7 7 0 1 1 14.5 3"
        variants={moonVariants}
        style={{ originX: "12px", originY: "12px" }}
      />
      <motion.path d="M7 5v2" variants={starVariants} />
      <motion.path d="M6 6h2" variants={starVariants} />
      <motion.path d="M18 7v2" variants={starVariants} />
      <motion.path d="M17 8h2" variants={starVariants} />
    </motion.svg>
  );
}
