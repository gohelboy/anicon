"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconLogInProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

// Arrow slides in through the door
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

// Door opens slightly
const doorVariants: Variants = {
  rest: { scaleX: 1 },
  hover: {
    scaleX: 1.05,
    transition: { type: "spring", stiffness: 400, damping: 17 },
  },
};

export function IconLogIn({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconLogInProps) {
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
      {/* Door frame */}
      <motion.path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" variants={doorVariants} style={{ originX: "100%" }} />
      
      {/* Arrow entering */}
      <motion.g variants={arrowVariants}>
        <polyline points="10 17 15 12 10 7" />
        <line x1="15" x2="3" y1="12" y2="12" />
      </motion.g>
    </motion.svg>
  );
}
