"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconBookOpenProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const leftVariants: Variants = {
  rest: { rotateY: 0 },
  hover: {
    rotateY: -20,
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};

const rightVariants: Variants = {
  rest: { rotateY: 0 },
  hover: {
    rotateY: 20,
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};

export function IconBookOpen({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconBookOpenProps) {
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
      style={{ overflow: "visible", perspective: "1000px" }}
      {...restOptions}
    >
      <motion.path 
        d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" 
        variants={leftVariants}
        style={{ originX: "12px" }}
      />
      <motion.path 
        d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" 
        variants={rightVariants}
        style={{ originX: "12px" }}
      />
    </motion.svg>
  );
}
