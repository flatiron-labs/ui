import React from 'react'
import { useLevel } from '~/components/Level'
import { styled } from '~/styles'

type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

type Props = {
  level?: HeadingLevel
  offset?: Exclude<HeadingLevel, 6>
} & Partial<typeof DynamicHeading>

const DynamicHeading = styled('h1', {}) // Set as h1 to receive heading props

export const Heading: FC<Props> = ({ children, level, offset, ...props }) => {
  const contextLevel = useLevel()
  const headingLevel = (level ? `h${level}` : `h${offset ? contextLevel + offset : contextLevel}`) as HeadingElement

  return (
    <DynamicHeading as={headingLevel} {...props}>
      {children}
    </DynamicHeading>
  )
}
