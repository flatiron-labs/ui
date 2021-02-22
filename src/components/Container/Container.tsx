/* eslint-disable import/no-named-default */

import React from 'react'
import { default as MUIContainer } from '@material-ui/core/Container'
import { GlobalStyle } from '~/styles'

export interface ContainerProps {
  children: React.ReactNode
}

export const Container = ({ children }: ContainerProps): JSX.Element => (
  <>
    <GlobalStyle />
    <MUIContainer disableGutters maxWidth="lg">
      {children}
    </MUIContainer>
  </>
)
