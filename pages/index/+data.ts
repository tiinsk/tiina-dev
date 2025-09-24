import { PageContextServer } from 'vike/types';

import { graphql } from '../../datocms/graphql';
import { executeQuery } from '../../datocms/executeQuery';
import { HeaderFragment } from '../../components/sections/HeaderSection';
import { AboutMeFragment } from '../../components/sections/AboutMeSection';
import { ContactFragment } from '../../components/sections/ContactSection';
import { FactsFragment } from '../../components/sections/FactsSection';
import { ProjectFragment } from '../../components/sections/ProjectSection';
import { SkillFragment } from '../../components/sections/SkillSection';
import { WorkHistoryFragment } from '../../components/sections/WorkHistorySection';

const query = graphql(
  `
    query DatoCMSQuery($locale: SiteLocale!) {
      header: headerSection(locale: $locale) {
        ...HeaderFragment
      }
      aboutMe: aboutMeSection(locale: $locale) {
        ...AboutMeFragment
      }
      facts: factsSection(locale: $locale) {
        ...FactsFragment
      }
      skills: skillSection(locale: $locale) {
        ...SkillFragment
      }
      workHistory: workHistorySection(locale: $locale) {
        ...WorkHistoryFragment
      }
      projects: projectSection(locale: $locale) {
        ...ProjectFragment
      }
      contact: contactSection(locale: $locale) {
        ...ContactFragment
      }
    }
  `,
  [
    AboutMeFragment,
    ContactFragment,
    FactsFragment,
    HeaderFragment,
    ProjectFragment,
    SkillFragment,
    WorkHistoryFragment,
  ]
);

export const data = async (pageContext: PageContextServer) => {
  return executeQuery(query, {
    variables: { locale: pageContext.locale },
  });
};

export type Data = Awaited<ReturnType<typeof data>>;
