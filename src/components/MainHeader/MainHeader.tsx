import React from 'react'
import styled from 'styled-components'
import { Color, Font } from '~/styles'
import { Grid } from '../Grid'
import { H3 } from '../Typography'

export interface MainHeaderProps {
  header: string
  subheader: string
  secondarySubheader?: string
  className?: string
}

const StyledSpan = styled.span<{ white?: boolean }>`
  color: ${props => (props.white ? Color.white : Color.yellow)};
  padding-right: 25px;
  font-family: ${Font.firaCode}, monospace;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 1.2rem;
`

export const MainHeader = ({ header, subheader, secondarySubheader, ...props }: MainHeaderProps): JSX.Element => (
  <Grid item {...props}>
    <H3>{header}</H3>
    <Grid container direction="row">
      <StyledSpan>{subheader}</StyledSpan>
      <StyledSpan white>{secondarySubheader}</StyledSpan>
    </Grid>
  </Grid>
)
