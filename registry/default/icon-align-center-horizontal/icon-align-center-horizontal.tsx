"use client";

import { motion } from "framer-motion";

export interface IconAlignCenterHorizontalProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
}

const groupVariants = {
  rest: { x: 0, y: 0 },
  hover: { x: 1, y: 0 },
  tap: { x: -1, y: 0 },
};

export function IconAlignCenterHorizontal({ size = 24, className, ...props }: IconAlignCenterHorizontalProps) {
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
        <path d="M2 12h20" key="9i4pu4" />
        <path d="M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4" key="11f1s0" />
        <path d="M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4" key="t14dx9" />
        <path d="M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1" key="1w07xs" />
        <path d="M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1" key="1apec2" />
      </motion.g>
    </motion.svg>
  );
}
