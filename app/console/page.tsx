import { graphql } from '@/datocms/graphql';
import { executeQuery } from '@/datocms/executeQuery';
import {
  AboutMeFragment,
  ContactFragment,
  HeaderFragment,
  ProjectsFragment,
  SkillFragment,
  WorkHistoryFragment,
} from '@/app/_components/sections/fragments';
import { ConsolePage } from '@/app/console/ConsolePage';
import { keys } from 'lodash';

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
    HeaderFragment,
    AboutMeFragment,
    WorkHistoryFragment,
    SkillFragment,
    ProjectsFragment,
    ContactFragment,
  ]
);

const getData = async () => {
  const [enData, fiData] = await Promise.all([
    executeQuery(query, {
      variables: { locale: 'en' },
    }),
    executeQuery(query, {
      variables: { locale: 'fi' },
    })
  ])
  return {
    en: enData,
    fi: fiData
  }
};

export type Data = Awaited<ReturnType<typeof getData>>;

export default async function Page() {
  const data = await getData();
  //console.log(data);

  return <ConsolePage data={data} />;
}
