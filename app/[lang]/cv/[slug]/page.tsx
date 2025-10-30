import { PdfViewer } from '@/app/[lang]/cv/[slug]/PdfViewer';
import { graphql } from '@/datocms/graphql';
import { Locale, locales } from '@/locales';
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

const allQuery = graphql(`
  query CVQuery($locale: SiteLocale!) {
    allCvs(locale: $locale) {
      slug
    }
  }
`);

const getCVData = (lang: Locale, slug: string) =>
  executeQuery(query, {
    variables: { locale: lang, slug },
  });

const getAllData = (lang: Locale) =>
  executeQuery(allQuery, {
    variables: { locale: lang },
  });

export const generateStaticParams = async ({
  params,
}: {
  params: { lang: string };
}) => {
  const lang = params.lang;
  const allCVData = await getAllData(lang as Locale);
  return allCVData.allCvs.map(cv => cv.slug);
};

export default async function Page({
  params,
}: Readonly<{
  params: Promise<{ slug: string; lang: string }>;
}>) {
  const { slug, lang } = await params;
  const data = await getCVData(lang as Locale, slug);

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
