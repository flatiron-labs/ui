import React from 'react'
import { IconComponent } from './Icon'

export const Instagram: IconComponent = ({ color = 'currentColor', ...props }) => (
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" role="presentation" {...props}>
    <path
      d="M17 2H7a5 5 0 00-5 5v10a5 5 0 005 5h10a5 5 0 005-5V7a5 5 0 00-5-5z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 11.37a4 4 0 11-7.914 1.174A4 4 0 0116 11.37zM17.5 6.5h.01"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
