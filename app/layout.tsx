import type { Metadata, Viewport } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  axes: ['SOFT', 'WONK', 'opsz'],
  variable: '--font-fraunces',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://resortrecoverysolutions.com'),
  title: {
    default: 'Resort Recovery Solutions | Timeshare Debt Recovery',
    template: '%s | Resort Recovery Solutions',
  },
  description:
    'Specialized third-party debt collection for the resort and timeshare industry. FDCPA compliant, licensed in 35 states. $340M+ recovered.',
  keywords: [
    'timeshare debt recovery',
    'resort debt collection',
    'FDCPA compliant collection',
    'maintenance fee recovery',
    'HOA assessment recovery',
    'e-OSCAR participant',
    'Resort Recovery Solutions',
  ],
  authors: [{ name: 'Resort Recovery Solutions' }],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
