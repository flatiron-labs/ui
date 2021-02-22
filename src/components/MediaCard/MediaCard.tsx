import React from 'react'
import styled from 'styled-components'
import { Color } from '~/styles'
import { Grid } from '../Grid'

export interface MediaCardProps {
  src: string
  children?: React.ReactNode
}

const StyledDiv = styled.div`
  align-items: center;
  background-color: ${Color.greyDarkest};
  display: flex;
  flex-direction: column;
  height: 300px;
  padding-bottom: 5px;
`

const StyledImg = styled.img`
  height: 140px;
  padding-bottom: 10px;
  width: 100%;
`

export const MediaCard = ({ src, children }: MediaCardProps): JSX.Element => (
  <Grid item xs={12} sm={6} md={4}>
    <StyledDiv>
      <StyledImg src={src} alt="media card image" />
      <Grid item xs={10}>
        {children}
      </Grid>
    </StyledDiv>
  </Grid>
)
