"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconClockProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
  /** Stroke width. Default 2 */
  strokeWidth?: number;
}

const minuteHandVariants = {
  rest: { rotate: 0 },
  hover: { 
    rotate: 360,
    transition: { 
      duration: 2,
      ease: "linear",
      repeat: Infinity
    }
  },
};

const hourHandVariants = {
  rest: { rotate: 0 },
  hover: { 
    rotate: 360,
    transition: { 
      duration: 12,
      ease: "linear",
      repeat: Infinity
    }
  },
};

export function IconClock({ size = 24, strokeWidth = 2, className, ...props }: IconClockProps) {
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
      <circle cx="12" cy="12" r="9" />
      <motion.line
        x1="12" y1="12" x2="12" y2="8"
        
        style={{ originX: "12px", originY: "12px" }}
      />
      <motion.line
        x1="12" y1="12" x2="16" y2="14"
        variants={prefersReducedMotion ? {} : minuteHandVariants}
        style={{ originX: "12px", originY: "12px" }}
      />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </motion.svg>
  );
}
