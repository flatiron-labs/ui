import React from 'react'
import { render, screen } from '@testing-library/react'

import Button from './Button'
import { Props } from './Button.types'

describe('Button', () => {
  const testId = 'test-component'

  const renderComponent = ({ ...props }: Props = {}) => {
    const { primary } = props
    render(<Button data-testid={testId} primary={primary} />)
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
