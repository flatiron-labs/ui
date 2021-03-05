import React from 'react'
import { IconComponent } from './Icon'

export const Exit: IconComponent = ({ color = 'currentColor', ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" role="presentation" {...props}>
    <path
      d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
