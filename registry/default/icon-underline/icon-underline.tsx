"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconUnderlineProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const lineVariants: Variants = {
  rest: { scaleX: 1, opacity: 1 },
  hover: { 
    scaleX: [1, 1.2, 1],
    opacity: [1, 0.5, 1],
    transition: { 
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
};

export function IconUnderline({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconUnderlineProps) {
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
      <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" />
      <motion.line 
        x1="4" y1="21" x2="20" y2="21" 
        variants={prefersReducedMotion ? {} : lineVariants}
        style={{ originX: "12px" }}
      />
    </motion.svg>
  );
}
