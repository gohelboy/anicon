"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconTrashProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
  /** Stroke width. Default 2 */
  strokeWidth?: number;
}

const lidVariants: Variants = {
  rest: { y: 0, rotate: 0 },
  hover: {
    y: -5,
    rotate: -20,
    transition: { type: "spring", stiffness: 400, damping: 17 },
  },
  tap: {
    y: -7,
    rotate: -30,
    transition: { type: "spring", stiffness: 400, damping: 17 },
  },
};

export function IconTrash({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconTrashProps) {
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
      viewBox="-2 -6 28 32"
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
      {/* Trash body - static */}
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M10 11v6" />
      <path d="M14 11v6" />
      
      {/* Lid/cap - animated (opens up and tilts) */}
      <motion.g
        variants={lidVariants}
        style={{ originX: "30%", originY: "100%" }}
      >
        {/* Lid horizontal line */}
        <path d="M3 6h18" />
        {/* Lid handle */}
        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
      </motion.g>
    </motion.svg>
  );
}
