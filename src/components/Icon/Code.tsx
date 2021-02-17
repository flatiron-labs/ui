import React from 'react'
import { IconProps } from './Icon3.types'

export const Code = ({ color, 'data-testid': dataTestId }: IconProps): JSX.Element => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-testid={dataTestId}
  >
    <path
      d="M16 18L22 12L16 6"
      stroke={color ?? 'white'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M8 6L2 12L8 18" stroke={color ?? 'white'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
