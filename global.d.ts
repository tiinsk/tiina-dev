import type { IStyleSheetManager, ServerStyleSheet } from 'styled-components';

declare global {
  namespace Vike {
    interface PageContext {
      styleSheet?: ServerStyleSheet;
    }
  }
}

export {};
