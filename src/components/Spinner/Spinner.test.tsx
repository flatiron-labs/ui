import React from 'react'
import { render, screen } from '@testing-library/react'
import { Spinner } from './Spinner'
import { Props } from './Spinner.types'

describe('Spinner', () => {
  const testId = 'test-component'

  const renderComponent = ({ ...props }: Props = {}) => {
    render(<Spinner data-testid={testId} {...props} />)
  }

  it('should render a spinner', () => {
    renderComponent()
    screen.getByTestId(testId)
  })
})
