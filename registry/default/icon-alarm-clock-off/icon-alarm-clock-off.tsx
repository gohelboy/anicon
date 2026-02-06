"use client";

import { motion } from "framer-motion";

export interface IconAlarmClockOffProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
}

const slashVariants = {
  rest: { pathLength: 1 },
  hover: { pathLength: 0.7 },
  tap: { pathLength: 0.9 },
};

const ringVariants = {
  rest: { scale: 1 },
  hover: { scale: 0.98 },
  tap: { scale: 0.96 },
};

export function IconAlarmClockOff({
  size = 24,
  className,
  ...props
}: IconAlarmClockOffProps) {
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
      <motion.path d="M6.87 6.87a8 8 0 1 0 11.26 11.26" variants={ringVariants} />
      <motion.path d="M19.9 14.25a8 8 0 0 0-9.15-9.15" variants={ringVariants} />
      <path d="m22 6-3-3" />
      <path d="M6.26 18.67 4 21" />
      <motion.path d="m2 2 20 20" variants={slashVariants} />
      <path d="M4 4 2 6" />
    </motion.svg>
  );
}
