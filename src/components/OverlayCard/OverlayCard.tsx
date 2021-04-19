import React from 'react'
import { Button } from '~/components/Button'
import { styled } from '~/styles/stitches.config'

/* -------------------------------------------------------------------------------------------------
 * OverlayCardImage
 * -----------------------------------------------------------------------------------------------*/

const StyledOverlayCardImage = styled('div', {
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  borderStyle: 'solid',
  borderWidth: '2px',
  display: 'flex',
  fontFamily: '$gotcha',
  fontSize: '2.5em',
  justifyContent: 'center',
  minHeight: '130px',
  padding: '20px 15px 0',
  textAlign: 'center',
  textShadow: '3px 3px 1px $black500',
  width: '100%'
})

type OverlayCardImageProps = React.ComponentPropsWithRef<typeof StyledOverlayCardImage> & {
  src: string
}

export const OverlayCardImage = React.forwardRef<HTMLDivElement, OverlayCardImageProps>(
  ({ src, children, ...rest }, ref) => (
    <StyledOverlayCardImage css={{ backgroundImage: `url(${src})` }} {...rest} className="overlay-card-image" ref={ref}>
      {children}
    </StyledOverlayCardImage>
  )
)

OverlayCardImage.toString = () => '.overlay-card-image'
OverlayCardImage.displayName = 'OverlayCardImage'

/* -------------------------------------------------------------------------------------------------
 * OverlayCardCTA
 * -----------------------------------------------------------------------------------------------*/

export const OverlayCardCTA = styled(Button, {
  '&:focus, &:hover': {
    color: '$black500',
    outline: 0
  },

  defaultVariants: {
    width: 'full'
  }
})

OverlayCardCTA.displayName = 'OverlayCardCTA'

/* -------------------------------------------------------------------------------------------------
 * OverlayCard
 * -----------------------------------------------------------------------------------------------*/

export const OverlayCard = styled('div', {
  display: 'grid',
  gap: '$7',

  variants: {
    accentColor: {
      pink: {
        [`& ${OverlayCardImage}`]: {
          borderColor: '$pink500'
        },

        [`& ${OverlayCardCTA}`]: {
          borderColor: '$pink500',

          '&:focus, &:hover': {
            backgroundColor: '$pink500'
          }
        }
      },
      purple: {
        [`& ${OverlayCardImage}`]: {
          borderColor: '$purple500'
        },

        [`& ${OverlayCardCTA}`]: {
          borderColor: '$purple500',

          '&:focus, &:hover': {
            backgroundColor: '$purple500'
          }
        }
      },
      cyan: {
        [`& ${OverlayCardImage}`]: {
          borderColor: '$cyan500'
        },

        [`& ${OverlayCardCTA}`]: {
          borderColor: '$cyan500',

          '&:focus, &:hover': {
            backgroundColor: '$cyan500'
          }
        }
      },
      yellow: {
        [`& ${OverlayCardImage}`]: {
          borderColor: '$yellow500'
        },

        [`& ${OverlayCardCTA}`]: {
          borderColor: '$yellow500',

          '&:focus, &:hover': {
            backgroundColor: '$yellow500'
          }
        }
      }
    }
  }
})

OverlayCard.displayName = 'OverlayCard'
