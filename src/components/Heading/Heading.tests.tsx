import React from 'react'
import { render, screen } from '@testing-library/react'

import { Heading, HeadingProps } from '.'

describe('Heading', () => {
  const renderComponent = (props: HeadingProps = {}) => {
    render(<Heading {...props}>Header</Heading>)
  }

  it('should render a header', () => {
    renderComponent()
    screen.getAllByText(/Header/i)
  })
})
