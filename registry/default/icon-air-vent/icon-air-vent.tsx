"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconAirVentProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
}

const ventVariants = {
  rest: { x: 0 },
  hover: { x: 1.5 },
  tap: { x: -1 },
};

const flowVariants = {
  rest: { y: 0 },
  hover: { y: 1 },
  tap: { y: -1 },
};

export function IconAirVent({ size = 24, className, ...props }: IconAirVentProps) {
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
      <path d="M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <motion.path d="M6 8h12" variants={ventVariants} />
      <motion.path
        d="M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12"
        variants={flowVariants}
      />
      <motion.path d="M6.6 15.6A2 2 0 1 0 10 17v-5" variants={flowVariants} />
    </motion.svg>
  );
}
