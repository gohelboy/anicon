"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconSettings2Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const knobVariant1: Variants = {
  rest: { x: 0 },
  hover: {
    x: [0, -2, 2, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const knobVariant2: Variants = {
  rest: { x: 0 },
  hover: {
    x: [0, 2, -2, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const railVariant1: Variants = {
  rest: { d: "M14 17H5" },
  hover: {
    d: ["M14 17H5", "M12 17H5", "M16 17H5", "M14 17H5"],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const railVariant2: Variants = {
  rest: { d: "M19 7h-9" },
  hover: {
    d: ["M19 7h-9", "M21 7h-9", "M17 7h-9", "M19 7h-9"],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconSettings2({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconSettings2Props) {
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
      <motion.path d="M14 17H5" variants={railVariant1} />
      <motion.path d="M19 7h-9" variants={railVariant2} />
      <motion.circle 
        cx="17" 
        cy="17" 
        r="3" 
        variants={knobVariant1}
        style={{ originX: "17px", originY: "17px" }}
      />
      <motion.circle 
        cx="7" 
        cy="7" 
        r="3" 
        variants={knobVariant2}
        style={{ originX: "7px", originY: "7px" }}
      />
    </motion.svg>
  );
}
