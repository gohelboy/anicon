"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconAlertTriangleProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
}

const triangleVariants = {
  rest: { rotate: 0, scale: 1 },
  hover: { rotate: -2, scale: 1.04 },
  tap: { rotate: 2, scale: 0.96 },
};

const markVariants = {
  rest: { y: 0 },
  hover: { y: -1.5 },
  tap: { y: 1.5 },
};

const dotVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.25 },
  tap: { scale: 0.85 },
};

export function IconAlertTriangle({
  size = 24,
  className,
  ...props
}: IconAlertTriangleProps) {
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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={prefersReducedMotion ? false : "rest"}
      whileHover={prefersReducedMotion ? undefined : "hover"}
      whileTap={prefersReducedMotion ? undefined : "tap"}
      transition={{ type: "spring", stiffness: 320, damping: 16 }}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      {...rest}
    >
      <motion.path
        d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
        variants={triangleVariants}
        style={{ originX: "50%", originY: "60%" }}
      />
      <motion.path d="M12 9v4" variants={markVariants} />
      <motion.path d="M12 17h.01" variants={dotVariants} />
    </motion.svg>
  );
}
