import React from 'react'
import { styled } from '~/styles/stitches.config'

import { Button } from '~/components/Button'
import { Heading } from '~/components/Typography/Heading'
import { Level } from '~/components/Level'

/* -------------------------------------------------------------------------------------------------
 * MediaCardImage
 * -----------------------------------------------------------------------------------------------*/

export const MediaCardImage = styled('img', {
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  height: '193px',
  width: '100%'
})

MediaCardImage.displayName = 'MediaCardImage'

/* -------------------------------------------------------------------------------------------------
 * MediaCardContent
 * -----------------------------------------------------------------------------------------------*/

export const MediaCardContent = styled('div', {
  display: 'grid',
  gridGap: '$7',
  gridTemplateColumns: '1fr',
  gridTemplateRows: '1fr 1fr 1fr fit-content',
  padding: '$7 $7 $7 $7'
})

MediaCardContent.displayName = 'MediaCardContent'

/* -------------------------------------------------------------------------------------------------
 * MediaCardTitle
 * -----------------------------------------------------------------------------------------------*/

export const MediaCardTitle = styled(Heading, {
  color: '$cyan500',
  fontFamily: '$firaCode',
  fontWeight: '$regular',
  fontSize: '1.5rem',
  lineHeight: '1.334',
  letterSpacing: '0em'
})

MediaCardTitle.displayName = 'MediaCardTitle'

/* -------------------------------------------------------------------------------------------------
 * MediaCardDescription
 * -----------------------------------------------------------------------------------------------*/

export const MediaCardDescription = styled('p', {
  fontFamily: '$firaCode',
  fontWeight: '$regular',
  fontSize: '1rem',
  lineHeight: '1.75',
  letterSpacing: '0.00938em'
})

MediaCardDescription.displayName = 'MediaCardDescription'

/* -------------------------------------------------------------------------------------------------
 * MediaCardCTA
 * -----------------------------------------------------------------------------------------------*/

export const MediaCardCTA = styled(Button, {
  defaultVariants: {
    size: 'medium',
    width: 'full'
  }
})

MediaCardCTA.displayName = 'MediaCardCTA'

/* -------------------------------------------------------------------------------------------------
 * MediaCard
 * -----------------------------------------------------------------------------------------------*/

export const StyledMediaCard = styled('div', {
  backgroundColor: '$grey1000',
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: '1fr 1fr 1fr fit-content'
})

type Props = React.ComponentPropsWithRef<typeof StyledMediaCard>

export const MediaCard = React.forwardRef<HTMLHeadingElement, Props>(({ children, ...rest }, ref) => (
  <Level>
    <StyledMediaCard ref={ref} {...rest}>
      {children}
    </StyledMediaCard>
  </Level>
))

MediaCard.toString = () => '.media-card'
MediaCard.displayName = 'MediaCard'
