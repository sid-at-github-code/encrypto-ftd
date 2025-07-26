import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata ={
  title: 'Encrypto - By Sid',
  description: 'Encrypt and decrypt messages securely in your browser.',
  generator: 'Sid Patil',
  keywords: ['encryption', 'decryption', 'secure', 'sid patil'],
  authors: [{ name: 'Sid Patil', url: 'https://yourportfolio.com' }],
  creator: 'Sid Patil',
  metadataBase: new URL('https://your-encrypto-app.com'),
    icons: {
    icon: '/main_logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        
        <style  suppressHydrationWarning>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
