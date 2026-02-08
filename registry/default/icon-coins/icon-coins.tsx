"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconCoinsProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const coinVariants: Variants = {
  rest: { x: 0, y: 0 },
  hover: (i: number) => ({
    x: [0, i === 0 ? 1 : -1, 0],
    y: [0, -1, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      delay: i * 0.3,
      ease: "easeInOut",
    },
  }),
};

const sparkleVariants: Variants = {
  rest: { scale: 0, opacity: 0 },
  hover: {
    scale: [0, 1, 0],
    opacity: [0, 1, 0],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 1,
      ease: "easeInOut",
    },
  },
};

export function IconCoins({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconCoinsProps) {
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
      <motion.circle cx="8" cy="8" r="6" variants={coinVariants} custom={0} />
      <motion.path d="M18.09 10.37A6 6 0 1 1 10.34 18" variants={coinVariants} custom={1} />
      <path d="M7 6h1v4" />
      <path d="m16.71 13.88.7.71-2.82 2.82" />
      
      {/* Sparkle effect */}
      <motion.path 
        d="M20 4l1 1-1 1-1-1z" 
        fill="currentColor" 
        stroke="none"
        variants={sparkleVariants}
      />
    </motion.svg>
  );
}
