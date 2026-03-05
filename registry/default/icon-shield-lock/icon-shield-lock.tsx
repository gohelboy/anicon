"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconShieldLockProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const shieldVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: [1, 1.05, 1],
    transition: { duration: 0.7, ease: "easeInOut" },
  },
};

const lockVariants: Variants = {
  rest: { y: 0 },
  hover: {
    y: [0, -1, 0],
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

export function IconShieldLock({ size = 24, strokeWidth = 2, className, ...props }: IconShieldLockProps) {
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
      <motion.path d="M12 3 5 6v5c0 5 3.5 8.2 7 10 3.5-1.8 7-5 7-10V6z" variants={shieldVariants} />
      <motion.path d="M10 12v-1a2 2 0 1 1 4 0v1" variants={lockVariants} />
      <motion.rect x="9" y="12" width="6" height="4" rx="1" variants={lockVariants} />
    </motion.svg>
  );
}
