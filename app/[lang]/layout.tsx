import { Poppins } from 'next/font/google';

import StyledComponentsRegistry from '@/lib/styled-components-registry';
import ClientLayout from '@/lib/client-layout';
import { languagesArray, Locale } from '@/locales';
import { LanguageSelector } from '@/app/_components/LanguageSelector';
import { Metadata } from 'next';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
});

export async function generateStaticParams() {
  return languagesArray;
}

export const metadata: Metadata = {
  title: 'tiina.dev',
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>; //TODO change to use only available languages
}>) {
  const { lang } = await params;
  return (
    <html lang={lang} className={`${poppins.variable}`}>
      <body>
        <StyledComponentsRegistry>
          <ClientLayout>
            <LanguageSelector />
            {children}
          </ClientLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
