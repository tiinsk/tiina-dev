import { graphql } from '@/datocms/graphql';
import { WorkItemFragment } from '@/app/_components/work-history/fragments';
import { ProjectItemFragment } from '@/app/_components/projects/fragments';
import { FactFragment } from '@/app/_components/facts/fragments';

export const HeaderFragment = graphql(`
  fragment HeaderFragment on HeaderSectionRecord {
    title
    name
    subtitle
  }
`);

export const AboutMeFragment = graphql(`
  fragment AboutMeFragment on AboutMeSectionRecord {
    body
    contactButtonIcon
    contactButtonText
    image {
      url
    }
  }
`);

export const WorkHistoryFragment = graphql(
  `
    fragment WorkHistoryFragment on WorkHistorySectionRecord {
      title
      workHistoryList {
        ...WorkItemFragment
      }
    }
  `,
  [WorkItemFragment]
);

export const SkillFragment = graphql(`
  fragment SkillFragment on SkillSectionRecord {
    title
    skillListTitle
    techSkillTitle
    techSkillBody
    techSkills {
      name
      skillType
    }
    designSkillTitle
    designSkillBody
    designSkills {
      name
      skillType
    }
    coreSkillTitle
    coreSkillBody
    coreSkills {
      name
      skillType
    }
  }
`);

export const ProjectsFragment = graphql(
  `
    fragment ProjectsFragment on ProjectSectionRecord {
      title
      moreButtonText
      activeTitle
      projects {
        ...ProjectItemFragment
      }
    }
  `,
  [ProjectItemFragment]
);

export const ContactFragment = graphql(`
  fragment ContactFragment on ContactSectionRecord {
    title
    links {
      title
      url
      icon
      target
    }
    buttonLinks {
      url
      icon
      target
    }
  }
`);

export const FactsFragment = graphql(
  `
    fragment FactsFragment on FactsSectionRecord {
      title
      factList {
        ...FactFragment
      }
    }
  `,
  [FactFragment]
);
