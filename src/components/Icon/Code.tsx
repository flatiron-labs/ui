import React from 'react'
import { IconComponent } from './Icon'

export const Code: IconComponent = ({ color = 'currentColor', ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" role="presentation" {...props}>
    <defs />
    <path stroke={color} strokeWidth={2} d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
  </svg>
)
