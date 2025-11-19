'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card'
import { ReactNode } from 'react'
import { fadeIn, hover, tap } from '@/components/motion/variants'

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function AnimatedCard({ children, className, delay = 0 }: AnimatedCardProps) {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.3, delay }}
      whileHover={hover}
      whileTap={tap}
    >
      <Card className={className}>
        {children}
      </Card>
    </motion.div>
  )
}

export function AnimatedCardHeader({ children, className }: { children: ReactNode; className?: string }) {
  return <CardHeader className={className}>{children}</CardHeader>
}

export function AnimatedCardTitle({ children, className }: { children: ReactNode; className?: string }) {
  return <CardTitle className={className}>{children}</CardTitle>
}

export function AnimatedCardDescription({ children, className }: { children: ReactNode; className?: string }) {
  return <CardDescription className={className}>{children}</CardDescription>
}

export function AnimatedCardContent({ children, className }: { children: ReactNode; className?: string }) {
  return <CardContent className={className}>{children}</CardContent>
}
