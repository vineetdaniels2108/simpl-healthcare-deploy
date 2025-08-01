import type { Metadata, Viewport } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'

const manrope = Manrope({ 
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
  preload: true,
  fallback: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif']
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
          media="print"
          onLoad="this.media='all'"
        />
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={`${manrope.variable} font-manrope antialiased`}>
        {children}
      </body>
    </html>
  )
} 