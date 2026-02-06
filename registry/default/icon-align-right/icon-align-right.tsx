"use client";

import { motion } from "framer-motion";

export interface IconAlignRightProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
}

const lineVariants = {
  rest: { x: 0, scaleX: 1 },
  hover: { x: 1.5, scaleX: 0.95 },
  tap: { x: -1, scaleX: 1.02 },
};

export function IconAlignRight({ size = 24, className, ...props }: IconAlignRightProps) {
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
      transition={{ type: "spring", stiffness: 320, damping: 18 }}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      {...rest}
    >
      <motion.path d="M21 6H3" variants={lineVariants} style={{ originX: 1, originY: "50%" }} />
      <motion.path d="M21 12H9" variants={lineVariants} style={{ originX: 1, originY: "50%" }} />
      <motion.path d="M21 18H7" variants={lineVariants} style={{ originX: 1, originY: "50%" }} />
    </motion.svg>
  );
}
