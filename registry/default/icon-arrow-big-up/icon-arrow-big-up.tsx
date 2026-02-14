"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconArrowBigUpProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
  /** Stroke width. Default 2 */
  strokeWidth?: number;
}

const arrowVariants: Variants = {
  rest: { y: 0, scale: 1 },
  hover: { 
    y: [0, -2, 0],
    scale: [1, 1.05, 1],
    transition: { 
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
};

export function IconArrowBigUp({ size = 24, strokeWidth = 2, className, ...props }: IconArrowBigUpProps) {
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
      whileTap={prefersReducedMotion ? undefined : "tap"}
      transition={{ type: "spring", stiffness: 320, damping: 18 }}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      {...rest}
    >
      <motion.path d="M9 18v-6H5l7-7 7 7h-4v6H9z" variants={prefersReducedMotion ? {} : arrowVariants} />
    </motion.svg>
  );
}
