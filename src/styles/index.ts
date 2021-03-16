import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import { flatironTheme } from './theme'

export * from './theme'

export const Media = {
  xs: `@media only screen and (min-width: ${flatironTheme.breakpoints.values.xs + 1}px)`,
  sm: `@media only screen and (min-width: ${flatironTheme.breakpoints.values.sm + 1}px)`,
  md: `@media only screen and (min-width: ${flatironTheme.breakpoints.values.md + 1}px)`,
  lg: `@media only screen and (min-width: ${flatironTheme.breakpoints.values.lg + 1}px)`
}

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    background-color: ${flatironTheme.colors.common.black};
    font-family: ${flatironTheme.typography.fontFamily};
    color: ${flatironTheme.colors.common.white};
  }

  h1 {
    font-family: ${flatironTheme.typography.fontFamily};
    font-weight: ${flatironTheme.typography.h1.fontWeight};
    font-size: ${flatironTheme.typography.h1.fontSize};
    line-height: ${flatironTheme.typography.h1.lineHeight};
    letter-spacing: ${flatironTheme.typography.h1.letterSpacing};
  }

  h2 {
    font-family: ${flatironTheme.typography.fontFamily};
    font-weight: ${flatironTheme.typography.h2.fontWeight};
    font-size: ${flatironTheme.typography.h2.fontSize};
    line-height: ${flatironTheme.typography.h2.lineHeight};
    letter-spacing: ${flatironTheme.typography.h2.letterSpacing};
  }

  h3 {
    font-family: ${flatironTheme.typography.fontFamily};
    font-weight: ${flatironTheme.typography.h3.fontWeight};
    font-size: ${flatironTheme.typography.h3.fontSize};
    line-height: ${flatironTheme.typography.h3.lineHeight};
    letter-spacing: ${flatironTheme.typography.h3.letterSpacing};
  }

  h4 {
    font-family: ${flatironTheme.typography.fontFamily};
    font-weight: ${flatironTheme.typography.h4.fontWeight};
    font-size: ${flatironTheme.typography.h4.fontSize};
    line-height: ${flatironTheme.typography.h4.lineHeight};
    letter-spacing: ${flatironTheme.typography.h4.letterSpacing};
  }

  h5 {
    font-family: ${flatironTheme.typography.fontFamily};
    font-weight: ${flatironTheme.typography.h5.fontWeight};
    font-size: ${flatironTheme.typography.h5.fontSize};
    line-height: ${flatironTheme.typography.h5.lineHeight};
    letter-spacing: ${flatironTheme.typography.h5.letterSpacing};
  }

  h6 {
    font-family: ${flatironTheme.typography.fontFamily};
    font-weight: ${flatironTheme.typography.h6.fontWeight};
    font-size: ${flatironTheme.typography.h6.fontSize};
    line-height: ${flatironTheme.typography.h6.lineHeight};
    letter-spacing: ${flatironTheme.typography.h6.letterSpacing};
  }

  p {
    font-family: ${flatironTheme.typography.fontFamily};
    font-weight: ${flatironTheme.typography.subtitle1.fontWeight};
    font-size: ${flatironTheme.typography.subtitle1.fontSize};
    line-height: ${flatironTheme.typography.subtitle1.lineHeight};
    letter-spacing: ${flatironTheme.typography.subtitle1.letterSpacing};
  }
`
