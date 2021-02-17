import React from 'react'
import { IconProps } from './icons.types'

export const Map = ({ color, 'data-testid': dataTestId }: IconProps): JSX.Element => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-testid={dataTestId}
  >
    <path
      d="M1 6V22L8 18L16 22L23 18V2L16 6L8 2L1 6Z"
      stroke={color ?? 'white'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M8 2V18" stroke={color ?? 'white'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 6V22" stroke={color ?? 'white'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
