import React from 'react'
import { render, screen } from '@testing-library/react'

import { Heading, HeadingProps } from '.'

describe('Heading', () => {
  const testId = 'test-component'

  const renderComponent = (props: HeadingProps = {}) => {
    render(
      <Heading data-testid={testId} {...props}>
        Header
      </Heading>
    )
  }

  it('should render a header', () => {
    renderComponent()
    screen.getAllByText(/Header/i)
  })
})
