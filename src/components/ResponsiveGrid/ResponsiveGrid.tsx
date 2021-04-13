import React from 'react'
import { styled } from '~/styles/stitches.config'

const Container = styled('div', {
  display: 'grid'
})

interface Props {
  min: string // TODO: Stitches/CSS Units
  max: string // TODO: Stitches/CSS Units
  gap: string // TODO: Stitches Units
  css: Record<string, unknown> // TODO: Stitches Units
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
