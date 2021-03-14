import React from 'react'
import { useLevel } from '~/context/Level'

export interface HeadingProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  level?: number
  offset?: number
}

export const Heading = ({ children, level, offset, ...props }: HeadingProps): JSX.Element => {
  const contextLevel = useLevel()
  const Component = level ? `h${level}` : `h${offset ? contextLevel + offset : contextLevel}`

  return <Component {...props}>{children}</Component>
}
