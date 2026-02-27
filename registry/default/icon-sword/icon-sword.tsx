"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconSwordProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const bladeVariants: Variants = {
  rest: { rotate: 0 },
  hover: {
    rotate: [0, -15, 0],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatDelay: 0.4,
      ease: "easeInOut",
    },
  },
};

const guardVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatDelay: 0.4,
      ease: "easeInOut",
    },
  },
};

export function IconSword({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconSwordProps) {
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
      variants={bladeVariants}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      style={{ overflow: "visible", originX: "5px", originY: "19px" }}
      {...rest}
    >
      <path d="M9.5 17.5 21 6V3h-3L6.5 14.5" />
      <motion.path d="m11 19-6-6" variants={guardVariants} />
      <path d="m5 21-2-2" />
      <path d="m8 16-4 4" />
    </motion.svg>
  );
}
