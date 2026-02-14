"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconCalendarMinusProps extends React.SVGProps<SVGSVGElement> {
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

const minusVariants: Variants = {
  rest: { x: 0, opacity: 1 },
  hover: { 
    x: [0, 2, 0],
    transition: { 
      duration: 0.6,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 0.5
    }
  },
};

export function IconCalendarMinus({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconCalendarMinusProps) {
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
      <path d="M21 15V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5" />
      <path d="M3 10h18" />
      <motion.path d="M16 2v4" variants={prefersReducedMotion ? {} : pinVariants} />
      <motion.path d="M8 2v4" variants={prefersReducedMotion ? {} : pinVariants} />
      <motion.path 
        d="M16 19h6" 
        variants={prefersReducedMotion ? {} : minusVariants}
      />
    </motion.svg>
  );
}
