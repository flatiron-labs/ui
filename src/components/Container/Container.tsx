/* eslint-disable import/no-named-default */

import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { default as MUIContainer } from '@material-ui/core/Container'
import { normalize } from 'styled-normalize'
import { Color, Font } from '~/styles'

// https://material-ui.com/guides/interoperability/#styled-components
// https://levelup.gitconnected.com/material-ui-styled-components-fff4d345fb07

export interface ContainerProps {
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

export const Container = ({ children }: ContainerProps): JSX.Element => (
  <>
    <GlobalStyle />
    <MUIContainer disableGutters maxWidth="lg">
      {children}
    </MUIContainer>
  </>
)
