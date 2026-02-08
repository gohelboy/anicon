"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconEyeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const eyeVariants: Variants = {
  rest: { scaleY: 1, opacity: 1 },
  hover: {
    scaleY: [1, 0.3, 1],
    transition: {
      duration: 0.4,
      times: [0, 0.5, 1],
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 3,
    },
  },
};

const irisVariants: Variants = {
  rest: { x: 0, y: 0 },
  hover: {
    x: [0, -1.5, 1.5, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconEye({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconEyeProps) {
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
        d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" 
        variants={eyeVariants}
        style={{ originY: "12px" }}
      />
      <motion.circle 
        cx="12" cy="12" r="3" 
        variants={irisVariants}
      />
    </motion.svg>
  );
}
