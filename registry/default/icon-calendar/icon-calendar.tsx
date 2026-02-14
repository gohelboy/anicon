"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconCalendarProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

// Calendar page flips like turning pages
const pageVariants: Variants = {
  rest: { rotateX: 0 },
  hover: {
    rotateX: [0, -15, 0],
    transition: { duration: 0.4, ease: "easeInOut" },
  },
  tap: {
    rotateX: [0, -25, 0],
    transition: { duration: 0.3 },
  },
};

export function IconCalendar({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconCalendarProps) {
  const { onAnimationStart, onAnimationEnd, onDragStart, onDrag, onDragEnd, ...rest } = props;
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="-2 -4 28 30"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={prefersReducedMotion ? false : "rest"}
      whileHover={prefersReducedMotion ? undefined : "hover"}
      whileTap={prefersReducedMotion ? undefined : "tap"}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      style={{ overflow: "visible", perspective: "100px" }}
      {...rest}
    >
      {/* Calendar body */}
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      
      {/* Calendar header - flips */}
      <motion.path 
        d="M3 10h18" 
        variants={pageVariants}
        style={{ originX: "50%", originY: "0%", transformStyle: "preserve-3d" }}
      />
    </motion.svg>
  );
}
