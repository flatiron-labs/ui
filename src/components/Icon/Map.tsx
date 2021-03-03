import React from 'react'
import { IconComponent } from './Icon'

export const Map: IconComponent = ({ color = 'currentColor', ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" {...props}>
    <defs />
    <path stroke={color} strokeWidth="2" d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4zM8 2v16M16 6v16" />
  </svg>
)
