export { Wrapper };

import React from 'react';
import { createGlobalStyle, StyleSheetManager } from 'styled-components';
import { usePageContext } from 'vike-react/usePageContext';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    width: 100vw;
    overflow-x: hidden;
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
`;

function Wrapper({ children }: { children: React.ReactNode }) {
  const pageContext = usePageContext();
  if (isBrowser()) return <>{children}</>;
  return (
    <StyleSheetManager sheet={pageContext.styleSheet?.instance}>
      <GlobalStyle />
      {children}
    </StyleSheetManager>
  );
}
function isBrowser() {
  // Using `typeof window !== 'undefined'` alone is not enough because some users use https://www.npmjs.com/package/ssr-window
  return typeof window !== 'undefined' && typeof window.scrollY === 'number';
  // Alternatively, test whether the environment is a *real* browser: https://github.com/brillout/picocolors/blob/d59a33a0fd52a8a33e4158884069192a89ce0113/picocolors.js#L87-L89
}
