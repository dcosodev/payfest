'use client'

import { useEffect, useState } from 'react'
import QRCode from 'qrcode.react'
import { MotionCard } from '@/app/components/ui/motion-card'

export default function QRPage() {
  const [balance, setBalance] = useState(0)
  const [qrValue, setQrValue] = useState('')

  useEffect(() => {
    setBalance(100)
    setQrValue('user123-' + Date.now())
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <MotionCard>
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Tu Tarjeta Virtual
        </h2>
        <div className="flex justify-center mb-6">
          <QRCode value={qrValue} size={200} />
        </div>
        <div className="text-center">
          <p className="text-xl font-semibold mb-2">Saldo Disponible</p>
          <p className="text-3xl font-bold text-purple-600">{balance} Créditos</p>
        </div>
      </MotionCard>
    </div>
  )
}