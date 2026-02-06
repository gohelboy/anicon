"use client";

import { motion } from "framer-motion";

export interface IconCompassProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
}

const ringVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.04 },
  tap: { scale: 0.96 },
};

const needleVariants = {
  rest: { rotate: 0 },
  hover: { rotate: 35 },
  tap: { rotate: -15, scale: 0.95 },
};

export function IconCompass({
  size = 24,
  className,
  ...props
}: IconCompassProps) {
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
      transition={{ type: "spring", stiffness: 320, damping: 16 }}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      {...rest}
    >
      <motion.circle cx="12" cy="12" r="9" variants={ringVariants} />
      <motion.g variants={needleVariants} style={{ originX: "50%", originY: "50%" }}>
        <path d="m12 7 3 6-6 3 3-9z" fill="currentColor" stroke="none" />
        <path d="m12 7 3 6-6 3" />
      </motion.g>
      <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
    </motion.svg>
  );
}
