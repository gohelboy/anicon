"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconShieldCheckProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const shieldVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: [1, 1.05, 1],
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

const checkVariants: Variants = {
  rest: { pathLength: 1, opacity: 1 },
  hover: {
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: { duration: 0.5, ease: "easeOut", delay: 0.1 },
  },
};

export function IconShieldCheck({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconShieldCheckProps) {
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
        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"
        variants={shieldVariants}
        style={{ originX: "50%", originY: "50%" }}
      />
      <motion.path
        d="m9 12 2 2 4-4"
        variants={checkVariants}
      />
    </motion.svg>
  );
}
