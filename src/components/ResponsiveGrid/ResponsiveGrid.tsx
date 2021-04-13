import React from 'react'
import { styled, resolveTokens } from '~/styles/stitches.config'

const Container = styled('div', {
  display: 'grid'
})

interface Props {
  min: resolveTokens<'space'>
  max: resolveTokens<'space'>
  gap: resolveTokens<'space'>
  css?: Record<string, unknown>
}

export const ResponsiveGrid: FC<Props> = ({ children, min, max = '1fr', gap = '$8', css }) => (
  <Container
    css={{
      gridGap: gap,
      gridTemplateColumns: min ? `repeat(auto-fit, minmax(${min}, ${max}))` : max,
      ...css
    }}
  >
    {children}
  </Container>
)
