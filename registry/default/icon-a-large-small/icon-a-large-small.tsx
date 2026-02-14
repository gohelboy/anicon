"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconALargeSmallProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
  /** Stroke width. Default 2 */
  strokeWidth?: number;
}

const smallVariants: Variants = {
  rest: { scale: 1 },
  hover: { 
    scale: [1, 1.1, 1],
    transition: { 
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
};

const largeVariants: Variants = {
  rest: { scale: 1 },
  hover: { 
    scale: [1, 0.95, 1],
    transition: { 
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
};

export function IconALargeSmall({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconALargeSmallProps) {
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
      <motion.g
        variants={prefersReducedMotion ? {} : smallVariants}
        style={{ originX: "18.5px", originY: "14px" }}
      >
        <path d="M21 14h-5" />
        <path d="M16 16v-3.5a2.5 2.5 0 0 1 5 0V16" />
      </motion.g>
      <motion.g 
        variants={prefersReducedMotion ? {} : largeVariants} 
        style={{ originX: "7.5px", originY: "11.5px" }}
      >
        <path d="M4.5 13h6" />
        <path d="m3 16 4.5-9 4.5 9" />
      </motion.g>
    </motion.svg>
  );
}
