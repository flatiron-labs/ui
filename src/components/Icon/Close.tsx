import React from 'react'
import { IconComponent } from './Icon'

export const Close: IconComponent = ({ color = 'currentColor', ...props }) => (
  <svg width="25" height="25" fill="none" role="presentation" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M18.008 6.07l-12 12M6.008 6.07l12 12"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
