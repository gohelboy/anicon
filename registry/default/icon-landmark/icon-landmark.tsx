"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconLandmarkProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const pillarVariants: Variants = {
  rest: { scaleY: 1, originY: 1 },
  hover: (i: number) => ({
    scaleY: [1, 1.2, 1],
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: "easeInOut",
    },
  }),
};

const roofVariants: Variants = {
  rest: { y: 0 },
  hover: {
    y: [0, -2, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export function IconLandmark({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconLandmarkProps) {
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
      <motion.path d="M2 22h20" />
      <motion.path d="M12 2 2 7v2h20V7Z" variants={roofVariants} />
      <motion.line x1="6" y1="18" x2="6" y2="11" variants={pillarVariants} custom={0} />
      <motion.line x1="10" y1="18" x2="10" y2="11" variants={pillarVariants} custom={1} />
      <motion.line x1="14" y1="18" x2="14" y2="11" variants={pillarVariants} custom={2} />
      <motion.line x1="18" y1="18" x2="18" y2="11" variants={pillarVariants} custom={3} />
    </motion.svg>
  );
}
