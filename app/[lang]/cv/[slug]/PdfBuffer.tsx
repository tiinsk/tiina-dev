import { CvPdf, CvPdfProps } from '@/app/[lang]/cv/[slug]/CvPdf';
import { renderToBuffer } from '@react-pdf/renderer';


export const PdfBuffer = (props: CvPdfProps) => {
  return renderToBuffer(<CvPdf {...props} />);
};
