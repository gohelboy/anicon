"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconMeteorShowerProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const meteorVariants = (delay: number): Variants => ({
  rest: { x: 0, y: 0, opacity: 1 },
  hover: {
    x: [-2, 2],
    y: [-2, 2],
    opacity: [0, 1, 0],
    transition: {
      duration: 1,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
});

const starVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: [1, 1.2, 1],
    transition: { duration: 0.9, repeat: Infinity, ease: "easeInOut" },
  },
};

export function IconMeteorShower({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconMeteorShowerProps) {
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
      <motion.path d="m16 4 4 4" variants={meteorVariants(0)} />
      <motion.path d="m13 6 4 4" variants={meteorVariants(0.2)} />
      <motion.path d="m9 10 6 6" variants={meteorVariants(0.35)} />
      <motion.g variants={starVariants}>
        <path d="M4 5h.01" />
        <path d="M7 8h.01" />
        <path d="M5 11h.01" />
      </motion.g>
    </motion.svg>
  );
}
