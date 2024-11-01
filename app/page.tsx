'use client'

import Link from 'next/link'
import { MotionButton } from '@/app/components/ui/motion-button'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black bg-opacity-50">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
          Festival de Música
        </h1>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="/auth">
            <MotionButton gradient="from-[#B866FF] to-[#FF66C4]">
              Registro / Login
            </MotionButton>
          </Link>
          <Link href="/explore" className="inline-block">
            <MotionButton gradient="from-[#3B82F6] to-[#2DD4BF]">
              Explorar Festival
            </MotionButton>
          </Link>
        </div>
      </div>
    </div>
  )
}