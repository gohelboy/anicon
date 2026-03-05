"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconPinOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const slashVariants: Variants = {
  rest: { pathLength: 1, opacity: 1 },
  hover: {
    pathLength: [0.2, 1],
    opacity: [0.5, 1],
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

export function IconPinOff({ size = 24, strokeWidth = 2, className, ...props }: IconPinOffProps) {
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
      <path d="M14 4a2 2 0 0 1 2 2v2l2 3H9" />
      <path d="M12 11v9" />
      <motion.path d="M4 4 20 20" variants={slashVariants} />
    </motion.svg>
  );
}
