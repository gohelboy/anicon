"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconKeyProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const keyVariants: Variants = {
  rest: { rotate: 0 },
  hover: {
    rotate: -45,
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
  tap: {
    rotate: -60,
    transition: { type: "spring", stiffness: 300, damping: 10 },
  },
};

export function IconKey({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconKeyProps) {
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
      variants={keyVariants}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      style={{ originX: "20%", originY: "80%", overflow: "visible" }}
      {...rest}
    >
      <path d="m21 2-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3L15.5 7.5z" />
    </motion.svg>
  );
}
