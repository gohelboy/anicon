"use client";

import { motion } from "framer-motion";

export interface IconAlignEndHorizontalProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
}

const groupVariants = {
  rest: { x: 0, y: 0 },
  hover: { x: 1, y: 0 },
  tap: { x: -1, y: 0 },
};

export function IconAlignEndHorizontal({ size = 24, className, ...props }: IconAlignEndHorizontalProps) {
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
        <rect width="6" height="16" x="4" y="2" rx="2" key="z5wdxg" />
        <rect width="6" height="9" x="14" y="9" rx="2" key="um7a8w" />
        <path d="M22 22H2" key="19qnx5" />
      </motion.g>
    </motion.svg>
  );
}
