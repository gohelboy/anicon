"use client";

import { motion } from "framer-motion";

export interface IconAlignLeftProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
}

const groupVariants = {
  rest: { x: 0, y: 0 },
  hover: { x: -1, y: 0 },
  tap: { x: 1, y: 0 },
};

export function IconAlignLeft({ size = 24, className, ...props }: IconAlignLeftProps) {
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
        <path d="M15 12H3" key="6jk70r" />
        <path d="M17 18H3" key="1amg6g" />
        <path d="M21 6H3" key="1jwq7v" />
      </motion.g>
    </motion.svg>
  );
}
