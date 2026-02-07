"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconMenuGridProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
}

const cellVariants = {
  rest: (index: number) => ({
    scale: 1,
    rotate: 0,
    transition: { delay: index * 0.04 },
  }),
  hover: (index: number) => ({
    scale: 1.15,
    rotate: index % 2 === 0 ? 6 : -6,
    transition: { delay: index * 0.04, type: "spring", stiffness: 420 },
  }),
  tap: { scale: 0.92 },
};

const cells = [
  { x: 6, y: 6 },
  { x: 12, y: 6 },
  { x: 18, y: 6 },
  { x: 6, y: 12 },
  { x: 12, y: 12 },
  { x: 18, y: 12 },
  { x: 6, y: 18 },
  { x: 12, y: 18 },
  { x: 18, y: 18 },
];

export function IconMenuGrid({ size = 24, className, ...props }: IconMenuGridProps) {
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
      fill="currentColor"
      stroke="none"
      initial={prefersReducedMotion ? false : "rest"}
      whileHover={prefersReducedMotion ? undefined : "hover"}
      whileTap={prefersReducedMotion ? undefined : "tap"}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      {...rest}
    >
      {cells.map((cell, index) => (
        <motion.rect
          key={`${cell.x}-${cell.y}`}
          x={cell.x - 1}
          y={cell.y - 1}
          width="2"
          height="2"
          rx="0.6"
          variants={cellVariants}
          custom={index}
        />
      ))}
    </motion.svg>
  );
}
