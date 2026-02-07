"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconSnowflakeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const snowflakeVariants: Variants = {
  rest: { rotate: 0, scale: 1 },
  hover: {
    rotate: 360,
    scale: 1.1,
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

export function IconSnowflake({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconSnowflakeProps) {
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
      variants={snowflakeVariants}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      style={{ overflow: "visible" }}
      {...restOptions}
    >
      <line x1="2" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="22" />
      <line x1="4.93" x2="19.07" y1="4.93" y2="19.07" />
      <line x1="19.07" x2="4.93" y1="4.93" y2="19.07" />
    </motion.svg>
  );
}
