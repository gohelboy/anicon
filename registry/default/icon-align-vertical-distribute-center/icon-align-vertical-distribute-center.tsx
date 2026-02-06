"use client";

import { motion } from "framer-motion";

export interface IconAlignVerticalDistributeCenterProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
}

const groupVariants = {
  rest: { x: 0, y: 0 },
  hover: { x: 0, y: -1 },
  tap: { x: 0, y: 1 },
};

export function IconAlignVerticalDistributeCenter({ size = 24, className, ...props }: IconAlignVerticalDistributeCenterProps) {
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
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      transition={{ type: "spring", stiffness: 360, damping: 18 }}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      {...rest}
    >
      <motion.g variants={groupVariants}>
        <path d="M22 17h-3" key="1lwga1" />
        <path d="M22 7h-5" key="o2endc" />
        <path d="M5 17H2" key="1gx9xc" />
        <path d="M7 7H2" key="6bq26l" />
        <rect x="5" y="14" width="14" height="6" rx="2" key="1qrzuf" />
        <rect x="7" y="4" width="10" height="6" rx="2" key="we8e9z" />
      </motion.g>
    </motion.svg>
  );
}
