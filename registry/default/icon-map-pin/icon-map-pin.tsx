"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconMapPinProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
}

const pinVariants = {
  rest: { y: 0 },
  hover: { y: -2 },
  tap: { scale: 0.95 },
};

const pulseVariants = {
  rest: { scale: 1, opacity: 0.3 },
  hover: { scale: 1.4, opacity: 0 },
  tap: { scale: 0.8, opacity: 0.5 },
};

export function IconMapPin({ size = 24, className, ...props }: IconMapPinProps) {
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
      transition={{ type: "spring", stiffness: 360, damping: 18 }}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      {...rest}
    >
      <motion.path
        d="M12 22s7-7.5 7-12a7 7 0 1 0-14 0c0 4.5 7 12 7 12z"
        variants={pinVariants}
      />
      <motion.circle cx="12" cy="10" r="2.5" variants={pinVariants} />
      <motion.circle cx="12" cy="21" r="1.5" variants={pulseVariants} />
    </motion.svg>
  );
}
