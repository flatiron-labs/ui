import { SVGProps } from 'react'

export interface Props extends SVGProps<SVGSVGElement> {
  color?: string
  'data-testid'?: string
}
