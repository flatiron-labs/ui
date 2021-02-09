import React from 'react'
import spinner from './spinner.gif'
import { Props } from './Spinner.types'

export const Spinner = ({ ...props }: Props): JSX.Element => {
  return <img src={spinner} alt="spinner" {...props} />
}
