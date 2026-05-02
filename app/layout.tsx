import type { Metadata } from 'next'
import { Archivo, Lexend } from 'next/font/google'
import './globals.css'

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-archivo',
  display: 'swap',
})

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-lexend',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Andji.dev — Développeur React & Next.js',
  description: 'Développeur front-end freelance spécialisé React et Next.js. Disponible pour missions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${archivo.variable} ${lexend.variable}`}>
      <body>{children}</body>
    </html>
  )
}

