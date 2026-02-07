"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconUserProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

// User gives a friendly wave/nod
const headVariants: Variants = {
  rest: { y: 0, rotate: 0 },
  hover: {
    y: [0, -2, 0],
    rotate: [0, 5, -5, 0],
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const bodyVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: [1, 1.02, 1],
    transition: { duration: 0.3 },
  },
};

export function IconUser({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconUserProps) {
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
      style={{ overflow: "visible" }}
      {...rest}
    >
      {/* Head - nods */}
      <motion.circle cx="12" cy="8" r="5" variants={headVariants} />
      
      {/* Body - subtle reaction */}
      <motion.path d="M20 21a8 8 0 0 0-16 0" variants={bodyVariants} />
    </motion.svg>
  );
}
