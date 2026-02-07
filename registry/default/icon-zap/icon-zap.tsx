"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconZapProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

// Lightning bolt flashes like electricity
const zapVariants: Variants = {
  rest: { opacity: 1, scale: 1, filter: "brightness(1)" },
  hover: {
    opacity: [1, 0.4, 1, 0.6, 1],
    scale: [1, 1.08, 1.02, 1.06, 1],
    transition: { duration: 0.4, ease: "easeInOut" },
  },
  tap: {
    opacity: [1, 0.2, 1],
    scale: [1, 1.15, 1],
    transition: { duration: 0.2 },
  },
};

export function IconZap({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconZapProps) {
  const { onAnimationStart, onAnimationEnd, onDragStart, onDrag, onDragEnd, ...rest } = props;
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="-2 -2 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      variants={zapVariants}
      initial={prefersReducedMotion ? false : "rest"}
      whileHover={prefersReducedMotion ? undefined : "hover"}
      whileTap={prefersReducedMotion ? undefined : "tap"}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      style={{ overflow: "visible" }}
      {...rest}
    >
      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
    </motion.svg>
  );
}
