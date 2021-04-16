import { createCss, StitchesCss } from '@stitches/react'

export type { StitchesVariants } from '@stitches/react'

const stitches = createCss({
  theme: {
    fonts: {
      firaCode: 'Fira Code, sans-serif',
      gotcha: 'Gotcha, san-serif'
    },
    fontSizes: {
      10: '0.750rem',
      20: '0.875rem',
      30: '1.000rem', // 16px
      40: '1.125rem', // 18px
      50: '1.188rem', // 19px
      60: '1.250rem', // 20px
      70: '1.500rem', // 24px
      80: '1.600rem',
      90: '2.500rem',
      100: '3.125rem',
      110: '3.750rem',
      120: '6.000rem',
      130: '8.125rem'
    },
    fontWeights: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700
    },
    space: {
      1: '2px',
      2: '4px',
      3: '8px',
      4: '10px',
      5: '12px',
      6: '14px',
      7: '16px',
      8: '20px',
      9: '24px',
      10: '30px',
      11: '40px',
      12: '48px',
      13: '64px',
      14: '80px'
    },
    sizes: {},
    lineHeights: {
      233: '0.4668rem',
      240: '0.4800rem',
      247: '0.4940rem',
      267: '0.5336rem',
      286: '0.5720rem',
      300: '0.6000rem',
      314: '0.6280rem',
      350: '0.7000rem',
      500: '1.0000rem',
      750: '1.5000rem'
    },
    letterSpacings: {
      // 300: '-0.01562em',
      // 400: '-0.00833em',
      0: '0em',
      1: '0.00735em',
      2: '0.00750em',
      3: '0.00714em',
      4: '0.00938em',
      5: '0.01071em',
      6: '0.01562em',
      7: '0.02857em'
    },
    radii: {
      1: '3px',
      2: '5px',
      3: '7px',
      round: '50%',
      pill: '9999px'
    },
    zIndices: {
      lowest: -1500,
      highest: 1500,
      aboveStdElements: 1250,
      modalBg: 1499,
      modal: 1500
    },
    colors: {
      black250: 'rgba(3, 4, 22, 1)', // blackLight
      black500: 'rgba(0, 0, 0)', // black
      blue500: 'rgba(51, 143, 255, 1)', // blue
      blue1000: 'rgba(12, 50, 62, 1)', // turqDark
      cyan500: 'rgba(0, 239, 225, 1)', // turq
      green500: 'rgba(0, 239, 124, 1)', // green
      grey250: 'rgba(232, 244, 250, 1)', // greyLight
      grey500: 'rgba(214, 226, 231, 1)', // grey
      grey750: 'rgba(127, 138, 142, 1)', // greyDark
      grey1000: 'rgba(31, 32, 54, 1)', // greyDarkest
      orange500: 'rgba(255, 92, 0, 1)', // orange
      pink500: 'rgba(232, 3, 82, 1)', // pink
      purple500: 'rgba(205, 162, 255, 1)', // purple
      white500: 'rgba(255, 255, 255, 1)', // white
      yellow500: 'rgba(249, 197, 26, 1)' // yellow
    },
    shadows: {
      0: '0px',
      1: '1px',
      2: '2px',
      3: '3px'
    },
    transitions: {
      easeInOut: '150ms ease-in-out'
    }
  },
  media: {
    xs: '(min-width: 0px)',
    sm: '(min-width: 601px)',
    md: '(min-width: 961px)',
    lg: '(min-width: 1441px)',
    xl: '(min-width: 1921px)'
  },
  utils: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    visuallyHidden: config => (value: boolean) => ({
      border: 0,
      clip: 'rect(0, 0, 0, 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      whiteSpace: 'nowrap',
      width: 1,
      wordWrap: 'normal'
    })
  },
  prefix: '',
  insertionMethod: 'append'
  // themeMap: {
  //   ...defaultThemeMap
  //   boxShadow: color
  // },
})

export type CSS = StitchesCss<typeof stitches>
export const { styled, css, theme, getCssString, global, keyframes, config } = stitches
export const { utils } = config

export type Theme = typeof config.theme
export type resolveTokens<T extends keyof Theme> = `$${Extract<keyof Theme[T], string | number>}`
