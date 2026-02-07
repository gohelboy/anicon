"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconCpuProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const chipVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const lineVariants: Variants = {
  rest: { pathLength: 1, opacity: 1 },
  hover: (i: number) => ({
    pathLength: [0, 1],
    opacity: [0.4, 1, 0.4],
    transition: {
      duration: 1,
      repeat: Infinity,
      delay: i * 0.1,
      ease: "easeInOut",
    },
  }),
};

export function IconCpu({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconCpuProps) {
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
      <motion.rect 
        width="12" 
        height="12" 
        x="6" 
        y="6" 
        rx="2" 
        variants={chipVariants}
      />
      {/* Circuit lines */}
      <motion.path d="M9 18v3" variants={lineVariants} custom={0} />
      <motion.path d="M15 18v3" variants={lineVariants} custom={1} />
      <motion.path d="M18 9h3" variants={lineVariants} custom={2} />
      <motion.path d="M18 15h3" variants={lineVariants} custom={3} />
      <motion.path d="M9 3v3" variants={lineVariants} custom={4} />
      <motion.path d="M15 3v3" variants={lineVariants} custom={5} />
      <motion.path d="M3 9h3" variants={lineVariants} custom={6} />
      <motion.path d="M3 15h3" variants={lineVariants} custom={7} />
    </motion.svg>
  );
}
