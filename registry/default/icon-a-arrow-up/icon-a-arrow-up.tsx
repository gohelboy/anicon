"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconAArrowUpProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
  /** Stroke width. Default 2 */
  strokeWidth?: number;
}

const aVariants: Variants = {
  rest: { y: 0 },
  hover: { 
    y: [0, 1, 0],
    transition: { 
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
};

const arrowVariants: Variants = {
  rest: { y: 0 },
  hover: { 
    y: [0, -2, 0],
    transition: { 
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
};

export function IconAArrowUp({ size = 24, strokeWidth = 2, className, ...props }: IconAArrowUpProps) {
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
      className={`select-none ${className ?? ""}`.trim()}
      {...rest}
    >
      <motion.g variants={prefersReducedMotion ? {} : aVariants}>
        <path d="M3.5 13h6" />
        <path d="m2 16 4.5-9 4.5 9" />
      </motion.g>
      <motion.g variants={prefersReducedMotion ? {} : arrowVariants}>
        <path d="M18 16V7" />
        <path d="m14 11 4-4 4 4" />
      </motion.g>
    </motion.svg>
  );
}
