"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconShoppingCartProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

// Cart rolls forward like pushing a shopping cart
const cartVariants: Variants = {
  rest: { x: 0, rotate: 0 },
  hover: {
    x: 4,
    rotate: 2,
    transition: { type: "spring", stiffness: 400, damping: 17 },
  },
  tap: {
    x: 6,
    rotate: 3,
    transition: { type: "spring", stiffness: 400, damping: 17 },
  },
};

// Wheels spin
const wheelVariants: Variants = {
  rest: { rotate: 0 },
  hover: {
    rotate: 360,
    transition: { duration: 0.5, ease: "linear" },
  },
};

export function IconShoppingCart({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconShoppingCartProps) {
  const { onAnimationStart, onAnimationEnd, onDragStart, onDrag, onDragEnd, ...rest } = props;
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="-2 -2 28 28"
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
      {/* Cart body - rolls forward */}
      <motion.g variants={cartVariants}>
        <path d="M2 3h2l3.6 7.59L6.97 12H19a1 1 0 0 0 .97-1.27L19 4H6" />
        <path d="M6.15 12H19l-1.5 5.5a1 1 0 0 1-.97.75H8.62a1 1 0 0 1-.97-.75L6.15 12Z" />
      </motion.g>
      
      {/* Wheels - spin */}
      <motion.circle cx="9" cy="21" r="1" variants={wheelVariants} />
      <motion.circle cx="17" cy="21" r="1" variants={wheelVariants} />
    </motion.svg>
  );
}
