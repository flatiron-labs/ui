import React from 'react'
import styled from 'styled-components'
import { Color, Media } from '~/styles'

export interface ContentCardProps {
  label: string
  value: string
}

const StyledDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  border: 2px solid ${Color.greyDarkest};
  padding: 10px;
  width: auto;
  ${Media.sm} {
    width: 400px;
  }
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

export const ContentCard = ({ ...props }: ContentCardProps): JSX.Element => {
  const { label, value } = props

  return (
    <StyledDiv>
      <StyledLabel>{label}</StyledLabel>
      <StyledValue>{value}</StyledValue>
    </StyledDiv>
  )
}
