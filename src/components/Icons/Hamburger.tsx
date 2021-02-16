import React from 'react'
import { Props } from './icon.types'

const Hamburger = ({ color, 'data-testid': dataTestId }: Props): JSX.Element => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-testid={dataTestId}
  >
    <rect x="2" y="3" width="20" height="3" rx="1" fill={color ?? 'white'} />
    <rect x="2" y="8" width="20" height="3" rx="1" fill={color ?? 'white'} />
    <rect x="2" y="13" width="20" height="3" rx="1" fill={color ?? 'white'} />
  </svg>
)

export default Hamburger
