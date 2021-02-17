import React from 'react'
import { IconProps } from './Icon3.types'

export const Dial = ({ color, 'data-testid': dataTestId }: IconProps): JSX.Element => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-testid={dataTestId}
  >
    <circle cx="3.5" cy="2.5" r="2.5" fill={color ?? 'white'} />
    <circle cx="3.5" cy="2.5" r="2.5" fill={color ?? 'white'} />
    <circle cx="3.5" cy="2.5" r="2.5" fill={color ?? 'white'} />
    <circle cx="11.5" cy="2.5" r="2.5" fill={color ?? 'white'} />
    <circle cx="11.5" cy="2.5" r="2.5" fill={color ?? 'white'} />
    <circle cx="11.5" cy="2.5" r="2.5" fill={color ?? 'white'} />
    <circle cx="19.5" cy="2.5" r="2.5" fill={color ?? 'white'} />
    <circle cx="19.5" cy="2.5" r="2.5" fill={color ?? 'white'} />
    <circle cx="19.5" cy="2.5" r="2.5" fill={color ?? 'white'} />
    <circle cx="3.5" cy="8.5" r="2.5" fill={color ?? 'white'} />
    <circle cx="3.5" cy="8.5" r="2.5" fill={color ?? 'white'} />
    <circle cx="3.5" cy="8.5" r="2.5" fill={color ?? 'white'} />
    <circle cx="11.5" cy="8.5" r="2.5" fill={color ?? 'white'} />
    <circle cx="11.5" cy="8.5" r="2.5" fill={color ?? 'white'} />
    <circle cx="11.5" cy="8.5" r="2.5" fill={color ?? 'white'} />
    <circle cx="19.5" cy="8.5" r="2.5" fill={color ?? 'white'} />
    <circle cx="19.5" cy="8.5" r="2.5" fill={color ?? 'white'} />
    <circle cx="19.5" cy="8.5" r="2.5" fill={color ?? 'white'} />
    <circle cx="3.5" cy="14.5" r="2.5" fill={color ?? 'white'} />
    <circle cx="3.5" cy="14.5" r="2.5" fill={color ?? 'white'} />
    <circle cx="3.5" cy="14.5" r="2.5" fill={color ?? 'white'} />
    <circle cx="11.5" cy="14.5" r="2.5" fill={color ?? 'white'} />
    <circle cx="11.5" cy="14.5" r="2.5" fill={color ?? 'white'} />
    <circle cx="11.5" cy="14.5" r="2.5" fill={color ?? 'white'} />
    <ellipse cx="11.5" cy="20.5263" rx="2.5" ry="2.52632" fill={color ?? 'white'} />
    <ellipse cx="11.5" cy="20.5263" rx="2.5" ry="2.52632" fill={color ?? 'white'} />
    <ellipse cx="11.5" cy="20.5263" rx="2.5" ry="2.52632" fill={color ?? 'white'} />
    <circle cx="19.5" cy="14.5" r="2.5" fill={color ?? 'white'} />
    <circle cx="19.5" cy="14.5" r="2.5" fill={color ?? 'white'} />
    <circle cx="19.5" cy="14.5" r="2.5" fill={color ?? 'white'} />
  </svg>
)
