/* eslint-disable import/no-named-default */
import React from 'react'
import { ThemeProvider } from '~/context'
import { Theme } from '~/styles'

export interface ContainerProps {
  children: React.ReactNode
  theme?: Theme
}

export const Container = ({ children, theme }: ContainerProps): JSX.Element => (
  <ThemeProvider theme={theme}>
    <>{children}</>
  </ThemeProvider>
)
