'use client';
import { theme } from '@/shared/theme';
import { ThemeProvider } from '@mui/material';
import { PropsWithChildren } from 'react';

type ThemeProviderProps = PropsWithChildren;

export function MUIThemeProvider({ children }: ThemeProviderProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
