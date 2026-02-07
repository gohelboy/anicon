"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconDownloadProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
  /** Stroke width. Default 2 */
  strokeWidth?: number;
}

const arrowVariants: Variants = {
  rest: { y: 0 },
  hover: {
    y: 3,
    transition: { type: "spring", stiffness: 400, damping: 17 },
  },
  tap: {
    y: 5,
    transition: { type: "spring", stiffness: 400, damping: 17 },
  },
};

export function IconDownload({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconDownloadProps) {
  const {
    onAnimationStart,
    onAnimationEnd,
    onDragStart,
    onDrag,
    onDragEnd,
    ...rest
  } = props;
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={prefersReducedMotion ? false : "rest"}
      whileHover={prefersReducedMotion ? undefined : "hover"}
      whileTap={prefersReducedMotion ? undefined : "tap"}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      {...rest}
    >
      {/* Download tray - static */}
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      {/* Arrow - animated */}
      <motion.g variants={arrowVariants}>
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" x2="12" y1="15" y2="3" />
      </motion.g>
    </motion.svg>
  );
}
