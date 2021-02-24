import React from 'react'
import styled from 'styled-components'
import { Color } from '~/styles'
import { Grid } from '../Grid'
import { H4 } from '../Heading'

export interface TextCardProps {
  label: string
  value: string
}

const StyledGrid = styled(props => <Grid container item xs={12} md={6} direction="column" {...props} />)`
  border: 2px solid ${Color.turqDark};
`

const StyledHeading = styled(H4)`
  color: ${Color.turq};
  padding-top: 10px;
  padding-left: 10px;
`
const StyledValue = styled.p`
  color: ${Color.white};
  font-size: 18px;
  margin: 5px;
  padding-bottom: 10px;
  padding-left: 5px;
`

export const TextCard = ({ label, value, ...props }: TextCardProps): JSX.Element => (
  <StyledGrid {...props}>
    <StyledHeading>{label}</StyledHeading>
    <StyledValue>{value}</StyledValue>
  </StyledGrid>
)
