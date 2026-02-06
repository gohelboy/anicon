"use client";

import { motion } from "framer-motion";

export interface IconAlignHorizontalSpaceBetweenProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
}

const groupVariants = {
  rest: { x: 0, y: 0 },
  hover: { x: 1, y: 0 },
  tap: { x: -1, y: 0 },
};

export function IconAlignHorizontalSpaceBetween({ size = 24, className, ...props }: IconAlignHorizontalSpaceBetweenProps) {
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
        <rect width="6" height="14" x="3" y="5" rx="2" key="j77dae" />
        <rect width="6" height="10" x="15" y="7" rx="2" key="bq30hj" />
        <path d="M3 2v20" key="1d2pfg" />
        <path d="M21 2v20" key="p059bm" />
      </motion.g>
    </motion.svg>
  );
}
