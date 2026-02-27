"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconCookieProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const wobbleVariants: Variants = {
  rest: { rotate: 0, scale: 1 },
  hover: {
    rotate: [0, -5, 5, -3, 0],
    scale: [1, 1.05, 1],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      repeatDelay: 0.2,
      ease: "easeInOut",
    },
  },
};

const chipVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: [1, 1.3, 1],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconCookie({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconCookieProps) {
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
      style={{ overflow: "visible", originX: "12px", originY: "12px" }}
      {...rest}
    >
      <path d="M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10A10 10 0 0 1 2 12 10 10 0 0 1 12 2Z" />
      <motion.path d="M 7 8 L 7.01 8" variants={chipVariants} />
      <motion.path d="M 11 12 L 11.01 12" variants={chipVariants} />
      <motion.path d="M 16 10 L 16.01 10" variants={chipVariants} />
      <motion.path d="M 9 16 L 9.01 16" variants={chipVariants} />
      <motion.path d="M 15 15 L 15.01 15" variants={chipVariants} />
    </motion.svg>
  );
}
