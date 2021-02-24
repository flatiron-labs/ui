import React from 'react'
import { render, screen } from '@testing-library/react'

import { H1 } from '.'

describe('Heading', () => {
  const renderComponent = () => {
    render(<H1>Header</H1>)
  }

  it('should render a header', () => {
    renderComponent()
    screen.getAllByText(/Header/i)
  })
})
