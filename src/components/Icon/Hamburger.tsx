import React from 'react'
import { IconComponent } from './Icon'

export const Hamburger: IconComponent = ({ color = 'currentColor', ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" role="presentation" {...props}>
    <defs />
    <rect width="20" height="3" x="2" y="3" fill={color} rx="1" />
    <rect width="20" height="3" x="2" y="8" fill={color} rx="1" />
    <rect width="20" height="3" x="2" y="13" fill={color} rx="1" />
  </svg>
)
