"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconCalendarRangeProps extends React.SVGProps<SVGSVGElement> {
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

const rangeVariants: Variants = {
  rest: { pathLength: 0, opacity: 0 },
  hover: { 
    pathLength: 1, 
    opacity: 1,
    transition: { 
      duration: 0.5,
      ease: "easeInOut"
    }
  },
};

export function IconCalendarRange({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconCalendarRangeProps) {
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
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <motion.path d="M16 2v4" variants={prefersReducedMotion ? {} : pinVariants} />
      <motion.path d="M8 2v4" variants={prefersReducedMotion ? {} : pinVariants} />
      
      {/* Range Lines */}
      <motion.path d="M17 14h-6" variants={prefersReducedMotion ? {} : rangeVariants} transition={{ delay: 0.1 }} />
      <motion.path d="M13 18H7" variants={prefersReducedMotion ? {} : rangeVariants} transition={{ delay: 0.3 }} />
      <circle cx="7" cy="14" r="0.5" fill="currentColor" />
      <circle cx="17" cy="18" r="0.5" fill="currentColor" />
    </motion.svg>
  );
}
