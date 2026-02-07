"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconAreaChartProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
  /** Stroke width. Default 2 */
  strokeWidth?: number;
}

const areaVariants = {
  rest: { scaleY: 1 },
  hover: { scaleY: 1.05 },
  tap: { scaleY: 0.95 },
};

const axisVariants = {
  rest: { opacity: 0.8 },
  hover: { opacity: 1 },
  tap: { opacity: 0.6 },
};

export function IconAreaChart({ size = 24, strokeWidth = 2, className, ...props }: IconAreaChartProps) {
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
      <motion.path d="M3 3v16a2 2 0 0 0 2 2h16" variants={axisVariants} />
      <motion.path
        d="M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z"
        variants={areaVariants}
        style={{ originX: "50%", originY: "80%" }}
      />
    </motion.svg>
  );
}
