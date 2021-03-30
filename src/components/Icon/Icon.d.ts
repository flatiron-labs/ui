import { SVGProps } from 'react'

type IconComponent = FC<
  {
    color?: string
    children?: never
  } & SVGProps<SVGSVGElement>
>
