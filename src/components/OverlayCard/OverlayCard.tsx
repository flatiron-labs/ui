/* eslint-disable react/require-default-props */

import React from 'react'
import { Button } from '~/components/Button'
import { styled, CSS, resolveTokens } from '~/styles/stitches.config'

const Top = styled('div', {
  borderStyle: 'solid',
  borderWidth: '2px',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  minHeight: '130px',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  padding: '20px 15px 0'
})

const Bottom = styled('div', {
  marginTop: '10px'
})

const Title = styled('div', {
  fontFamily: '$gotcha',
  fontSize: '2.5em',
  width: '100%',
  textAlign: 'center',
  textShadow: '3px 3px 1px $black500'
})

type Props = {
  accentColor: resolveTokens<'colors'>
  cta?: string | JSX.Element
  image: string
  title?: string
  css?: CSS
} & React.HTMLAttributes<HTMLDivElement> &
  React.HTMLAttributes<HTMLButtonElement>

export const OverlayCardContainer = styled('div', {
  display: 'grid',
  gridGap: '$7',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))'
})

export const OverlayCard = ({ cta, title, image, accentColor, onClick, ...props }: Props): JSX.Element => (
  <div {...props}>
    <Top
      css={{
        backgroundImage: `url(${image})`,
        borderColor: accentColor
      }}
    >
      <Title>{title}</Title>
    </Top>
    <Bottom>
      {React.isValidElement(cta) ? (
        cta
      ) : (
        <Button
          css={{
            borderColor: accentColor,

            '&:focus, &:hover': {
              backgroundColor: accentColor,
              color: '$black500',
              outline: 0
            }
          }}
          onClick={onClick}
          size="medium"
          width="full"
        >
          {cta as string}
        </Button>
      )}
    </Bottom>
  </div>
)
