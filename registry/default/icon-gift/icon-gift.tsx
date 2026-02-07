"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconGiftProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

// Gift box shakes with anticipation, ribbon unwraps
const boxVariants: Variants = {
  rest: { rotate: 0 },
  hover: {
    rotate: [0, -3, 3, -2, 2, 0],
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

// Lid lifts like unwrapping
const lidVariants: Variants = {
  rest: { y: 0, rotate: 0 },
  hover: {
    y: -4,
    rotate: -5,
    transition: { type: "spring", stiffness: 400, damping: 17 },
  },
  tap: {
    y: -6,
    rotate: -8,
    transition: { type: "spring", stiffness: 400, damping: 17 },
  },
};

export function IconGift({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconGiftProps) {
  const { onAnimationStart, onAnimationEnd, onDragStart, onDrag, onDragEnd, ...rest } = props;
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="-2 -6 28 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={prefersReducedMotion ? false : "rest"}
      whileHover={prefersReducedMotion ? undefined : "hover"}
      whileTap={prefersReducedMotion ? undefined : "tap"}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      style={{ overflow: "visible" }}
      {...rest}
    >
      {/* Gift box body - shakes */}
      <motion.g variants={boxVariants}>
        <path d="M20 12v10H4V12" />
        <path d="M12 22V8" />
      </motion.g>
      
      {/* Lid + ribbon bow - lifts up */}
      <motion.g variants={lidVariants} style={{ originX: "50%", originY: "100%" }}>
        <rect width="20" height="5" x="2" y="7" />
        <path d="M12 8a4 4 0 0 0-4-4c-1.5 0-2.5 1-3 2 2 0 5 1 7 2" />
        <path d="M12 8a4 4 0 0 1 4-4c1.5 0 2.5 1 3 2-2 0-5 1-7 2" />
      </motion.g>
    </motion.svg>
  );
}
