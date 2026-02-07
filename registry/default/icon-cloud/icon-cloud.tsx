"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconCloudProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

// Cloud floats gently like a real cloud in the sky
const cloudVariants: Variants = {
  rest: { y: 0, x: 0 },
  hover: {
    y: [0, -3, -2, -3, 0],
    x: [0, 1, -1, 1, 0],
    transition: { duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" },
  },
};

export function IconCloud({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconCloudProps) {
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
      variants={cloudVariants}
      initial={prefersReducedMotion ? false : "rest"}
      whileHover={prefersReducedMotion ? undefined : "hover"}
      whileTap={prefersReducedMotion ? undefined : "tap"}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      style={{ overflow: "visible" }}
      {...rest}
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </motion.svg>
  );
}
