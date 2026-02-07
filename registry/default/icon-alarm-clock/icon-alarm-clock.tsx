"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconAlarmClockProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
}

const bellVariants = {
  rest: { rotate: 0 },
  hover: { rotate: -10 },
  tap: { rotate: 10, scale: 0.96 },
};

const handsVariants = {
  rest: { rotate: 0 },
  hover: { rotate: 45 },
  tap: { rotate: -20 },
};

const ringVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.03 },
  tap: { scale: 0.97 },
};

export function IconAlarmClock({
  size = 24,
  className,
  ...props
}: IconAlarmClockProps) {
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
      transition={{ type: "spring", stiffness: 360, damping: 18 }}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      {...rest}
    >
      <motion.g variants={bellVariants} style={{ originX: "50%", originY: "20%" }}>
        <motion.circle cx="12" cy="13" r="8" variants={ringVariants} />
        <path d="M5 3 2 6" />
        <path d="m22 6-3-3" />
      </motion.g>
      <motion.g variants={handsVariants} style={{ originX: "50%", originY: "54%" }}>
        <path d="M12 9v4l2 2" />
      </motion.g>
      <path d="M6.38 18.7 4 21" />
      <path d="M17.64 18.67 20 21" />
    </motion.svg>
  );
}
