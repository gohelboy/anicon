"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconCampfireProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const flameVariants: Variants = {
  rest: { scaleY: 1, y: 0 },
  hover: {
    scaleY: [1, 1.2, 0.95, 1.1, 1],
    y: [0, -1, 0],
    transition: { duration: 0.9, repeat: Infinity, ease: "easeInOut" },
  },
};

export function IconCampfire({ size = 24, strokeWidth = 2, className, ...props }: IconCampfireProps) {
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
      <motion.path d="M12 6c2 2 2.8 4.6 0 7-2.8-2.4-2-5 0-7Z" variants={flameVariants} style={{ originX: "12px", originY: "11px" }} />
      <path d="M7 20 5 17" />
      <path d="M17 20 19 17" />
      <path d="M6 21h12" />
      <path d="M8 17h8" />
    </motion.svg>
  );
}
