'use client'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

export const ThemeProvider = ({
  children,
  ...rest
}: React.ComponentProps<typeof NextThemesProvider>) => {
  return <NextThemesProvider {...rest}>{children}</NextThemesProvider>
}
