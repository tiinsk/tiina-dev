import React from 'react';
import { DashedLine } from './DashedLine';
import styled from 'styled-components';
import { FragmentOf, readFragment } from 'gql.tada';
import { ProjectItemFragment } from '@/app/_components/projects/fragments';

export interface ProjectItemProps {
  data: FragmentOf<typeof ProjectItemFragment>;
  activeTitle: string;
}

const StyledConsoleProject = styled.div`
  .project-name {
    color: ${({ theme }) => theme.colors.console.white};
    margin: 1rem 0;
  }
  .skill-title {
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.console.green};
  }
  .link-title {
    color: ${({ theme }) => theme.colors.console.green};
    margin-bottom: 1rem;
  }
  .project-description {
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.console.grey};
  }
  .links {
    a {
      color: ${({ theme }) => theme.colors.console.magenta};
    }
  }
`;

const Project = ({ data, activeTitle }: ProjectItemProps) => {
  const itemData = readFragment(ProjectItemFragment, data);
  return (
    <StyledConsoleProject>
      <DashedLine />
      <div
        className="project-name"
        dangerouslySetInnerHTML={{ __html: itemData.title }}
      />
      <div className="project-description">
        <div className="skill-title">{`${activeTitle}: ${itemData.activeYearList}`}</div>
        {itemData.body}
        <div className="rateless-skills">
          {itemData.skills.map((skill, i) => {
            return (
              <div key={i} className="rateless-skill">
                <span className="line">/</span>
                {skill.name}
                <span className="line">/</span>
              </div>
            );
          })}
        </div>
        <div className="links">
          {itemData.links.map(link => (
            <div key={link.url}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.url}
              </a>
            </div>
          ))}
        </div>
      </div>
    </StyledConsoleProject>
  );
};

export default Project;
