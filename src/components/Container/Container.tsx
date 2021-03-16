/* eslint-disable import/no-named-default */
import React from 'react'
import { ThemeProvider } from '~/context'
import { GlobalStyle, flatironTheme } from '~/styles'

export interface ContainerProps {
  children: React.ReactNode
}

export const Container = ({ children }: ContainerProps): JSX.Element => (
  <ThemeProvider theme={flatironTheme}>
    <GlobalStyle />
    <>{children}</>
  </ThemeProvider>
)
