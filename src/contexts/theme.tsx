'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

type ThemeProviderType = React.ComponentProps<typeof NextThemesProvider>;
export const ThemeProvider = ({ children, ...rest }: ThemeProviderType) => {
  return <NextThemesProvider {...rest}>{children}</NextThemesProvider>;
};
