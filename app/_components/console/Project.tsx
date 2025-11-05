import React from 'react';
import { DashedLineX } from './DashedLine';
import styled from 'styled-components';
import { FragmentOf, readFragment } from 'gql.tada';
import { ProjectItemFragment } from '@/app/_components/projects/fragments';
import { Link } from './Link';
import { Skill } from './Skill';
import { Flex } from '../common/Flex';
import { List, ListItem } from '@/app/_components/console/List';

export interface ProjectItemProps {
  data: FragmentOf<typeof ProjectItemFragment>;
  activeTitle: string;
}

const StyledContent = styled.div`
  margin-bottom: ${({ theme }) => theme.spacings.s16};
  color: ${({ theme }) => theme.colors.console.grey};
`;

const ProjectName = styled.div`
  color: ${({ theme }) => theme.colors.console.white};
  margin: ${({ theme }) => theme.spacings.s16} 0;
`;

const ActiveTitle = styled.div`
  margin-top: ${({ theme }) => theme.spacings.s8};
  color: ${({ theme }) => theme.colors.console.green};
`;

const Project = ({ data, activeTitle }: ProjectItemProps) => {
  const itemData = readFragment(ProjectItemFragment, data);
  return (
    <div>
      <ProjectName dangerouslySetInnerHTML={{ __html: itemData.title }} />
      <StyledContent>
        <ActiveTitle>{`${activeTitle}: ${itemData.activeYearList}`}</ActiveTitle>
        {itemData.body}
        <Flex my="s12" flexWrap="wrap">
          {itemData.skills.map((skill, i) => (
            <Skill key={i} text={skill.name} />
          ))}
        </Flex>
        <List>
          {itemData.links.map(link => (
            <ListItem key={link.url}>
              <Link href={link.url} target="_blank" rel="noopener noreferrer">
                {link.url}
              </Link>
            </ListItem>
          ))}
        </List>
      </StyledContent>
      <DashedLineX />
    </div>
  );
};

export default Project;
