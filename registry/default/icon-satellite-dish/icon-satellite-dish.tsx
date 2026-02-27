"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconSatelliteDishProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const dishVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: [1, 1.05, 1],
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const signalVariants = (delay: number): Variants => ({
  rest: { pathLength: 1, opacity: 1 },
  hover: {
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 0.8,
      delay,
      repeat: Infinity,
      ease: "easeOut",
    },
  },
});

export function IconSatelliteDish({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconSatelliteDishProps) {
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
      <motion.path d="M4 10a7.31 7.31 0 0 0 10 10Z" variants={dishVariants} />
      <path d="m9 15 3-3" />
      <motion.path d="M17 13a6 6 0 0 0-6-6" variants={signalVariants(0)} />
      <motion.path d="M21 13A10 10 0 0 0 11 3" variants={signalVariants(0.3)} />
    </motion.svg>
  );
}
