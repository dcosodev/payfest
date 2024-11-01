'use client'

import { MotionButton } from '@/app/components/ui/motion-button'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const creditOptions = [
  { amount: 50, color: 'from-[#B866FF] to-[#FF66C4]' },
  { amount: 100, color: 'from-[#3B82F6] to-[#2DD4BF]' },
  { amount: 200, color: 'from-[#22C55E] to-[#EAB308]' },
]

export default function Credits() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-center">
            Cargar Créditos
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {creditOptions.map((option) => (
            <MotionButton
              key={option.amount}
              gradient={option.color}
              className="w-full"
            >
              {option.amount} Créditos
            </MotionButton>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}