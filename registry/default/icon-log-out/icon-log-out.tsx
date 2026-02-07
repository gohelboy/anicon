"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconLogOutProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

// Arrow slides out through the door
const arrowVariants: Variants = {
  rest: { x: 0 },
  hover: {
    x: 4,
    transition: { type: "spring", stiffness: 400, damping: 17 },
  },
  tap: {
    x: 6,
    transition: { type: "spring", stiffness: 400, damping: 17 },
  },
};

// Door closes slightly
const doorVariants: Variants = {
  rest: { scaleX: 1 },
  hover: {
    scaleX: 0.95,
    transition: { type: "spring", stiffness: 400, damping: 17 },
  },
};

export function IconLogOut({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconLogOutProps) {
  const { onAnimationStart, onAnimationEnd, onDragStart, onDrag, onDragEnd, ...rest } = props;
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="-2 0 28 24"
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
      {/* Door frame */}
      <motion.path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" variants={doorVariants} style={{ originX: "0%" }} />
      
      {/* Arrow exiting */}
      <motion.g variants={arrowVariants}>
        <polyline points="16 17 21 12 16 7" />
        <line x1="21" x2="9" y1="12" y2="12" />
      </motion.g>
    </motion.svg>
  );
}
