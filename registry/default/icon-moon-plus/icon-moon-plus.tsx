"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconMoonPlusProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const moonVariants: Variants = {
  rest: { rotate: 0 },
  hover: {
    rotate: [0, -10, 10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const plusVariants: Variants = {
  rest: { rotate: 0, scale: 1 },
  hover: {
    rotate: 90,
    scale: 1.2,
    transition: {
      duration: 0.4,
      ease: "backOut",
    },
  },
};

export function IconMoonPlus({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconMoonPlusProps) {
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
        d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" 
        variants={moonVariants}
        style={{ originX: "12px", originY: "12px" }}
      />
      <motion.g variants={plusVariants} style={{ originX: "19px", originY: "5px" }}>
        <path d="M16 5h6" />
        <path d="M19 2v6" />
      </motion.g>
    </motion.svg>
  );
}
