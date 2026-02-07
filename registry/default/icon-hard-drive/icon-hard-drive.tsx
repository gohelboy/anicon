"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconHardDriveProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const driveVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.01,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const ledVariants: Variants = {
  rest: { opacity: 0.4 },
  hover: (i: number) => ({
    opacity: [0.4, 1, 0.4],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      delay: i * 0.4,
      ease: "easeInOut",
    },
  }),
};

export function IconHardDrive({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconHardDriveProps) {
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
      variants={driveVariants}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      style={{ overflow: "visible" }}
      {...restOptions}
    >
      <rect width="20" height="8" x="2" y="12" rx="2" />
      <motion.line x1="6" x2="6" y1="16" y2="16" variants={ledVariants} custom={0} />
      <motion.line x1="10" x2="10" y1="16" y2="16" variants={ledVariants} custom={1} />
    </motion.svg>
  );
}
