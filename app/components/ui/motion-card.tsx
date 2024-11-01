'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface MotionCardProps {
  children: React.ReactNode
  className?: string
}

export function MotionCard({ children, className }: MotionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn("bg-white p-8 rounded-lg shadow-xl w-full max-w-md", className)}
    >
      {children}
    </motion.div>
  )
}