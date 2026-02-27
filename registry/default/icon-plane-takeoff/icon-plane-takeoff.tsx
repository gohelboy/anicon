"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconPlaneTakeoffProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const takeoffVariants: Variants = {
  rest: { y: 0, x: 0 },
  hover: {
    y: [0, -3, -6],
    x: [0, 1, 3],
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
  tap: {
    y: -8,
    x: 4,
    transition: { duration: 0.3 },
  },
};

export function IconPlaneTakeoff({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconPlaneTakeoffProps) {
  const { onAnimationStart, onAnimationEnd, onDragStart, onDrag, onDragEnd, ...rest } = props;
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
      style={{ overflow: "visible" }}
      {...rest}
    >
      <path d="M2 22h20" />
      <motion.path
        d="M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z"
        variants={takeoffVariants}
      />
    </motion.svg>
  );
}
