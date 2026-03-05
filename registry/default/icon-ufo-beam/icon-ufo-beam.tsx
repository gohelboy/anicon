"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconUfoBeamProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const ufoVariants: Variants = {
  rest: { y: 0 },
  hover: {
    y: [0, -2, 0],
    transition: { duration: 1.2, repeat: Infinity, ease: "easeInOut" },
  },
};

const beamVariants: Variants = {
  rest: { opacity: 0.5, scaleY: 0.85 },
  hover: {
    opacity: [0.4, 0.9, 0.4],
    scaleY: [0.8, 1.15, 0.8],
    transition: { duration: 0.9, repeat: Infinity, ease: "easeInOut" },
  },
};

export function IconUfoBeam({ size = 24, strokeWidth = 2, className, ...props }: IconUfoBeamProps) {
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
      <motion.path d="M8 10a4 2 0 0 1 8 0" variants={ufoVariants} />
      <motion.path d="M5 10h14" variants={ufoVariants} />
      <path d="M7 10c0 2 2 3 5 3s5-1 5-3" />
      <motion.path d="M12 13v6" variants={beamVariants} style={{ originX: "12px", originY: "13px" }} />
      <motion.path d="M10 19h4" variants={beamVariants} />
    </motion.svg>
  );
}
