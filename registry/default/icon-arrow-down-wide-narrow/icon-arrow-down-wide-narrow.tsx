"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconArrowDownWideNarrowProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
  /** Stroke width. Default 2 */
  strokeWidth?: number;
}













const arrowVariants: Variants = {
  rest: { y: 0 },
  hover: { 
    y: [0, 2, 0],
    transition: { 
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
};

const indicatorVariants: Variants = {
  rest: { x: 0, opacity: 1 },
  hover: { 
    x: [0, 2, 0],
    opacity: [1, 0.8, 1],
    transition: { 
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
};

export function IconArrowDownWideNarrow({ size = 24, strokeWidth = 2, className, ...props }: IconArrowDownWideNarrowProps) {
  const {
    onAnimationStart,
    onAnimationEnd,
    onDragStart,
    onDrag,
    onDragEnd,
    ...rest
  } = props;
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
      
      
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      {...rest}
    >
      <motion.g variants={prefersReducedMotion ? {} : arrowVariants} >
        <path d="m3 16 4 4 4-4" />
        <path d="M7 20V4" />
      </motion.g>
      <motion.g variants={prefersReducedMotion ? {} : indicatorVariants}  style={{ originX: 0 }}>
        <path d="M11 4h10" />
        <path d="M11 8h7" />
        <path d="M11 12h4" />
      </motion.g>
    </motion.svg>
  );
}
