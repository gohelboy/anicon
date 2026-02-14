"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconClockAlertProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const clockVariants: Variants = {
  rest: { rotate: 0 },
  hover: {
    rotate: [0, -2, 2, 0],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const handVariants: Variants = {
  rest: { rotate: 0 },
  hover: {
    rotate: [0, 360],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

const exclamationVariants: Variants = {
  rest: { opacity: 1 },
  hover: {
    opacity: [1, 0.4, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconClockAlert({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconClockAlertProps) {
  const { onAnimationStart, onAnimationEnd, onDragStart, onDrag, onDragEnd, ...restOptions } = props;
  const prefersReducedMotion = useReducedMotion();

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
      initial="rest"
      whileHover="hover"
      className={`select-none ${className ?? ""}`.trim()}
      style={{ overflow: "visible" }}
      {...restOptions}
    >
      <motion.g variants={clockVariants} style={{ originX: "12px", originY: "12px" }}>
        <path d="M21.25 8.2A10 10 0 1 0 16 21.16" />
        <path d="M12 6v6" />
        <motion.path 
          d="M12 12l4 2" 
          variants={prefersReducedMotion ? {} : handVariants} 
          style={{ originX: "12px", originY: "12px" }} 
        />
      </motion.g>
      <motion.g variants={exclamationVariants} style={{ originX: "20px", originY: "16px" }}>
        <path d="M20 12v5" />
        <path d="M20 21h.01" />
      </motion.g>
    </motion.svg>
  );
}
