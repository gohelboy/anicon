"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconFingerprintProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const scanVariants: Variants = {
  rest: { opacity: 1 },
  hover: {
    opacity: [1, 0.4, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const lineVariants = (delay: number): Variants => ({
  rest: { pathLength: 1, opacity: 1 },
  hover: {
    pathLength: [0, 1],
    opacity: [0.3, 1],
    transition: {
      duration: 1.2,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
});

export function IconFingerprint({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconFingerprintProps) {
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
      variants={scanVariants}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      {...rest}
    >
      <motion.path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" variants={lineVariants(0)} />
      <motion.path d="M14 13.12c0 2.38 0 6.38-1 8.88" variants={lineVariants(0.1)} />
      <motion.path d="M17.29 21.02c.12-.6.43-2.3.5-3.02" variants={lineVariants(0.2)} />
      <motion.path d="M2 12a10 10 0 0 1 18-6" variants={lineVariants(0.3)} />
      <motion.path d="M2 16h.01" variants={lineVariants(0.4)} />
      <motion.path d="M21.8 16c.2-2 .131-5.354 0-6" variants={lineVariants(0.5)} />
      <motion.path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2" variants={lineVariants(0.15)} />
      <motion.path d="M8.65 22c.21-.66.45-1.32.57-2" variants={lineVariants(0.25)} />
      <motion.path d="M9 6.8a6 6 0 0 1 9 5.2v2" variants={lineVariants(0.35)} />
    </motion.svg>
  );
}
