"use client";

import { motion } from "framer-motion";

export interface IconAlignCenterHorizontalProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
}

const guideVariants = {
  rest: { scaleX: 1 },
  hover: { scaleX: 1.08 },
  tap: { scaleX: 0.95 },
};

const leftVariants = {
  rest: { x: 0 },
  hover: { x: 1.5 },
  tap: { x: -1 },
};

const rightVariants = {
  rest: { x: 0 },
  hover: { x: -1.5 },
  tap: { x: 1 },
};

export function IconAlignCenterHorizontal({
  size = 24,
  className,
  ...props
}: IconAlignCenterHorizontalProps) {
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
      <motion.path
        d="M2 12h20"
        variants={guideVariants}
        style={{ originX: "50%", originY: "50%" }}
      />
      <motion.g variants={leftVariants}>
        <path d="M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4" />
        <path d="M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4" />
      </motion.g>
      <motion.g variants={rightVariants}>
        <path d="M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1" />
        <path d="M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1" />
      </motion.g>
    </motion.svg>
  );
}
