"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconBaselineProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const lineVariants: Variants = {
  rest: { scaleX: 1, opacity: 1 },
  hover: { 
    scaleX: [1, 1.2, 1],
    opacity: [1, 0.5, 1],
    transition: { 
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
};

const aVariants: Variants = {
  rest: { y: 0 },
  hover: { 
    y: [0, -2, 0],
    transition: { 
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
};

export function IconBaseline({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconBaselineProps) {
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
      <motion.g variants={prefersReducedMotion ? {} : aVariants}>
        <path d="m6 16 6-12 6 12" />
        <path d="M8 12h8" />
      </motion.g>
      <motion.path 
        d="M4 20h16" 
        variants={prefersReducedMotion ? {} : lineVariants}
        style={{ originX: "12px" }}
      />
    </motion.svg>
  );
}
