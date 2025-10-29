'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@/app/_components/globalstyles';
import { theme } from '@/theme';

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
