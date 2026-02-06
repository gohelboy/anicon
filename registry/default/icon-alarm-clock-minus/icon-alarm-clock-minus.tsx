"use client";

import { motion } from "framer-motion";

export interface IconAlarmClockMinusProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
}

const bellVariants = {
  rest: { rotate: 0 },
  hover: { rotate: -6 },
  tap: { rotate: 6, scale: 0.98 },
};

const minusVariants = {
  rest: { scaleX: 1 },
  hover: { scaleX: 1.2, y: -0.5 },
  tap: { scaleX: 0.9, y: 0.5 },
};

export function IconAlarmClockMinus({
  size = 24,
  className,
  ...props
}: IconAlarmClockMinusProps) {
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
        <circle cx="12" cy="13" r="8" />
        <path d="M5 3 2 6" />
        <path d="m22 6-3-3" />
      </motion.g>
      <path d="M6.38 18.7 4 21" />
      <path d="M17.64 18.67 20 21" />
      <motion.path d="M9 13h6" variants={minusVariants} />
    </motion.svg>
  );
}
