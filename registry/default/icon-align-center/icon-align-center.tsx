"use client";

import { motion } from "framer-motion";

export interface IconAlignCenterProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
}

const groupVariants = {
  rest: { x: 0, y: 0 },
  hover: { x: 0, y: -1 },
  tap: { x: 0, y: 1 },
};

export function IconAlignCenter({ size = 24, className, ...props }: IconAlignCenterProps) {
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
      <motion.g variants={groupVariants}>
        <path d="M17 12H7" key="16if0g" />
        <path d="M19 18H5" key="18s9l3" />
        <path d="M21 6H3" key="1jwq7v" />
      </motion.g>
    </motion.svg>
  );
}
