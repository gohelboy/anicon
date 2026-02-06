"use client";

import { motion } from "framer-motion";

export interface IconMenuBentoProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
}

const tileVariants = {
  rest: (index: number) => ({ scale: 1, transition: { delay: index * 0.04 } }),
  hover: (index: number) => ({
    scale: 1.12,
    transition: { delay: index * 0.04, type: "spring", stiffness: 420 },
  }),
  tap: { scale: 0.92 },
};

const tiles = [
  { x: 5, y: 5, w: 6, h: 6 },
  { x: 13, y: 5, w: 6, h: 4 },
  { x: 13, y: 11, w: 6, h: 6 },
  { x: 5, y: 13, w: 6, h: 6 },
];

export function IconMenuBento({ size = 24, className, ...props }: IconMenuBentoProps) {
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
      fill="currentColor"
      stroke="none"
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      {...rest}
    >
      {tiles.map((tile, index) => (
        <motion.rect
          key={`${tile.x}-${tile.y}`}
          x={tile.x}
          y={tile.y}
          width={tile.w}
          height={tile.h}
          rx="1.2"
          variants={tileVariants}
          custom={index}
        />
      ))}
    </motion.svg>
  );
}
