"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconShoppingBagProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const bagVariants: Variants = {
  rest: { rotate: 0 },
  hover: {
    rotate: [0, -5, 5, -3, 3, 0],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

export function IconShoppingBag({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconShoppingBagProps) {
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
      variants={bagVariants}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      style={{ overflow: "visible", originY: "2px" }}
      {...restOptions}
    >
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <line x1="3" x2="21" y1="6" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </motion.svg>
  );
}
