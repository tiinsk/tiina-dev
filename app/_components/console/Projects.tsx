import React from 'react';

import Project from './Project';
import { FragmentOf, readFragment } from 'gql.tada';
import { ProjectsFragment } from '@/app/_components/sections/fragments';
import { Box } from '../common/Box';

export interface ProjectsProps {
  data: FragmentOf<typeof ProjectsFragment> | null;
}

const Projects = ({ data }: ProjectsProps) => {
  const projectsData = readFragment(ProjectsFragment, data);
  return (
    <Box mt="s24">
      {projectsData?.projects.map((project, i) => {
        return (
          <Project
            key={i}
            data={project}
            activeTitle={projectsData.activeTitle}
          />
        );
      })}
    </Box>
  );
};

export default Projects;
