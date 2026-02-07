"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconMenuTabsProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
  /** Stroke width. Default 2 */
  strokeWidth?: number;
}

const tabVariants = {
  rest: (index: number) => ({
    y: 0,
    transition: { delay: index * 0.04 },
  }),
  hover: (index: number) => ({
    y: index === 0 ? -1.5 : 1,
    transition: { delay: index * 0.04, type: "spring", stiffness: 480 },
  }),
  tap: { scale: 0.95 },
};

const tabs = [
  { x: 4, y: 6, w: 6, h: 3 },
  { x: 4, y: 11, w: 9, h: 3 },
  { x: 4, y: 16, w: 12, h: 3 },
];

export function IconMenuTabs({ size = 24, strokeWidth = 2, className, ...props }: IconMenuTabsProps) {
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
      fill="currentColor"
      stroke="none"
      initial={prefersReducedMotion ? false : "rest"}
      whileHover={prefersReducedMotion ? undefined : "hover"}
      whileTap={prefersReducedMotion ? undefined : "tap"}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      {...rest}
    >
      {tabs.map((tab, index) => (
        <motion.rect
          key={`${tab.x}-${tab.y}`}
          x={tab.x}
          y={tab.y}
          width={tab.w}
          height={tab.h}
          rx="1.2"
          variants={tabVariants}
          custom={index}
        />
      ))}
    </motion.svg>
  );
}
