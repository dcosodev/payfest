'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, CreditCard, QrCode, UserCheck, LogIn } from 'lucide-react'

const navItems = [
  { href: '/', icon: Home, label: 'Inicio' },
  { href: '/credits', icon: CreditCard, label: 'Créditos' },
  { href: '/qr', icon: QrCode, label: 'QR' },
  { href: '/kyc', icon: UserCheck, label: 'KYC' },
  { href: '/auth', icon: LogIn, label: 'Login' },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 md:top-0 md:bottom-auto">
      <div className="max-w-screen-xl mx-auto flex justify-around md:justify-end md:space-x-6">
        {navItems.map(({ href, icon: Icon, label }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              'flex flex-col items-center text-sm transition-colors hover:text-purple-400',
              pathname === href ? 'text-purple-400' : 'text-white'
            )}
          >
            <Icon className="h-6 w-6" />
            <span className="mt-1">{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}