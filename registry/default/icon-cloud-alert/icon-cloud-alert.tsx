"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconCloudAlertProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const cloudVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: [1, 1.03, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const exclamationVariants: Variants = {
  rest: { opacity: 1, scale: 1 },
  hover: {
    opacity: [1, 0.5, 1],
    scale: [1, 1.2, 1],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconCloudAlert({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconCloudAlertProps) {
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
        d="M17 18h.5a1 1 0 0 0 0-9h-1.79A7 7 0 1 0 7 17.708" 
        variants={cloudVariants}
        style={{ originX: "12px", originY: "13px" }}
      />
      <motion.g variants={exclamationVariants} style={{ originX: "12px", originY: "16px" }}>
        <path d="M12 12v4" />
        <path d="M12 20h.01" />
      </motion.g>
    </motion.svg>
  );
}
