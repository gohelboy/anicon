"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconCalendarClockProps extends React.SVGProps<SVGSVGElement> {
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

const handVariants: Variants = {
  rest: { rotate: 0 },
  hover: { 
    rotate: 360,
    transition: { 
      duration: 3,
      ease: "linear",
      repeat: Infinity
    }
  },
};

export function IconCalendarClock({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconCalendarClockProps) {
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
      <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" />
      <path d="M3 10h18" />
      <circle cx="16" cy="16" r="6" />
      <path d="M16 14v2" />
      <motion.path 
        d="M16 16l1.6 1" 
        variants={prefersReducedMotion ? {} : handVariants}
        style={{ originX: "16px", originY: "16px" }}
      />
    </motion.svg>
  );
}
