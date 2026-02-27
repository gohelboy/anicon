"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconDrumProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const stickLeftVariants: Variants = {
  rest: { rotate: 0 },
  hover: {
    rotate: [0, -20, 0],
    transition: {
      duration: 0.3,
      repeat: Infinity,
      repeatDelay: 0.1,
      ease: "easeInOut",
    },
  },
};

const stickRightVariants: Variants = {
  rest: { rotate: 0 },
  hover: {
    rotate: [0, 20, 0],
    transition: {
      duration: 0.3,
      delay: 0.2,
      repeat: Infinity,
      repeatDelay: 0.1,
      ease: "easeInOut",
    },
  },
};

const drumBodyVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: [1, 1.02, 1],
    transition: {
      duration: 0.3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconDrum({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconDrumProps) {
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
      <motion.path d="m2 2 8 8" variants={stickLeftVariants} style={{ originX: "2px", originY: "2px" }} />
      <motion.path d="m22 2-8 8" variants={stickRightVariants} style={{ originX: "22px", originY: "2px" }} />
      <motion.g variants={drumBodyVariants} style={{ originX: "12px", originY: "14px" }}>
        <ellipse cx="12" cy="9" rx="10" ry="5" />
        <path d="M7 13.4v7.9" />
        <path d="M12 14v8" />
        <path d="M17 13.4v7.9" />
        <path d="M2 9v8a10 5 0 0 0 20 0V9" />
      </motion.g>
    </motion.svg>
  );
}
