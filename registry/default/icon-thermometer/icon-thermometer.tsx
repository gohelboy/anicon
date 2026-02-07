"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconThermometerProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const liquidVariants: Variants = {
  rest: { scaleY: 0.4 },
  hover: {
    scaleY: 0.85,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
  tap: {
    scaleY: 0.95,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
};

export function IconThermometer({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconThermometerProps) {
  const { onAnimationStart, onAnimationEnd, onDragStart, onDrag, onDragEnd, ...rest } = props;
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
      initial={prefersReducedMotion ? false : "rest"}
      whileHover={prefersReducedMotion ? undefined : "hover"}
      whileTap={prefersReducedMotion ? undefined : "tap"}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      style={{ overflow: "visible" }}
      {...rest}
    >
      <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
      
      {/* Liquid rising animation */}
      <motion.path
        d="M12 14V5"
        variants={liquidVariants}
        style={{ originY: "100%", strokeWidth: strokeWidth * 1.5, stroke: "currentColor" }}
      />
      
      {/* Bulb base */}
      <circle cx="12" cy="18" r="2" fill="currentColor" stroke="none" />
    </motion.svg>
  );
}
