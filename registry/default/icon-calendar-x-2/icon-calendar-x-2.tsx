"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconCalendarX2Props extends React.SVGProps<SVGSVGElement> {
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
      duration: 0.4,
      ease: "easeOut"
    }
  },
};

export function IconCalendarX2({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconCalendarX2Props) {
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
      <path d="M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" />
      <path d="M3 10h18" />
      <motion.path d="M8 2v4" variants={prefersReducedMotion ? {} : pinVariants} />
      <motion.path d="M16 2v4" variants={prefersReducedMotion ? {} : pinVariants} />
      
      {/* X drawing */}
      <motion.path 
        d="m17 22 5-5" 
        variants={prefersReducedMotion ? {} : xVariants}
        transition={{ delay: 0.1 }}
      />
      <motion.path 
        d="m17 17 5 5" 
        variants={prefersReducedMotion ? {} : xVariants}
        transition={{ delay: 0.3 }}
      />
    </motion.svg>
  );
}
