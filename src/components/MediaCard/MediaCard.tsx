import React from 'react'
import { styled } from '~/styles/stitches.config'
import { Button } from '~/components/Button'

export interface MediaCardProps {
  cta: string | JSX.Element
  description: string
  image: string | JSX.Element
  onClick?: (e: React.MouseEvent) => void
  title: string
}

const Container = styled('div', {
  backgroundColor: '$grey1000',
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: '1fr 1fr 1fr fit-content'
})

const Image = styled('div', {
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  height: '193px',
  width: '100%'
})

const ContentContainer = styled('div', {
  display: 'grid',
  gridGap: '$7',
  gridTemplateColumns: '1fr',
  gridTemplateRows: '1fr 1fr 1fr fit-content',
  padding: '$7 $7 $7 $7'
})

const CTAContainer = styled('div', {
  alignSelf: 'end'
})

const Title = styled('h5', {
  color: '$cyan500'
})

export const MediaCard = ({ title, image, description, cta, onClick }: MediaCardProps): JSX.Element => (
  <Container>
    <Image css={{ background: `url("${image}")` }} />

    <ContentContainer>
      <Title>{title}</Title>
      <p>{description}</p>

      <CTAContainer>
        {React.isValidElement(cta) ? (
          cta
        ) : (
          <Button size="medium" width="full" onClick={onClick}>
            {cta as string}
          </Button>
        )}
      </CTAContainer>
    </ContentContainer>
  </Container>
)
