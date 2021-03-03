import React, { SVGProps } from 'react'

export type IcoProps = {
  color?: string
  children?: never
} & SVGProps<SVGSVGElement>

export type IconComponent = React.FC<IcoProps>
