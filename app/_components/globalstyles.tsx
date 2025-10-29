import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    width: 100vw;

    ${({ theme }) => theme.mediaQueries.md} {
      font-size: 1vw;
    }
    ${({ theme }) => theme.mediaQueries.sm} {
      font-size: 2.2vw;
    }
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    overflow-x: hidden;
  }

  p {
    margin: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    li {
      list-style-type: none;
    }
  }
  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
