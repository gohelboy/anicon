"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconFishSymbolProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const swimVariants: Variants = {
  rest: { 
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  },
  hover: {
    x: [0, 2, -2, 2, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconFishSymbol({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconFishSymbolProps) {
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
      <motion.path 
        d="M2 16s9-15 20-4C11 23 2 8 2 8" 
        variants={prefersReducedMotion ? {} : swimVariants}
      />
    </motion.svg>
  );
}
