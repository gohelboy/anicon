"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconAntennaProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
  /** Stroke width. Default 2 */
  strokeWidth?: number;
}

const beamVariants = {
  rest: { scaleX: 1 },
  hover: { scaleX: 1.08 },
  tap: { scaleX: 0.95 },
};

const legVariants = {
  rest: { y: 0 },
  hover: { y: -1 },
  tap: { y: 1 },
};

export function IconAntenna({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconAntennaProps) {
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
      <motion.path d="M4.5 7h15" variants={beamVariants} style={{ originX: "50%", originY: "50%" }} />
      <motion.path d="M2 12 7 2" variants={legVariants} />
      <motion.path d="m7 12 5-10" variants={legVariants} />
      <motion.path d="m12 12 5-10" variants={legVariants} />
      <motion.path d="m17 12 5-10" variants={legVariants} />
      <motion.path d="M12 16v6" variants={legVariants} />
    </motion.svg>
  );
}
