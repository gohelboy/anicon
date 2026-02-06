"use client";

import { motion } from "framer-motion";

export interface IconAlignCenterVerticalProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
}

const groupVariants = {
  rest: { x: 0, y: 0 },
  hover: { x: 0, y: -1 },
  tap: { x: 0, y: 1 },
};

export function IconAlignCenterVertical({ size = 24, className, ...props }: IconAlignCenterVerticalProps) {
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
        <path d="M12 2v20" key="t6zp3m" />
        <path d="M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4" key="14d6g8" />
        <path d="M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4" key="1e2lrw" />
        <path d="M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1" key="1fkdwx" />
        <path d="M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1" key="1euafb" />
      </motion.g>
    </motion.svg>
  );
}
