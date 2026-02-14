"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconNotebookTextProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}



const textVariants: Variants = {
  rest: { pathLength: 0, opacity: 0 },
  hover: { 
    pathLength: 1, 
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" }
  },
};

const ringVariants: Variants = {
  rest: { x: 0 },
  hover: { 
    x: [0, 2, 0],
    transition: { 
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
};

export function IconNotebookText({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconNotebookTextProps) {
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
      <rect width="16" height="20" x="4" y="2" rx="2" />
      
      {/* Binding Rings */}
      <motion.path transition={{ delay: 0.1 }}  variants={prefersReducedMotion ? {} : ringVariants} d="M2 6h4" />
      <motion.path transition={{ delay: 0.2 }}  variants={prefersReducedMotion ? {} : ringVariants} d="M2 10h4" />
      <motion.path transition={{ delay: 0.3 }}  variants={prefersReducedMotion ? {} : ringVariants} d="M2 14h4" />
      <motion.path transition={{ delay: 0.4 }}  variants={prefersReducedMotion ? {} : ringVariants} d="M2 18h4" />
      
      {/* Text Lines */}
      <motion.path variants={prefersReducedMotion ? {} : textVariants} transition={{ delay: 0.2 }} d="M9.5 8h5" />
      <motion.path variants={prefersReducedMotion ? {} : textVariants} transition={{ delay: 0.4 }} d="M9.5 12H16" />
      <motion.path variants={prefersReducedMotion ? {} : textVariants} transition={{ delay: 0.6 }} d="M9.5 16H14" />
    </motion.svg>
  );
}
