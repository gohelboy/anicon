"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconArchiveProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
  /** Stroke width. Default 2 */
  strokeWidth?: number;
}

const lidVariants = {
  rest: { y: 0 },
  hover: { y: -1.5 },
  tap: { y: 1 },
};

const boxVariants = {
  rest: { scaleY: 1 },
  hover: { scaleY: 1.02 },
  tap: { scaleY: 0.98 },
};

const handleVariants = {
  rest: { y: 0 },
  hover: { y: 1 },
  tap: { y: -1 },
};

export function IconArchive({ size = 24, strokeWidth = 2, className, ...props }: IconArchiveProps) {
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
      transition={{ type: "spring", stiffness: 320, damping: 18 }}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      {...rest}
    >
      <motion.rect width="20" height="5" x="2" y="3" rx="1" variants={lidVariants} />
      <motion.path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" variants={boxVariants} />
      <motion.path d="M10 12h4" variants={handleVariants} />
    </motion.svg>
  );
}
