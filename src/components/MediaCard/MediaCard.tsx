import React from 'react'
import styled from 'styled-components'
import { flatironTheme } from '~/styles'
import { Button } from '~/components/Button'
import { Grid } from '~/components/Grid'

export interface MediaCardProps {
  image: string | JSX.Element
  title: string
  description: string
  cta: string | JSX.Element
  onClick?: (e: React.MouseEvent) => void
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: ${flatironTheme.colors.common.greyDarkest};
  img {
    width: 100%;
    height: auto;
    aspect-ratio: attr(width) / attr(height);
  }
`

const TextContainer = styled.div`
  margin: 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const MediaCard = ({ title, image, description, cta, onClick }: MediaCardProps): JSX.Element => (
  <Grid item container xs={10} sm={6} md={3} direction="column">
    <Container>
      {React.isValidElement(image) ? image : <img src={image as string} width={386} height={193} alt="" />}

      <TextContainer>
        <h4 style={{ color: flatironTheme.colors.common.turq }}>{title}</h4>
        <p>{description}</p>

        {React.isValidElement(cta) ? (
          cta
        ) : (
          <Button md onClick={onClick}>
            {cta as string}
          </Button>
        )}
      </TextContainer>
    </Container>
  </Grid>
)
