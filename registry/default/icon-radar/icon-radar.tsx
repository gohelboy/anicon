"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconRadarProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const sweepVariants: Variants = {
  rest: { rotate: 0 },
  hover: {
    rotate: 360,
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

const pingVariants = (delay: number): Variants => ({
  rest: { opacity: 1 },
  hover: {
    opacity: [0.3, 1, 0.3],
    transition: {
      duration: 1.5,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
});

export function IconRadar({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconRadarProps) {
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
      <motion.path d="M19.07 4.93A10 10 0 0 0 6.99 3.34" variants={pingVariants(0)} />
      <motion.path d="M4 6h.01" variants={pingVariants(0.2)} />
      <motion.path d="M2.29 9.62A10 10 0 1 0 21.31 8.35" variants={pingVariants(0.1)} />
      <motion.path d="M16.24 7.76A6 6 0 1 0 8.23 16.67" variants={pingVariants(0.3)} />
      <path d="M12 18h.01" />
      <motion.path d="M17.99 11.66A6 6 0 0 1 15.77 16.67" variants={pingVariants(0.4)} />
      <circle cx="12" cy="12" r="2" />
      <motion.path
        d="m13.41 10.59 5.66-5.66"
        variants={sweepVariants}
        style={{ originX: "12px", originY: "12px" }}
      />
    </motion.svg>
  );
}
