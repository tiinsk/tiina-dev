import { colors } from './colors';

const breakpoints = {
  lg: '1200px',
  md: '900px',
  sm: '600px',
};

const variables = {
  pageWidth: '1800px',
  fonts: {
    fontBody: 'Poppins, sans-serif',
    fontHeader: 'Rubik, sans-serif',
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
    sm: `@media (max-width: ${breakpoints.sm})`,
    md: `@media (max-width: ${breakpoints.md})`,
    lg: `@media (max-width: ${breakpoints.lg})`,
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
