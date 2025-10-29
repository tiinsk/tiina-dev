'use client';

import { FragmentOf } from 'gql.tada';
import styled from 'styled-components';

import { WorkListItem } from './WorkListItem';
import { WorkItemFragment } from '@/app/_components/work-history/fragments';

const StyledWorkList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const WorkList = ({
  data,
}: {
  data: FragmentOf<typeof WorkItemFragment>[];
}) => (
  <StyledWorkList>
    {data.map((item, index) => (
      <WorkListItem
        key={index}
        data={item}
        isFirst={index === 0}
        isLast={index === data.length - 1}
      />
    ))}
  </StyledWorkList>
);
