import React from 'react';
import styled from 'styled-components';
import { getAsciiFont } from '@/utils/asciifonts';

const StyledAsciiFont = styled.div`
  font-size: 1.2rem;
  white-space: pre;

  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 1.1rem;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 0.8rem;
  }
`;

const AsciiFont = ({ text }: { text: string }) => {
  return <StyledAsciiFont>{getAsciiFont(text)}</StyledAsciiFont>;
};

export default AsciiFont;
