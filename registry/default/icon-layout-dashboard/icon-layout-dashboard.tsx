"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconLayoutDashboardProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const rectVariants: Variants = {
  rest: { scale: 1, opacity: 1 },
  hover: (i: number) => ({
    scale: [1, 1.1, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      delay: i * 0.2,
      ease: "easeInOut",
    },
  }),
};

export function IconLayoutDashboard({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconLayoutDashboardProps) {
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
      <motion.rect width="7" height="9" x="3" y="3" rx="1" variants={rectVariants} custom={0} style={{ originX: "6.5px", originY: "7.5px" }} />
      <motion.rect width="7" height="5" x="14" y="3" rx="1" variants={rectVariants} custom={1} style={{ originX: "17.5px", originY: "5.5px" }} />
      <motion.rect width="7" height="9" x="14" y="12" rx="1" variants={rectVariants} custom={2} style={{ originX: "17.5px", originY: "16.5px" }} />
      <motion.rect width="7" height="5" x="3" y="16" rx="1" variants={rectVariants} custom={3} style={{ originX: "6.5px", originY: "18.5px" }} />
    </motion.svg>
  );
}
