"use client";

import { motion } from "framer-motion";

export interface IconAlarmClockCheckProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
}

const bellVariants = {
  rest: { rotate: 0 },
  hover: { rotate: -8 },
  tap: { rotate: 8, scale: 0.97 },
};

const ringVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.04 },
  tap: { scale: 0.98 },
};

const checkVariants = {
  rest: { pathLength: 1 },
  hover: { pathLength: 0.75 },
  tap: { pathLength: 0.9 },
};

export function IconAlarmClockCheck({
  size = 24,
  className,
  ...props
}: IconAlarmClockCheckProps) {
  const {
    onAnimationStart,
    onAnimationEnd,
    onDragStart,
    onDrag,
    onDragEnd,
    ...rest
  } = props;
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
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      transition={{ type: "spring", stiffness: 360, damping: 18 }}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      {...rest}
    >
      <motion.g variants={bellVariants} style={{ originX: "50%", originY: "20%" }}>
        <motion.circle cx="12" cy="13" r="8" variants={ringVariants} />
        <path d="M5 3 2 6" />
        <path d="m22 6-3-3" />
      </motion.g>
      <path d="M6.38 18.7 4 21" />
      <path d="M17.64 18.67 20 21" />
      <motion.path d="m9 13 2 2 4-4" variants={checkVariants} />
    </motion.svg>
  );
}
