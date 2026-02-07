"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconAlignVerticalDistributeCenterProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
  /** Stroke width. Default 2 */
  strokeWidth?: number;
}

const topVariants = {
  rest: { y: 0 },
  hover: { y: -1.5 },
  tap: { y: 1 },
};

const bottomVariants = {
  rest: { y: 0 },
  hover: { y: 1.5 },
  tap: { y: -1 },
};

const guideVariants = {
  rest: { opacity: 0.6 },
  hover: { opacity: 1 },
  tap: { opacity: 0.5 },
};

export function IconAlignVerticalDistributeCenter({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconAlignVerticalDistributeCenterProps) {
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
      <motion.path d="M22 17h-3" variants={guideVariants} />
      <motion.path d="M22 7h-5" variants={guideVariants} />
      <motion.path d="M5 17H2" variants={guideVariants} />
      <motion.path d="M7 7H2" variants={guideVariants} />
      <motion.rect width="14" height="6" x="5" y="14" rx="2" variants={bottomVariants} />
      <motion.rect width="10" height="6" x="7" y="4" rx="2" variants={topVariants} />
    </motion.svg>
  );
}
