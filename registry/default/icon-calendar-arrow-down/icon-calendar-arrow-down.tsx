"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconCalendarArrowDownProps extends React.SVGProps<SVGSVGElement> {
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

const arrowVariants: Variants = {
  rest: { y: 0 },
  hover: { 
    y: 1,
    transition: { 
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  },
};

export function IconCalendarArrowDown({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconCalendarArrowDownProps) {
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
      <path d="M21 11.354V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.343" />
      <path d="M3 10h18" />
      <motion.path d="M16 2v4" variants={prefersReducedMotion ? {} : pinVariants} />
      <motion.path d="M8 2v4" variants={prefersReducedMotion ? {} : pinVariants} />
      
      {/* Arrow Group */}
      <motion.g variants={prefersReducedMotion ? {} : arrowVariants}>
        <path d="m14 18 4 4 4-4" />
        <path d="M18 14v8" />
      </motion.g>
    </motion.svg>
  );
}
