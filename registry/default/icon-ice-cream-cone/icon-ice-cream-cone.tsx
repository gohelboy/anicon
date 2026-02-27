"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconIceCreamConeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const wobbleVariants: Variants = {
  rest: { rotate: 0 },
  hover: {
    rotate: [0, -8, 8, -5, 0],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const meltVariants: Variants = {
  rest: { y: 0 },
  hover: {
    y: [0, 1, 0],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconIceCreamCone({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconIceCreamConeProps) {
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
      variants={wobbleVariants}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      style={{ overflow: "visible", originX: "12px", originY: "22px" }}
      {...rest}
    >
      <path d="m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11" />
      <motion.path d="M17 7A5 5 0 0 0 7 7" variants={meltVariants} />
      <motion.path d="M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4" variants={meltVariants} />
    </motion.svg>
  );
}
