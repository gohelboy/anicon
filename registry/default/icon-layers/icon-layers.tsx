"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconLayersProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const topLayerVariants: Variants = {
  rest: { y: 0 },
  hover: {
    y: -4,
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
};

const middleLayerVariants: Variants = {
  rest: { y: 0, opacity: 1 },
  hover: {
    y: -2,
    opacity: 0.8,
    transition: { type: "spring", stiffness: 300, damping: 15, delay: 0.05 },
  },
};

const bottomLayerVariants: Variants = {
  rest: { opacity: 1 },
  hover: {
    opacity: 0.6,
    transition: { duration: 0.2 },
  },
};

export function IconLayers({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconLayersProps) {
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
      <motion.path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.27a1 1 0 0 0 0 1.46l8.57 4.09a2 2 0 0 0 1.66 0l8.57-4.09a1 1 0 0 0 0-1.46Z" variants={topLayerVariants} />
      <motion.path d="m2 12 10 4.76L22 12" variants={middleLayerVariants} />
      <motion.path d="m2 17 10 4.76L22 17" variants={bottomLayerVariants} />
    </motion.svg>
  );
}
