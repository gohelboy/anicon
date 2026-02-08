"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconSunMediumProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const coreVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: [1, 1.1, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const rayVariants: Variants = {
  rest: { opacity: 1, scale: 1 },
  hover: {
    opacity: [1, 0.7, 1],
    scale: [1, 1.1, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconSunMedium({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconSunMediumProps) {
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
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      style={{ overflow: "visible" }}
      {...restOptions}
    >
      <motion.circle 
        cx="12" cy="12" r="4" 
        variants={coreVariants}
      />
      <motion.g variants={rayVariants}>
        <path d="M12 3v1" />
        <path d="M12 20v1" />
        <path d="M3 12h1" />
        <path d="M20 12h1" />
        <path d="m18.364 5.636-.707.707" />
        <path d="m6.343 17.657-.707.707" />
        <path d="m5.636 5.636.707.707" />
        <path d="m17.657 17.657.707.707" />
      </motion.g>
    </motion.svg>
  );
}
