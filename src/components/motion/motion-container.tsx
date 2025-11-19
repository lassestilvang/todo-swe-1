'use client'

import { motion, TargetAndTransition, Transition } from 'framer-motion'
import { ReactNode } from 'react'

interface MotionContainerProps {
  children: ReactNode
  className?: string
  initial?: TargetAndTransition
  animate?: TargetAndTransition
  transition?: Transition
  whileHover?: TargetAndTransition
  whileTap?: TargetAndTransition
}

export function MotionContainer({
  children,
  className,
  initial = { opacity: 0, y: 20 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.3 },
  whileHover,
  whileTap,
}: MotionContainerProps) {
  return (
    <motion.div
      className={className}
      initial={initial}
      animate={animate}
      transition={transition}
      whileHover={whileHover}
      whileTap={whileTap}
    >
      {children}
    </motion.div>
  )
}
