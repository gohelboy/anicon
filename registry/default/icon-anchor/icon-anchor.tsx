"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconAnchorProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
  /** Stroke width. Default 2 */
  strokeWidth?: number;
}

const shankVariants = {
  rest: { y: 0 },
  hover: { y: 1.5 },
  tap: { y: -1 },
};

const ringVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.08 },
  tap: { scale: 0.95 },
};

const baseVariants = {
  rest: { scaleX: 1 },
  hover: { scaleX: 1.05 },
  tap: { scaleX: 0.95 },
};

export function IconAnchor({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconAnchorProps) {
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
      <motion.circle cx="12" cy="5" r="3" variants={ringVariants} style={{ originX: "50%", originY: "50%" }} />
      <motion.path d="M12 22V8" variants={shankVariants} />
      <motion.path d="M5 12H2a10 10 0 0 0 20 0h-3" variants={baseVariants} />
    </motion.svg>
  );
}
