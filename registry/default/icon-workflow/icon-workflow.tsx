"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconWorkflowProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const pathVariants: Variants = {
  rest: { pathLength: 1 },
  hover: {
    pathLength: [1, 0, 1],
    transition: {
      duration: 1.2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 0.5,
    },
  },
};

const rectVariants: Variants = {
  rest: { scale: 1 },
  hover: (i: number) => ({
    scale: [1, 1.1, 1],
    transition: {
      duration: 0.6,
      delay: i * 0.3,
      ease: "easeInOut",
    },
  }),
};

export function IconWorkflow({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconWorkflowProps) {
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
      <motion.rect width="8" height="8" x="3" y="3" rx="2" variants={rectVariants} custom={0} />
      <motion.path d="M7 11v4a2 2 0 0 0 2 2h4" variants={pathVariants} />
      <motion.rect width="8" height="8" x="13" y="13" rx="2" variants={rectVariants} custom={1} />
    </motion.svg>
  );
}
