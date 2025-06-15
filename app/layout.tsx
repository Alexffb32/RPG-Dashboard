import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { GameProvider } from '../components/GameState'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RPG Dashboard',
  description: 'A functional RPG progression game',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GameProvider>
          {children}
        </GameProvider>
      </body>
    </html>
  )
}