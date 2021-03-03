import React from 'react'
import { IconComponent } from './Icon'

export const Facebook: IconComponent = ({ color = 'currentColor', ...props }) => (
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" role="presentation" {...props}>
    <path
      d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
