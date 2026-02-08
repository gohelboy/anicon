"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconHousePlusProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const plusVariants: Variants = {
  rest: { 
    rotate: 0,
    scale: 1,
  },
  hover: {
    rotate: [0, 90, 180],
    scale: [1, 1.1, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconHousePlus({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconHousePlusProps) {
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
      <path d="M12.35 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .71-1.53l7-6a2 2 0 0 1 2.58 0l7 6A2 2 0 0 1 21 10v2.35" />
      <path d="M14.8 12.4A1 1 0 0 0 14 12h-4a1 1 0 0 0-1 1v8" />
      <motion.g variants={prefersReducedMotion ? {} : plusVariants} style={{ originX: "18px", originY: "18px" }}>
        <path d="M15 18h6" />
        <path d="M18 15v6" />
      </motion.g>
    </motion.svg>
  );
}
