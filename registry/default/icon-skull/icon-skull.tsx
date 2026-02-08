"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconSkullProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const jawVariants: Variants = {
  rest: { y: 0 },
  hover: {
    y: [0, 1.2, 0],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const eyeVariants: Variants = {
  rest: { scale: 1, opacity: 1 },
  hover: {
    scale: [1, 1.2, 1],
    opacity: [1, 0.7, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconSkull({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconSkullProps) {
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
      <motion.path d="m12.5 17-.5-1-.5 1h1z" variants={jawVariants} />
      <motion.path 
        d="M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a10 10 0 0 0 1 1z" 
        variants={jawVariants}
      />
      <motion.circle cx="15" cy="12" r="1" variants={eyeVariants} style={{ originX: "15px", originY: "12px" }} />
      <motion.circle cx="9" cy="12" r="1" variants={eyeVariants} style={{ originX: "9px", originY: "12px" }} />
    </motion.svg>
  );
}
