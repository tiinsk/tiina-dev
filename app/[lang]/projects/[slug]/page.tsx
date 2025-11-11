import { graphql } from '@/datocms/graphql';
import { Locale } from '@/locales';
import { executeQuery } from '@/datocms/executeQuery';
import { ProjectPage } from '@/app/[lang]/projects/[slug]/project-page';
import { ProjectPageFragment } from '@/app/[lang]/projects/[slug]/fragments';

const allQuery = graphql(`
  query AllProjectsQuery($locale: SiteLocale!) {
    allProjects(locale: $locale) {
      slug
    }
  }
`);

const query = graphql(
  `
    query ProjectQuery($locale: SiteLocale!, $slug: String!) {
      projectSection(locale: $locale) {
        activeTitle
      }
      allProjects(locale: $locale, filter: { slug: { eq: $slug } }) {
        ...ProjectPageFragment
      }
    }
  `,
  [ProjectPageFragment]
);

const getData = (lang: Locale, slug: string) =>
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
  const allData = await getAllData(lang as Locale);
  return allData.allProjects.map(project => project.slug);
};

export default async function Page({
  params,
}: Readonly<{
  params: Promise<{ slug: string; lang: string }>;
}>) {
  const { slug, lang } = await params;
  const data = await getData(lang as Locale, slug);

  const project = data.allProjects[0];

  if (!project) {
    return null;
  }

  return (
    <ProjectPage
      data={project}
      activeTitle={data.projectSection?.activeTitle || ''}
    />
  );
}
