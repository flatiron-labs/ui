import React from 'react'
import styled from 'styled-components'
import { Color } from '~/styles'
import { Grid } from '../Grid'
import { Heading } from '../Heading'

export interface ContentCardProps {
  label: string
  value: string
}

const StyledGrid = styled(Grid)`
  border: 2px solid ${Color.turqDark};
  margin: 10px;
  padding: 10px;
`

const StyledHeading = styled(Heading)`
  color: ${Color.turq};
  margin: 5px;
  padding: 2px;
`
const StyledValue = styled.p`
  color: ${Color.white};
  font-size: 18px;
  margin: 5px;
  padding: 2px;
`

export const ContentCard = ({ label, value }: ContentCardProps): JSX.Element => (
  <StyledGrid item sm={10} md={6}>
    <StyledHeading h4 bold>
      {label}
    </StyledHeading>
    <StyledValue>{value}</StyledValue>
  </StyledGrid>
)
