"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconHospitalProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const crossVariants: Variants = {
  rest: { 
    scale: 1,
    opacity: 1,
  },
  hover: {
    scale: [1, 1.1, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const doorVariants: Variants = {
  rest: { 
    scaleY: 1,
  },
  hover: {
    scaleY: [1, 0.6, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconHospital({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconHospitalProps) {
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
      <motion.path d="M12 7v4" variants={prefersReducedMotion ? {} : crossVariants} style={{ originX: "12px", originY: "9px" }} />
      <motion.path 
        d="M14 21v-3a2 2 0 0 0-4 0v3" 
        variants={prefersReducedMotion ? {} : doorVariants}
        style={{ originX: "12px", originY: "21px" }}
      />
      <motion.path d="M14 9h-4" variants={prefersReducedMotion ? {} : crossVariants} style={{ originX: "12px", originY: "9px" }} />
      <path d="M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2" />
      <path d="M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16" />
    </motion.svg>
  );
}
