'use client';

import { FragmentOf, readFragment } from 'gql.tada';
import { H2 } from '../common/typography';
import { Section } from '../common/Section';
import { ProjectList } from '../projects/ProjectList';
import { ProjectContextProvider } from '@/app/_contexts/project-context';
import { ProjectsFragment } from '@/app/_components/sections/fragments';

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
