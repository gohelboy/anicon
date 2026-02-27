"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconLampProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const shadeVariants: Variants = {
  rest: { rotate: 0 },
  hover: {
    rotate: [0, -5, 5, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const glowVariants: Variants = {
  rest: { opacity: 1 },
  hover: {
    opacity: [1, 0.4, 1],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconLamp({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconLampProps) {
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
      <motion.path
        d="M8 2h8l4 10H4L8 2Z"
        variants={shadeVariants}
        style={{ originX: "12px", originY: "2px" }}
      />
      <motion.path d="M12 12v6" variants={glowVariants} />
      <path d="M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H8Z" />
    </motion.svg>
  );
}
