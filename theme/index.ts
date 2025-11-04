import { colors } from './colors';

const breakpoints = {
  lg: 1200,
  md: 900,
  sm: 600,
  max: 1392, // = pageWidth + pageMaxPaddingLeft + pageMaxPaddingRight
};

const variables = {
  pageWidth: '1200px',
  pageMaxPaddingLeft: '128px', //if this is changed, also change max breakpoint
  pageMaxPaddingRight: '64px', //if this is changed, also change max breakpoint
  smallPageWidth: '900px',
  fonts: {
    fontBody: 'Poppins, sans-serif',
    fontConsole: 'Source Code Pro, monospace',
  },
  fontWeights: {
    light: '300',
    regular: '400',
    medium: '500',
    bold: '700',
    black: '900',
  },
  breakpoints,
  mediaQueries: {
    sm: `@media (max-width: ${breakpoints.sm}px)`,
    md: `@media (max-width: ${breakpoints.md}px)`,
    lg: `@media (max-width: ${breakpoints.lg}px)`,
    max: `@media (max-width: ${breakpoints.max}px)`,
  },
  spacings: {
    s2: '0.2rem',
    s4: '0.4rem',
    s8: '0.8rem',
    s12: '1.2rem',
    s16: '1.6rem',
    s24: '2.4rem',
    s32: '3.2rem',
    s40: '4.0rem',
    s48: '4.8rem',
    s64: '6.4rem',
    s80: '8.0rem',
    s96: '9.6rem',
    s128: '12.8rem',
    s192: '19.2rem',
    s256: '25.6rem',
    s320: '32.0rem',
    s480: '48.0rem',
    s640: '64.0rem',
  },
  zIndex: {
    menus: 1000,
  },
};

export type Space = keyof (typeof variables)['spacings'];

export const theme = {
  ...variables,
  colors: colors,
} as const;

export type CustomTheme = typeof theme;
