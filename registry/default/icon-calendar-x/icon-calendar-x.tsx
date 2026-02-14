"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconCalendarXProps extends React.SVGProps<SVGSVGElement> {
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

const xVariants: Variants = {
  rest: { pathLength: 0, opacity: 0 },
  hover: { 
    pathLength: 1, 
    opacity: 1,
    transition: { 
      duration: 0.3,
      ease: "easeOut"
    }
  },
};

export function IconCalendarX({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconCalendarXProps) {
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
      <motion.path d="M8 2v4" variants={prefersReducedMotion ? {} : pinVariants} />
      <motion.path d="M16 2v4" variants={prefersReducedMotion ? {} : pinVariants} />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <motion.path d="m14 14-4 4" variants={prefersReducedMotion ? {} : xVariants} transition={{ delay: 0.1 }} />
      <motion.path d="m10 14 4 4" variants={prefersReducedMotion ? {} : xVariants} transition={{ delay: 0.3 }} />
    </motion.svg>
  );
}
