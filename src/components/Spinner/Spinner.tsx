import React from 'react'
import { Props } from './Spinner.types'
import spinner from './spinner.gif'

const Spinner = (props: Props): JSX.Element => {
  const { 'data-testid': dataTestid } = props
  return <img src={spinner} alt="spinner" data-testid={dataTestid} />
}

export default Spinner
