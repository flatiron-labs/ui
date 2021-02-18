import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { createMuiTheme, ThemeProvider, StylesProvider } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import { normalize } from 'styled-normalize'
import { Color, Font, Breakpoint } from '~/styles'

// https://material-ui.com/guides/interoperability/#styled-components
// https://levelup.gitconnected.com/material-ui-styled-components-fff4d345fb07

export interface LayoutProps {
  children: React.ReactNode
}

const theme = createMuiTheme({
  breakpoints: {
    values: Breakpoint
  }
})

const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    background-color: ${Color.black};
    font-family: ${Font.firaCode};
    color: ${Color.white};
  }
`

export const Layout = ({ children }: LayoutProps): JSX.Element => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <Container disableGutters maxWidth="lg">
          {children}
        </Container>
      </StylesProvider>
    </ThemeProvider>
  </>
)
