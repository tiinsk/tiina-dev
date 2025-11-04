import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    width: 100vw;

    ${({ theme }) => theme.mediaQueries.md} {
      font-size: 62.5%;
    }
    ${({ theme }) => theme.mediaQueries.sm} {
      font-size: 62.5%;
    }
  }

  body {
    background-color: ${({ theme }) => theme.colors.console.background};
  }
`;

export default GlobalStyle;
