import './globals.css'
import { Inter, Poppins } from 'next/font/google'
import { Providers } from './providers'
import { Navigation } from './components/Navigation'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ 
  weight: ['400', '600', '700'], 
  subsets: ['latin'], 
  variable: '--font-poppins' 
})

export const metadata = {
  title: 'Festival de Música',
  description: 'Sistema de registro e identificación para el festival de música',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
      <body className="bg-gradient-to-br from-purple-900 via-blue-800 to-pink-700 min-h-screen">
        <Providers>
          <Navigation />
          <main className="pt-16 pb-20 px-4 md:pt-24 md:pb-4">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}