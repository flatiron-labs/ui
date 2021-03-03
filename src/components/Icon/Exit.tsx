import React from 'react'
import { IconComponent } from './Icon'

export const Exit: IconComponent = ({ color = 'currentColor', ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" {...props}>
    <defs />
    <path
      fill={color}
      d="M3.273 2.667c-.598 0-1.091.603-1.091 1.333v16c0 .73.493 1.333 1.09 1.333h17.455c.598 0 1.091-.603 1.091-1.333V4c0-.73-.493-1.333-1.09-1.333H3.272zM0 4c0-2.203 1.47-4 3.273-4h17.454C22.53 0 24 1.797 24 4v16c0 2.203-1.47 4-3.273 4H3.273C1.47 24 0 22.203 0 20V4z"
    />
    <path
      fill={color}
      d="M19.164 12.619a.875.875 0 000-1.238l-5.568-5.568a.875.875 0 10-1.238 1.237l4.95 4.95-4.95 4.95a.875.875 0 001.238 1.237l5.568-5.568zm-18.073.256h17.454v-1.75H1.091v1.75z"
    />
  </svg>
)
