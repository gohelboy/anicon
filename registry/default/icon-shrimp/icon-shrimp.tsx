"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconShrimpProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const shrimpVariants: Variants = {
  rest: { 
    scaleX: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  },
  hover: {
    scaleX: [1, 0.95, 1],
    transition: {
      duration: 1,
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
    rotate: [0, -10, 0],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconShrimp({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconShrimpProps) {
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
      <motion.g variants={prefersReducedMotion ? {} : shrimpVariants}>
        <path d="M11 12h.01" />
        <motion.path 
          d="M13 22c.5-.5 1.12-1 2.5-1-1.38 0-2-.5-2.5-1" 
          variants={prefersReducedMotion ? {} : tailVariants} 
          style={{ originX: "13px", originY: "22px" }}
        />
        <path d="M14 2a3.28 3.28 0 0 1-3.227 1.798l-6.17-.561A2.387 2.387 0 1 0 4.387 8H15.5a1 1 0 0 1 0 13 1 1 0 0 0 0-5H12a7 7 0 0 1-7-7V8" />
        <path d="M14 8a8.5 8.5 0 0 1 0 8" />
        <path d="M16 16c2 0 4.5-4 4-6" />
      </motion.g>
    </motion.svg>
  );
}
