"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconMenuListProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
  /** Stroke width. Default 2 */
  strokeWidth?: number;
}

const lineVariants = {
  rest: (index: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: index * 0.05 },
  }),
  hover: (index: number) => ({
    x: 2,
    opacity: 0.95,
    transition: { delay: index * 0.05, type: "spring", stiffness: 500 },
  }),
  tap: { scaleX: 0.95 },
};

const bulletVariants = {
  rest: (index: number) => ({ scale: 1 }),
  hover: (index: number) => ({
    scale: 1.15,
    transition: { delay: index * 0.05, type: "spring", stiffness: 500 },
  }),
  tap: { scale: 0.9 },
};

export function IconMenuList({ size = 24, strokeWidth = 2, className, ...props }: IconMenuListProps) {
  const {
    onAnimationStart,
    onAnimationEnd,
    onDragStart,
    onDrag,
    onDragEnd,
    ...rest
  } = props;
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
      {...rest}
    >
      <motion.circle cx="5" cy="7" r="1.5" variants={bulletVariants} custom={0} />
      <motion.circle cx="5" cy="12" r="1.5" variants={bulletVariants} custom={1} />
      <motion.circle cx="5" cy="17" r="1.5" variants={bulletVariants} custom={2} />
      <motion.line x1="9" y1="7" x2="19" y2="7" variants={lineVariants} custom={0} />
      <motion.line x1="9" y1="12" x2="19" y2="12" variants={lineVariants} custom={1} />
      <motion.line x1="9" y1="17" x2="19" y2="17" variants={lineVariants} custom={2} />
    </motion.svg>
  );
}
