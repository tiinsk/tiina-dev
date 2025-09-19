import type { ServerStyleSheet } from 'styled-components';
import { Locale } from './locales';

declare global {
  namespace Vike {
    interface PageContext {
      styleSheet?: ServerStyleSheet;
      locale: Locale;
    }
  }
}

export {};
