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
  title: 'Nadji — Développeur front-end',
  description: 'Développeur front-end spécialisé en React, Next.js et WordPress. Je transforme vos maquettes en interfaces performantes et accessibles.',
  openGraph: {
    title: 'Nadji — Développeur front-end',
    description: 'Développeur front-end spécialisé en React, Next.js et WordPress.',
    url: 'https://andji.dev',
    siteName: 'Nadji — Développeur front-end',
    locale: 'fr_FR',
    type: 'website',
  },

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