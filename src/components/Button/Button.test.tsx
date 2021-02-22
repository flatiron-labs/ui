import React from 'react'
import { render, screen } from '@testing-library/react'

import { Button, ButtonProps } from '.'

describe('Button', () => {
  const renderComponent = ({ children, primary }: ButtonProps = {}) => {
    render(<Button primary={primary}>{children}</Button>)
  }

  it('should render children', () => {
    renderComponent({ children: <p>foo</p> })
    screen.getByText(/foo/i)
  })
})
