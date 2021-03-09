import React from 'react'
import styled from 'styled-components'
import { Color } from '~/styles'
import { Button } from '~/components/Button'
import { Grid } from '~/components/Grid'
import { H4, P } from '~/components/Typography'

export interface MediaCardProps {
  image: string | JSX.Element
  title: string
  description: string
  cta: string | JSX.Element
  onClick?: (e: React.MouseEvent) => void
}

const Container = styled(props => (
  <Grid
    item
    container
    xs={10}
    sm={5}
    md={3}
    alignItems="stretch"
    alignContent="flex-start"
    direction="column"
    {...props}
  />
))`
  img {
    width: 100%;
    height: auto;
    aspect-ratio: attr(width) / attr(height);
  }
`

const Content = styled(props => (
  <Grid item container direction="column" alignContent="space-between" justify="space-between" {...props} />
))`
  flex-grow: 1;
  padding: 1.5rem;
  background-color: ${Color.greyDarkest};
`

export const MediaCard = ({ title, image, description, cta, onClick }: MediaCardProps): JSX.Element => (
  <Container>
    {React.isValidElement(image) ? image : <img src={image as string} width={386} height={193} alt="" />}

    <Content>
      <Grid item>
        <H4 style={{ color: Color.turq }}>{title}</H4>
        <P>{description}</P>
      </Grid>

      {React.isValidElement(cta) ? (
        cta
      ) : (
        <Button md onClick={onClick}>
          {cta as string}
        </Button>
      )}
    </Content>
  </Container>
)
