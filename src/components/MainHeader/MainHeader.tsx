import React from 'react'
import styled from 'styled-components'
import { Color } from '~/styles'
import { Grid } from '../Grid'
import { H4, H3 } from '../Typography'

export interface MainHeaderProps {
  header: string
  subheader: string
  date: string
}

const StyledH4 = styled(H4)`
  color: ${Color.yellow};
  padding-right: 25px;
`

export const MainHeader = ({ header, subheader, date, ...props }: MainHeaderProps): JSX.Element => (
  <Grid item xs={12} {...props}>
    <H3>{header}</H3>
    <Grid container direction="row">
      <StyledH4>{subheader}</StyledH4>
      <H4>{date}</H4>
    </Grid>
  </Grid>
)
