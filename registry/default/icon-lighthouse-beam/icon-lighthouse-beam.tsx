"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconLighthouseBeamProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const beamVariants: Variants = {
  rest: { rotate: -12, opacity: 0.5 },
  hover: {
    rotate: [ -12, 16, -12 ],
    opacity: [0.5, 1, 0.5],
    transition: { duration: 1.4, repeat: Infinity, ease: "easeInOut" },
  },
};

const towerVariants: Variants = {
  rest: { y: 0 },
  hover: {
    y: [0, -1, 0],
    transition: { duration: 0.7, ease: "easeInOut" },
  },
};

export function IconLighthouseBeam({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconLighthouseBeamProps) {
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
      <motion.path
        d="M12 7h8"
        variants={beamVariants}
        style={{ originX: "12px", originY: "8px" }}
      />
      <motion.g variants={towerVariants}>
        <path d="M8 22h8" />
        <path d="M10 22 11 12h2l1 10" />
        <path d="M9 12h6" />
        <path d="M11 7h2v5h-2z" />
      </motion.g>
      <path d="M4 22h3" />
    </motion.svg>
  );
}
