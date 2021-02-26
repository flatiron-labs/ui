import React from 'react'
import styled from 'styled-components'
import { Color } from '~/styles'
import { Grid } from '../Grid'
import { H4 } from '../Typography'

export interface TextCardProps {
  label: string
  value: string
}

const Content = styled.div`
  border: 2px solid ${Color.turqDark};
`

const Heading = styled(H4)`
  color: ${Color.turq};
  padding-top: 10px;
  padding-left: 10px;
`
const Value = styled.p`
  color: ${Color.white};
  font-size: 18px;
  margin: 5px;
  padding-bottom: 10px;
  padding-left: 5px;
`

export const TextCard = ({ label, value, ...props }: TextCardProps): JSX.Element => (
  <Grid item xs={12} md={6} {...props}>
    <Content>
      <Heading>{label}</Heading>
      <Value>{value}</Value>
    </Content>
  </Grid>
)
