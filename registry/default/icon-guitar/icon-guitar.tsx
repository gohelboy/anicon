"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconGuitarProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const strumVariants: Variants = {
  rest: { rotate: 0 },
  hover: {
    rotate: [0, -3, 3, -2, 1, 0],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatDelay: 0.5,
      ease: "easeInOut",
    },
  },
};

const vibrateVariants: Variants = {
  rest: { x: 0 },
  hover: {
    x: [0, -0.5, 0.5, -0.5, 0],
    transition: {
      duration: 0.15,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

export function IconGuitar({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconGuitarProps) {
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
      variants={strumVariants}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      style={{ overflow: "visible", originX: "20px", originY: "4px" }}
      {...rest}
    >
      <path d="M20.1 2.3a1 1 0 0 0-1.4 0l-1.114 1.114A2 2 0 0 0 17 4.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 17.828 7h1.344a2 2 0 0 0 1.414-.586L21.7 5.3a1 1 0 0 0 0-1.4z" />
      <path d="m11.9 12.1 4.514-4.514" />
      <motion.g variants={vibrateVariants}>
        <path d="m6 16 2 2" />
        <path d="M8.23 9.85A3 3 0 0 1 11 8a5 5 0 0 1 5 5 3 3 0 0 1-1.85 2.77l-.92.38A2 2 0 0 0 12 18a4 4 0 0 1-4 4 6 6 0 0 1-6-6 4 4 0 0 1 4-4 2 2 0 0 0 1.85-1.23z" />
      </motion.g>
    </motion.svg>
  );
}
