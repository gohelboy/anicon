"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconMartiniProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const swayVariants: Variants = {
  rest: { rotate: 0 },
  hover: {
    rotate: [0, 5, -5, 3, -3, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const liquidVariants: Variants = {
  rest: { rotate: 0 },
  hover: {
    rotate: [0, -3, 3, -2, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 0.1,
    },
  },
};

export function IconMartini({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconMartiniProps) {
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
      <motion.g variants={swayVariants} style={{ originX: "12px", originY: "22px" }}>
        <path d="M8 22h8" />
        <path d="M12 11v11" />
        <motion.path d="m19 3-7 8-7-8Z" variants={liquidVariants} style={{ originX: "12px", originY: "7px" }} />
      </motion.g>
    </motion.svg>
  );
}
