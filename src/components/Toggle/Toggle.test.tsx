import React from 'react'
import { render, screen } from '@testing-library/react'
import Toggle, { ToggleProps } from './Toggle'

describe('Toggle', () => {
  const testId = 'test-component'

  const renderComponent = ({ label }: ToggleProps = {}) => {
    render(<Toggle data-testid={testId} label={label} />)
  }

  it('should render a toggle', () => {
    renderComponent()
    screen.getByTestId(testId)
  })

  it('should render a toggle with label', () => {
    renderComponent({ label: 'Test label' })
    screen.getByText(/Test label/i)
  })
})
