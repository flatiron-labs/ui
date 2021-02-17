import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Color, Font } from '~/styles'

export interface LayoutProps {
  'data-testid'?: string
  children?: React.ReactNode
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${Color.black};
    font-family: ${Font.firaCode};
    color: ${Color.white};
  }
`

export const Layout = ({ children }: LayoutProps): JSX.Element => (
  <>
    <GlobalStyle />
    <div>{children}</div>
  </>
)
