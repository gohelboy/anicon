"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconAmpersandsProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
  /** Stroke width. Default 2 */
  strokeWidth?: number;
}

const ampersandVariants: Variants = {
  rest: { pathLength: 1, opacity: 1, scale: 1 },
  hover: { 
    pathLength: [1, 0, 1],
    opacity: [1, 0.8, 1],
    scale: [1, 1.05, 1],
    transition: { 
      duration: 1.5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 1
    }
  },
};

export function IconAmpersands({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconAmpersandsProps) {
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
      <motion.path
        d="M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5"
        variants={prefersReducedMotion ? {} : ampersandVariants}
        style={{ originX: "6px", originY: "12px" }}
      />
      <motion.path
        d="M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5"
        variants={prefersReducedMotion ? {} : ampersandVariants}
        transition={{ delay: 0.2 }}
        style={{ originX: "18px", originY: "12px" }}
      />
    </motion.svg>
  );
}
