"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconBrainProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const leftBrainVariants: Variants = {
  rest: { opacity: 1 },
  hover: {
    opacity: [1, 0.7, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const rightBrainVariants: Variants = {
  rest: { opacity: 1 },
  hover: {
    opacity: [1, 0.7, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      delay: 1,
      ease: "easeInOut",
    },
  },
};

const pulseVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconBrain({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconBrainProps) {
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
      <motion.g variants={pulseVariants}>
        <motion.path 
          d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4 2.5 2.5 0 0 0 .15 4.5 2.5 2.5 0 0 0 4.14 2 2.5 2.5 0 0 0 4.46-1.54V5a2.5 2.5 0 0 0-.49-.5Z" 
          variants={leftBrainVariants}
        />
        <motion.path 
          d="M12 4.5a2.5 2.5 0 0 1 4.96-.46 2.5 2.5 0 0 1 1.98 3 2.5 2.5 0 0 1 1.32 4 2.5 2.5 0 0 1-.15 4.5 2.5 2.5 0 0 1-4.14 2 2.5 2.5 0 0 1-4.46-1.54V5c0-.17.017-.333.05-.5Z" 
          variants={rightBrainVariants}
        />
      </motion.g>
    </motion.svg>
  );
}
