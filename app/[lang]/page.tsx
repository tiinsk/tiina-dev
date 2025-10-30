import { graphql } from '@/datocms/graphql';
import { executeQuery } from '@/datocms/executeQuery';
import { Locale, locales } from '@/locales';
import { HomePage } from '@/app/[lang]/home-page';
import {
  AboutMeFragment,
  ContactFragment,
  Fragments,
  ProjectsFragment,
  SkillFragment,
  WorkHistoryFragment,
} from '@/app/_components/sections/fragments';

const query = graphql(
  `
    query DatoCMSQuery($locale: SiteLocale!) {
      header: headerSection(locale: $locale) {
        ...HeaderFragment
      }
      aboutMe: aboutMeSection(locale: $locale) {
        ...AboutMeFragment
      }
      workHistory: workHistorySection(locale: $locale) {
        ...WorkHistoryFragment
      }
      skills: skillSection(locale: $locale) {
        ...SkillFragment
      }
      projects: projectSection(locale: $locale) {
        ...ProjectsFragment
      }
      contact: contactSection(locale: $locale) {
        ...ContactFragment
      }
    }
  `,
  [
    Fragments,
    AboutMeFragment,
    WorkHistoryFragment,
    SkillFragment,
    ProjectsFragment,
    ContactFragment,
  ]
);

const getData = (lang: Locale) =>
  executeQuery(query, {
    variables: { locale: lang },
  });

export type Data = Awaited<ReturnType<typeof getData>>;

export default async function Home({
  params,
}: Readonly<{
  params: Promise<{ lang: string }>; //TODO change to use only available languages
}>) {
  const { lang } = await params;
  const data = await getData(lang as Locale);

  return <HomePage data={data} />;
}
