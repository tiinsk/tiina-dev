import { graphql } from '@/datocms/graphql';
import { Locale } from '@/locales';
import { executeQuery } from '@/datocms/executeQuery';
import { ProjectPage } from '@/app/[lang]/projects/[slug]/project-page';
import { ProjectPageFragment } from '@/app/[lang]/projects/[slug]/fragments';

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
