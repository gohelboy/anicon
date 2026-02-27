"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconPianoProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const keyVariants = (delay: number): Variants => ({
  rest: { scaleY: 1 },
  hover: {
    scaleY: [1, 0.85, 1],
    transition: {
      duration: 0.3,
      delay,
      repeat: Infinity,
      repeatDelay: 0.5,
      ease: "easeInOut",
    },
  },
});

const bodyVariants: Variants = {
  rest: { y: 0 },
  hover: {
    y: [0, -1, 0],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconPiano({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconPianoProps) {
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
      variants={bodyVariants}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      style={{ overflow: "visible" }}
      {...rest}
    >
      <path d="M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8" />
      <path d="M2 14h20" />
      <motion.path d="M6 14v4" variants={keyVariants(0)} style={{ originY: "14px" }} />
      <motion.path d="M10 14v4" variants={keyVariants(0.1)} style={{ originY: "14px" }} />
      <motion.path d="M14 14v4" variants={keyVariants(0.2)} style={{ originY: "14px" }} />
      <motion.path d="M18 14v4" variants={keyVariants(0.3)} style={{ originY: "14px" }} />
    </motion.svg>
  );
}
