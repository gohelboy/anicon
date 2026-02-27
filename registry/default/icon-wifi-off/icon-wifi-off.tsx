"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconWifiOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const waveVariants: Variants = {
  rest: { opacity: 1 },
  hover: {
    opacity: [1, 0.3, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const slashVariants: Variants = {
  rest: { pathLength: 1 },
  hover: {
    pathLength: [0, 1],
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function IconWifiOff({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconWifiOffProps) {
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
      <path d="M12 20h.01" />
      <motion.path d="M8.5 16.429a5 5 0 0 1 7 0" variants={waveVariants} />
      <motion.path d="M5 12.859a10 10 0 0 1 5.17-2.69" variants={waveVariants} />
      <motion.path d="M19 12.859a10 10 0 0 0-2.007-1.523" variants={waveVariants} />
      <motion.path d="M2 8.82a15 15 0 0 1 4.177-2.643" variants={waveVariants} />
      <motion.path d="M22 8.82a15 15 0 0 0-11.288-3.764" variants={waveVariants} />
      <motion.path d="m2 2 20 20" variants={slashVariants} />
    </motion.svg>
  );
}
