import React from 'react'
import { styled, resolveTokens } from '~/styles/stitches.config'

/* -------------------------------------------------------------------------------------------------
 * Container
 * -----------------------------------------------------------------------------------------------*/

const Container = styled('div', {
  display: 'grid'
})

/* -------------------------------------------------------------------------------------------------
 * ResponsiveGrid
 * -----------------------------------------------------------------------------------------------*/

type Props = React.ComponentPropsWithRef<typeof Container> & {
  readonly min?: resolveTokens<'space'> | string
  readonly max?: resolveTokens<'space'> | string
  readonly gap?: resolveTokens<'space'> | 0
}

export const ResponsiveGrid = React.forwardRef<HTMLDivElement, Props>(
  ({ children, min, max = '1fr', gap = '$8', ...rest }, ref) => (
    <Container
      {...rest}
      css={{
        gridGap: gap,
        gridTemplateColumns: min ? `repeat(auto-fit, minmax(${min}, ${max}))` : max
      }}
      ref={ref}
    >
      {children}
    </Container>
  )
)

ResponsiveGrid.displayName = 'ResponsiveGrid'
