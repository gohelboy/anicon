"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconTeacupProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const steamVariants: Variants = {
  rest: { y: 0, opacity: 1 },
  hover: {
    y: [-1, -4, -1],
    opacity: [0.7, 1, 0.7],
    transition: { duration: 1.2, repeat: Infinity, ease: "easeInOut" },
  },
};

const cupVariants: Variants = {
  rest: { y: 0 },
  hover: {
    y: [0, -1, 0],
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

export function IconTeacup({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconTeacupProps) {
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
      <motion.path d="M8 4c0 1.4-1 1.4-1 2.8" variants={steamVariants} />
      <motion.path d="M12 4c0 1.4-1 1.4-1 2.8" variants={steamVariants} />
      <motion.g variants={cupVariants}>
        <path d="M4 11h12v2a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z" />
        <path d="M16 12h2a2 2 0 0 1 0 4h-2" />
        <path d="M3 20h15" />
      </motion.g>
    </motion.svg>
  );
}
