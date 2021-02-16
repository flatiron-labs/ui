import React from 'react'
import spinner from './spinner.gif'

export interface SpinnerProps {
  'data-testid'?: string
  children?: React.ReactNode
}

export const Spinner = (props: SpinnerProps): JSX.Element => {
  const { 'data-testid': dataTestid } = props
  return <img src={spinner} alt="spinner" data-testid={dataTestid} />
}
