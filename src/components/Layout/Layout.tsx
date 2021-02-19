import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Container } from '@material-ui/core'
import { normalize } from 'styled-normalize'
import { Color, Font } from '~/styles'

// https://material-ui.com/guides/interoperability/#styled-components
// https://levelup.gitconnected.com/material-ui-styled-components-fff4d345fb07

export interface LayoutProps {
  children: React.ReactNode
}

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
    <Container disableGutters maxWidth="lg">
      {children}
    </Container>
  </>
)
