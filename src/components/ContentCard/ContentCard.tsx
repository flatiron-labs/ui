import React from 'react'
import styled from 'styled-components'
import { Color } from '~/styles'
import { Grid } from '../Grid'
import { Heading } from '../Heading'

export interface ContentCardProps {
  label: string
  value: string
}

const StyledDiv = styled.div`
  border: 2px solid ${Color.turqDark};
`

const StyledHeading = styled(Heading)`
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

export const ContentCard = ({ label, value }: ContentCardProps): JSX.Element => (
  <Grid item xs={12} md={6}>
    <StyledDiv>
      <StyledHeading h4 bold>
        {label}
      </StyledHeading>
      <StyledValue>{value}</StyledValue>
    </StyledDiv>
  </Grid>
)
