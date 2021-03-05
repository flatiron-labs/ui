/* eslint-disable import/no-named-default */

import React from 'react'
import { GlobalStyle } from '~/styles'

export interface ContainerProps {
  children: React.ReactNode
}

export const Container = ({ children }: ContainerProps): JSX.Element => (
  <>
    <GlobalStyle />
    <>{children}</>
  </>
)
