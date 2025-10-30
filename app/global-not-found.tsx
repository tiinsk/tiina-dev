import StyledComponentsRegistry from '@/lib/styled-components-registry';
import ClientLayout from '@/lib/client-layout';
import { Poppins } from 'next/font/google';
import { NotFound } from '@/app/_components/common/NotFound';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
});

export default function GlobalNotFound() {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body>
        <StyledComponentsRegistry>
          <ClientLayout>
            <NotFound code="404" message="Page not found" />
          </ClientLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
