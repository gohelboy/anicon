"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconTimerOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const slashVariants: Variants = {
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

const glitchVariants: Variants = {
  rest: { x: 0, rotate: 0 },
  hover: { 
    rotate: [0, -5, 5, -2, 0],
    x: [0, -0.5, 0.5, 0],
    transition: { 
      duration: 0.8,
      repeat: Infinity,
      repeatDelay: 0.2
    }
  },
};

export function IconTimerOff({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconTimerOffProps) {
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
      <path d="M10 2h4" />
      <path d="M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7" />
      <path d="M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2" />
      <motion.path 
        d="M12 12v-2" 
        variants={prefersReducedMotion ? {} : glitchVariants}
        style={{ originX: "12px", originY: "12px" }}
      />
      <motion.path 
        d="m2 2 20 20" 
        variants={prefersReducedMotion ? {} : slashVariants}
      />
    </motion.svg>
  );
}
