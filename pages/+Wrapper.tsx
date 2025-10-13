import React from 'react';
import {
  createGlobalStyle,
  StyleSheetManager,
  ThemeProvider,
} from 'styled-components';
import { usePageContext } from 'vike-react/usePageContext';

import { theme } from '../theme';
import poppinsBlack from '../assets/fonts/Poppins/Poppins-Black.ttf';
import poppinsBold from '../assets/fonts/Poppins/Poppins-Bold.ttf';
import poppinsLight from '../assets/fonts/Poppins/Poppins-Light.ttf';
import poppinsMedium from '../assets/fonts/Poppins/Poppins-Medium.ttf';
import poppinsRegular from '../assets/fonts/Poppins/Poppins-Regular.ttf';
import rubik from '../assets/fonts/Rubik/Rubik-VariableFont_wght.ttf';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    width: 100vw;
    overflow-x: hidden;

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

  @font-face {
    font-family: Poppins;
    src: url(${poppinsBlack}) format('truetype');
    font-weight: 900;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: Poppins;
    src: url(${poppinsBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: Poppins;
    src: url(${poppinsMedium}) format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: Poppins;
    src: url(${poppinsRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: Poppins;
    src: url(${poppinsLight}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: Rubik;
    src: url(${rubik}) format('truetype');
    font-weight: 900;
    font-style: normal;
    font-display: fallback;
  }
`;

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const pageContext = usePageContext();

  const themed = (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );

  if (isBrowser()) return <>{themed}</>;
  return (
    <StyleSheetManager sheet={pageContext.styleSheet?.instance}>
      {themed}
    </StyleSheetManager>
  );
};

function isBrowser() {
  // Using `typeof window !== 'undefined'` alone is not enough because some users use https://www.npmjs.com/package/ssr-window
  return typeof window !== 'undefined' && typeof window.scrollY === 'number';
  // Alternatively, test whether the environment is a *real* browser: https://github.com/brillout/picocolors/blob/d59a33a0fd52a8a33e4158884069192a89ce0113/picocolors.js#L87-L89
}
