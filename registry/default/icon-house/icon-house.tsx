"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconHouseProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const doorVariants: Variants = {
  rest: { 
    scaleY: 1,
  },
  hover: {
    scaleY: [1, 0.5, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconHouse({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconHouseProps) {
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
        d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" 
        variants={prefersReducedMotion ? {} : doorVariants}
        style={{ originY: "21px" }}
      />
      <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    </motion.svg>
  );
}
