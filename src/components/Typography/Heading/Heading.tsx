import React from 'react'

import { useLevel } from '~/components/Level'
import { styled } from '~/styles'

/* -------------------------------------------------------------------------------------------------
 * DynamicHeading
 * -----------------------------------------------------------------------------------------------*/

// Set as h1 to receive heading-specific props typechecking
const DynamicHeading = styled('h1', {})

/* -------------------------------------------------------------------------------------------------
 * Heading
 * -----------------------------------------------------------------------------------------------*/

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6
type Props = React.ComponentPropsWithRef<typeof DynamicHeading> & {
  readonly as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  readonly level?: HeadingLevel
  readonly offset?: Exclude<HeadingLevel, 6>
}

export const Heading = React.forwardRef<HTMLHeadingElement, Props>(({ children, level, offset, ...rest }, ref) => {
  const contextLevel = useLevel()
  const headingLevel = level ? `h${level}` : `h${offset ? contextLevel + offset : contextLevel}`

  return (
    <DynamicHeading as={headingLevel} ref={ref} {...rest}>
      {children}
    </DynamicHeading>
  )
})

Heading.displayName = 'Heading'
