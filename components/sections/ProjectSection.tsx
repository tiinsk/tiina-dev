import { FragmentOf, readFragment } from 'gql.tada';

import { graphql } from '../../datocms/graphql';
import { H2 } from '../common/typography';
import { Section } from '../common/Section';
import { ProjectItemFragment } from '../projects/ProjectListItem';
import { ProjectList } from '../projects/ProjectList';
import { ProjectContextProvider } from '../../contexts/project-context';

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

export const ProjectSection = ({
  data,
  order,
}: {
  data: FragmentOf<typeof ProjectsFragment> | null;
  order: number;
}) => {
  const projectData = readFragment(ProjectsFragment, data);

  if (!projectData) {
    return null;
  }

  return (
    <Section
      name="Project"
      bgColor="projects"
      order={order}
      useMaxWidth={false}
    >
      <H2>{projectData.title}</H2>
      <ProjectContextProvider>
        <ProjectList
          data={projectData.projects}
          moreButtonText={projectData.moreButtonText}
          activeTitle={projectData.activeTitle}
        />
      </ProjectContextProvider>
    </Section>
  );
};
