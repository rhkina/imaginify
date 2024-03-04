import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'
import { Poppins as FontSans } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

export const fontSans = FontSans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Imaginify',
  description: 'AI-powered image generator',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider appearance={{ variables: { colorPrimary: '#624cf5' } }}>
      <html lang='en' suppressHydrationWarning>
        <body className={cn('font-sans antialiased', fontSans.variable)}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
