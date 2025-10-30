import { graphql } from '@/datocms/graphql';
import { Locale } from '@/locales';
import { executeQuery } from '@/datocms/executeQuery';
import { CVFragment, CVTextFragment } from '@/app/[lang]/cv/[slug]/fragments';
import { PdfBuffer } from '@/app/[lang]/cv/[slug]/PdfBuffer';

const query = graphql(
  `
    query CVQuery($locale: SiteLocale!, $slug: String!) {
      allCvs(locale: $locale, filter: { slug: { eq: $slug } }) {
        ...CVFragment
      }
      cvText(locale: $locale) {
        ...CVTextFragment
      }
    }
  `,
  [CVFragment, CVTextFragment]
);

const getCVData = (lang: Locale, slug: string) =>
  executeQuery(query, {
    variables: { locale: lang, slug },
  });

export async function GET(
  _request: Request,
  {
    params,
  }: Readonly<{
    params: Promise<{ slug: string; lang: string }>;
  }>
) {
  const { slug, lang } = await params;
  const data = await getCVData(lang as Locale, slug);
  const cv = data.allCvs[0];

  if (!cv) {
    return;
  }

  const buffer = await PdfBuffer({
    data: cv,
    textData: data.cvText,
    lang: lang as Locale,
    slug,
  });

  return new Response(new Uint8Array(buffer).buffer);
}
