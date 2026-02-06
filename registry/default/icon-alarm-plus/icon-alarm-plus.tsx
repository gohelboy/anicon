"use client";

import { motion } from "framer-motion";

export interface IconAlarmPlusProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
}

const bellVariants = {
  rest: { rotate: 0 },
  hover: { rotate: -6 },
  tap: { rotate: 6, scale: 0.98 },
};

const plusVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.08 },
  tap: { scale: 0.95 },
};

export function IconAlarmPlus({ size = 24, className, ...props }: IconAlarmPlusProps) {
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
      <motion.g variants={plusVariants} style={{ originX: "50%", originY: "54%" }}>
        <path d="M12 10v6" />
        <path d="M9 13h6" />
      </motion.g>
    </motion.svg>
  );
}
