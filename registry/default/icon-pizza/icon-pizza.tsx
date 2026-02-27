"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconPizzaProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const sliceVariants: Variants = {
  rest: { rotate: 0 },
  hover: {
    rotate: [0, -5, 3, 0],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const toppingVariants: Variants = {
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

export function IconPizza({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconPizzaProps) {
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
      variants={sliceVariants}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      style={{ overflow: "visible", originX: "3px", originY: "21px" }}
      {...rest}
    >
      <path d="M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z" />
      <path d="M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12" />
      <path d="M18.8 9.3a1 1 0 0 0 2.1 7.7" />
      <motion.path d="m12 14-1 1" variants={toppingVariants} />
      <motion.path d="m13.75 18.25-1.25 1.42" variants={toppingVariants} />
    </motion.svg>
  );
}
