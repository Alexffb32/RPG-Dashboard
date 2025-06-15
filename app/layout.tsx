  import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Idle MMO RPG Dashboard',
  description: 'A Discord-style idle MMO RPG dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-discord-darker text-discord-text`}>
        {children}
      </body>
    </html>
  )
}