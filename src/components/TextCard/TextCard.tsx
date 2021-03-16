import React from 'react'
import styled from 'styled-components'
import { flatironTheme } from '~/styles'
import { Grid } from '../Grid'

export interface TextCardProps {
  label: string
  value: string
}

const Content = styled.div`
  border: 2px solid ${flatironTheme.colors.common.turqDark};
  padding: 10px;
`

const Heading = styled.h4`
  color: ${flatironTheme.colors.common.turq};
`

export const TextCard = ({ label, value, ...props }: TextCardProps): JSX.Element => (
  <Grid item xs={12} md={6} {...props}>
    <Content>
      <Heading>{label}</Heading>
      <p>{value}</p>
    </Content>
  </Grid>
)
