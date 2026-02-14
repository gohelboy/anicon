"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconCalendarPlusProps extends React.SVGProps<SVGSVGElement> {
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

const plusVariants: Variants = {
  rest: { rotate: 0, scale: 1 },
  hover: { 
    rotate: 90,
    scale: 1.1,
    transition: { type: "spring", stiffness: 300, damping: 15 }
  },
};

export function IconCalendarPlus({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconCalendarPlusProps) {
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
      <path d="M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5" />
      <path d="M3 10h18" />
      <motion.path d="M16 2v4" variants={prefersReducedMotion ? {} : pinVariants} />
      <motion.path d="M8 2v4" variants={prefersReducedMotion ? {} : pinVariants} />
      
      {/* Plus Group */}
      <motion.g
        variants={prefersReducedMotion ? {} : plusVariants}
        style={{ originX: "19px", originY: "19px" }}
      >
        <path d="M16 19h6" />
        <path d="M19 16v6" />
      </motion.g>
    </motion.svg>
  );
}
