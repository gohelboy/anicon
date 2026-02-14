"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconCalendarMinus2Props extends React.SVGProps<SVGSVGElement> {
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
  rest: { scaleX: 1, opacity: 1 },
  hover: { 
    scaleX: [1, 1.2, 1],
    transition: { 
      duration: 0.8,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
};

export function IconCalendarMinus2({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconCalendarMinus2Props) {
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
      <motion.path d="M8 2v4" variants={prefersReducedMotion ? {} : pinVariants} />
      <motion.path d="M16 2v4" variants={prefersReducedMotion ? {} : pinVariants} />
      <motion.path 
        d="M10 16h4" 
        variants={prefersReducedMotion ? {} : minusVariants}
        style={{ originX: "12px", originY: "16px" }}
      />
    </motion.svg>
  );
}
