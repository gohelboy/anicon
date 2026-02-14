"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconClock4Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const handVariants: Variants = {
  rest: { rotate: 0 },
  hover: { 
    rotate: 360,
    transition: { 
      duration: 3,
      ease: "linear",
      repeat: Infinity
    }
  },
};

export function IconClock4({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconClock4Props) {
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
      initial="rest" whileHover="hover"
      {...rest}
    >
      <path d="M12 6v6" />
      <motion.path 
        d="M12 12l4 2" 
        variants={prefersReducedMotion ? {} : handVariants} 
        style={{ originX: "12px", originY: "12px" }} 
      />
      <circle cx="12" cy="12" r="10" />
    </motion.svg>
  );
}
