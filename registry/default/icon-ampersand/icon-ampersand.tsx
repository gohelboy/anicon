"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconAmpersandProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
  /** Stroke width. Default 2 */
  strokeWidth?: number;
}

const glyphVariants: Variants = {
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

const barVariants: Variants = {
  rest: { pathLength: 1, opacity: 1 },
  hover: { 
    pathLength: [1, 0, 1],
    opacity: [1, 0.8, 1],
    transition: { 
      duration: 1.5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 1,
      delay: 0.2
    }
  },
};

export function IconAmpersand({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconAmpersandProps) {
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
        d="M17.5 12c0 4.4-3.6 8-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13"
        variants={prefersReducedMotion ? {} : glyphVariants}
        style={{ originX: "50%", originY: "50%" }}
      />
      <motion.path 
        d="M16 12h3" 
        variants={prefersReducedMotion ? {} : barVariants} 
      />
    </motion.svg>
  );
}
