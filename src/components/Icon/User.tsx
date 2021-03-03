import React from 'react'
import { IconComponent } from './Icon'

export const User: IconComponent = ({ color = 'currentColor', ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" {...props}>
    <defs />
    <path stroke={color} strokeWidth="2" d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" />
  </svg>
)
