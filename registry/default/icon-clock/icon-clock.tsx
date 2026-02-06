"use client";

import { motion } from "framer-motion";

export interface IconClockProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
}

const ringVariants = {
  rest: { scale: 1, opacity: 1 },
  hover: { scale: 1.04, opacity: 0.95 },
  tap: { scale: 0.96 },
};

const minuteHandVariants = {
  rest: { rotate: 0 },
  hover: { rotate: 40 },
  tap: { rotate: -20 },
};

const hourHandVariants = {
  rest: { rotate: 0 },
  hover: { rotate: 20 },
  tap: { rotate: -10 },
};

export function IconClock({ size = 24, className, ...props }: IconClockProps) {
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
      <motion.circle cx="12" cy="12" r="9" variants={ringVariants} />
      <motion.g
        variants={hourHandVariants}
        style={{ originX: "50%", originY: "50%" }}
      >
        <path d="M12 12V9" />
      </motion.g>
      <motion.g
        variants={minuteHandVariants}
        style={{ originX: "50%", originY: "50%" }}
      >
        <path d="M12 12L15 13.5" />
      </motion.g>
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </motion.svg>
  );
}
