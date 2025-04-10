import { ThemeProvider } from '@/contexts/theme'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'FalaAiMatheus - Portfolio',
  description: 'Created by @FalaAiMatheus',
  creator: 'Matheus França - Fala Ai Matheus',
  keywords: ['portfolio', 'nextjs'],
  applicationName: 'Fala Ai Matheus Portfolio',
  formatDetection: {
    address: false,
    date: false,
    email: false,
    telephone: false,
    url: true,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://falaaimatheus.vercel.app/',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
