"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconCameraProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

// Camera shutter/flash effect
const flashVariants: Variants = {
  rest: { scale: 1, opacity: 1 },
  hover: {
    scale: [1, 0.8, 1.1, 1],
    opacity: [1, 0.5, 1, 1],
    transition: { duration: 0.3, ease: "easeOut" },
  },
  tap: {
    scale: [1, 0.6, 1.15, 1],
    transition: { duration: 0.25 },
  },
};

// Body slight recoil like taking a photo
const bodyVariants: Variants = {
  rest: { y: 0 },
  hover: {
    y: [0, 1, -1, 0],
    transition: { duration: 0.3 },
  },
};

export function IconCamera({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconCameraProps) {
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
      variants={bodyVariants}
      initial={prefersReducedMotion ? false : "rest"}
      whileHover={prefersReducedMotion ? undefined : "hover"}
      whileTap={prefersReducedMotion ? undefined : "tap"}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      style={{ overflow: "visible" }}
      {...rest}
    >
      {/* Camera body */}
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      
      {/* Lens - shutter animation */}
      <motion.circle cx="12" cy="13" r="3" variants={flashVariants} />
    </motion.svg>
  );
}
