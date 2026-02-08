"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconRatProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const ratVariants: Variants = {
  rest: { 
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  },
  hover: {
    x: [0, 0.5, -0.5, 0],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const tailVariants: Variants = {
  rest: { 
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  },
  hover: {
    rotate: [0, -5, 5, 0],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconRat({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconRatProps) {
  const prefersReducedMotion = useReducedMotion();
  const {
    onAnimationStart,
    onAnimationEnd,
    onDragStart,
    onDrag,
    onDragEnd,
    ...rest
  } = props;

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
      className={`select-none ${className ?? ""}`.trim()}
      initial="rest"
      whileHover="hover"
      {...rest}
    >
      <motion.g variants={prefersReducedMotion ? {} : ratVariants}>
        <motion.path 
          d="M13 22H4a2 2 0 0 1 0-4h12" 
          variants={prefersReducedMotion ? {} : tailVariants} 
          style={{ originX: "13px", originY: "22px" }}
        />
        <path d="M13.236 18a3 3 0 0 0-2.2-5" />
        <path d="M16 9h.01" />
        <path d="M16.82 3.94a3 3 0 1 1 3.237 4.868l1.815 2.587a1.5 1.5 0 0 1-1.5 2.1l-2.872-.453a3 3 0 0 0-3.5 3" />
        <path d="M17 4.988a3 3 0 1 0-5.2 2.052A7 7 0 0 0 4 14.015 4 4 0 0 0 8 18" />
      </motion.g>
    </motion.svg>
  );
}
