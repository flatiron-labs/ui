import React from 'react'
import { render, screen } from '@testing-library/react'

import { Button, ButtonProps } from '.'

describe('Button', () => {
  const testId = 'test-component'

  const renderComponent = ({ children, primary }: ButtonProps = {}) => {
    render(
      <Button data-testid={testId} primary={primary}>
        {children}
      </Button>
    )
  }

  it('should render a primary button', () => {
    renderComponent({ primary: true })
    screen.getByTestId(testId)
  })

  it('should render a secondary button', () => {
    renderComponent()
    screen.getByTestId(testId)
  })

  it('should render children', () => {
    renderComponent({ children: <p>foo</p> })
    expect(screen.getByTestId(testId)).toHaveTextContent('foo')
  })
})
