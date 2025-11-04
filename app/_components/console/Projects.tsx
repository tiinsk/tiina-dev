import React from 'react';

import Project from './Project';
import { FragmentOf, readFragment } from 'gql.tada';
import { ProjectsFragment } from '@/app/_components/sections/fragments';

export interface ProjectsProps {
  data: FragmentOf<typeof ProjectsFragment> | null;
}

const Projects = ({ data }: ProjectsProps) => {
  const projectsData = readFragment(ProjectsFragment, data);
  return (
    <div>
      {projectsData?.projects.map((project, i) => {
        return (
          <Project
            key={i}
            data={project}
            activeTitle={projectsData.activeTitle}
          />
        );
      })}
    </div>
  );
};

export default Projects;
