'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface MotionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  gradient?: string
}

export function MotionButton({ children, className, gradient, ...props }: MotionButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "px-8 py-3 rounded-lg text-white font-semibold transition-all duration-200 shadow-sm hover:shadow-md",
        gradient && `bg-gradient-to-r ${gradient}`,
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  )
}