"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconHomeProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
}

const roofVariants = {
  rest: { y: 0, rotate: 0 },
  hover: { y: -1.5, rotate: -2 },
  tap: { scale: 0.95 },
};

const doorVariants = {
  rest: { scaleY: 1 },
  hover: { scaleY: 0.85 },
  tap: { scale: 0.9 },
};

export function IconHome({ size = 24, className, ...props }: IconHomeProps) {
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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={prefersReducedMotion ? false : "rest"}
      whileHover={prefersReducedMotion ? undefined : "hover"}
      whileTap={prefersReducedMotion ? undefined : "tap"}
      transition={{ type: "spring", stiffness: 420, damping: 18 }}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      {...rest}
    >
      <motion.path
        d="M3 11 12 4 21 11"
        variants={roofVariants}
      />
      <motion.path d="M5 10v10h14V10" variants={roofVariants} />
      <motion.path
        d="M10 20v-6h4v6"
        variants={doorVariants}
        style={{ originY: 1, originX: 0.5 }}
      />
    </motion.svg>
  );
}
