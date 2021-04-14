import React from 'react'
import { styled } from '~/styles/stitches.config'
import { Button } from '~/components/Button'

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

type Props = {
  cta: string
  description: string
  image: string
  href: string
  title: string
} & React.ComponentPropsWithoutRef<'a'>

export const MediaCard = React.forwardRef<HTMLAnchorElement, Props>(({ title, image, description, cta, href }, ref) => (
  <Container>
    <Image css={{ backgroundImage: `url("${image}")` }} />

    <ContentContainer>
      <Title>{title}</Title>
      <p>{description}</p>

      <CTAContainer>
        <Button size="medium" width="full" href={href} as="a" ref={ref}>
          {cta}
        </Button>
      </CTAContainer>
    </ContentContainer>
  </Container>
))

MediaCard.displayName = 'MediaCard'
