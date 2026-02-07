"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconCoffeeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const steamVariants: Variants = {
  rest: { y: 0, opacity: 1 },
  hover: (i: number) => ({
    y: [0, -4, -8],
    opacity: [0, 1, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      delay: i * 0.4,
      ease: "linear",
    },
  }),
};

export function IconCoffee({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconCoffeeProps) {
  const { onAnimationStart, onAnimationEnd, onDragStart, onDrag, onDragEnd, ...restOptions } = props;
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
      {...restOptions}
    >
      {/* Cup - No vibration as requested */}
      <path d="M17 11h.3a3.7 3.7 0 1 1 0 7.4h-.3" />
      <path d="M2 11h15a2 2 0 0 1 2 2v2a5 5 0 0 1-5 5H4a2 2 0 0 1-2-2Z" />
      
      {/* Steam lines */}
      <motion.path d="M6 2v4" variants={steamVariants} custom={0} />
      <motion.path d="M10 2v4" variants={steamVariants} custom={1} />
      <motion.path d="M14 2v4" variants={steamVariants} custom={2} />
    </motion.svg>
  );
}
