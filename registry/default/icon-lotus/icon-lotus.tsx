"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconLotusProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const petalVariants: Variants = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: [0.95, 1.08, 1],
    y: [1, -1, 0],
    transition: { duration: 0.9, ease: "easeInOut" },
  },
};

export function IconLotus({ size = 24, strokeWidth = 2, className, ...props }: IconLotusProps) {
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
      <motion.g variants={petalVariants} style={{ originX: "12px", originY: "15px" }}>
        <path d="M12 7c1.5 2.2 1.5 4.8 0 7-1.5-2.2-1.5-4.8 0-7Z" />
        <path d="M9 9c1.9 1.3 2.9 3.2 3 5.4-2.2-.3-3.9-1.5-5-3.4.5-1 1.1-1.6 2-2Z" />
        <path d="M15 9c-1.9 1.3-2.9 3.2-3 5.4 2.2-.3 3.9-1.5 5-3.4-.5-1-1.1-1.6-2-2Z" />
      </motion.g>
      <path d="M6 18c2.5-1.2 9.5-1.2 12 0" />
    </motion.svg>
  );
}
