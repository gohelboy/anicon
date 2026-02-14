"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconBinaryProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const zeroVariants: Variants = {
  rest: { rotate: 0, scale: 1 },
  hover: { 
    rotate: [0, 45, 0],
    scale: [1, 1.1, 1],
    transition: { 
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
};

const oneVariants: Variants = {
  rest: { y: 0, opacity: 1 },
  hover: { 
    y: [0, -2, 0],
    opacity: [1, 0.7, 1],
    transition: { 
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
};

export function IconBinary({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconBinaryProps) {
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
      <motion.rect 
        x="14" y="14" width="4" height="6" ry="2" 
        variants={prefersReducedMotion ? {} : zeroVariants}
        style={{ originX: "16px", originY: "17px" }}
      />
      <motion.rect 
        x="6" y="4" width="4" height="6" ry="2" 
        variants={prefersReducedMotion ? {} : zeroVariants}
        style={{ originX: "8px", originY: "7px" }}
      />
      <motion.path 
        d="M6 20h4" 
        variants={prefersReducedMotion ? {} : oneVariants}
      />
      <motion.path 
        d="M14 10h4" 
        variants={prefersReducedMotion ? {} : oneVariants}
      />
      <motion.path 
        d="M8 14v6" 
        variants={prefersReducedMotion ? {} : oneVariants}
      />
      <motion.path 
        d="M16 4v6" 
        variants={prefersReducedMotion ? {} : oneVariants}
      />
      <motion.path 
        d="M14 4h2" 
        variants={prefersReducedMotion ? {} : oneVariants}
      />
      <motion.path 
        d="M6 14h2" 
        variants={prefersReducedMotion ? {} : oneVariants}
      />
    </motion.svg>
  );
}
