import React, { SVGProps } from 'react'

export type IcoProps = {
  color?: string
  children?: React.ReactNode
} & SVGProps<SVGSVGElement>

export type IconComponent = React.FC<IcoProps>
