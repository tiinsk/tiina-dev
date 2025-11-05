import { Source_Code_Pro } from 'next/font/google';

import StyledComponentsRegistry from '@/lib/styled-components-registry';
import { languagesArray } from '@/locales';
import { Metadata, Viewport } from 'next';
import ClientLayout from '@/lib/client-layout';
import GlobalStyle from '@/app/console/globalStyles';
const sourceCodePro = Source_Code_Pro({
  variable: '--font-source-code-pro',
  subsets: ['latin'],
  weight: ['400'],
});

export async function generateStaticParams() {
  return languagesArray;
}

export const metadata: Metadata = {
  title: 'tiina.dev',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default async function ConsoleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sourceCodePro.variable}`}>
      <body>
        <StyledComponentsRegistry>
          <ClientLayout>
            <GlobalStyle />
            {children}
          </ClientLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
