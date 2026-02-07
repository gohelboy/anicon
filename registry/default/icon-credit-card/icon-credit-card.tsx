"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconCreditCardProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const cardVariants: Variants = {
  rest: { x: 0, scale: 1 },
  hover: {
    x: 2,
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 17,
    },
  },
};

const chipVariants: Variants = {
  rest: { opacity: 0.5 },
  hover: {
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconCreditCard({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconCreditCardProps) {
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
      variants={cardVariants}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      style={{ overflow: "visible" }}
      {...restOptions}
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
      {/* Chip detail */}
      <motion.rect 
        x="5" 
        y="14" 
        width="4" 
        height="3" 
        rx="0.5" 
        fill="currentColor"
        variants={chipVariants}
        stroke="none"
      />
    </motion.svg>
  );
}
