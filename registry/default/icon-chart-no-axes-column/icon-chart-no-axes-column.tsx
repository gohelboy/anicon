"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconChartNoAxesColumnProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const barVariants: Variants = {
  rest: { scaleY: 1, originY: 1 },
  hover: (i: number) => ({
    scaleY: [1, 1.2, 1],
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 0.5,
    },
  }),
};

export function IconChartNoAxesColumn({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconChartNoAxesColumnProps) {
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
      <motion.path d="M5 21v-6" variants={barVariants} custom={0} />
      <motion.path d="M12 21V3" variants={barVariants} custom={1} />
      <motion.path d="M19 21V9" variants={barVariants} custom={2} />
    </motion.svg>
  );
}
