"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconWalletProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const walletVariants: Variants = {
  rest: { rotate: 0, x: 0 },
  hover: {
    rotate: [0, -2, 0],
    x: [0, -0.5, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const flapVariants: Variants = {
  rest: { rotate: 0 },
  hover: {
    rotate: [0, -10, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconWallet({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconWalletProps) {
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
      <motion.path 
        d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" 
        variants={flapVariants}
        style={{ originX: "20px", originY: "14px" }}
      />
      <motion.path 
        d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" 
        variants={walletVariants}
        style={{ originX: "10px", originY: "10px" }}
      />
    </motion.svg>
  );
}
