"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconCakeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const candleVariants: Variants = {
  rest: { scaleY: 1 },
  hover: {
    scaleY: [1, 0.8, 1],
    transition: {
      duration: 0.4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const flameVariants = (delay: number): Variants => ({
  rest: { opacity: 1, scale: 1 },
  hover: {
    opacity: [1, 0.5, 1],
    scale: [1, 1.4, 1],
    transition: {
      duration: 0.4,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
});

const bodyVariants: Variants = {
  rest: { y: 0 },
  hover: {
    y: [0, -1, 0],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconCake({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconCakeProps) {
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
      <motion.g variants={bodyVariants}>
        <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
        <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" />
        <path d="M2 21h20" />
      </motion.g>
      <motion.path d="M7 8v3" variants={candleVariants} style={{ originY: "11px" }} />
      <motion.path d="M12 8v3" variants={candleVariants} style={{ originY: "11px" }} />
      <motion.path d="M17 8v3" variants={candleVariants} style={{ originY: "11px" }} />
      <motion.path d="M7 4h.01" variants={flameVariants(0)} />
      <motion.path d="M12 4h.01" variants={flameVariants(0.15)} />
      <motion.path d="M17 4h.01" variants={flameVariants(0.3)} />
    </motion.svg>
  );
}
