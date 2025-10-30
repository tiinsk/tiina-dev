import { PdfViewer } from '@/app/[lang]/cv/[slug]/PdfViewer';
import { graphql } from '@/datocms/graphql';
import { Locale } from '@/locales';
import { executeQuery } from '@/datocms/executeQuery';
import { CVFragment, CVTextFragment } from '@/app/[lang]/cv/[slug]/fragments';
import { NotFound } from '@/app/_components/common/NotFound';

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

const getData = (lang: Locale, slug: string) =>
  executeQuery(query, {
    variables: { locale: lang, slug },
  });

export default async function Page({
  params,
}: Readonly<{
  params: Promise<{ slug: string; lang: string }>;
}>) {
  const { slug, lang } = await params;
  const data = await getData(lang as Locale, slug);

  const cv = data.allCvs[0];

  if (!cv) {
    return <NotFound code="404" message="CV not found" />;
  }

  return (
    <div>
      <PdfViewer data={cv} textData={data.cvText} />
    </div>
  );
}
