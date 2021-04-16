import React from 'react'
import { render, screen } from '~/test/utils'
import { Progress } from '.'

const testId = 'Progress'

describe('Progress', () => {
  const renderComponent = () => {
    render(<Progress complete={40} total={60} data-testid={testId} />)
  }

  it('should render', () => {
    renderComponent()
    expect(screen.getByTestId(testId)).toMatchSnapshot()
  })
})
