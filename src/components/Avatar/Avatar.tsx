import React from 'react'
import { styled, resolveTokens } from '~/styles/stitches.config'

type colors = resolveTokens<'colors'>
interface Props {
  backgroundColor?: colors
  color?: colors
}

const Container = styled('div', {
  alignItems: 'center',
  borderRadius: '$round',
  display: 'flex',
  fontSize: '20px',
  height: '62px',
  justifyContent: 'center',
  width: '62px'
})

export const Avatar: FC<Props> = ({ backgroundColor, children, color, ...rest }) => (
  <Container
    css={{
      backgroundColor: backgroundColor ?? '$blue500',
      color: color ?? '$black500'
    }}
    {...rest}
  >
    {children}
  </Container>
)
