import React from 'react'
import { styled, resolveTokens } from '~/styles/stitches.config'

const Container = styled('div', {
  display: 'grid'
})

type Props = React.ComponentPropsWithoutRef<
  React.FC<{
    min?: resolveTokens<'space'> | string
    max?: resolveTokens<'space'> | string
    gap?: resolveTokens<'space'>
  }>
>

export const ResponsiveGrid = React.forwardRef<HTMLDivElement, Props>(
  ({ children, min, max = '1fr', gap = '$8', ...rest }, ref) => (
    <Container
      ref={ref}
      css={{
        gridGap: gap,
        gridTemplateColumns: min ? `repeat(auto-fit, minmax(${min}, ${max}))` : max
      }}
      {...rest}
    >
      {children}
    </Container>
  )
)

ResponsiveGrid.displayName = 'ResponsiveGrid'
