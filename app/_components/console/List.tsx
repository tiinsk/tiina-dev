import { ReactNode } from 'react';
import styled from 'styled-components';

const StyledList = styled.ul`
  padding-left: ${({ theme }) => theme.spacings.s16};
`;

export const List = ({ children }: { children: ReactNode }) => (
  <StyledList>{children}</StyledList>
);


const StyledListItem = styled.li`
  list-style: square;
    color:  ${({ theme }) => theme.colors.console.magenta};
`;

export const ListItem = ({ children }: { children: ReactNode }) => (
  <StyledListItem>{children}</StyledListItem>
);
