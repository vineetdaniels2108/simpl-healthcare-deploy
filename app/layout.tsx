import type { Metadata, Viewport } from 'next'
import { Manrope } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import ExitIntentModal from '../components/ExitIntentModal'
import './globals.css'

const manrope = Manrope({ 
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Simpl Healthcare – First AI-Powered All-in-One EHR',
  description: 'Simplify workflows and maximize outcomes with integrated EHR and AI-powered solutions tailored for practices of every size and type.',
  keywords: 'EHR, Electronic Health Records, AI-powered healthcare, practice management, telehealth, interoperability',
  authors: [{ name: 'Simpl Healthcare' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={manrope.variable}>
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={`${manrope.variable} font-manrope antialiased`}>
        {children}
        <ExitIntentModal />
        <Analytics />
      </body>
    </html>
  )
} 