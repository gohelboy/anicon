"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconAlignStartHorizontalProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
}

const blockVariants = {
  rest: { x: 0 },
  hover: { x: -1.5 },
  tap: { x: 1 },
};

const guideVariants = {
  rest: { opacity: 0.7 },
  hover: { opacity: 1 },
  tap: { opacity: 0.6 },
};

export function IconAlignStartHorizontal({ size = 24, className, ...props }: IconAlignStartHorizontalProps) {
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
      transition={{ type: "spring", stiffness: 320, damping: 18 }}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      {...rest}
    >
      <motion.rect width="6" height="16" x="4" y="6" rx="2" variants={blockVariants} />
      <motion.rect width="6" height="9" x="14" y="6" rx="2" variants={blockVariants} />
      <motion.path d="M22 2H2" variants={guideVariants} />
    </motion.svg>
  );
}
