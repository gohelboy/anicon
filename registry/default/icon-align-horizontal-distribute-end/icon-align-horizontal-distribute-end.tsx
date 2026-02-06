"use client";

import { motion } from "framer-motion";

export interface IconAlignHorizontalDistributeEndProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
}

const groupVariants = {
  rest: { x: 0, y: 0 },
  hover: { x: 1, y: 0 },
  tap: { x: -1, y: 0 },
};

export function IconAlignHorizontalDistributeEnd({ size = 24, className, ...props }: IconAlignHorizontalDistributeEndProps) {
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
        <rect width="6" height="14" x="4" y="5" rx="2" key="1wwnby" />
        <rect width="6" height="10" x="14" y="7" rx="2" key="1fe6j6" />
        <path d="M10 2v20" key="uyc634" />
        <path d="M20 2v20" key="1tx262" />
      </motion.g>
    </motion.svg>
  );
}
