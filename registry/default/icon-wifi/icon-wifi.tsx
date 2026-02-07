"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconWifiProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

// WiFi signal waves ripple outward
const wave1Variants: Variants = {
  rest: { opacity: 1 },
  hover: {
    opacity: [0.3, 1, 0.3],
    transition: { duration: 1.2, repeat: Infinity, repeatType: "loop" },
  },
};

const wave2Variants: Variants = {
  rest: { opacity: 1 },
  hover: {
    opacity: [0.3, 1, 0.3],
    transition: { duration: 1.2, delay: 0.2, repeat: Infinity, repeatType: "loop" },
  },
};

const wave3Variants: Variants = {
  rest: { opacity: 1 },
  hover: {
    opacity: [0.3, 1, 0.3],
    transition: { duration: 1.2, delay: 0.4, repeat: Infinity, repeatType: "loop" },
  },
};

const dotVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: [1, 1.3, 1],
    transition: { duration: 0.6, repeat: Infinity, repeatType: "loop" },
  },
};

export function IconWifi({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconWifiProps) {
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
      {/* Signal waves - ripple effect from bottom up */}
      <motion.path d="M12 20h.01" variants={dotVariants} />
      <motion.path d="M8.5 16.429a5 5 0 0 1 7 0" variants={wave3Variants} />
      <motion.path d="M5 12.859a10 10 0 0 1 14 0" variants={wave2Variants} />
      <motion.path d="M2 8.82a15 15 0 0 1 20 0" variants={wave1Variants} />
    </motion.svg>
  );
}
