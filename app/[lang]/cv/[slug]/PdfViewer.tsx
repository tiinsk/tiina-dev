'use client';
import dynamic from 'next/dynamic';

import { CvPdfProps, CvPdf } from '@/app/[lang]/cv/[slug]/CvPdf';
import styled from 'styled-components';

const Spinner = styled.div`
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  height: ${({ theme }) => theme.spacings.s48};
  width: ${({ theme }) => theme.spacings.s48};
  border: ${({ theme }) => theme.spacings.s4} solid
    ${({ theme }) => theme.colors.spinner.background};
  border-bottom-color: ${({ theme }) => theme.colors.spinner.primary};
  border-radius: 50%;
  animation: rotation 1s linear infinite;
`;

const LoadingText = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ReactPDF = dynamic(
  () => import('@react-pdf/renderer').then(mod => mod.PDFViewer),
  {
    ssr: false,
    loading: () => (
      <LoadingText>
        <Spinner />
      </LoadingText>
    ),
  }
);

export const PdfViewer = (props: CvPdfProps) => {
  return (
    <ReactPDF style={{ width: '100vw', height: '100vh' }}>
      {CvPdf(props)}
    </ReactPDF>
  );
};
