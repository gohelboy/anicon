"use client";

import { motion } from "framer-motion";

export interface IconAlarmSmokeProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
}

const smokeVariants = {
  rest: { y: 0 },
  hover: { y: -1.5 },
  tap: { y: 1 },
};

const panelVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.02 },
  tap: { scale: 0.98 },
};

export function IconAlarmSmoke({ size = 24, className, ...props }: IconAlarmSmokeProps) {
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
      <motion.path d="M11 21c0-2.5 2-2.5 2-5" variants={smokeVariants} />
      <motion.path d="M16 21c0-2.5 2-2.5 2-5" variants={smokeVariants} />
      <motion.path
        d="m19 8-.8 3a1.25 1.25 0 0 1-1.2 1H7a1.25 1.25 0 0 1-1.2-1L5 8"
        variants={panelVariants}
      />
      <motion.path
        d="M21 3a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a1 1 0 0 1 1-1z"
        variants={panelVariants}
      />
      <motion.path d="M6 21c0-2.5 2-2.5 2-5" variants={smokeVariants} />
    </motion.svg>
  );
}
