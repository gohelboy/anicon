"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconClockArrowDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const handVariants: Variants = {
  rest: { rotate: 0 },
  hover: { 
    rotate: 360,
    transition: { 
      duration: 2,
      ease: "linear",
      repeat: Infinity
    }
  },
};

const arrowVariants: Variants = {
  rest: { y: -2, opacity: 0 },
  hover: { 
    y: 0,
    opacity: 1,
    transition: { 
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  },
};

export function IconClockArrowDown({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconClockArrowDownProps) {
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
      <path d="M12.337 21.994a10 10 0 1 1 9.588-8.767" />
      <motion.path 
        d="M12 6v6l2 1" 
        variants={prefersReducedMotion ? {} : handVariants}
        style={{ originX: "12px", originY: "12px" }}
      />
      
      {/* Arrow Group */}
      <motion.g variants={prefersReducedMotion ? {} : arrowVariants}>
        <path d="m14 18 4 4 4-4" />
        <path d="M18 14v8" />
      </motion.g>
    </motion.svg>
  );
}
