import React from 'react'
import styled from 'styled-components'
import { Color } from '~/styles'
import { Button } from '~/components/Button'
import { Grid } from '~/components/Grid'
import { Heading } from '~/components/Heading'

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
    xs={12}
    sm={6}
    md={4}
    alignItems="stretch"
    alignContent="flex-start"
    direction="column"
    {...props}
  />
))`
  img {
    max-height: 140px;
    width: 100%;
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
    {React.isValidElement(image) ? image : <img src={image as string} alt="" />}

    <Content>
      <Grid item>
        <Heading bold h4 color={Color.turq}>
          {title}
        </Heading>
        <p>{description}</p>
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
