"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconNotebookProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const lineVariants: Variants = {
  rest: { x: 0 },
  hover: { 
    x: 2,
    transition: { type: "spring", stiffness: 300, damping: 10 }
  },
};

const spineVariants: Variants = {
  rest: { opacity: 1 },
  hover: { 
    opacity: [1, 0.5, 1],
    transition: { duration: 1, repeat: Infinity }
  },
};

export function IconNotebook({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconNotebookProps) {
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
      <motion.path d="M16 2v20" variants={prefersReducedMotion ? {} : spineVariants} />
      
      {/* Binding Rings */}
      <motion.path variants={prefersReducedMotion ? {} : lineVariants} transition={{ delay: 0.1 }} d="M2 6h4" />
      <motion.path variants={prefersReducedMotion ? {} : lineVariants} transition={{ delay: 0.2 }} d="M2 10h4" />
      <motion.path variants={prefersReducedMotion ? {} : lineVariants} transition={{ delay: 0.3 }} d="M2 14h4" />
      <motion.path variants={prefersReducedMotion ? {} : lineVariants} transition={{ delay: 0.4 }} d="M2 18h4" />
    </motion.svg>
  );
}
