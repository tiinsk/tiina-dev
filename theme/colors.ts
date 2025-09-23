const primitiveColors = {
  blue: {
    '150': '#002732',
    '100': '#00475B',
    '50': '#80A3AD',
    '20': '#CCDADE',
    '10': '#E5EDEF',
  },
  yellow: {
    '50': '#F3FFBB',
  },
  web: {
    '100': '#03890C',
  },
  core: {
    '100': '#001CA9',
  },
  design: {
    '100': '#DA0087',
  },
  neutral: {
    filled: {
      '100': '#000000',
      '90': '#1A1A1A',
      '80': '#333333',
      '70': '#4D4D4D',
      '60': '#666666',
      '50': '#808080',
      '40': '#999999',
      '30': '#B2B2B2',
      '20': '#CCCCCC',
      '10': '#E5E5E5',
      '08': '#EBEBEB',
      '02': '#FAFAFA',
      '00': '#FFFFFF',
    },
    opaque: {
      dark: {
        '90': '#000000E6',
        '80': '#000000CC',
        '70': '#000000B3',
        '60': '#00000099',
        '50': '#00000080',
        '40': '#00000066',
        '30': '#0000004D',
        '20': '#00000033',
        '10': '#0000001A',
        '08': '#00000014',
        '02': '#00000005',
        '00': 'transparent',
      },
      light: {
        '90': '#FFFFFF1A',
        '80': '#FFFFFF33',
        '70': '#FFFFFF4D',
        '60': '#FFFFFF66',
        '50': '#FFFFFF80',
        '40': '#FFFFFF99',
        '30': '#FFFFFFB3',
        '20': '#FFFFFFCC',
        '10': '#FFFFFFE6',
        '08': '#FFFFFFEB',
        '02': '#FFFFFFFA',
        '00': 'transparent',
      },
    },
  },
};

export const colors = {
  background: {
    primary: primitiveColors.neutral.opaque.light['00'],
    secondary: primitiveColors.neutral.opaque.light['00'],
  },
  typography: {
    primary: primitiveColors.neutral.filled['100'],
    secondary: primitiveColors.neutral.filled['60'],
    tertiary: primitiveColors.blue['150'],
    web: primitiveColors.web['100'],
    core: primitiveColors.core['100'],
    design: primitiveColors.design['100'],
    yellow: primitiveColors.yellow['50'],
    active: primitiveColors.neutral.filled['00'],
  },
  buttons: {
    primary: {
      typography: {
        default: primitiveColors.neutral.filled['100'],
        hover: primitiveColors.neutral.filled['00'],
        disabled: primitiveColors.neutral.filled['100'],
      },
      background: {
        default: primitiveColors.neutral.opaque.light['00'],
        hover: primitiveColors.neutral.filled['100'],
        disabled: primitiveColors.neutral.opaque.light['00'],
      },
      border: {
        default: primitiveColors.neutral.filled['100'],
        hover: primitiveColors.neutral.filled['00'],
        disabled: primitiveColors.neutral.filled['100'],
      },
    },
    secondary: {
      typography: {
        default: primitiveColors.yellow['50'],
        hover: primitiveColors.yellow['50'],
        disabled: primitiveColors.yellow['50'],
      },
      background: {
        default: primitiveColors.neutral.opaque.light['00'],
        hover: primitiveColors.yellow['50'],
        disabled: primitiveColors.neutral.opaque.light['00'],
      },
      border: {
        default: primitiveColors.yellow['50'],
        hover: primitiveColors.yellow['50'],
        disabled: primitiveColors.yellow['50'],
      },
    },
  },
  error: {
    typography: primitiveColors.design['100'],
  },
  success: {
    typography: primitiveColors.web['100'],
  },
};

export type ColorTheme = typeof colors;
