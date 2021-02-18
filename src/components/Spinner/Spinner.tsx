import React from 'react'
import spinnerGif from './spinner.gif'

export interface SpinnerProps {
  alt?: string
  size?: number
  style?: Record<string, unknown>
}

export const Spinner = ({ size = 80, alt = 'loading indicator', style }: SpinnerProps): JSX.Element => {
  const width = size
  const height = size

  return <img src={spinnerGif} alt={alt} width={width} height={height} {...{ style }} />
}
