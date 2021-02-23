import React from 'react'
import styled from 'styled-components'
import { Color } from '~/styles'
import { Button } from '~/components/Button'
import { Grid } from '~/components/Grid'
import { Heading } from '~/components/Heading'

export interface MediaCardProps {
  image: string
  title: string
  description: string
  buttonText: string
  onClick: (e: React.MouseEvent) => void
}

const StyledDiv = styled.div`
  align-items: center;
  background-color: ${Color.greyDarkest};
  display: flex;
  flex-direction: column;
  height: 300px;
  padding-bottom: 15px;
`

const StyledImg = styled.img`
  height: 140px;
  padding-bottom: 10px;
  width: 100%;
`

export const MediaCard = ({ image, title, description, buttonText, onClick }: MediaCardProps): JSX.Element => (
  <Grid item xs={12} sm={6} md={4}>
    <StyledDiv>
      <StyledImg src={image} role="presentation" />
      <Grid item xs={10}>
        <Heading bold h4 color={Color.turq}>
          {title}
        </Heading>

        <p>{description}</p>

        <Button width="100%" md onClick={onClick}>
          {buttonText}
        </Button>
      </Grid>
    </StyledDiv>
  </Grid>
)
