import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const Color = {
  black: 'rgba(3, 4, 22, 1)',
  grey: 'rgba(214, 226, 231, 1)',
  greyDark: 'rgba(127, 138, 142, 1)',
  greyDarkest: 'rgba(31, 32, 54, 1)',
  greyLight: 'rgba(232, 244, 250, 1)',
  turq: 'rgba(0, 239, 225, 1)',
  turqDark: 'rgba(12, 50, 62, 1)',
  yellow: 'rgba(249, 197, 26, 1)',
  orange: 'rgba(255, 92, 0, 1)',
  pink: 'rgba(232, 3, 82, 1)',
  blue: 'rgba(51, 143, 255, 1)',
  purple: 'rgba(205, 162, 255, 1)',
  green: 'rgba(0, 239, 124, 1)',
  white: 'rgba(255, 255, 255, 1)'
}

export const Font = {
  firaCode: 'Fira Code',
  gotcha: 'Gotcha'
}

export const Breakpoint = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1440,
  xl: 1920
}

export const Media = {
  xs: `@media only screen and (min-width: ${Breakpoint.xs + 1}px)`,
  sm: `@media only screen and (min-width: ${Breakpoint.sm + 1}px)`,
  md: `@media only screen and (min-width: ${Breakpoint.md + 1}px)`,
  lg: `@media only screen and (min-width: ${Breakpoint.lg + 1}px)`
}

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    background-color: ${Color.black};
    font-family: ${Font.firaCode};
    color: ${Color.white};
  }

  h1 {
    font-family: ${Font.firaCode};
    font-weight: 300;
    font-size: 6rem;
    line-height: 1.167;
    letter-spacing: -0.01562em;
  }

  h2 {
    font-family: ${Font.firaCode};
    font-weight: 300;
    font-wize: 3.75rem;
    line-height: 1.2;
    letter-spacing: -0.00833em;
  }

  h3 {
    font-family: ${Font.firaCode};
    font-weight: 400;
    font-size: 3rem;
    line-height: 1.167;
    letter-spacing: 0em;
  }

  h4 {
    font-family: ${Font.firaCode};
    font-weight: 400;
    font-size: 1.75rem;
    line-height: 1.235;
    letter-spacing: 0.00735em;
  }

  h5 {
    font-family: ${Font.firaCode};
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.334;
    letter-spacing: 0em;
  }

  h6 {
    font-family: ${Font.firaCode};
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 1.6;
    letter-spacing: '0.0075em';
  }

  p {
    font-family: ${Font.firaCode};
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.75;
    letter-spacing: 0.00938em;
  }
`
