"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconCalendarSearchProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const pinVariants: Variants = {
  rest: { y: 0 },
  hover: { 
    y: [0, -2, 0],
    transition: { 
      duration: 0.5,
      repeat: Infinity,
      repeatDelay: 1
    }
  },
};

const searchVariants: Variants = {
  rest: { x: 0, y: 0 },
  hover: { 
    x: [0, -2, 2, -1, 0],
    y: [0, 1, -2, 1, 0],
    transition: { 
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
};

export function IconCalendarSearch({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconCalendarSearchProps) {
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
      <motion.path d="M16 2v4" variants={prefersReducedMotion ? {} : pinVariants} />
      <motion.path d="M8 2v4" variants={prefersReducedMotion ? {} : pinVariants} />
      <path d="M3 10h18" />
      <path d="M21 11.75V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.25" />
      
      {/* Search Lens Group */}
      <motion.g variants={prefersReducedMotion ? {} : searchVariants}>
        <path d="m22 22-1.875-1.875" />
        <circle cx="18" cy="18" r="3" />
      </motion.g>
    </motion.svg>
  );
}
