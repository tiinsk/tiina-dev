import { FragmentOf } from 'gql.tada';
import styled from 'styled-components';

import { ProjectItemFragment, ProjectListItem } from './ProjectListItem';

const StyledProjectList = styled.ul`
  margin-top: ${({ theme }) => theme.spacings.s128};
  display: flex;
  flex-direction: column;
  width: calc(50vw - ${({ theme }) => theme.spacings.s128});
  padding-right: ${({ theme }) => theme.spacings.s128};

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-right: 0;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-top: 0;
    width: 100%;
    padding-right: 0;
    gap: ${({ theme }) => theme.spacings.s128};
  }
`;

export const ProjectList = ({
  data,
  moreButtonText,
  activeTitle,
}: {
  data: FragmentOf<typeof ProjectItemFragment>[];
  moreButtonText: string;
  activeTitle: string;
}) => (
  <StyledProjectList>
    {data.map((item, index) => (
      <ProjectListItem
        key={index}
        data={item}
        moreButtonText={moreButtonText}
        activeTitle={activeTitle}
      />
    ))}
  </StyledProjectList>
);
