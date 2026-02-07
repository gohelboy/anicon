"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconPowerProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

// Power button flash on/off
const powerVariants: Variants = {
  rest: { opacity: 1, scale: 1 },
  hover: {
    opacity: [1, 0.3, 1],
    scale: [1, 0.97, 1],
    transition: { duration: 0.4, ease: "easeInOut" },
  },
  tap: {
    opacity: [1, 0, 1],
    scale: [1, 0.95, 1.05, 1],
    transition: { duration: 0.3 },
  },
};

// Power line draws
const lineVariants: Variants = {
  rest: { pathLength: 1 },
  hover: {
    pathLength: [1, 0.3, 1],
    transition: { duration: 0.4 },
  },
};

export function IconPower({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconPowerProps) {
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
      variants={powerVariants}
      initial={prefersReducedMotion ? false : "rest"}
      whileHover={prefersReducedMotion ? undefined : "hover"}
      whileTap={prefersReducedMotion ? undefined : "tap"}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      style={{ overflow: "visible" }}
      {...rest}
    >
      <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
      <motion.line x1="12" x2="12" y1="2" y2="12" variants={lineVariants} />
    </motion.svg>
  );
}
