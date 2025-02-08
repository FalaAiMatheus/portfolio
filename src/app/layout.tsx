import { ThemeProvider } from '@/contexts/theme'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Geist_Mono as geistMono } from 'next/font/google'
import './globals.css'

const font = geistMono({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'FalaAiMatheus - Portfolio',
  description: 'Created by @FalaAiMatheus',
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
      <body className={cn(font.className, 'antialiased')}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
