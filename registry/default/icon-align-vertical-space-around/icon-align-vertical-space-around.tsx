"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconAlignVerticalSpaceAroundProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
  /** Stroke width. Default 2 */
  strokeWidth?: number;
}

const blockVariants = {
  rest: { scaleY: 1 },
  hover: { scaleY: 0.9 },
  tap: { scaleY: 1.05 },
};

const guideVariants = {
  rest: { opacity: 0.6 },
  hover: { opacity: 1 },
  tap: { opacity: 0.5 },
};

export function IconAlignVerticalSpaceAround({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconAlignVerticalSpaceAroundProps) {
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
      <motion.rect width="10" height="6" x="7" y="9" rx="2" variants={blockVariants} />
      <motion.path d="M22 4H2" variants={guideVariants} />
      <motion.path d="M22 20H2" variants={guideVariants} />
    </motion.svg>
  );
}
