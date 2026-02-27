"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconFlower2Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const bloomVariants: Variants = {
  rest: { scale: 1, rotate: 0 },
  hover: {
    scale: [1, 1.08, 1],
    rotate: [0, 15, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const centerVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: [1, 1.3, 1],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const leavesVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 1.2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconFlower2({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconFlower2Props) {
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
      <motion.path
        d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"
        variants={bloomVariants}
        style={{ originX: "12px", originY: "8px" }}
      />
      <motion.circle cx="12" cy="8" r="2" variants={centerVariants} />
      <path d="M12 10v12" />
      <motion.path
        d="M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z"
        variants={leavesVariants}
        style={{ originX: "12px", originY: "22px" }}
      />
      <motion.path
        d="M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z"
        variants={leavesVariants}
        style={{ originX: "12px", originY: "22px" }}
      />
    </motion.svg>
  );
}
