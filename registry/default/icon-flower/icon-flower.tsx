"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconFlowerProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const spinVariants: Variants = {
  rest: { rotate: 0 },
  hover: {
    rotate: [0, 360],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

const centerVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: [1, 1.2, 1],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconFlower({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconFlowerProps) {
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
      <motion.circle cx="12" cy="12" r="3" variants={centerVariants} />
      <motion.g variants={spinVariants} style={{ originX: "12px", originY: "12px" }}>
        <path d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5" />
        <path d="M12 7.5V9" />
        <path d="M7.5 12H9" />
        <path d="M16.5 12H15" />
        <path d="M12 16.5V15" />
        <path d="m8 8 1.88 1.88" />
        <path d="M14.12 9.88 16 8" />
        <path d="m8 16 1.88-1.88" />
        <path d="M14.12 14.12 16 16" />
      </motion.g>
    </motion.svg>
  );
}
