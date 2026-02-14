"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconCalendarDaysProps extends React.SVGProps<SVGSVGElement> {
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

const dayVariants: Variants = {
  rest: { scale: 1, opacity: 1 },
  hover: { 
    scale: [1, 1.8, 1],
    opacity: [1, 0.5, 1],
    transition: { 
      duration: 0.6,
      repeat: Infinity,
      repeatDelay: 0.2
    }
  },
};

export function IconCalendarDays({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconCalendarDaysProps) {
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
      
      {/* Day Indicators */}
      <motion.path d="M8 14h.01" variants={prefersReducedMotion ? {} : dayVariants} transition={{ delay: 0.0 }} />
      <motion.path d="M12 14h.01" variants={prefersReducedMotion ? {} : dayVariants} transition={{ delay: 0.1 }} />
      <motion.path d="M16 14h.01" variants={prefersReducedMotion ? {} : dayVariants} transition={{ delay: 0.2 }} />
      <motion.path d="M8 18h.01" variants={prefersReducedMotion ? {} : dayVariants} transition={{ delay: 0.1 }} />
      <motion.path d="M12 18h.01" variants={prefersReducedMotion ? {} : dayVariants} transition={{ delay: 0.2 }} />
      <motion.path d="M16 18h.01" variants={prefersReducedMotion ? {} : dayVariants} transition={{ delay: 0.3 }} />
    </motion.svg>
  );
}
