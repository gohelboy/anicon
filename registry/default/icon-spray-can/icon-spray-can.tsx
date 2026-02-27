"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconSprayCanProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const sprayVariants = (delay: number): Variants => ({
  rest: { opacity: 1, scale: 1 },
  hover: {
    opacity: [0, 1, 0],
    scale: [0.5, 1.2, 0.5],
    transition: {
      duration: 0.8,
      delay,
      repeat: Infinity,
      ease: "easeOut",
    },
  },
});

const canVariants: Variants = {
  rest: { x: 0 },
  hover: {
    x: [0, -0.5, 0.5, 0],
    transition: { duration: 0.15, repeat: Infinity },
  },
};

export function IconSprayCan({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconSprayCanProps) {
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
      {/* Spray particles */}
      <motion.path d="M3 3h.01" variants={sprayVariants(0)} />
      <motion.path d="M7 5h.01" variants={sprayVariants(0.1)} />
      <motion.path d="M11 7h.01" variants={sprayVariants(0.2)} />
      <motion.path d="M3 7h.01" variants={sprayVariants(0.15)} />
      <motion.path d="M7 9h.01" variants={sprayVariants(0.25)} />
      <motion.path d="M3 11h.01" variants={sprayVariants(0.3)} />
      {/* Can body */}
      <motion.g variants={canVariants}>
        <rect width="4" height="4" x="15" y="5" />
        <path d="m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2" />
        <path d="m13 14 8-2" />
        <path d="m13 19 8-2" />
      </motion.g>
    </motion.svg>
  );
}
