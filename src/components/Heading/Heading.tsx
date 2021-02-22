import React from 'react'
import styled from 'styled-components'
import { Font } from '~/styles'

export interface StyledHeadingProps {
  h1?: boolean
  h2?: boolean
  h3?: boolean
  bold?: boolean
}

export interface HeadingProps extends StyledHeadingProps {
  children?: React.ReactNode
  'data-testid'?: string
}

const StyledHeading = styled.header<StyledHeadingProps>`
  font-family: ${Font.firaCode}, monospace;
  font-size: 1.65rem;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  ${props =>
    props.h1 &&
    ` 
    font-size: 5.45rem;
  `}
  ${props =>
    props.h2 &&
    ` 
    font-size: 3.3rem;
  `}
    ${props =>
    props.h3 &&
    ` 
    font-size: 1.65rem;
  `};
`

export const Heading = ({ children, ...props }: HeadingProps): JSX.Element => (
  <StyledHeading {...props}>{children}</StyledHeading>
)
