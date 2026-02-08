"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconBugPlayProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const bugVariants: Variants = {
  rest: { 
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  },
  hover: {
    x: [0, 0.5, -0.5, 0.5, 0],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconBugPlay({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconBugPlayProps) {
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
      <motion.g variants={prefersReducedMotion ? {} : bugVariants}>
        <path d="M10 19.655A6 6 0 0 1 6 14v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 3.97" />
        <path d="M14.12 3.88 16 2" />
        <path d="M21 5a4 4 0 0 1-3.55 3.97" />
        <path d="M3 21a4 4 0 0 1 3.81-4" />
        <path d="M3 5a4 4 0 0 0 3.55 3.97" />
        <path d="M6 13H2" />
        <path d="m8 2 1.88 1.88" />
        <path d="M9 7.13V6a3 3 0 1 1 6 0v1.13" />
      </motion.g>
      <motion.path 
        d="M14 15.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z" 
        fill="currentColor"
        style={{ originX: "14px", originY: "18px" }}
      />
    </motion.svg>
  );
}
