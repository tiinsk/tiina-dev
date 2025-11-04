import React from 'react';
import styled from 'styled-components';
import { getAsciiFont } from '@/app/console/_utils/asciifonts';

const StyledAsciiFont = styled.div`
  font-size: 1.2rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.1rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1rem;
  }
`;

const AsciiFont = ({ text }: { text: string }) => {
  return (
    <StyledAsciiFont style={{ whiteSpace: 'pre' }}>
      {getAsciiFont(text)}
    </StyledAsciiFont>
  );
};

export default AsciiFont;
