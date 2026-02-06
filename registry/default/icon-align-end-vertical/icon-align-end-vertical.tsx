"use client";

import { motion } from "framer-motion";

export interface IconAlignEndVerticalProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
}

const groupVariants = {
  rest: { x: 0, y: 0 },
  hover: { x: 0, y: 1 },
  tap: { x: 0, y: -1 },
};

export function IconAlignEndVertical({ size = 24, className, ...props }: IconAlignEndVerticalProps) {
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
        <rect width="16" height="6" x="2" y="4" rx="2" key="10wcwx" />
        <rect width="9" height="6" x="9" y="14" rx="2" key="4p5bwg" />
        <path d="M22 22V2" key="12ipfv" />
      </motion.g>
    </motion.svg>
  );
}
