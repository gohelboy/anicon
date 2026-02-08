"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconShieldAlertProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const shieldVariants: Variants = {
  rest: { rotate: 0, x: 0 },
  hover: {
    rotate: [0, -2, 2, -2, 2, 0],
    x: [0, -0.5, 0.5, -0.5, 0.5, 0],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatDelay: 1,
    },
  },
};

const pulseVariants: Variants = {
  rest: { opacity: 1 },
  hover: {
    opacity: [1, 0.4, 1],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconShieldAlert({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconShieldAlertProps) {
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
      <motion.path 
        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" 
        variants={shieldVariants}
        style={{ originX: "12px", originY: "12px" }}
      />
      <motion.path d="M12 8v4" variants={pulseVariants} />
      <motion.path d="M12 16h.01" variants={pulseVariants} />
    </motion.svg>
  );
}
