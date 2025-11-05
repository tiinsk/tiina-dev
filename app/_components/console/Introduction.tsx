import React from 'react';
import styled from 'styled-components';

const StyledConsoleIntroduction = styled.div`
  color: ${({ theme }) => theme.colors.console.grey};
  p {
    margin-bottom: ${({ theme }) => theme.spacings.s16};
  }
`;

const Introduction = ({ body }: { body: string }) => {
  return (
    <StyledConsoleIntroduction>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </StyledConsoleIntroduction>
  );
};

export default Introduction;
