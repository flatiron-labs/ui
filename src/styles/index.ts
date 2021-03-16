import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import { flatironTheme } from './theme'

export * from './theme'

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
    font-weight: ${flatironTheme.theme.typography.h1.fontWeight};
    font-size: ${flatironTheme.theme.typography.h1.fontSize};
    line-height: ${flatironTheme.theme.typography.h1.lineHeight};
    letter-spacing: ${flatironTheme.theme.typography.h1.letterSpacing};
  }

  h2 {
    font-family: ${Font.firaCode};
    font-weight: ${flatironTheme.theme.typography.h2.fontWeight};
    font-size: ${flatironTheme.theme.typography.h2.fontSize};
    line-height: ${flatironTheme.theme.typography.h2.lineHeight};
    letter-spacing: ${flatironTheme.theme.typography.h2.letterSpacing};
  }

  h3 {
    font-family: ${Font.firaCode};
    font-weight: ${flatironTheme.theme.typography.h3.fontWeight};
    font-size: ${flatironTheme.theme.typography.h3.fontSize};
    line-height: ${flatironTheme.theme.typography.h3.lineHeight};
    letter-spacing: ${flatironTheme.theme.typography.h3.letterSpacing};
  }

  h4 {
    font-family: ${Font.firaCode};
    font-weight: ${flatironTheme.theme.typography.h4.fontWeight};
    font-size: ${flatironTheme.theme.typography.h4.fontSize};
    line-height: ${flatironTheme.theme.typography.h4.lineHeight};
    letter-spacing: ${flatironTheme.theme.typography.h4.letterSpacing};
  }

  h5 {
    font-family: ${Font.firaCode};
    font-weight: ${flatironTheme.theme.typography.h5.fontWeight};
    font-size: ${flatironTheme.theme.typography.h5.fontSize};
    line-height: ${flatironTheme.theme.typography.h5.lineHeight};
    letter-spacing: ${flatironTheme.theme.typography.h5.letterSpacing};
  }

  h6 {
    font-family: ${Font.firaCode};
    font-weight: ${flatironTheme.theme.typography.h6.fontWeight};
    font-size: ${flatironTheme.theme.typography.h6.fontSize};
    line-height: ${flatironTheme.theme.typography.h6.lineHeight};
    letter-spacing: ${flatironTheme.theme.typography.h6.letterSpacing};
  }

  p {
    font-family: ${Font.firaCode};
    font-weight: ${flatironTheme.theme.typography.subtitle1.fontWeight};
    font-size: ${flatironTheme.theme.typography.subtitle1.fontSize};
    line-height: ${flatironTheme.theme.typography.subtitle1.lineHeight};
    letter-spacing: ${flatironTheme.theme.typography.subtitle1.letterSpacing};
  }
`
