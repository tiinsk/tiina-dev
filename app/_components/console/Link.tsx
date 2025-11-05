import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.console.magenta};

  text-transform: none;
  font-family: ${({ theme }) => theme.fonts.fontConsole};
  word-break: break-word;

  &:hover {
    text-decoration: underline;
  }
`;

export const Link = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <StyledLink {...props} />
);
