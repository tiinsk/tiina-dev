import React from 'react';
import styled from 'styled-components';

const StyledSkill = styled.div`
  color: white;
  margin-right: 1rem;
`;

const Line = styled.span`
  color: ${({ theme }) => theme.colors.console.magenta};
`;

export const Skill = ({ text }: { text: string }) => (
  <StyledSkill>
    <Line>/</Line>
    {text}
    <Line>/</Line>
  </StyledSkill>
);
