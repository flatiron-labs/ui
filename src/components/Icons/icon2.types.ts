import { SVGProps } from 'react'

export interface IconProps extends SVGProps<SVGSVGElement> {
  color?: string
  'data-testid'?: string
}
