import React from 'react'
import { IconComponent } from './Icon'

export const Time: IconComponent = ({ color = 'currentColor', ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" role="presentation" {...props}>
    <defs />
    <path stroke={color} strokeWidth="2" d="M12 19a7 7 0 100-14 7 7 0 000 14z" />
    <path
      stroke={color}
      strokeWidth="2"
      d="M12 9v3l1.5 1.5M7.49 6.65l.35-3.83A2 2 0 019.83 1h4.35a2 2 0 012 1.82l.35 3.83m-.02 10.7l-.35 3.83a2 2 0 01-2 1.82H9.83a2 2 0 01-2-1.82l-.35-3.83h9.03z"
    />
  </svg>
)
