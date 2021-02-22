import React from 'react'
import styled from 'styled-components'
import { Color } from '~/styles'
import { Grid } from '../Grid'

export interface ContentCardProps {
  label: string
  value: string
}

const StyledGrid = styled(Grid)`
  border: 2px solid ${Color.turqDark};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 10px;
  padding: 10px;
`

const StyledLabel = styled.div`
  color: ${Color.turq};
  font-size: 18px;
  padding: 2px;
`
const StyledValue = styled.div`
  color: ${Color.white};
  font-size: 18px;
  padding: 2px;
`

export const ContentCard = ({ label, value }: ContentCardProps): JSX.Element => (
  <StyledGrid item sm={12} lg={4}>
    <StyledLabel>{label}</StyledLabel>
    <StyledValue>{value}</StyledValue>
  </StyledGrid>
)
