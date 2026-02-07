"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconFingerprintProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const scanLineVariants: Variants = {
  rest: { y: 0, opacity: 0 },
  hover: {
    y: [0, 20, 0],
    opacity: [0, 0.8, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

const lineVariants: Variants = {
  rest: { pathLength: 1, opacity: 1 },
  hover: (i: number) => ({
    opacity: [1, 0.4, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      delay: i * 0.2,
      ease: "easeInOut",
    },
  }),
};

export function IconFingerprint({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconFingerprintProps) {
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
      {/* Official Lucide Fingerprint Paths */}
      <motion.path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.02-.26 3" variants={lineVariants} custom={0} />
      <motion.path d="M7 10a5 5 0 0 1 9.39-2.43" variants={lineVariants} custom={1} />
      <motion.path d="M11 22a10 10 0 0 1-9-10c0-4.42 3.58-8 8-8s8 3.58 8 8v3a2 2 0 0 0 2 2 2 2 0 0 0 2-2V12a14 14 0 0 0-24.62-9.4" variants={lineVariants} custom={2} />
      <motion.path d="M2 12a10 10 0 0 1 18-6" variants={lineVariants} custom={3} />
      <motion.path d="M7 21a8 8 0 0 1-5-9" variants={lineVariants} custom={4} />
      <motion.path d="M15 13a3 3 0 0 0-3-3" variants={lineVariants} custom={5} />

      {/* Vertical Scan Bar (Creative Addition) */}
      <motion.rect 
        x="2" 
        y="2" 
        width="20" 
        height="1" 
        fill="currentColor" 
        stroke="none"
        variants={scanLineVariants}
        className="text-primary/50"
      />
    </motion.svg>
  );
}
