import React from 'react'
import { IconComponent } from './Icon'

export const Mail: IconComponent = ({ color = 'currentColor', ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" {...props}>
    <defs />
    <path
      fill={color}
      d="M4 5c-.548 0-1 .452-1 1v12c0 .548.452 1 1 1h16c.548 0 1-.452 1-1V6c0-.548-.452-1-1-1H4zM1 6c0-1.652 1.348-3 3-3h16c1.652 0 3 1.348 3 3v12c0 1.652-1.348 3-3 3H4c-1.652 0-3-1.348-3-3V6z"
    />
    <path
      fill={color}
      d="M1.18 5.427a1 1 0 011.393-.246L12 11.779l9.427-6.598a1 1 0 011.146 1.638l-10 7a1 1 0 01-1.146 0l-10-7a1 1 0 01-.246-1.392z"
    />
  </svg>
)
