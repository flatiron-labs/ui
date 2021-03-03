import React from 'react'
import { IconComponent } from './Icon'

export const Home: IconComponent = ({ color = 'currentColor', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    viewBox="0 0 20 22"
    width="24"
    height="24"
    fill="none"
    role="presentation"
    {...props}
  >
    <defs />
    <path stroke={color} strokeWidth="2" d="M1 8l9-7 9 7v11a2 2 0 01-2 2H3a2 2 0 01-2-2V8z" />
    <path stroke={color} strokeWidth="2" d="M7 21V11h6v10" />
  </svg>
)
