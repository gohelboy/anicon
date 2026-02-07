"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconAmbulanceProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
  /** Stroke width. Default 2 */
  strokeWidth?: number;
}

const bodyVariants = {
  rest: { y: 0 },
  hover: { y: -1 },
  tap: { y: 1 },
};

const plusVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.15 },
  tap: { scale: 0.9 },
};

const wheelVariants = {
  rest: { rotate: 0 },
  hover: { rotate: 20 },
  tap: { rotate: -20 },
};

export function IconAmbulance({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconAmbulanceProps) {
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
      transition={{ type: "spring", stiffness: 320, damping: 18 }}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      {...rest}
    >
      <motion.g variants={bodyVariants}>
        <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
        <path d="M9 18h6" />
        <motion.g variants={plusVariants} style={{ originX: "50%", originY: "50%" }}>
          <path d="M10 10H6" />
          <path d="M8 8v4" />
        </motion.g>
      </motion.g>
      <motion.circle cx="7" cy="18" r="2" variants={wheelVariants} style={{ originX: "50%", originY: "50%" }} />
      <motion.circle cx="17" cy="18" r="2" variants={wheelVariants} style={{ originX: "50%", originY: "50%" }} />
    </motion.svg>
  );
}
