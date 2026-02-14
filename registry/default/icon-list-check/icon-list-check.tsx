"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconListCheckProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const lineVariants: Variants = {
  rest: { pathLength: 1, opacity: 1, x: 0 },
  hover: { 
    x: [0, 2, 0],
    transition: { 
      duration: 0.4,
      ease: "easeInOut"
    }
  },
};

const checkVariants: Variants = {
  rest: { pathLength: 0, opacity: 0 },
  hover: { 
    pathLength: 1, 
    opacity: 1,
    transition: { 
      duration: 0.4,
      ease: "easeOut",
      delay: 0.4
    }
  },
};

export function IconListCheck({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconListCheckProps) {
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
      <motion.path d="M16 5H3" variants={prefersReducedMotion ? {} : lineVariants} transition={{ delay: 0.1 }} />
      <motion.path d="M16 12H3" variants={prefersReducedMotion ? {} : lineVariants} transition={{ delay: 0.2 }} />
      <motion.path d="M11 19H3" variants={prefersReducedMotion ? {} : lineVariants} transition={{ delay: 0.3 }} />
      <motion.path 
        d="m15 18 2 2 4-4" 
        variants={prefersReducedMotion ? {} : checkVariants}
      />
    </motion.svg>
  );
}
